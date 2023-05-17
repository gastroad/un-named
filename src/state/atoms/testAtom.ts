import { atom } from "recoil"

export const testState = atom({
    key: "testState",
    default: "recoil is working",
});