import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', { email, password });

    const { token, user } = res.data;

    if (!user.provider) {
      toast.error('Somente providers têm acesso!');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha no login... Verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUpRequest({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro... Verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signInRequest),
  takeLatest('@auth/SIGN_UP_REQUEST', signUpRequest),
  takeLatest('persist/REHYDRATE', setToken),
]);
