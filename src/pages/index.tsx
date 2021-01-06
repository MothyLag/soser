import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
export const Index = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== null) history.replace("/home");
    else history.replace("/login");
  });
  return <div></div>;
};
