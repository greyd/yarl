import React from 'react';
import './icons';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import { Link } from '@POC/local-button';

let storiesForLink = storiesOf('Link', module);
storiesForLink.addDecorator(withKnobs);
storiesForLink
    .add('with text', () => (
        <Link href={text('href', '#')} onClick={action('clicked')}>
            {text('Button Text', 'Hello Button')}
        </Link>
    ));
