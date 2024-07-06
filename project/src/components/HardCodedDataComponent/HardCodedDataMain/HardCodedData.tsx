import {  useEffect, useState } from "react"
import { mydata } from "../hardcoded"
import HardcodedDataCheck from "../HardcodedDataCheck/HardcodedDataCheck"
const HardCodedData = () => {
    interface mydatatype {
        department :string,
        sub_departments:string[]
    }
    const [data , setdata]=useState<mydatatype[]>(mydata)
    function datasetter(){
      setdata(mydata)
    }
    useEffect(()=>{
      datasetter()
      
    },[])
  return (


   <>
   <div className="w-full m-6">
    <div className="w-full justify-center flex items-center"> 
        <h1 className="text-2xl font-bold"> Checkbox Assignment</h1>
        </div>
        </div>
   {
    data && data.map((e)=>{
       
      return <>
      <div>
      <HardcodedDataCheck department={e.department} sub_departments={e.sub_departments} />
      </div>
      </>


    })




   }
   </>
  )
}

export default HardCodedData