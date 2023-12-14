import React from "react";

const Parents = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>this is parent</h1>
      {children}
    </div>
  );
};

export default Parents;
