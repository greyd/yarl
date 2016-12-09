import React, { PropTypes } from 'react';
import { testLocal } from '../styles/style.css';


export const Link = ({href, onClick, children}) => (
    <a href={href} onClick={onClick} className={ testLocal }>{children}</a>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.any
};
Link.displayName = 'Link';