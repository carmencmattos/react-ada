const Button = ({ textValue, compute }) => {
  return (
    <div className="row">
      <div>
        <div className="default-button" onClick={compute}>
          {textValue}
        </div>
      </div>
    </div>
  );
};

export default Button;
