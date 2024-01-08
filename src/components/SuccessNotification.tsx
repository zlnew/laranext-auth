import { useEffect, useState } from "react"

const SuccessNotification = ({ text }: { text: string | null }) => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => setMessage(text), [text])

  return (
    <>
      {!!message &&
        <div className="p-2 flex items-start justify-between gap-4 text-sm rounded-sm bg-success text-dark">
          <p>{message}</p>
          <button onClick={() => setMessage('')}>
            <span aria-hidden="true">&#10006;</span>
          </button>
        </div>
      }
    </>
  )
}

export default SuccessNotification
