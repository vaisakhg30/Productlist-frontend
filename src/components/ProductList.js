import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function ProductList() {
  const [allProduct, setAllProduct] = useState([]);
  const fetchData = async () => {
    
      const response = await axios.get("http://localhost:8000/product/find"); // Replace with the actual API endpoint
      setAllProduct(response.data || []);
    }


  useEffect(() => {
    fetchData();
    
  }, []);
 
  return (
    <div className='w-100 p-5 d-flex  align-content-center p-2'>
      <Link to='/add'>
        <button className='btn btn-primary'>Add</button>
      </Link>

     <div className='m-2'>
     <div className='d-flex text-center'>
    <b>Catagories</b>
   </div>
      {allProduct.length === 0 ? (
        <p>No data</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              
              <th>Products</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.map((item, index) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>
    <div>
    <span>
    <Link to={{
      pathname: '/addsub',
     }}>
      <button className='btn btn-primary' onClick={localStorage.setItem("type",item.product)}>Add Subcategory</button>
    </Link>    </span>
    <Link to={'/view'}>
    <button className='btn btn-primary'>Sub Category</button>
    </Link>
    
   

    <div>
    
    </div>
  </div>
</td>              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div>
<div className='m-2'>
  

        
      </div>

</div>
      
  
  );
}

export default ProductList;