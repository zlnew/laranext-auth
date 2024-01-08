'use client'

import Divider from "@/components/Divider"
import FormTitle from "../FormTitle"
import SuccessNotification from "@/components/SuccessNotification"
import PrimaryButton from "@/components/PrimaryButton"
import { useState } from "react"
import { useSubmit } from "@/hooks/submit"
import { useAuth } from "@/hooks/auth"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"

const VerifyEmailForm = ({ title }: { title: string }) => {
  const [status, setStatus] = useState(null)
  
  const router = useRouter()
  const { logout, resendEmailVerification, mutate } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: '/dashboard'
  })

  const { submit, processing } = useSubmit(
    () => resendEmailVerification(), {
      onSuccess: (data) => {
        if (data.status) { setStatus(data.status) }
      }
    }
  )

  async function handleLogout () {
    logout().then(async () => {
      await mutate()
      router.push('/login')
    })
  }

  return (
    <>
      <FormTitle>
        <div className="flex items-center justify-between gap-4">
          <p>{title}</p>
          <Button
            label="Logout"
            className="bg-fade-dark text-red-400 hover:bg-dark"
            onClick={handleLogout}
          />
        </div>
      </FormTitle>

      <Divider />

      <div className="py-6 px-4 flex flex-col gap-4">
        <p className="text-sm text-slate-300">
          Thanks for signing up! Before getting started, could you verify
          verify your email address by clicking on the link we just
          emailed to you? If you didn&apos;t receive the email, we will gladly
          gladly send you another.
        </p>
        
        {status === 'verification-link-sent' && (
          <SuccessNotification text="A new verification link has been sent to the email address." />
        )}
      </div>

      <Divider />

      <form onSubmit={submit}>
        <div className="p-4 flex items-center justify-end">
          <PrimaryButton
            type="submit"
            label="Resend Verification Email"
            disabled={processing}
          />
        </div>
      </form>
    </>
  )
}

export default VerifyEmailForm
