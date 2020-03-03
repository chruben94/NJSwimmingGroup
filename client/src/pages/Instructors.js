import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import "./style.css";
import joshPic from "../images/joshPic.jpg";
import josephPic from "../images/josephPic.jpg";
import maryPic from "../images/maryPic.jpg";
import rubenPic from "../images/rubenPic.jpeg";
import judePic from "../images/judePic.jpg";
import jasonPic from "../images/jasonPic.jpg";


const Instructors = (props) => {
    return (
        <div className="instructors-container">
            <CardDeck>
                <Card>
                    <CardImg top width="90%" src={joshPic} />
                    <CardBody>
                        <CardTitle>Joshua Kim</CardTitle>
                        <CardSubtitle>Head Coach</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="90%" src={josephPic} />
                    <CardBody>
                        <CardTitle>Joseph Lee</CardTitle>
                        <CardSubtitle>Head Coach</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="90%" src={maryPic} />
                    <CardBody>
                        <CardTitle>Mary Kim</CardTitle>
                        <CardSubtitle>Synchronized Team Head Coach</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardImg top width="90%" src={jasonPic} />
                    <CardBody>
                        <CardTitle>Jason Lee</CardTitle>
                        <CardSubtitle>Manager & Instructor</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="90%" src={rubenPic} />
                    <CardBody>
                        <CardTitle>Ruben Chavez</CardTitle>
                        <CardSubtitle>Instructor</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="90%" src={judePic} />
                    <CardBody>
                        <CardTitle>Jude Sanchez</CardTitle>
                        <CardSubtitle>Instructor</CardSubtitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Instructors;