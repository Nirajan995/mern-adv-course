const entity = "[User]";

const userActions = {
   FETCH_USERS: `${entity} FETCH_USERS`,
   usersList: (payload) => ({
      type: userActions.FETCH_USERS,
      payload
   })
}

export default userActions;