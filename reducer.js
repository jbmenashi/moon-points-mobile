const initialState = {
   users: [],
   points: [],
   dailyPointCheck: false, // seeing if there's already a point today
   dailyPoint: undefined, // actual information about the point, used for notifying the home page
   currentUserId: undefined,
   currentUsername: undefined,
   usernameInput: '',
   test: "test",
   camPermitted: null
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_USER":
         return {...state, currentUserId: action.id, currentUsername: action.username}
      case "INPUT_USERNAME":
         return {...state, usernameInput: action.payload}
      case "LOAD_POINTS":
         return {...state, points: action.payload}
      case "FLIP_POINT_CHECK":
         return {...state, dailyPointCheck: true}
      case "SET_DAILY_POINT":
         return {...state, dailyPoint: action.payload}
      case "PERMIT_CAMERA":
         return {...state, camPermitted: true}
      case "DONT_PERMIT_CAMERA":
         return {...state, camPermitted: false}
   default:
      return state
  }
}

export default reducer