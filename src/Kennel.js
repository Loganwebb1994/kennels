import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./components/ApplicationViews";
import { NavBar } from "./components/nav/NavBar";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);