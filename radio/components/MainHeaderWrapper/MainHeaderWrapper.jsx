export default function MainHeaderWrapper({ children }) {
  return (
    <header className="neurofunk:scrollbar-thumb-green-500 neurofunk:hover:scrollbar-thumb-green-600 scrollbar-thin scrollbar-thumb-pink-500 hover:scrollbar-thumb-pink-700 scrollbar-track-black bg-black lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
      {children}
    </header>
  )
}
//OK
