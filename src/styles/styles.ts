import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    color: #fff;
`;
export const CoinSearch = styled.div`
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.h1`
    margin-bottom: 32px;
    text-align: center;
`;

export const Form = styled.form`

`;

export const Input = styled.input`
    padding-left: 16px;
    width: 300px;
    height: 50px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(
        -225deg,
        #ac32e4 0%,
        #7918f2 48%,
        #4801ff 100%
    );
    color: #e2e2d2;

    &::placeholder {
        color: #e2e2e2;
    }
`;