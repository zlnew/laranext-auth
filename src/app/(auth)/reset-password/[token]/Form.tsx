'use client'

import Divider from "@/components/Divider"
import FormTitle from "../../FormTitle"
import Input from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import { useSubmit } from "@/hooks/submit"
import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/auth"
import { useRouter, useSearchParams } from "next/navigation"
import ErrorNotification from "@/components/ErrorNotification"

const ResetPasswordForm = ({ title }: { title: string }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')

  const { resetPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  })

  const {
    submit,
    processing,
    validationMessage,
    validationErrors
  } = useSubmit(
    () => resetPassword({
      email,
      password,
      password_confirmation
    }), {
      onSuccess: () => {
        router.push('/login?reset=success')
      }
    }
  )

  useEffect(() => {
    setEmail(searchParams.get('email') || '')
  }, [searchParams])

  return (
    <>
      <FormTitle>{title}</FormTitle>

      <Divider />

      <form onSubmit={submit}>
        <div className="py-6 px-4 flex flex-col gap-4">
          <ErrorNotification text={validationMessage} />

          <Input
            type="password"
            label="New Password"
            name="password"
            placeholder="New Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            error={validationErrors?.password?.[0]}
          />

          <Input
            type="password"
            label="Confirm New Password"
            name="password_confirmation"
            placeholder="Confirm New Password"
            value={password_confirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
            error={validationErrors?.password_confirmation?.[0]}
          />
        </div>

        <Divider />

        <div className="p-4 flex items-center justify-end">
          <PrimaryButton type="submit" label="Reset Password" disabled={processing} />
        </div>
      </form>
    </>
  )
}

export default ResetPasswordForm
