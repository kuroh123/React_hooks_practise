import React, { useContext } from "react";
import AuthContext from "../../store/context-auth";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
