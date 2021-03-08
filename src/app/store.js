import photoReducer from "features/Photo/photoSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    photos: photoReducer,
    user: userReducer,
  },
});

export default store;
