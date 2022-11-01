export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-start w-full flex-1 text-center">{children}</main>
    </div>
  )
}
