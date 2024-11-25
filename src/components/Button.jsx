import "./style/Button.css";

const Button = ({ text }) => {
  return (
    <>
      <a href="#" class="button">
        {text}
      </a>
    </>
  );
};

export default Button;
