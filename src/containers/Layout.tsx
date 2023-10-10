import { ReactNode } from "react"
import Navbar from "./Navbar"


const Layout = ({children}:{children: ReactNode}) => {
  return (
    <div className="w-full">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
