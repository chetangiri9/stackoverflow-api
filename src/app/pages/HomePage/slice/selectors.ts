import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.homepage || initialState;

export const selectHomepage = createSelector([selectSlice], state => state);

export const selectData = createSelector(
  selectSlice,
  someState => someState.data,
);

export const selectHasMore = createSelector(
  selectSlice,
  someState => someState.hasMore,
);
