import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const Name = (props) => <div className="name">{props.data.name}</div>;
  // console.log(data);

  // console.log(characters);

  return (
    <div className="App">
      <h1 className="Header" style={{ margin: "20px" }}>
        Characters
      </h1>
      {characters.map((e, index) => (
        <Character key={index} data={e} />
      ))}
    </div>
  );
};

export default App;
