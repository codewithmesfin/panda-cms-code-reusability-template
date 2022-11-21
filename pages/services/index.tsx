import React, { useEffect, useState } from "react";
import Breadcamp from "../../components/breadcamp";
import Icon from "../../components/icon";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import { alert } from "../../utils/alert";
import formatter from "../../utils/formatter";
import { api, path } from "../api/service";

export default function Services() {
    const cols = [
        '#', 'ID', 'Title', 'Description', 'Create At', 'Updated At'
    ]

    const [item, setItem] = useState({ loading: true, data: [] })
    useEffect(() => fetchServices(), [])

    const fetchServices = () => {
        api.all(path.services)
            .then(res => {
                setItem({ ...item, data: res.data.data, loading: false })
            })
            .catch(() => {
                setItem({ ...item, loading: false })
                alert.show({ title: "Unable to fetch. Try again." })
            })
    }

    return item.loading ? <div className="p-10 flex items-center space-x-3">
        <span className="text-xl">Loading services</span>
        <Loading />
    </div>
        : <div>
            <Breadcamp links={[{ title: "Services", href: '/services' }]} /> <div className="w-full mx-auto bg-white">
                <div className="w-full px-3 md:px-0"> <div className="bg-white overflow-x-auto shadow-md rounded my-6">
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
                                item.data.map((x: any, i) => <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{i + 1} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">{x.id} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.title} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{x.description} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{formatter.shortDate(x.createdAt)} </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{formatter.shortDate(x.updatedAt)} </div>
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