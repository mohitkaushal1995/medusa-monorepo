import Back from "@modules/common/icons/back"
import {Banner} from "@modules/layout/templates/banner"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"






const Layout: React.FC = ({ children }) => {
  return (
    <div>
      
   <Banner/>
   
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    
    </div>
  )
}

export default Layout
