import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';

const Tbook = () => {
    const [error, setError] = useState(null);
    const [book, setBook] = useState([]);
    const [min, setMin] = useState('0');
    const [max, setMax] = useState('1000');
    const [submitEnabled, setSubmitEnabled] = useState(true);
    
    const handleMinChange = (min) => {
        setMin(min.target.value)
    };

    const handleMaxChange = (max) => {
        setMin(max.target.value)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitEnabled(false);
        try {
            let result = await axios.get("http://localhost:1337/api/books?filters[Price][$gte]="+min+"&filters[Price][$lte]="+max)
            .then(({ data }) => setBook(data.data))
            .catch((error) => setError(error));



    }catch (error){
        return <div>An error occured: {error.message}</div>;
    }

    
    }
    

    return (
        <div className="wrapper">
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="MinPriceForm">
                <Form.Label>Minimum Price</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Minimum"
                    value={min}
                    onChange={handleMinChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="MaxPriceForm">
                <Form.Label>Maximum Price</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Maximum"
                    value={max}
                    onChange={handleMaxChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!submitEnabled}>
                Submit
            </Button>
        </Form>

            {book.map(( {id, attributes}) => (
                <li key={id}>
                    <Card style={{
                        width:"30px"
                    }}>
                        <CardBody>
                            <CardTitle tag={'h5'}>{attributes.Title} </CardTitle>
                            <CardSubtitle>{attributes.Price}฿  </CardSubtitle>
                            <CardText>{attributes.Desc} </CardText>
                        </CardBody>
                        
                    </Card>   
                </li>
            ))}
        </div>
    )
}

export default Tbook;