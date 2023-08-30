import React from "react";
import Card from "../Card/Card";
import "./CardList.styles.css";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map(({ name, id, email }) => {
        return <Card key={id} name={name} id={id} email={email} />;
      })}
    </div>
  );
};

export default CardList;