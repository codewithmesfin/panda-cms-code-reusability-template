import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'
import { useState } from 'react'

interface PROPS {
  children: JSX.Element
}

export default function Layout({ children }: PROPS) {

  const [show, setShow] = useState(false)
  const [user, setUser] = useState({ token: "", authentiacted: false, loading: false })

  return <div>
    <div>
      <Navbar onToggle={() => setShow(!show)} show={show} />
      <div className="flex overflow-hidden bg-white pt-16">
        <Sidebar hidden={show ? '' : "hidden"} />
        <div className={`bg-gray-900 opacity-50 ${show ? '' : 'hidden'} fixed inset-0 z-10`} id="sidebarBackdrop"></div>
        <main className="max-w-full md:pl-80">{children}</main>
      </div>
    </div>
    <Footer />
  </div>

}