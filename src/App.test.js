import { render, screen } from '@testing-library/react';
import App from './App';
import { getCompanyInfo } from './assets/companyData';

test('renders app page', () => {
  render(<App />);
  const info = getCompanyInfo()
  const linkElement = screen.getByText(/`${info}`/i);
  expect(linkElement).toBeInTheDocument();
});
