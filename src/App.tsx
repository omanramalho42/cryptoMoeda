import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Container, CoinSearch, Input, Title, Form} from './styles/styles';
import Coin from './components/Coin';
import { GlobalStyle } from './styles/global';

interface CoinProps {
  key: string;
  name: string;
  image: string;
  market_cap: number;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

interface Props {
  coin: CoinProps[];
};

const App:React.FC = () => {
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
    .catch(error => console.log(error))
  }, []);
  
  const handleSetSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <GlobalStyle />
      <CoinSearch>
        <Title>Procurar</Title>
        <Form>
          <Input type="text" placeholder="Procure" onChange={handleSetSearch}/>
        </Form>
      </CoinSearch>
      {filteredCoins.map(coin => {
        return(
          <Coin 
            key={coin.key}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </Container>
  );
}

export default App;
