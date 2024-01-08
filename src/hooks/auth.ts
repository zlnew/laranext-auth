import axios from "@/lib/axios"
import { useParams, useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"
import useSWR from "swr"

export type RegisterFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export type LoginCredentials = {
  email: string
  password: string
  remember: boolean
}

export type ResetPasswordFormData = {
  email: string
  password: string
  password_confirmation: string
}

export const useAuth = ({
  middleware,
  redirectIfAuthenticated
}: {
  middleware?: 'guest' | 'auth'
  redirectIfAuthenticated?: string
}) => {
  const router = useRouter()
  const params = useParams()

  const { data: user, error, mutate } = useSWR('user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error
        router.push('/verify-email')
      })
  )

  async function initCsrf () {
    axios.get('/sanctum/csrf-cookie')
  }

  async function register (formData: RegisterFormData) {
    await initCsrf()

    await axios.post('/register', formData)
  }

  async function login (credentials: LoginCredentials) {
    await initCsrf()

    await axios.post('/login', credentials)
  }

  async function forgotPassword (email: string) {
    await initCsrf()

    const res = await axios.post<{status: string}>('/forgot-password', { email })

    return res.data
  }

  async function resetPassword (formData: ResetPasswordFormData) {
    await initCsrf()

    await axios.post('/reset-password', { token: params.token, ...formData })
  }

  async function resendEmailVerification () {
    const res = await axios.post<{status: string}>('/email/verification-notification')

    return res.data
  }

  const logout = useCallback(async () => {
    if (!error) {
      await axios.post('/logout')
    }
  }, [error])

  useEffect(() => {
    if (middleware === 'auth' && user?.email_verified_at === null) {
      router.push('/verify-email')
    }

    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated)
    }

    if ( window.location.pathname === '/verify-email' && user?.email_verified_at) {
      router.push(redirectIfAuthenticated || '/dashboard')
    }
    
    if (middleware === 'auth' && error) {
      logout().then(async () => {
        await mutate()
        router.push('/login')
      })
    }
  }, [user, error, middleware, redirectIfAuthenticated, router, logout, mutate])

  return {
    user,
    mutate,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout
  }
}
