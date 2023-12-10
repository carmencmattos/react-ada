const Theme = ({ darkTheme }) => {
  return (
    <div className="theme-container">
      <label id="label-theme-text" htmlFor="input-theme">
        {darkTheme}
      </label>
      <label className="switch">
        <input type="checkbox" id="input-theme" checked="checked" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Theme;
