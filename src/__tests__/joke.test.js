import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Joke from '../joke';

test('Joke renders text passed in props', () => {
    const text = 'this is test text';
    const { getByTestId } = render(<Joke text={text} />);

    expect(getByTestId('joke-text')).toHaveTextContent(text);
});
