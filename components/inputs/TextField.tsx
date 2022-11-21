import React from "react";

interface PROPS {
    placeholder?: string
    label?: string
    value?: string
    type?: string
    onchange: (e:any)=>any
    error?:boolean
}
export default function TextField({ label, placeholder, type,onchange,error }: PROPS) {
    return <div>
        {label && <label className="mb-2 block text-xs font-semibold">{label} </label>}
        <input type={type} placeholder={placeholder}
        autoComplete="off"
        onChange={e=>onchange(e.target.value)}
            className={`block w-full rounded-md border ${error?'border-red-600':" border-gray-200"} {} ${error?'focus:border-red-600':'focus:border-blue-600'} focus:outline-none focus:ring-1 ${error?'focus:ring-red-600':'focus:ring-blue-600'} py-1 px-1.5 text-gray-500`} />
    </div>
}