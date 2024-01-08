const FormTitle = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="p-4">
      <h2>{children}</h2>
    </div>
  )
}

export default FormTitle
