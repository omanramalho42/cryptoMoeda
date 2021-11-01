import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 900px;
`;

export const ContainerCoin = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
    max-width: 300px;
`;

export const ContainerData = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;

export const Title = styled.h1`
    font-size: 1em;
    width: 150px;
`;

export const Symbol = styled.p`
    text-transform: uppercase;
`;

export const CoinPrice = styled.p`
    width: 110px;
`;

export const CoinVolume = styled.p`
    width: 200px;
`;

export const CoinMarketCap = styled.p`
    width: 240px;
`;

interface PercentProps {
    color: 'red' | 'green';
}

export const CoinPercent = styled.p<PercentProps>`
    width: 80px;
    color: ${({color}) => color === 'red' ? '#f90000' : '#00FF00'};
`;