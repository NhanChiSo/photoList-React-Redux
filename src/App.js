import { unwrapResult } from "@reduxjs/toolkit";
import productApi from "api/productApi";
import { getMe } from "app/userSlice";
import SignIn from "features/Auth/pages/SignIn";
import firebase from "firebase";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Lazy load: Ko load ngay, vào đường dẫn /photos mới load
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

  //Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          //logs out
          console.log("Log out!");
          return;
        }

        // Get me when signed in
        const action = getMe();
        const actionResult = await dispatch(action);
        const currentUser = unwrapResult(actionResult);
        console.log(currentUser);

        // signed in
        // const token = await user.getIdToken();
        // console.log(token);
      });
    return () => unregisterAuthObserver();
    // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="photo-app">
      {/* Suspense sẽ render ra trong lúc load lazy (bắt buộc phải có cùng lazy) */}
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename="/photoList-React-Redux">
          <Header />

          <Switch>
            {/* Ko có / nên nếu vào / sẽ đẩy sang /photos */}
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
