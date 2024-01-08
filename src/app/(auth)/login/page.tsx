import { Metadata } from "next"
import LoginForm from "./Form"

export const metadata: Metadata = {
  title: 'Login'
}

const LoginPage = () => {
  return (
    <LoginForm title="Sign In to your account" />
  )
}

export default LoginPage
