import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import { Link } from '../packages/local-button';
//import { Link } from 'local-button/dist/components/Link';

let stories = storiesOf('Link', module);
stories.addDecorator(withKnobs);
stories
    .add('with text', () => (
        <Link href={text('href', '#')} onClick={action('clicked')}>
            {text('Button Text', 'Hello Button')}
        </Link>
    ));
