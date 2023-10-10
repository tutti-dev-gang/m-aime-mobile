
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { connect } from 'react-redux'

import {
    GET_USERS_REQUESTED,
} from '../redux/actions/user-action'


const User = ({
  user: { loading, users },
  getUsers,
}) => {
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {loading && 
        <Text>Loading...</Text>
      }
      {users && users.map((user, index) => (
        <Text
            key={index}
        >
            {user.name}
        </Text>
      ))}
    </>
  )
}

User.propTypes = {
    loading: PropTypes.bool,
    users: PropTypes.array,
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)