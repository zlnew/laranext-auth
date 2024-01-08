import { useId } from "react"
import Label from "./Label"

const Checkbox = ({ label, name, ...props }: {
  label: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const id = useId()

  return (
    <div className="flex gap-1">
      <input {...props} type="checkbox" id={id} />
      <Label id={id}>{label}</Label>
    </div>
  )
}

export default Checkbox
