import { useId } from "react"
import Label from "./Label"

const Input = ({
  label,
  error,
  className,
  ...props
}: {
  label?: string
  error?: string | undefined
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const id = useId()

  return (
    <div className="flex flex-col gap-1">
      {label && <Label id={id}>{label}</Label>}

      <input
        {...props}
        id={id}
        className={`${className} p-3 rounded-sm shadow-sm text-sm bg-transparent text-black dark:text-white ${(error
          ? 'border border-red-400 focus:outline focus:outline-red-400 dark:focus:outline-red-400'
          : 'border border-fade-light focus:outline focus:outline-primary-dark dark:focus:outline-primary'
        )}`}
      />

      {error &&
        <small className="text-red-400">
          {error}
        </small>
      }
    </div>
  )
}

export default Input
