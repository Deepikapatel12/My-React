import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert = () => {
    const [input, setInput] = useState({})

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
        console.log(input);
    }
    const handleSubmit = (e) => {
        
        let api = "http://localhost:3000/student"
        axios.post(api, input).then((res) => {
            console.log(res);
            alert("data save !!")
        })
    }
    return (
        <>
            <Form style={{width:"45%"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Rollno.</Form.Label>
                    <Form.Control  type="text" vlaue={input.rollno} name="rollno" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control  type="text" vlaue={input.name} name="name" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter city</Form.Label>
                    <Form.Control type="text" vlaue={input.city} name="city" onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter fees</Form.Label>
                    <Form.Control  type="text" vlaue={input.fees} name="fees" onChange={handleInput} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default Insert