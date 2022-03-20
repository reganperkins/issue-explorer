import { render, screen } from '@testing-library/react';
import IssueExplorer from './IssueExplorer';

test('renders learn react link', () => {
  render(<IssueExplorer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
