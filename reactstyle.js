import React, { PropTypes } from 'react'
import { isEmpty, isPlain, isString } from 'utils'
import Highlight from './Highlight'

const propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

const defaultProps = {title: 'User Profile'}

const UserProfile = ({name, role, title, data = [1, 2, 3]}) => {
  if (!isPlain(data)) throw new Error('This should not happen.')
  if (!isString(title)) throw new Error('This should not happen.')

  if (isEmpty(data)) {
    data = [1, 2, 3]
  }

  const withName = (name) => `User Profile: ${name}`
  const titleWithName = withName(name)
  const props = {name, role, data}

  return (
    <div>
      <h1 style={{color: 'blue'}}>{titleWithName}</h1>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li>
      </ul>
      <Highlight {...props} />
      <button>Save</button>
      {' '}
      <button>Cancel</button>
    </div>
  )
}

UserProfile.propTypes = propTypes
UserProfile.defaultProps = defaultProps

