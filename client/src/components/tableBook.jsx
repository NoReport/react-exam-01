import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const Tbook = () => {
    const [error, setError] = useState(null);
    const [book, setBook] = useState([]);
    const [minPrice, setMin] = useState('0');
    const [maxPrice, setMax] = useState('1000');
    const [submitEnabled, setSubmitEnabled] = useState(true);
    
    /*const handleMinChange = (min) => {
        setMin(min.target.value)
    };

    const handleMaxChange = (max) => {
        setMin(max.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitEnabled(false);
    }
*/
    const min = '100'

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/books?filters[Price][$gte]="+min)
        .then(({ data }) => setBook(data.data))
        .catch((error) => setError(error));
    }, []);
  
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
        <div className="wrapper">
    
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