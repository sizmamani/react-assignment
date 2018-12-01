import React from 'react';
import './index.scss';

const HeaderComponent = ({
    fixHeader
}) => {
    return (
        <div className={`header-container ${(fixHeader) ? 'fixed' : ''}`} >
            <div className="logo" />
            <div className="nav">
                <button>VERGLEICH</button>
                <button>STANDORTE</button>
                <button>IMMPRESSUM</button>
            </div>
        </div>
    )
}

export default HeaderComponent;