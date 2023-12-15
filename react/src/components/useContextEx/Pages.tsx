import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Pages = () => {
  const { state, dispatch } = useContext(ThemeContext);

  // console.log(state);

  const handleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_THEME" });
    console.log(state);
  };
  const handleSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_FONTSIZE", payload: 20 });
    console.log(state);
  };
  return (
    <div className="handleTheme">
      <button onClick={handleTheme}>change theme</button>
      <button onClick={handleSize}>change size</button>
    </div>
  );
};

export default Pages;
