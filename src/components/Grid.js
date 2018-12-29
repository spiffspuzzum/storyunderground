import React from "react";

import Card from "./Card";
import { Stories } from "../data/stories";
import Namer from './Namer/Namer';

const Grid = () => {
  //put stories in random order
   const data = [...Stories];
   let randomList = [];

  while(data.length > 0 ){
      const random = Math.floor(Math.random() * data.length);
      let element = data.splice(random, 1);
      randomList.push(element);
  }

  //flatten from array of arrays to array of objects
  randomList = randomList.flat();

  const stories = randomList.map( story => {
    return <Card story={story} key={story.id} />;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          {stories.slice(0, (stories.length / 2)+ 1)}
        </div>
        <div className="col s12 m6">
          {stories.slice(stories.length / 2, stories.length)}
          <Namer />
        </div>
      </div>
    </div>
  );
};

export default Grid;
