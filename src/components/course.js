import React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter, Button, Container, CardText } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const Course = ({ course, update }) => {
    const deleteCourse = (id) => {
        console.log("delete clicked.......")
        axios.delete(`${base_url}/course/${id}`).then(

            (response) => {
                console.log(response.data);
                update(id);
                toast.success("Course is successfully deleted", { position: "bottom-center" });
            }, (error) => {
                console.log(error);
                toast.error("Something went wrong", { position: "bottom-center" });
            }

        );
    }


    return (
        <Card>

            <CardBody className="text-center">

                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>m
                <Container >
                    <Button color="danger" onClick={()=>{deleteCourse(course.id)}}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>

    );

}

export default Course;