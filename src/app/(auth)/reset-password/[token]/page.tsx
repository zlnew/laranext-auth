import { Metadata } from "next"
import ResetPasswordForm from "./Form"

export const metadata: Metadata = {
  title: 'Reset Password'
}

const ResetPasswordPage = () => {
  return (
    <ResetPasswordForm title="Reset Password" />
  )
}

export default ResetPasswordPage
