import { type } from "os"
import { toast } from "react-toastify"


interface PROPS{
   title:string
   hideProgressBar?:boolean
   autoClose?:number
   type?:'success' | 'info' | 'warning' |'error'
   position?:'top-right'| 'top-center'| 'top-left'| 'bottom-right'| 'bottom-center'|'bottom-left'

}


const alert={
show:({title,hideProgressBar,autoClose,position,type}:PROPS)=>toast(title, { hideProgressBar:hideProgressBar?hideProgressBar:
    true, autoClose:autoClose?autoClose: 1000,
     type:type?type: 'success' ,position:position?position:'bottom-right' })
}

export {alert}