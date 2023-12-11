import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers

import AddExpense from './AddExpense';

describe('AddExpense', () => {
  it('should render the "Add New Expense" button', () => {
    // Render the component
    render(<AddExpense />);

    // Check if the button is present
    const addExpenseButton = screen.getByRole('button', { name: 'Add New Expense' });
    expect(addExpenseButton).toBeInTheDocument();
  });
});