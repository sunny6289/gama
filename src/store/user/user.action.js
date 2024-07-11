import  USER_ACTION_TYPES  from "./user.type";
import { createAction } from "../../Utils/createAction/createAction.reducer";

export const setCurrentUser = (user)=>{
   return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};