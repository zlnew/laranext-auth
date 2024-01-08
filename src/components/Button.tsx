const Button = ({
  label,
  className,
  ...props
}: {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {

  return (
    <button
      {...props}
      className={`${className} transition-colors px-3 py-2 rounded-sm text-sm tracking-widest`}
    >
      {label}
    </button>
  )
}

export default Button
