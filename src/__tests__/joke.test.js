import { render } from '@testing-library/react';
import Joke from './joke';

test('Joke render text passed in props', () => {
    const text = 'this is test text';
    const { getByTestId } = render(<Joke text={text} />);

    expect(getByTestId('joke-test')).toHaveTextContent(text);
})