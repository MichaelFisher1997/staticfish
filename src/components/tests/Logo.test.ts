import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Logo from '../Logo.astro';

test('should render the logo with correct text and link', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Logo);

  // Check for the link and text
  expect(result).toContain('href="/"');
  expect(result).toContain('Staticfish');
});
