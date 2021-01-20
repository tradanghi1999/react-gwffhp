import { combineReducers } from "redux";
import C from "./../constants/constants";

export const imeiReducer = (
  state = {
    imei: "",
    serial1: "",
    serial2: "Y"
  },
  action
) => {
  switch (action.type) {
    case C.GEN_IMEI: {
      return {
        imei: action.data,
        serial1: imei,
        serial2: imei + "Y"
      };
    }
    default: {
      return state;
    }
  }
};
