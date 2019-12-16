import * as Types from './../constants/UserActions';

let initialState = []
const users = (state = initialState, action) => {
   switch (action.type) {
     
     
      case Types.GET_USER:
         state = action.user;
           console.log(state)
         return state;

      default: return state;
   }
}
export default users;