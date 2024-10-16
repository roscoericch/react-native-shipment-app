import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterChip from '../FilterChip';

describe('FilterChip Component', () => {
  it('renders correctly and responds to press', () => {
    const mockOnToggle = jest.fn();
    const { getByText } = render(<FilterChip text="Test Chip" onToggle={mockOnToggle} active={false} />);

    // Check if the text is rendered
    expect(getByText('Test Chip')).toBeTruthy();

    // Simulate a press event
    fireEvent.press(getByText('Test Chip'));
    
    // Check if the onToggle function was called
    expect(mockOnToggle).toHaveBeenCalled();
  });
});