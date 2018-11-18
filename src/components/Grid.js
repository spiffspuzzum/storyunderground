import React from 'react';

import Card from "./Card";
import { Stories } from '../data/stories';

const Grid = ()  => {
    let stories = Stories.map((story) => {
        return <Card 
                    story={story}
                />
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col m6">
                    {stories.slice(0, stories.length/2)}
                </div>
                <div className="col m6">
                    {stories.slice(stories.length/2, stories.length)}
                </div>
            </div>
        </div>
    );
}

export default Grid;