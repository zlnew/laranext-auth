import { Metadata } from "next"
import VerifyEmailForm from "./Form"

export const metadata: Metadata = {
  title: 'Verify Email'
}

const VerifyEmailPage = () => {
  return (
    <VerifyEmailForm title="Verify your email" />
  )
}

export default VerifyEmailPage
