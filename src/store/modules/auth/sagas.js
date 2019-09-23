import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signInRequest({ payload }) {
  const { email, password } = payload;

  const res = yield call(api.post, 'sessions', { email, password });

  const { token, user } = res.data;

  if (!user.provider) {
    console.tron.error('n é provider');
    return;
  }

  yield put(signInSuccess(token, user));
  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
