import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import PostPage from "../pages/postPage";
import ReadPage from "../pages/readPage";
import EditPage from "../pages/editPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-scribble" element={<PostPage />} />
            <Route path="/read-scribble/:id" element={<ReadPage />} />
            <Route path="/edit-scribble/:id" element = {<EditPage/>} />
        </Route>
    )
)

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes;