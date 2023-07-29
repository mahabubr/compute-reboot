import buildSlice from "./feature/build/buildSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    build: buildSlice,
  },
});

export default store;
