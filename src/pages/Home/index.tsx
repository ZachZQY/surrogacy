import Banner from '@/components/Banner';
import Introduction from '@/components/Introduction';
import Statistics from '@/components/Statistics';
import { HomeContainer } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <Introduction />
      <Statistics />
    </HomeContainer>
  );
};

export default Home; 