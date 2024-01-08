import { Metadata } from "next"
import RegisterForm from "./Form"

export const metadata: Metadata = {
  title: 'Register'
}

const RegisterPage = () => {
  return (
    <RegisterForm title="Create an account" />
  )
}

export default RegisterPage
