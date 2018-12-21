import React from 'react';

const ShowNames = ({ showOptions, getName }) => {
    return ( 
        <React.Fragment>
            <h6>{getName()}</h6>
            <h6>{getName()}</h6>
            <h6>{getName()}</h6>
            <h6>{getName()}</h6>
            <h6>{getName()}</h6>
            <button onClick={showOptions} className="btn waves-effect waves-light names">Try again!</button>
        </React.Fragment>
    );
}
 
export default ShowNames;