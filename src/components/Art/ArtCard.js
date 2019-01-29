import React from 'react';

const ArtCard = ({ painting }) => {
    return (  
        <div className="card scale-transition scale-in">
            <div className="card-image">
                <img alt={painting.altText} src={painting.src}/>
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                {painting.dimensions}
                </span>
                <span className="grey-text text-darken-4">
                {painting.medium}
                </span>
            </div>
        </div>
    );
}
 
export default ArtCard;