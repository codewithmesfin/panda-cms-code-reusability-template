import React from "react";

interface PROPS{
    label:string
    bg?:string
    onclick:any
    disabled?:boolean
}
export default function Button({label,onclick,disabled}:PROPS){
    return   <button
    onClick={onclick}
    disabled={disabled}
    className={`mb-1.5 block w-full text-center text-white ${disabled?'bg-gray-400':'bg-blue-700'} ${disabled?'hover:bg-gray-400':'hover:bg-blue-900'} px-2 py-1.5 rounded-md`}>
        {label}
    </button>
}