import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { actName } from './actions';
import API from '../../fakeAPI';

export const fetchData = () => {
  return API.getData('home').then(data => data);
};

export function* fetchDataSaga() {
  yield takeEvery(actName.FETCH_DATA, function*(payload) {
    const data = yield call(fetchData);
    if(data.errorAPI){
      yield put({
        type: actName.FETCH_DATA_ERROR,
        message: data.message
      });
    }else{
      yield put({
        type: actName.FETCH_DATA_SUCCESS,
        data
      });
    }
  });
};

export default function* rootSaga() {
  yield all([
    fork(fetchDataSaga)
  ]);
};