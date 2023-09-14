import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userInfo = selector({
  key: "userInfo",
  get: ({ get }) => {
    const state = get(userState);
    return state.user;
  },
});
