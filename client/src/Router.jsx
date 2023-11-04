import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Edit, Login, Register, Start } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="editUS" element={<Main />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;