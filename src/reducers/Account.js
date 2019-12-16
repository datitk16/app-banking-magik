import * as Types from './../constants/UserActions';

let initialState = []
const accounts = (state = initialState, action) => {
   switch (action.type) {
     
     
      case Types.GET_ACCOUNT:
         state = action.account;
        //    console.log(state)
         return state;

      default: return state;
   }
}
export default accounts;