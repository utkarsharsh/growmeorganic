import { useState } from 'react'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const UserDetail = () => {
    const[name,setname]=useState<string>()
    const[email,setemail]=useState<string>()
    const [phone,setphone]=useState<string>()
    const [error,seterror]=useState<boolean>(false)
    // const navigate=useNavigate();
    function handlesubmit(){
        if(!name || !email || !phone){
            seterror(true);
            return;
        }
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        // navigate('/page2');     
    }
    
  return (
    <div className='w-full h-screen '>
        <div className='w-full flex h-full justify-center items-center '>
            <div >
            <div className='mb-4 w-full flex justify-center items-center'>
                <h1 className=' font-bold text-2xl'>Fill up data to access next page</h1>
                </div>{
                    error &&
                <div>
                <Alert severity="warning">Please fill data properly.</Alert>
                </div>}
                <div className=''>
              <input type="name" placeholder='Enter your name' className=' border-blue-400 border-2 rounded-md p-5 mt-3 w-[200px] sm:w-[400px] md:w-[600px]' value={name} onChange={(e)=>{setname(e.target.value)}}/>
              </div>
              <div className='w-[200px]'>
              <input type="number" placeholder='Enter your phone' className=' border-blue-400 border-2 rounded-md p-5 mt-3 w-[200px] sm:w-[400px] md:w-[600px]' value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
              </div>
              <div className='w-[200px]'>
              <input type="email" placeholder='Enter your email' className=' border-blue-400 border-2 rounded-md p-5 mt-3 w-[200px] sm:w-[400px] md:w-[600px]' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
              </div>
              <div className='mt-3'>
            <Button variant="contained" href="#contained-buttons"  onClick={handlesubmit}>
                Submit
            </Button>
            </div>
           
            </div>

     </div>
    </div>
  )
}

export default UserDetail