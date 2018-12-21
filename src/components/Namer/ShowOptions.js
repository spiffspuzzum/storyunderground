import React from 'react';

const ShowOptions = ({ setPrefix, setSuffix, showNames }) => {
    return (
        <React.Fragment>
             <div>
                <h6>Include a prefix? (Mr., Ms., etc.)</h6>
                <div className="switch">
                    <label>
                    Nope
                    <input onClick={setPrefix} type="checkbox"/>
                    <span className="lever"></span>
                    Yep
                    </label>
                </div>
            </div>
            <div>
                <h6>Include a suffix? (Jr., IV, etc. )</h6>
                <div className="switch">
                    <label>
                    Never
                    <input onClick={setSuffix} type="checkbox" />
                    <span className="lever"></span>
                    Always
                    </label>
                </div>
            </div>
            <button onClick={showNames} className="btn waves-effect waves-light names">Give me the names!</button>
        </React.Fragment>
    );
};

export default ShowOptions;