import React from 'react';
import { Paintings } from '../../data/paintings';
import ArtCard from './ArtCard';

const Art = () => {
    const data = [...Paintings];
        
    const paintings = data.map( painting => {
        return <ArtCard painting={painting} key={painting.id} />;
    });

    return (  
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    {paintings.slice(0, (paintings.length / 2))}
                </div>
                <div className="col s12 m6">
                    {paintings.slice((paintings.length / 2) + 1, paintings.length)}
                </div>
            </div>
        </div>
    );
}
 
export default Art;