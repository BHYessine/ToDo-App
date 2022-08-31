import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMsg } from "../Redux/actions";

export const Notification = ({ notif, setNotif }) => {
  const dispatch = useDispatch();

  const msg = useSelector((state) => state.msg);
  setTimeout(() => {
    setNotif(false);
  }, 2700);
  setTimeout(() => {
    dispatch(clearMsg());
  }, 3000);

  return <h3 className={`notification + ${notif && "active"}`}>{msg}</h3>;
};
