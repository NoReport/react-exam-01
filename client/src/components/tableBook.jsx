import { useEffect, useState } from "react";
import axios from "axios";

const tBook = () => {
    const [error, setError] = useState(null);
    const [book, setBook] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:1337/api/books")
        .then(({ data }) => setBook(data.data))
        .catch((error) => setError(error));
    }, []);
  
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
        <div className="wrapper">
            <Form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="min">
                        Minimum Price
                        </Label>
                        <Input
                        id="min"
                        name="minPrice"
                        placeholder="with a placeholder"
                        />
                    </FormGroup>
                    </Col>
            </Form>
        </div>
    )
}

export default tBook;