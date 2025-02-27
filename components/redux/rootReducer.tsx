// THis file is the root reducer for the redux store. It combines all the reducers in the application and exports it.
// This file is imported in the store.tsx file.
// This file is also used in the App.tsx file to provide the store to the application.

import { combineReducers } from "redux";
import { reducer } from "./reducer";

export default combineReducers({
    reducer
});