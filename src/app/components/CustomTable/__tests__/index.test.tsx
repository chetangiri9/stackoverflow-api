import * as React from 'react';
import { render } from '@testing-library/react';

import { CustomTable } from '..';

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

describe('<CustomTable  />', () => {
  const data = [{ title: '', body: '', link: '' }];
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <CustomTable data={data} handleRowClick={() => jest.fn()} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
