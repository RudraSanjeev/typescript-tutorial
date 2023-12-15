import React, { useEffect, useRef } from "react";

const Pages = () => {
  const focusRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusRef.current?.focus();
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      <form>
        <input type="text" ref={focusRef} placeholder="focus here" />
        <input type="text" ref={inputRef} placeholder="type here" />
        <button onClick={(e) => handleClick(e)}>submit</button>
      </form>
      <div></div>
    </div>
  );
};

export default Pages;
