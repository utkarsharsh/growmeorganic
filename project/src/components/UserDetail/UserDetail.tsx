import { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
const UserDetail = () => {
    const[name,setname]=useState<string>()
    const[email,setemail]=useState<string>()
    const [phone,setphone]=useState<string>()
    const [error,seterror]=useState<boolean>(false)
    const [emailerror,setemailerror]=useState<boolean>(false)
    const [errorphone,setphoneerror]=useState<boolean>(false)
    const navigate=useNavigate();

    const isEmailValid = ( email: string): boolean => {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
    function handlesubmit(){
        if(!name || !email || !phone){
            seterror(true);
            return;
        }
        const vailidyemail=isEmailValid(email);
        if(!vailidyemail){
          setemailerror(true);
          return
        }
        if(phone.length<10){
          setphoneerror(true);
          return
        }
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        navigate('/components');     
    }
    
    function checkvaliduser(){
      
       const name=localStorage.getItem("name");
       const phone=localStorage.getItem("phone");
       const email=localStorage.getItem("email");
       if(name && email && phone){
          navigate('/components');
       }
  }
  useEffect(()=>{
      checkvaliduser();
  },[])
    
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
              {
                    errorphone &&
                <div>
                <Alert severity="warning">Number should be of 10 character</Alert>
                </div>}
              </div>
              <div className='w-[200px]'>
              <input type='email' placeholder='Enter your email' className=' border-blue-400 border-2 rounded-md p-5 mt-3 w-[200px] sm:w-[400px] md:w-[600px]' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
              {
                    emailerror &&
                <div>
                <Alert severity="warning">Enter a valid email</Alert>
                </div>}
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