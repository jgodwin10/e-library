import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setCredentials } from "../redux/Util";

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Util.token);

  if (token) {
    const decode = jwtDecode(token);

    const expire = decode.exp;

    const now = Date.now() / 1000;

    if (expire < now) {
      dispatch(setCredentials(""));
    } else {
      const { department, isAdmin, lastname, firstname, matric, password } =
        decode;
      localStorage.setItem(
        "details",
        JSON.stringify({
          department,
          isAdmin,
          lastname,
          firstname,
          matric,
          password,
        })
      );
    }
  }
};

export default useAuth;
