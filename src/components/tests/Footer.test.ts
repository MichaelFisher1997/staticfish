import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Footer from '../Footer.astro';

test('should render the footer with the current year', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Footer);

  const currentYear = new Date().getFullYear();
    expect(result).toContain(`&copy; ${currentYear} Staticfish. All rights reserved.`);
});
