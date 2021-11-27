import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import SectionBg from "../../../images/contact/contact.png";
import './Contact.css'

const bg= {
  bacgroundImage: `url(${SectionBg})`,
  backgroundColor: 'rgba(25, 41, 64, 0.7',
  
}
const Contact = () => {
  return (
    <div
    style={{ background: `url(${SectionBg})`,backgroundAttachment: "fixed",
    backgroundColor:"rgba(25,41,64,0.7)",
    backgroundBlendMode:"darken,luminosity",
    backgroundPosition:"center center",
    backgroundRepeat:"no-repeat"
  }} 
    className="contact-bg"
    >
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
    
        <h2 className="text-center banner-title pb-4">Contact Us</h2>
     

     
        <p className="text-center gallery-title pb-4 mb-4">
          You Can Easily Reach Us Through Filling Up The Form
        </p>
    
      <div>
        <Container>
           
            <Form>
              <Row>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label className=" contact-text">Your Name </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      className="contact-text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 contact-text"
                    controlId="formBasicEmail"
                  >
                    <Form.Label  className=" contact-text">Your Email </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      className="contact-text"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                style={formStyle}
                className="my-3   contact-text"
                type="text" 
                placeholder="Write Your Subject..."
              />
              <Form.Group
                className="mb-3 text-white"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className=" contact-text">Your Messages</Form.Label>
                <Form.Control
                  style={formStyle}
                  className="contact-text"
                  placeholder="Write you message..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <button to="/login"  className=" shop-btn font shop-btn fw-bold">Submit</button> 
            </Form>
          
        </Container>
      </div>
    </div>
  );
}

export default Contact;