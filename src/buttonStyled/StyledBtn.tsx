import styled, { css } from "styled-components";

type StyledBtnPropsType = {
    color?: string;
    btnType: "primary" | "outlined";
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    background: #4e71fe;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;

    ${(props) =>
        props.btnType === "outlined" &&
        css<StyledBtnPropsType>`
            border: 2px solid ${(props) => props.color};
            color: ${(props) => props.color || " #4e71fe"};
            background-color: transparent;

            &:hover {
                cursor: pointer;
                border: 2px solid #4e71fe;
                background-color: #4e71fe;
                color: #ffffff;
            }
        `}

    ${(props) =>
        props.btnType === "primary" &&
        css<StyledBtnPropsType>`
            background-color: ${(props) => props.color || "# #4e71fe"};
            color: #fff;

            &:hover {
                cursor: pointer;
                border: 2px solid ${(props) => props.color};
                color: ${(props) => props.color || " #4e71fe"};
                background-color: transparent;
            }
        `}
`;
