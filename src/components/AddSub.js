import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function AddSub() {
    const[name,setName]=useState('')
    const[type,setType]=useState('')
    const[price,setPrice]=useState('')
    const locations = useLocation();
    const [productName,setProduct] =useState('')
useEffect(()=>{
  setProduct(localStorage.getItem("type")) // Use optional chaining

},[])  

  
  const location=useNavigate()

const addsubcategory=async(e)=>{
    e.preventDefault()

    const body={
        name,"type":productName,price
    }
    console.log(body);
    const result=await axios.post("http://localhost:8000/subcategory/create",body)
    console.log(result);
    alert(result.data)
    location('/')
    
   


}

  return (
    <div className='container w-50 p-5'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>
      <Button onClick={(e)=>(addsubcategory(e))} variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </div>
  )
}

export default AddSub