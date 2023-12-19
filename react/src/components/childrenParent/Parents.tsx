import React from "react";
type childrenProps = {
  children: React.ReactNode;
  parentName: string;
  address: {
    city: string;
    state: string;
    pincode: string;
  };
  likes: {
    name: string;
    type: string;
  }[];
  styles: React.CSSProperties; // now we can't give invalid css properties
};

// const Parents = ({ children }: { children: React.ReactNode }) => {
const Parents = ({
  children,
  parentName,
  address,
  likes,
  styles,
}: childrenProps) => {
  return (
    <div>
      <h1 style={styles}>this is parent with name as {parentName}</h1>
      <span>city: {address.city} </span>
      <span>state: {address.state} </span>
      <span>pincode: {address.pincode} </span>
      {likes.map((like) => (
        <li>
          name: {like.name} type: {like.type}
        </li>
      ))}
      {children}
    </div>
  );
};

export default Parents;
