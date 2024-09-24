export default function MainHeaderWrapper({ children }) {
  return (
    <header className="bg-black lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
      {children}
    </header>
  )
}
//OK
