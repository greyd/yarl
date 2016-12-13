import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import { Search, Settings } from '@POC/icons';

let storiesForIcon = storiesOf('Icons', module);
storiesForIcon.addDecorator(withKnobs);
storiesForIcon
    .add('Search', () => (
        <Search />
    ))
    .add('Settings', () => (
        <Settings />
    ));