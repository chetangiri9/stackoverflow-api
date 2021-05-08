import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomModal } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<CustomModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <CustomModal
        data={{ title: '', body: '', link: '' }}
        visible={true}
        handleCancel={() => jest.fn()}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
