'use client'

import Divider from "@/components/Divider"
import Input from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import Link from "next/link"
import { useState } from "react"
import FormTitle from "../FormTitle"
import { useAuth } from "@/hooks/auth"
import { useSubmit } from "@/hooks/submit"
import SuccessNotification from "@/components/SuccessNotification"

const ForgotPasswordForm = ({ title }: { title: string }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  })

  const {
    submit,
    processing,
    validationErrors
  } = useSubmit(
    () => forgotPassword(email), {
      onSuccess: (data) => {
        setStatus(data.status)
      }
    }
  )

  return (
    <>
      <FormTitle>{title}</FormTitle>

      <Divider />

      <form onSubmit={submit}>
        <div className="py-6 px-4 flex flex-col gap-4">
          <p className="text-sm text-slate-300">
            Let us know your email
            email address and we will email you a password reset link that
            that will allow you to choose a new one.
          </p>

          <SuccessNotification text={status} />

          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
            error={validationErrors?.email?.[0]}
          />
        </div>

        <Divider />

        <div className="p-4 flex items-center justify-between">
          <Link href={'/login'} className="text-xs">Back to login</Link>
          <PrimaryButton type="submit" label="Request Reset Link" disabled={processing} />
        </div>
      </form>
    </>
  )
}

export default ForgotPasswordForm
