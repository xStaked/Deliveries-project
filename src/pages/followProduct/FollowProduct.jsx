import React from "react";

const FollowProduct = () => {
  const token = localStorage.getItem("token");

  return <div>{token ? <h1>Seguir tu producto</h1> : <h1>Login</h1>}</div>;
};

export default FollowProduct;
