import { useState } from "react";
import Button from "./Button";
import "/src/components/style/nav.css";

export default function Nav() {
  const [show,setShow] = useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <div class="logo">Eduvaa</div>
        </div>
        <menu 
        
        className={show ? 'nav-links show' : 'nav-links'}>
          <ul>

            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
            <Button text={"Sign Up"} className="sign_up"/>
            </li>
          </ul>
        </menu>
        <svg 
          
          onClick={()=>{ 
            setShow(!show);
            console.log(show);
          }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>       
      </nav>
    </>
  );
}
 