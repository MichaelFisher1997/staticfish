import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Header from '../Header.astro';

test('should render the header with logo and navigation links', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Header);

  // Check for the logo text
  expect(result).toContain('Staticfish');

  // Check for all navigation links
  const links = ['Home', 'Services', 'Pricing', 'Portfolio', 'About', 'Contact'];
  links.forEach(linkText => {
    expect(result).toContain(linkText);
  });
});
