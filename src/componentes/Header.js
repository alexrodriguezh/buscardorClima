import React from 'react';
//rsc

const Header = (props) => {
    return (
        <div>
            <nav>

                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{props.titulo}</a>
                </div>

            </nav>
        </div>
    );
};

export default Header; 