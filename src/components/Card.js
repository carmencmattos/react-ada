const Card = ({ title, setInputValue, inputValue }) => {
  const handleInput = (e) => {
    const buttonText = e.target.textContent;
    let currentValue = Number(inputValue);

    const value = 1;

    if (buttonText === "-") {
      if (currentValue > 0) {
        currentValue -= value;
        console.log("menos");
      }
    } else {
      currentValue += value;
      console.log("mais");
    }
    setInputValue(currentValue);
    console.log(currentValue);
  };

  return (
    <>
      <div className="row-first">
        <div className="input-group">
          <label htmlFor="homem">{title}</label>
          <input
            value={inputValue}
            type="number"
            id="men"
            className="input-valid"
            defaultValue={0}
          />
          <div className="button-group">
            <button
              className="input-group__button--small"
              onClick={handleInput}
            >
              -
            </button>
            <button
              className="input-group__button--small"
              onClick={handleInput}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
