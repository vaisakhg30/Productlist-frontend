import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function View() {
    const[data,setData]=useState([])
    const fetchData=async()=>{
        const result=await axios.get("http://localhost:8000/subcategory/find")
        setData(result.data)
    }
    useEffect(()=>{
        fetchData()
    })

  return (
    <div className='container w-50 p-5'>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          
        </tr>
      </thead>
      <tbody>
        {
            data?.map((item,index)=>(

            
            <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            
            
           
          </tr>
       )) }
        
       
      </tbody>
      
    </Table>
    <Link to={'/'}>
    <button className='btn btn-primary'>Back</button>
    </Link>
    
    </div>
  )
}

export default View