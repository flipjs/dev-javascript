function myAction (url) {
  return {
    type: 'MY_ACTION',
    baseUrl: 'http://swapi.co',
    url,
    error: true
  }
}

function myAction2 (url) {
  return {
    type: 'MY_ACTION2',
    error: true,
    payload: {
      baseUrl: 'http://swapi.co',
      url
    }
  }
}

const initialState = {
  data: []
}

function explodeAction (action) {

  const isTypeValid = (type) => {
    if (!type) {
      throw new Error('explodeAction(): error: No type property specified')
    }
  }

  const combinePayloadAndRest = (action) => {
    const {type, payload, ...rest} = action
    return {
      type,
      payload: {
        ...payload,
        ...rest
      }
    }
  }

  const splitToTypeAndPayload = (action) => {
    const {type, ...payload} = action
    return {
      type,
      payload
    }
  }

  // main

  isTypeValid(action.type)

  if (action.payload) {
    return combinePayloadAndRest(action)
  }

  return splitToTypeAndPayload(action)
}

function myReducer (state = initialState, action) {
  // const {type, payload} = action
  const {type, payload} = explodeAction(action)
  switch (type) {
    case 'MY_ACTION':
    case 'MY_ACTION2':
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

const action = myAction('/api/people/')
const newState = myReducer(undefined, action)
console.log(newState)

const action2 = myAction2('/api/people/')
const newState2 = myReducer(undefined, action2)
console.log(newState2)

