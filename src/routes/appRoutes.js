import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import PostPage from "../pages/postPage";
import ReadPage from "../pages/readPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-post" element={<PostPage />} />
            <Route path="/read-post/:id" element={<ReadPage />} />
        </Route>
    )
)

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes;