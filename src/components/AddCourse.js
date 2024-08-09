import React, { useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
       
    }, []);
    const [course, setCourse] = useState({});
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    const postDataToServer= (data)=>{
axios.post(`${base_url}/course/save`,data).then(

    (response)=>{
        console.log(response);
        toast.success("Couses is added successfully", {position:"bottom-center"});
    },
    (error) =>{
        console.log(error);
        toast.error("Something went wrong",{position:"bottom-center"});
    }
)
    }
    return (

        <>
            <h1 className="text-center   my-3">Fill Course here:</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">
                        Course Id:
                    </Label>
                    <Input
                        id="userId"
                        name="userId"
                        placeholder="Enter here"
                        type="text"
                        onChange={(e) =>
                            setCourse({ ...course, id: e.target.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">
                        Title:
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Enter here"
                        type="text"
                        onChange={(e) =>
                            setCourse({ ...course, title: e.target.value })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        Description:
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Enter here"
                        type="text" style={{ height: 150 }}
                        onChange={(e) =>
                            setCourse({ ...course, description: e.target.value })
                        }
                    />
                </FormGroup>
          
            <Container className="text-center">

                <Button color="success" type="submit">Add Course</Button>
                <Button color="warning ml-2" type="reset">Clear</Button>
            </Container>
            </Form>
        </>
    )
}
export default AddCourse;