import React, { useState, useEffect } from "react"
import Course from "./course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const AllCourses = () => {
    useEffect(() => {
      //  document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);
    const [courses, setCourses] = useState([]);

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/course/all`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);
                toast.success("Couses are successfully loaded", { position: "bottom-center" });

            }, (error) => {
                console.log(error);
                toast.error("Something went wrong", { position: "bottom-center" });
            }

        );
    };

    const updateCourses = (id) => {
        setCourses(courses.filter((e) => e.id != id));
    };
    return (

        <div>

            <h1>AllCourse</h1>
            <p>Courses list as follows:</p>
            {courses.length > 0 ? courses.map((item) => <Course course={item} update={updateCourses}></Course>) : "No Courses"}
        </div>
    );

};
export default AllCourses;