const initialState = {
   users: [],
   points: [],
   currentUserId: undefined,
   currentUsername: undefined,
   usernameInput: '',
   test: "test"
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_USER":
         return {...state, currentUserId: action.id, currentUsername: action.username}
      case "INPUT_USERNAME":
         return {...state, usernameInput: action.payload}
      case "LOAD_POINTS":
         return {...state, points: action.payload}
   default:
      return state
  }
}

export default reducer