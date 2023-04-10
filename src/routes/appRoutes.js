import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import PostPage from "../pages/postPage";
import ReadPage from "../pages/readPage";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new-post" element ={<PostPage/>}/>
                    <Route path="/read-post" element = {<ReadPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;