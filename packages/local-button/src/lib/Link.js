import React from 'react';

export default ({href, children}) => (
    <a href={href} className="local-button">{children}</a>
)