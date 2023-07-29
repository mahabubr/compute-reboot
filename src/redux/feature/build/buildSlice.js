const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cpu: {},
  motherboard: {},
  ram: {},
  power: {},
  storage: {},
  monitor: {},
};

const buildSlice = createSlice({
  name: "build",
  initialState,
  reducers: {
    addToBuild: (state, { payload }) => {
      const { category } = payload;

      if (category.id === "64c37c37be85a3400fb0c38d") {
        state.cpu = { ...payload };
      } else if (category.id === "64c37c37be85a3400fb0c38e") {
        state.motherboard = { ...payload };
      } else if (category.id === "64c37c37be85a3400fb0c38f") {
        state.ram = { ...payload };
      } else if (category.id === "64c37c37be85a3400fb0c390") {
        state.power = { ...payload };
      } else if (category.id === "64c37c37be85a3400fb0c391") {
        state.storage = { ...payload };
      } else if (category.id === "64c37c37be85a3400fb0c392") {
        state.monitor = { ...payload };
      } else {
        console.log("nothing to change");
      }
    },
  },
});

export const { addToBuild } = buildSlice.actions;

export default buildSlice.reducer;
