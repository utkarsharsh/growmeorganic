
import { useEffect, useState } from "react"


const HardcodedDataCheck = ({department,sub_departments}:{department:string,
    sub_departments:string[]
}) => {
    const [width,setwidth]=useState<boolean>(false)
    const [check,setcheck] =useState<boolean>(false)
    const [subcheck,setsubcheck] =useState<boolean[]>()
    const [count,setcount]=useState<number>(0);
    function iseveryonechecked() {
       if(count==sub_departments.length){
        setcheck(true)
       }
       else{
        setcheck(false)
       }
       
      }
   
     function handlecheck (e:any){
        if(check==false){
            setcount(sub_departments.length)
        }
        else{
            setcount(0);
        }
        setsubcheck((prevState:any)=>{
            const newState = [...prevState]; 
           let x= newState.map((e)=>{
               return !check
            })
            return x;
        });
        setcheck(!check)
     }
     function arrofcheckvalue(){
       
        setsubcheck((pre:any)=>{
          let makeeveronefalse=sub_departments.map(()=>{
          return false
          })
          return [...makeeveronefalse]
        });
        
     }
    
     async  function  handlesubcheck (index:number){
        if(!subcheck) return
        if(subcheck[index]==true){
            setcount(count-1);
        }
        else {
            setcount(count+1);
        }
        setsubcheck((prevState:any)=>{
            const newState = [...prevState]; 
            
            newState[index] = !newState[index];
        
        
            return newState;
        });
        
      
     }
     useEffect(()=>{
     arrofcheckvalue();
     },[])
     useEffect(()=>{
        iseveryonechecked()
        },[handlecheck,handlesubcheck])
     

  return (
    <>
    <div className="mt-2">
       <div className="flex justify-center items-center gap-5 p-4 bg-green-50">
        
        <div className="w-14">
        <input type="checkbox"   checked={check} onClick={handlecheck} />
        </div>
        <div className="w-[100px]">
            <h1>{department}</h1>  
        </div>
        <div className="w-14 ml-7 cursor-pointer" onClick={()=>{setwidth(!width)} }>
            <p >&darr;</p>
        </div>

        </div> 
    {sub_departments && sub_departments.map((e,index)=>{ 
        
       return <div key={index} className="w-full">
        <div className="">
        <div className={`flex justify-center items-center ${width ? "block":"hidden"}`}>
       <div className="w-14">
        {subcheck &&  <input type="checkbox" checked={subcheck[index]} onClick={()=>{handlesubcheck(index)}} />}
        </div>
        <div className="w-[100px]">
            <h1 >{e}</h1>  
        </div>
        </div></div>
        </div>

    })}





    </div>
    
    </>
  )
}

export default HardcodedDataCheck