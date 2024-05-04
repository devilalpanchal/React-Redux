import React from "react";

const User = (props) => {
  let { data } = props;
  return (
    <>
      <div>
        <h1>User Component</h1>
        <h4>User Name: {data.name}</h4>
        <h4>User Age: {data.age}</h4>
      </div>
    </>
  );
};

export default User;
