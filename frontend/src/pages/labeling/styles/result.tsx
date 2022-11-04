import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";
import { keyframes } from "@emotion/react";

const infiniteRotate = keyframes`
    100%{
        transform: rotate(360deg);
    }
` 

export const WrappingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80vw;
    max-width: 500px;
    height: 92vh;
    background-color: ${palette.mainColor};
    // boder 관련
    border: 5px solid transparent;
    border-radius: 20px;
    border-image: ${palette.subColorGradient4};
    border-image-slice: 1;
    margin: 10px;
`
export const KakaoShareDiv = styled.div`
    color: white;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const KakaoShareImg = styled.img`
    border: none;
    outline: none;
    box-shadow: none;
    :hover{
        cursor: pointer;
    }
`

export const LabelingCharacterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 200px;
    height: 20%;
`

export const LabelingDetailDiv = styled.div`
    width: 85%;
    height: 40%;
    border-radius: 8px;
    background: ${palette.subColorGradient1};
`
export const MappingDiv = styled.div`
    font-size: 1.2rem;
    margin: 5% 0 0 5%;
    word-break: break-all;
    
`

export const  LabelingNameDiv = styled.div`
    // 텍스트에 그라데이션
    background: ${palette.subColorGradient4};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    //
    font-size: 2rem;
    font-weight: bold;
    animation: ${infiniteRotate} 6s linear infinite;
`

export const WithButton = styled.button`
    width: 80%;
    height: 6%;
    font-size: 80%;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    box-shadow: none;
    background: ${palette.subColorGradient2};
    :hover{
        cursor: pointer;
    }
`