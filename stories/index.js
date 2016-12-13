import React from 'react';
import './icons';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import { Link } from '@POC/local-button';
import { Search } from '@POC/icons';

let storiesForLink = storiesOf('Link', module);
storiesForLink.addDecorator(withKnobs);
storiesForLink
    .add('with text', () => (
        <Link href={text('href', '#')} onClick={action('clicked')}>
            {text('Button Text', 'Hello Button')}
        </Link>
    ))
    .add('with icon', () => (
        <Link href={text('href', '#')} onClick={action('clicked')}>
            <Search />
        </Link>
    ))
    .add('with text and icon', () => (
        <Link href={text('href', '#')} onClick={action('clicked')}>
            <Search /> {text('Button Text', 'Hello Button')}
        </Link>
    ));
