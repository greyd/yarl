import React from 'react';

const Link = ({href, onClick, children}) => (
    <a href={href} onClick={onClick} className="local-button">{children}</a>
);

Link.propTypes = {
    href: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    children: React.PropTypes.any
};
Link.displayName = 'Link';

export default Link;