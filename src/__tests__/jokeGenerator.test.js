import React from 'react';
import * as axios from 'axios';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import MockAxios from 'axios-mock-adapter';

import JokeGenerator from '../jokeGenerator';

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });

afterAll(() => mock.restore());

test('Joke Generator fetches random joke and renders it', async () => {
    mock.onGet().replyOnce(200, {
        value: {
          joke: 'Really funny joke!',
        },
    });

    const { getByText, queryByText, getByTestId, queryByTestId } = render(<JokeGenerator />)

    expect(getByText('No joke')).toBeTruthy();

    userEvent.click(getByTestId('get-joke-btn'));

    expect(queryByText('No joke')).toBeNull();

    expect(queryByText('Loading...')).not.toBeNull();

    await waitFor(() => expect(queryByText('Loading...')).toBeNull());

    expect(queryByTestId('joke-text')).toBeTruthy();
});
