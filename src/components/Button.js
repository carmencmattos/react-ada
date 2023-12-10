const Button = ({ textValue, compute }) => {
  return (
    <div className="row">
      <div>
        <a className="default-button" onClick={compute}>
          {textValue}
        </a>
      </div>
    </div>
  );
};

export default Button;
