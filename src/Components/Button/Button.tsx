type ButtonProp = {
  children: string,
  className: string,
  onClick: () => void
}
export default function Button({ children, className, onClick }: ButtonProp) {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
