import Sidebar from '../Sidebar/Sidebar'

export default function PageWrapper({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="relative flex min-h-screen items-center justify-center px-4 lg:px-8">
        {children}
      </main>
    </div>
  )
}
