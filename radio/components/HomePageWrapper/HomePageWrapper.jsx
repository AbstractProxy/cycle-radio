export default function HomePageWrapper({ children }) {
  return (
    <div className="flex flex-col items-center justify-between md:h-screen">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  )
}

//OK
