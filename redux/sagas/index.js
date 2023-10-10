import { spawn } from 'redux-saga/effects'

// Sagas
import todoSaga from './todo-saga'
import userSaga from './user-saga'

// Export the root saga
export default function* rootSaga() {
    // Here you can register another sagas.
    yield spawn(todoSaga)
    yield spawn(userSaga)
}