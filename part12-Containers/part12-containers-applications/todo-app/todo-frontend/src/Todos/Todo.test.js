import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import { Todo } from './Todo';

const mockData = {
    id: 1,
    text: "testings",
    done: false
}
    const mockDelete = jest.fn()
    const mockComplete = jest.fn()

test('we pressbuttons here', () => {
    const { getByText, getByTestId } = render(<Todo todo={mockData} deleteTodo={mockDelete} completeTodo={mockComplete}/>)
    const buttonElement = getByText('Set as done');
    const doneText = getByTestId('done-text');

    expect(doneText.textContent).toBe('This todo is not done');
});