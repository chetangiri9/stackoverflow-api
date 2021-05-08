import { fetchQuestions } from 'app/services/apiServise';
import { call, put, takeLatest } from 'redux-saga/effects';
import { homepageActions as actions } from '.';

function* fetchData(action) {
  const response = yield call(fetchQuestions, action.payload);

  if (response.statusText === 'OK') {
    const data = response.data.items.map(item => {
      return {
        ...item,
        ownerName: item.owner.display_name,
        key: item.question_id,
      };
    });

    yield put(
      actions.successUpdatePageData({ data, hasMore: response.data.has_more }),
    );
  } else {
    yield put(actions.errorUpdatePageData('ERROR'));
  }
}

export function* homepageSaga() {
  yield takeLatest(actions.requestUpdatePageData.type, fetchData);
}
