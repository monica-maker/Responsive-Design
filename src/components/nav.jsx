import Button from "./Button";
import "/src/components/style/nav.css";

export default function Nav() {
  return (
    <>
      <nav class="navbar">
        <div class="logo-container">
          <div class="logo">Eduvaa</div>
        </div>
        <menu class="nav-links">
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
          </ul>
        </menu>
        <Button text={"Sign Up"} />
      </nav>
    </>
  );
}
