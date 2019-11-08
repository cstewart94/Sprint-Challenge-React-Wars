import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";

function PeopleList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/`)
      .then(response => {
        console.log(response.data);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log("Fucking yikes", error);
      });
  }, []);

  return (
    <>
      {people.map(person => {
        return (
          <PeopleCard
            key={person.id}
            name={person.name}
            height={person.height}
            hair={person.hair_color}
            eyes={person.eye_color}
          />
        )
      })}
    </>
  )
}

export default PeopleList;