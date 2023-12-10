const Items = ({ item, unit, amount }) => {
  return (
    <>
      <div className="input-group-result">
        <ul className="results">
          <li>
            <strong>{item}</strong>
            <span>{`${amount} ${unit}`}</span>
          </li>
        </ul>
      </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </>
  );
};

export default Items;
