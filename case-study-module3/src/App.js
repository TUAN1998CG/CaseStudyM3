
import React from 'react';
import HeaderComponent from "./Components/Header/HeaderComponent";
import { Route, Routes} from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import ListComponent from "./Components/List/ListComponent";
import AddComponent from "./Components/Add/AddComponent";
import DetailComponent from "./Components/Detail/DetailComponent";
import {ToastContainer} from "react-toastify";
import LoginComponent from "./Components/Login/LoginComponent";


function App() {
  return (
      <>
<ToastContainer/>
          <HeaderComponent />
          <Routes>
              <Route path={'/home'} element={<HomeComponent/>}></Route>
              <Route path={'/login'} element={<LoginComponent/>}></Route>
              <Route path={'/list'} element={<ListComponent/>}></Route>
              <Route path={'/list/create'} element={<AddComponent/>}></Route>
              <Route path={'/list/detail/:id'} element={<DetailComponent/>}></Route>

          </Routes>

      </>
  );
}

export default App;
