import "./ContactUs.css";
import { Link } from "react-router-dom"
import { ExternalLink } from 'react-external-link';

const ContactUs = () => {
  return (
    <div>
      <div className="home">
        <div className="macbook-air-7">
          <img className="macbook-air-7-child" alt="" src="/frame-251.svg" />
          <div className="access-context-manager-svgrepo-parent">
            <img
              className="access-context-manager-svgrepo-icon"
              alt=""
              src="/accesscontextmanager-svgrepocom.svg"
            />
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="nutryfood1">NUTRYFOOD</div>
            <b className="crowned-with-innovations2">CROWNED WITH INNOVATIONS</b>
          </div>
          <div className="component-58-parent" style={{ marginLeft: "300px" }}>
            <img className="component-38-icon" alt="" src="/component-58.svg" />
            <div className="domestic-international">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
          </div>
        </div>
        <div className="macbook-air-6">
          <div className="frame-parent1">
            <div className="home-group">
              <div className="best-sellers"><Link to="/">Home</Link></div>
              {/* <img className="frame-child3" alt="" src="/vector-18.svg" /> */}
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/aboutus">About Us</Link></div>
              <img className="frame-child4" alt="" src="/vector-19.svg" />
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/products">Products</Link></div>
              <img className="frame-child4" alt="" src="/vector-20.svg" />
            </div>
            <div className="home-group">
              <div className="best-sellers"><Link to="/contactus">Contact Us</Link></div>
              <img className="frame-child4" alt="" src="/vector-21.svg" />
            </div>
          </div>
          <div className="phone-2-1-parent">
            <Link> <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" /></Link>
            <Link><img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" /></Link>
            <Link><img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" /></Link>
          </div>
        </div>
        <div className='contact-page'>
          <div className='contactus-image'>
            <img src='./contactus-page-image.png'></img>
            <div className='image-des'>
              “Together, Let's Shape the Future of Food - Contact Us with Your Ideas and Questions”
            </div>
          </div>
          <div className='contactus-form'>
            <div className='contact-us-title'>Contact Us</div>
            <form className='contact-form'>
              <input className='input-1' type='text' name='Name' placeholder='Enter your name'>
              </input>
              <input className='input-1' type='email' name='email' placeholder='Enter your email'>
              </input>
              <input style={{ height: '250px' }} className='input-1' type='text' name='description'
                placeholder='Description'>
              </input>
              <button className='form-btn' type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="macbook-air-5">
          <div className="nutryfood-parent">
            <div className="nutryfood">NUTRYFOOD</div>
            <div className="crowned-with-innovations1">
              CROWNED WITH INNOVATIONS
            </div>
          </div>
          <div className="home-parent">
            <div className="best-sellers"><Link to='/'>Home</Link></div>
            <div className="best-sellers"><Link to='/aboutus'>About Us</Link></div>
            <div className="best-sellers"><Link to='/products'>Products</Link></div>
            <div className="best-sellers"><Link to='/contactus'>Contact Us</Link></div>
          </div>
          <div className="component-38-parent">
            <ExternalLink href='https://www.linkedin.com/company/nutryfood'>
              <img className="component-38-icon" alt="" src="/component-38.svg" /></ExternalLink>
            <ExternalLink href='https://twitter.com/Nutryfood_'>
              <img className="component-38-icon" alt="" src="/component-39.svg" /></ExternalLink>
            <ExternalLink href="https://www.instagram.com/nutryfood_/"><img className="component-38-icon" alt="" src="/component-40.svg" />
            </ExternalLink>
            <ExternalLink href="https://www.facebook.com/NutryFoodIndustries/"> <img className="component-38-icon" alt="" src="/component-41.svg" />
            </ExternalLink>
            <ExternalLink href='#'>
              <img className="component-38-icon" alt="" src="/component-42.svg" />
            </ExternalLink>
          </div>
          <div className="nutryfood-all-rights">
            © 2024, NutryFood. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
{/* // <div className="contact-us">
    //   <img */}
{/* //     className="unsplasheeqbbemh9-c-icon"
        alt=""
    // //     src="/unsplasheeqbbemh9c@2x.png"
    // //   />
    // //   <div className="nandhan">Nandhan</div>
    // //   <div className="contact-us-parent">
    // //     <div className="home">Contact Us</div>
    // //     <div className="frame144-31-home-parent">
    // //       <div className="frame144-31-home">
    // //         <div className="tajmahal-31-frame80-31-frame92">
    // //           Enter your Name
    // //         </div>
    // //       </div>
    // //       <div className="frame144-31-home">
    // //         <div className="tajmahal-31-frame80-31-frame92">Email</div>
    // //       </div>
    // //       <div className="frame144-31-home2">
    // //         <div className="tajmahal-31-frame80-31-frame922">Description</div>
    // //       </div>
    // //     </div>
    // //   </div>
    // //   <div className="frame148-31-home">
    // //     <div className="tajmahal-31-frame80-31-frame923">Send</div>
    // //   </div>
    // //   <div className="together-lets-shape">
    // //     “Together, Let's Shape the Future of Food - Contact Us with Your Ideas
    // //     and Questions”
    // //   </div>
    // //   <div className="macbook-air-6-parent">
    // //     <div className="macbook-air-6">
    // //       <img className="macbook-air-6-child" alt="" src="/frame-251.svg" />
    // //       <div className="access-context-manager-svgrepo-parent">
    // //         <img
    // //           className="access-context-manager-svgrepo-icon"
    // //           alt=""
    // //           src="/accesscontextmanager-svgrepocom.svg"
    // //         />
    // //         <img className="vector-icon" alt="" src="/vector.svg" />
    // //         <div className="nutryfood">NUTRYFOOD</div>
    // //         <b className="crowned-with-innovations">CROWNED WITH INNOVATIONS</b>
    // //       </div>
    // //       <div className="component-58-parent">
    // //         <img className="component-58-icon" alt="" src="/component-58.svg" />
    // //         <div className="domestic-international">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
    // //       </div>
    // //     </div>
    // //     <div className="macbook-air-5">
    // //       <div className="frame-parent">
    // //         <div className="home-parent">
    // //           <div className="home">Home</div>
    // //           <img className="frame-child" alt="" src="/vector-18.svg" />
    // //         </div>
    // //         <div className="home-parent">
    // //           <div className="home">About Us</div>
    // //           <img className="frame-item" alt="" src="/vector-19.svg" />
    // //         </div>
    // //         <div className="home-parent">
    // //           <div className="home">Products</div>
    // //           <img className="frame-inner" alt="" src="/vector-20.svg" />
    // //         </div>
    // //         <div className="home-parent">
    // //           <div className="home">Contact Us</div>
    // //           <img className="frame-item" alt="" src="/vector-21.svg" />
    // //         </div>
    // //       </div>
    // //       <div className="phone-2-1-parent">
    // //         <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" />
    // //         <img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" />
    // //         <img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" />
    // //       </div>
    // //     </div>
    // //   </div>
    // // </div> */}

