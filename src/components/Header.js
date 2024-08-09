import React from "react";
import { Button, Card, CardBody } from "reactstrap";
function Header() {
    return (
        <div className="text-center">
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 >Welcome to Courses application</h1>
                </CardBody>
            </Card>
            <hr></hr>
        </div>);
}
export default Header;