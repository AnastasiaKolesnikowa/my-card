import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./buttonStyled/StyledBtn";

function App() {
    return (
        <div className="App">
            <MainCard>
                <Card>
                    <Img src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eBFzmjfM7Jp9PBq6f1bU-mjKD9HL-tlwg9gEW-RomNvMWrtoZNB0d0pvQAey1JIC5RJ5qULN6JGZR4I2aOZ12QsMXoM4H4szVeSWJ24REo~5tUms4xSWC4m6Q5k4znQ9XeB7WKJzlf9LiPH3q6fTNL0aXP9V3w5zzBUf3UmC~bpfGoJI8xnBdJgEmakprv19u-Ve71K7PgTGtYKZ4wgkuG4OmbPqPkowO91GON-1a0dLg4fY3WY9BNOu2ywkkYR8Y~90CAisM33UR2sMTkxG9030jQtQAxjZmiVFOtAyKq40g81sP3csJwYAnh-9aPaqSVCes042~b-JzoHvKF8l1A__" />
                    <Title>Headline</Title>
                    <Text>
                        Faucibus. Faucibus. Sit sit sapien sit <br /> tempusrisu
                        ut. Sit molestie ornare in venen.
                    </Text>
                    <BlockBtn>
                        <StyledBtn btnType={"primary"}>See more</StyledBtn>
                        <StyledBtn btnType={"outlined"}>Save</StyledBtn>
                    </BlockBtn>
                </Card>
            </MainCard>
        </div>
    );
}

export default App;

const MainCard = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
`;

const Img = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 170px;
`;
const Title = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    align-self: flex-start;
    padding: 20px 0 0 20px;
`;

const Text = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    padding-top: 20px;
    padding-left: 20px;
    align-self: self-start;
`;

const BlockBtn = styled.div`
    display: flex;
    align-self: flex-start;
    gap: 12px;
    padding-top: 19px;
    padding-left: 20px;
`;
