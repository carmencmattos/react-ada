const Items = ({ item, unit, amount }) => {
  return (
    <>
      <ul className="results">
        <li>
          <strong>{item}</strong>
          <span>{`${amount} ${unit}`}</span>
        </li>
      </ul>
    </>
  );
};

export default Items;
