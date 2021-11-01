import React from 'react';
import {
    Container,
    Content,
    ContainerCoin,
    ContainerData,
    Image,
    Title,
    Symbol,
    CoinPrice,
    CoinVolume,
    CoinPercent,
    CoinMarketCap,
} from './styles';

interface CoinProps {
    name: string;
    image: string;
    symbol: string;
    price: number;
    volume: number;
    priceChange: number;
    marketcap: number;
}

const Coin: React.FC<CoinProps> = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
    return(
        <Container>
            <Content>
                <ContainerCoin>
                    <Image src={image} alt=""/>
                    <Title>{name}</Title>
                    <Symbol>{symbol}</Symbol>
                </ContainerCoin>
                <ContainerData>
                    <CoinPrice>${price}</CoinPrice>
                    <CoinVolume>${volume.toLocaleString()}</CoinVolume>
                    {priceChange < 0 ? (
                        <CoinPercent color="red">
                            {priceChange.toFixed(2)}%
                        </CoinPercent>
                    ) : (
                        <CoinPercent color="green">
                            {priceChange.toFixed(2)}%
                        </CoinPercent>
                    )
                    }
                    <CoinMarketCap>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </CoinMarketCap>
                </ContainerData>
            </Content>
        </Container>
    );
}

export default Coin;