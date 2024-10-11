import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

localStorage.getItem("userInfo")

const userAtom = atomWithStorage("userInfo", { userName: "" });

export const isAuthenticatedAtom = atom((get) => {
  const data = get(userAtom);
  const loggedIn = data && !!data.userName;
  return loggedIn;
});

export const loginAtom = atom(null, (get,set,val) => {
    set(userAtom, {userName:val})
})

export const logoutAtom = atom(null, (get,set) => {
    set(userAtom, {userName:null})
})
