export const Header = ({ title, subtitle, info }) => {
  return (
    <>
      <h1 className="style-h3">{title}</h1>
      <h3>{subtitle}</h3>
      <h3 className="configSegH3">{info}</h3>
    </>
  );
};

export default Header;
