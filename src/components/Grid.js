import React from "react";

import Card from "./Card";
import { Stories } from "../data/stories";
import Namer from './Namer/Namer';

const Grid = () => {
  // let stories = [];

  // while(Stories.length >0 ){
  //     const random = Math.floor(Math.random() * Stories.length);
  //     let element = Stories.splice(random, 1);
  //     stories.push(element);
  // }
 
  const stories = Stories.map( (story, index) => {
    return <Card story={story} key={index} />;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <Namer />
          {stories.slice(0, stories.length / 2)}</div>
        <div className="col s12 m6">
          {stories.slice(stories.length / 2, stories.length)}
        </div>
      </div>
    </div>
  );
};

export default Grid;
