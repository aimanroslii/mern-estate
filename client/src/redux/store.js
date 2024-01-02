import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user/userSlice.js'

//add serializableCheck to false to avoid serialise response error
export const store = configureStore({
  reducer: {user: useReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})