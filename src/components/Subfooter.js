import React from 'react';
import { Link } from 'react-router-dom';

const Subfooter = () =>
    <div className="nav-flex footer-copyright">
        <div className="flex-item">&copy; 2018 Robert Norton</div>
        <div className="flex-item">
            <Link className="bottom-nav-link" to="/art">Paintings</Link>
            <a className="bottom-nav-link" href="https://github.com/spiffspuzzum?tab=repositories">Source code</a>
        </div>
    </div>

export default Subfooter;