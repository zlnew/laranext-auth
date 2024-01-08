import { useState } from "react"

export type ValidationErrors = Record<string, string[]>

export type UseSubmitOptions = {
  onSuccess?: (result: any) => any
  onError?: (result: any) => any
}

export const useSubmit = <T>(
  fetchable: () => Promise<T>,
  options: UseSubmitOptions = {}
) => {
  const [validationErrors, setValidationsErrors] = useState<ValidationErrors>({})
  const [validationMessage, setValidationsMessage] = useState<string | null>(null)

  const [error, setError] = useState<Error | null>(null)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState<boolean | null>(null)
  
  async function submit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setProcessing(true)

    try {
      const data = await fetchable()
      
      setSucceeded(true)

      options.onSuccess?.(data)

      return data
    } catch (e: any) {
      setError(e)
      setSucceeded(false)

      options.onError?.(e)

      setValidationsErrors(e.response.data?.errors ?? {})
      setValidationsMessage(e.response.data?.message ?? null)

      if (e.response?.status !== 422) throw e
    } finally {
      setProcessing(false)
    }
  }

  return {
    submit,
    validationErrors,
    validationMessage,
    error,
    processing,
    succeeded
  }
}
