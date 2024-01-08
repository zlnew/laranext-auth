import Link from "next/link"

const AppLogo = () => {
  return (
    <Link href={'/'} className="group flex items-end gap-2">
      <div className="text-4xl">
        Lara
        <span
          className="transition-colors text-primary-dark dark:text-primary group-hover:text-primary dark:group-hover:text-primary-light"
        >
          Next
        </span>
      </div>
      <span className="tracking-widest text-4xl text-slate-300">Auth</span>
    </Link>
  )
}

export default AppLogo
