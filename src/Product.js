// Products.js
import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Products() {
  // Your products page UI code here

      const base_url = 'https://fakestoreapi.com/products'


      const [data,setData] = useState([])
  
      const fetctData= async()=>{
          const response = await axios.get(base_url)
          setData(response.data)
      }
      useEffect(()=>{
          fetctData()
      },[])
  return (
        <div>
            <Row className='eRow'>
          
                {
                data.map((item)=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                    <Ecard className="hai" op={item}  />
                    </Col>
                ))
                }
            
               
            </Row>
            
        </div>
      )
  
}

export default Products;
