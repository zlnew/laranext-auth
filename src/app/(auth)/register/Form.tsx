'use client'

import Divider from "@/components/Divider"
import Input from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import Link from "next/link"
import { useState } from "react"
import FormTitle from "../FormTitle"
import { useSubmit } from "@/hooks/submit"
import { useAuth } from "@/hooks/auth"
import { useRouter } from "next/navigation"

const RegisterForm = ({ title }: { title: string }) => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')

  const { register, mutate } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  })

  const {
    submit,
    processing,
    validationErrors
  } = useSubmit(
    () => register({
      name,
      email,
      password,
      password_confirmation
    }), {
      onSuccess: async () => {
        await mutate()
        router.push('/verify-email')
      }
    }
  )

  return (
    <>
      <FormTitle>{title}</FormTitle>

      <Divider />

      <form onSubmit={submit}>
        <div className="py-6 px-4 flex flex-col gap-4">
          <Input
            name="name"
            label="Full Name"
            placeholder="Full Name"
            autoComplete="off"
            value={name}
            onChange={event => setName(event.target.value)}
            error={validationErrors?.name?.[0]}
          />

          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="Email Address"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
            error={validationErrors?.email?.[0]}
          />

          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            error={validationErrors?.password?.[0]}
          />

          <Input
            type="password"
            label="Confirm Password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={password_confirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
            error={validationErrors?.password_confirmation?.[0]}
          />
        </div>

        <Divider />

        <div className="p-4 flex items-center justify-between">
          <Link href={'/login'} className="text-xs">Already have an account?</Link>
          <PrimaryButton type="submit" label="Register" disabled={processing} />
        </div>
      </form>
    </>
  )
}

export default RegisterForm
