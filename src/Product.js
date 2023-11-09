import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap'; // Assuming you're using Bootstrap components
import Ecard from './Ecard'; // Import your Ecard component

function Products() {
  const base_url = 'https://fakestoreapi.com/products';
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(base_url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Row className='eRow'>
        {data.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3} key={item.id}> {/* Don't forget to add a unique key */}
            <Ecard op={item} /> {/* Assuming Ecard is a component for displaying product details */}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
