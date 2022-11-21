import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../icon";
interface PROPS{
    hidden:string
}

export default function Sidebar({hidden}:PROPS) {
    const navigations=[
        {
            title:"Home",
            href:"/dashboard",
            icon:"home"
        },
        {
            title:"Customers",
            href:"/customers",
            icon:"customers"
        },   
        {
            title:"Technicians",
            href:"/technicians",
            icon:"person"
        },
        {
            title:"Admin",
            href:"/admins",
            icon:"secure"
        },
        {
          title:"Services",
          href:"/services",
          icon:"service"
      },
        {
            title:"Schedules",
            href:"/schedules",
            icon:"schedule"
        },
        {
            title:"Activities",
            href:"/logs",
            icon:"log"
        },
        {
            title:"Settings",
            href:"/settings",
            icon:"settings"
        },
        {
            title:"Notifications",
            href:"notifications",
            icon:"notifications"
        },
    ]
    return  <aside id="sidebar" className={`fixed ${hidden} z-20 h-full top-0 left-0 pt-16 flex md:flex flex-shrink-0 flex-col w-[90%] md:w-72 transition-width duration-75`} >
    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white divide-y space-y-1">
          <ul className="space-y-2 pb-2">
            <li>
              <form action="#" method="GET" className="lg:hidden">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                  </div>
                  <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                </div>
              </form>
            </li>
            {
                navigations.map((x,i)=>  <li key={i}>
                <Link href={x.href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                 <Icon path={x.icon} />
                  <span className="ml-2 text-sm tracking-wide truncate">{x.title} </span>
                </Link>
              </li>)
            }
           
          </ul>
        </div>
      </div>
    </div>
  </aside>
        
}