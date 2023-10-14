import React from 'react';
import { render } from '@testing-library/react';

import App from '../../components/App';

import TestWrapper from '../TestWrapper';

test('should render App component and match snapshot', () => {
  const testWrapperArgs = {
    TestComponent: App,
  };

  const { asFragment } = render(<TestWrapper {...testWrapperArgs} />);

  expect(asFragment()).toMatchSnapshot();
});
