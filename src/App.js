
import React from 'react';

import './App.css';
import Header from './components/Header';

import { ToastContainer, toast } from 'react-toastify';

import { Button, Col, Container, Row } from 'reactstrap';
import Course from './components/course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/menus';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () => {

    toast.success("Success Notification !", {
      position: "top-center"
    })
  };
  return (<div >
    <Router>

      <ToastContainer />
      <Container>
        <Header />

        <Row>

          <Col md={4}>
            <Menus></Menus>
          </Col>
          <Col md={8}>
            <Routes>
              <Route path='/' Component={Home} exact></Route>
              <Route path='/add-course' Component={AddCourse} exact></Route>
              <Route path='/view-course' Component={AllCourses} exact></Route>
            </Routes>
          </Col>
        </Row>
      </Container>

    </Router>
  </div>

  );
}

export default App;
