import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import PostPage from "../pages/postPage";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new-post" element ={<PostPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;