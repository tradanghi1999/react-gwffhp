import C from "./../constants/constants";

export const IMEIact = str => ({
  type: C.GEN_IMEI,
  data: str
});
