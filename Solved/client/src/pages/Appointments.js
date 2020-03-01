import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Appointments extends Component {
  state = {
    appointments: [],
    Day: "",
    Time: "",
    Lane: "",
    Student: "",
    Status: ""
  };

  componentDidMount() {
    this.loadAppointments();
  }

  loadAppointments = () => {
    API.getAppointments()
      .then(res =>
        this.setState({ appointments: res.data, Day: "", Time: "", Lane: "", Student: "", Status: "" })
      )
      .catch(err => console.log(err));
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Day && this.state.Time) {
      API.saveAppointment({
        Day: this.state.Day,
        Time: this.state.Time,
        Lane: this.state.Lane,
        Student: this.state.Student,
        Status: this.state.Status,

      })
        .then(res => this.loadAppointments())
        .catch(err => console.log(err));
    }
  };

  render() {

    const appointment = this.state.Day
    console.log(appointment)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Booked</h1>
            </Jumbotron>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Open</h1>
            </Jumbotron>
            {this.state.appointments.length ? (
              <List>
                {this.state.appointments.map(appointment => (
                  <ListItem key={appointment._id}>
                    <Link to={"/appointments/" + appointment._id}>
                      <strong>
                        Day: {appointment.Day} , Time: {appointment.Time}, Lane: {appointment.Lane}, Student: {appointment.Student}, Status: {appointment.Status}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAppointment(appointment._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appointments;
