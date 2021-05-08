import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homepageSaga } from './saga';
import { HomepageState } from './types';

export const initialState: HomepageState = {
  pageNumber: 1,
  data: [],
  error: '',
  hasMore: false,
};

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    requestUpdatePageData(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    successUpdatePageData(
      state,
      action: PayloadAction<{ data: object[]; hasMore: boolean }>,
    ) {
      state.data = [...state.data, ...action.payload.data];
      state.hasMore = action.payload.hasMore;
    },
    errorUpdatePageData(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { actions: homepageActions } = slice;

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homepageSaga });
  return { actions: slice.actions };
};
