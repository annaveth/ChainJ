// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainJ title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainJ/i);
    expect(titleElement).toBeInTheDocument();
});
