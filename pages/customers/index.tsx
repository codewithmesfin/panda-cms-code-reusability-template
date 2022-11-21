import React from "react";
import Breadcamp from "../../components/breadcamp";
import Icon from "../../components/icon";
import Pagination from "../../components/pagination";

export default function Customers() {
    const cols = [
        'Customer Name', 'Phone Number', 'Email', 'Address', 'City', 'State', 'Date Joined', 'Status', 'Actions'
    ]
    const data = [
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia",
            city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        },
        {
            id: "1242394892358437584",
            name: "Mesfin Tsegaye",
            phone: "+251911522902",
            email: "mesfin@bizenforce.com",
            address: "Addis Ababa, Ethiopia", city: "Addis Ababa",
            state: "Ethiopia",
            dateJoined: "Feb 2,2022",
            status: "Active",
        }
    ]
    return <div>
        <Breadcamp links={[{ title: "Customers", href: '/customers' } ]} />
        <div className="w-full mx-auto bg-white">
            <div className="w-full px-3 md:px-0">
                <div className="bg-white overflow-x-auto shadow-md rounded my-6">
                    <table className="min-w-max  w-full table-auto">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                {cols.map((x, i) => <th key={i} className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left"> {x} </div>
                                </th>)}
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {
                                data.map((x, i) => <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-2 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                width="40" height="40" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">{x.name} </div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.phone} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.email} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">{x.address} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.city} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.state} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.dateJoined} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">{x.status} </div>
                                    </td>

                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex space-x-3">
                                            <button className="text-red-600"><Icon path="delete" /></button>
                                            <button className="text-blue-600"><Icon path="edit" /></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <Pagination page={1} total={10} />
                </div>
            </div>
        </div>
    </div>
}