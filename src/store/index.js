import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MessagesReducer from "./slices/messagesSlice";

const rootReducer = combineReducers({
    MessagesReducer
})

export const setupStore = () => {
    return configureStore(
        {
            reducer: rootReducer
        }
    )
}