
import { useEffect } from 'react'
import ApiDataComponent from '../ApiDataComponent/ApiDataComponent'
import HardCodedData from '../HardCodedDataComponent/HardCodedDataMain/HardCodedData'
import { useNavigate } from 'react-router-dom'

const DataComponets = () => {
    const navigate=useNavigate()
    function checkvaliduser(){
        
         const name=localStorage.getItem("name");
         const phone=localStorage.getItem("phone");
         const email=localStorage.getItem("email");
         if(!name || !email || !phone){
            navigate('/');
         }
    }
    useEffect(()=>{
        checkvaliduser();
    },[])
  return (
    <div>
        <div className='mb-7 '>
            
        <HardCodedData/>
        </div>
        <div className='mt-3'>
        <ApiDataComponent/>
        </div>
    </div>
  )
}

export default DataComponets