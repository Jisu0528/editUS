import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Main, NewDoc, Login, Register, Start, JoinRoom, Info, EditDoc } from "../pages";
import Header from "./Header";
import { getCookie } from "../Cookie";

const Router = () => {
  const CheckLogin = () => {
    if(getCookie('accessToken') && getCookie('accessToken') !== "undefined"){
      return true;
    }else{
      return false;
    }
  }
  const [isLoggedIn, setLoggedIn] = useState(CheckLogin());

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    const loggedIn = CheckLogin();
    setLoggedIn(loggedIn);
  }, []);


  const PublicRoute = () => {
    console.log("isLogin: ", isLoggedIn);
    return isLoggedIn ? <Navigate to="/"/> : <Outlet />;
  }

  const PrivateRoute = () => {
    console.log("isLogin: ", isLoggedIn);
    return isLoggedIn ? <Outlet /> :  <Navigate to="/"/>
  }

  return (
    <BrowserRouter>
      <Header isLogIn={isLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path="/" element={<Start />} />
          <Route path="/learnmore" element={<Info />} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
          <Route path="/register" element={<Register />} />
          
        </Route>
        <Route element={<PrivateRoute />}> 
          <Route path="/joinroom" element={<JoinRoom />} />
          <Route path="/:roomId" element={<Main />} />
          <Route path="/:roomId/new" element={<NewDoc />} />
          <Route path="/:roomId/:docId" element={<EditDoc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;