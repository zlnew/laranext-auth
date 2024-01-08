const Label = ({ id, className, children, ...props }: {
  id: string
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      htmlFor={id}
      className={`${className} tracking-wide text-xs text-fade-dark dark:text-fade-light`}
    >
      {children}
    </label>
  )
}

export default Label
