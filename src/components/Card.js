import React from 'react';
import PropTypes from 'prop-types';

import Chips from './Chips';
import Links from './Links';

const Card = ({ story }) => {

    function createMarkup() {
        return {__html: story.description};
      }

    return (
        <div className={ (story.visible) ? 'card scale-transition' : 'card scale-transition scale-out'} >
            <div className="card-image">
                <img className="activator" alt={story.altText} src={story.image} />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{story.title}</span>
                <Chips 
                    tags={story.tags} 
                    storyType={story.storyType}    
                />
                <div className="story-description" dangerouslySetInnerHTML={createMarkup()} />
                <div className="card-action">
                    <Links links={story.links} />
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    story: PropTypes.object.isRequired  
};

export default Card;