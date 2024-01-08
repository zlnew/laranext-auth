const PrimaryButton = ({
  label,
  ...props
}: {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {

  return (
    <button
      {...props}
      className="transition-colors px-3 py-2 rounded-sm shadow-md text-sm tracking-widest bg-primary-dark dark:bg-primary text-dark hover:bg-primary-light"
    >
      {label}
    </button>
  )
}

export default PrimaryButton
