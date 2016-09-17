SAGA_TYPES = {
  FETCH_USERS: 'FETCH_USERS'
}

REDUX_TYPES = {
  FETCH_USERS: 'FETCH_USERS_REQUESTED',
  FETCH_USERS: 'FETCH_USERS_SUCCEEDED',
  FETCH_USERS: 'FETCH_USERS_FAILED'
}

function sagaFetchUsers () {
  return {
    type: SAGA_TYPES.FETCH_USERS
  }
}

function reduxFetchUsersRequested (data) {
  return {
    type: REDUX_TYPES.FETCH_USERS_REQUESTED
    data
  }
}

