import React from 'react';
import { render } from '@testing-library/react-native';

import Dripsybox from './dripsybox';

describe('Dripsybox', () => {
  it('should render successfully', () => {
    const { root } = render(<Dripsybox />);
    expect(root).toBeTruthy();
  });
});
