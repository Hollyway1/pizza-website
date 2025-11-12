import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

export default MenuItem;
