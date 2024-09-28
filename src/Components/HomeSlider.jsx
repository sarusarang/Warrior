import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function HomeSlider() {
  return (
    <>



      <section>




        <Carousel controls={false} indicators={false} >


          <Carousel.Item>


            <Row>

              <Col md={12} className="ps-0">


                <div>

                  <img
                    className="d-block w-100"
                    src="https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fcmscontent%2F24299-Microtek-Inverter-Batter-KV-Men-For-Website-1920x867pixel-1726969173415.jpg&w=1920&q=75"
                    alt="First slide"
                    loading='lazy'
                  />

                </div>

              </Col>


            </Row>


          </Carousel.Item>




          <Carousel.Item>


            <Row>

              <Col md={12} className="ps-0">


                <div>

                  <img
                    className="d-block w-100"
                    src="https://www.microtek.in/_next/image?url=https%3A%2F%2Fcms.microtek.in%2Fupload%2Fcmscontent%2FKVGirl-Web-1727686495943.jpg&w=1920&q=75"
                    alt="First slide"
                    loading='lazy'
                  />

                </div>

              </Col>


            </Row>


          </Carousel.Item>


        </Carousel>


      </section>



    </>
  )
}

export default HomeSlider