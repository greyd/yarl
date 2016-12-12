import React, { PropTypes } from 'react';
import { testLocal } from '../styles/style.css';
import { Search } from '@POC/icons';


export const Link = ({href, onClick, children}) => (
    <a href={href} onClick={onClick} className={ testLocal }>
        <span>
            <Search />
        </span>
        {children}
    </a>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.any
};
Link.displayName = 'Link';