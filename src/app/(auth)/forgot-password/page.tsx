import { Metadata } from "next"
import ForgotPasswordForm from "./Form"

export const metadata: Metadata = {
  title: 'Forgot Password'
}

const ForgotPasswordPage = () => {
  return (
    <ForgotPasswordForm title="Forgot your password?" />
  )
}

export default ForgotPasswordPage
