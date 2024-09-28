import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {



  return (


    <>

      <footer className="footer  pt-5 pb-3">


        <div className="container">


          <div className="row">

            {/* Products Section */}
            <div className="col-md-3 mb-3">

              <h5 className='fw-bold'>Products</h5>

              <ul className="list-unstyled small pt-md-3">

                <Link to={'/'} className='foot-link'>  <li className="pb-3">Power Backup Solutions</li></Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Critical Power Backup Solution</li></Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Voltage Stabilizers</li></Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Solar Solutions</li></Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">E-Rickshaw Chargers</li></Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Electricals</li></Link>

              </ul>


            </div>



            {/* Services Section */}
            <div className="col-md-3 mb-3">

              <h5 className='fw-bold'>Services</h5>

              <ul className="list-unstyled small pt-md-3">

                <Link className='foot-link' to={'/'}> <li className="pb-3">AMC Registration</li></Link>
                <Link className='foot-link' to={'/'}> <li className="pb-3">Installation Request</li></Link>
                <Link className='foot-link' to={'/'}> <li className="pb-3">Complaint Registration</li></Link>
                <Link className='foot-link' to={'/'}> <li className="pb-3">Store Locator</li></Link>
                <Link className='foot-link' to={'/'}> <li>Service Centre Locator</li></Link>

              </ul>


            </div>



            {/* Quick Links Section */}
            <div className="col-md-3 mb-3">


              <h5 className='fw-bold'>Quick Links</h5>


              <ul className="list-unstyled small pt-md-3">

                <Link to={'/'} className='foot-link'> <li className="pb-3">About Us</li> </Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Media</li>  </Link>
                <Link to={'/'} className='foot-link'>  <li className="pb-3">Careers</li> </Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Blog</li> </Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">E-Catalogues</li> </Link>
                <Link to={'/'} className='foot-link'> <li className="pb-3">Contact Us</li> </Link>


              </ul>


            </div>



            {/* Connect with Us Section */}
            <div className="col-md-3 mb-1 small">


              <h5 className="pb-3 fw-bold">Connect with us</h5>


              <p>

                <a href="" target='_blank' className='foot-link'><i className="fas fa-phone me-2"></i>+91-9711666444</a>

              </p>

              <p>

                <a href="" target='_blank' className='foot-link'><i className="fas fa-envelope me-2"></i>ho@microtek.in</a>

              </p>


              <h5 className="pb-3 pt-md-3 fw-bold pt-4">Corporate Office</h5>


              <p>
                <i className="fas fa-map-marker-alt"></i> H-57, Udyog Nagar,
                Rohtak Road, Delhi-110041  011-71225500
              </p>


              <h5 className="pt-md-3 fw-bold pt-4">Follow Us</h5>


              <div className="d-flex gap-2 pb-3">

                <a href="" target='_blank' className='foot-social'><i className="fab fa-facebook"></i> </a>
                <a href="" target='_blank' className='foot-social'><i class="fa-brands fa-x-twitter"></i> </a>
                <a href="" target='_blank' className='foot-social'><i className="fab fa-linkedin"></i> </a>
                <a href="" target='_blank' className='foot-social'><i className="fab fa-youtube"></i> </a>
                <a href="" target='_blank' className='foot-social'><i className="fab fa-instagram"></i>  </a>


              </div>



            </div>



          </div>



          <div className='row policy-border pt-3 pb-1'>

            <div className='col-md-6'>

              <p>Copyright © 2024 Warrior. All Rights Reserved.</p>

            </div>


            <div className='col-md-6 row'>

              <div className='col-md-4 pb-2'>

                <Link  className='foot-link'>Terms & Conditions</Link>

              </div>

              <div className='col-md-3 pb-2'>

                <Link href="" className='foot-link'>Privacy Policy</Link>

              </div>


              <div className='col-md-3'>

                <Link href="" className='foot-link'>Refund Policy</Link>

              </div>


            </div>

          </div>


        </div>

      </footer>




    </>




  )


}

export default Footer