'use client'

import Checkbox from "@/components/Checkbox"
import Divider from "@/components/Divider"
import Input from "@/components/Input"
import PrimaryButton from "@/components/PrimaryButton"
import Link from "next/link"
import { useState } from "react"
import FormTitle from "../FormTitle"
import { useAuth } from "@/hooks/auth"
import { useSubmit } from "@/hooks/submit"
import { useRouter } from "next/navigation"

const LoginForm = ({ title }: { title: string }) => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const { login, mutate } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard'
  })

  const {
    submit,
    processing,
    validationErrors
  } = useSubmit(
    () => login({
      email,
      password,
      remember
    }), {
      onSuccess: async () => {
        await mutate()
        router.push('/dashboard')
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

          <Checkbox
            name="remember"
            label="Remember Me?"
            onChange={event => setRemember(event.target.checked)}
          />

          <div className="text-right">
            <Link href={'/forgot-password'} className="text-xs">Forgot password?</Link>
          </div>
        </div>

        <Divider />

        <div className="p-4 flex items-center justify-between">
          <Link href={'/register'} className="text-xs">Don&apos;t have an account?</Link>
          <PrimaryButton type="submit" label="Login" disabled={processing} />
        </div>
      </form>
    </>
  )
}

export default LoginForm
