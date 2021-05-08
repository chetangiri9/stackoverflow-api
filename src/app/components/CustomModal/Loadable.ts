/**
 *
 * Asynchronously loads the component for CustomModal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CustomModal = lazyLoad(
  () => import('./index'),
  module => module.CustomModal,
);
