/**
 *
 * Asynchronously loads the component for CustomTable
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomTable = lazyLoad(
  () => import('./index'),
  module => module.CustomTable,
);
