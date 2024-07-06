import React, { useEffect, useState } from 'react'
import { ApiDataRow } from '../../models/ApiResponse';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import axios from 'axios'
const ApiDataComponent = () => {
    const [Data,setData]=useState<ApiDataRow[]>()
    const columns:GridColDef[]=[
        { field: 'id', headerName: 'id', width: 25 },
        { field: 'userId', headerName: 'userId', width: 25 },
        { field: 'title', headerName: 'title', width: 200 },
        { field: 'body', headerName: 'body', width:400},
      ]
      const url="https://jsonplaceholder.typicode.com/posts"
     
      async function  handleApi(){
        try{
           const {data}= await axios.get(url);
           if(data){
            setData(data);
           }
        }
        catch (err){
            alert("something went wrong Please try again")
        }
      }
     

      useEffect (()=>{
        handleApi();
      },[]);
  return (
    <div>
        <div className='w-full flex justify-center items-center mt-2 mb-4'>
         <h1 className='text-2xl font-bold'>
                Fetched Data 
            </h1>
            </div>
            <div className='h-[100%] '>
        {
        Data &&  <DataGrid rows={Data} columns={columns} /> 
        }
        </div>
        </div>
  )
}

export default ApiDataComponent