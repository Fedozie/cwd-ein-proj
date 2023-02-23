import React from "react";
import styled from "styled-components";
import MainBody from "../components/mainBody";
import { Header } from "../components/UI/wrapper";

const Home = styled.div`
    width: 100vw;
`;

const HomePage = () => {

    return (
        <Home>
            <Header />
            <MainBody />
        </Home>
    )
}

export default HomePage;