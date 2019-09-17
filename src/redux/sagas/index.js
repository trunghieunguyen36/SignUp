import {all} from 'redux-saga/effects';
import Auth from './saga/Auth';

export default function* rootSaga() {
    yield all([
      Auth()
    ]);
  }
