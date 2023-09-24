import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
    const[id,setId]=useState('')
    const[product,setProduct]=useState('')
    useEffect(()=>{
        setId(uuid())
      },[])
  const location=useNavigate()


    const addproduct=async(e)=>{
        e.preventDefault()
   setId(uuid().slice(0,3));

    
    const body={
    id,
    product
    }
console.log(body);
const result=await axios.post("http://localhost:8000/product/create",body)
alert(result.data)
location('/')


    }
  return (
    <div className='container p-5 w-50'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Catagory Name</Form.Label>
        <Form.Control type="text"onChange={(e)=>setProduct(e.target.value)} />
        
      </Form.Group>

     
      <Button onClick={(e)=>(addproduct(e))} variant="primary" type="submit">
        Add
      </Button>
      <Link to={'/'}>
    <button className='btn btn-primary'>Back</button>
    </Link>
    </Form>
    </div>
  ) 
}

export default Add