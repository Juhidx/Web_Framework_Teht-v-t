import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Notifications from './components/Notifications';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';

function App() {

  const newsDataNotifications = [
    {
      topic: 'ANALYSIS',
      body: 'Älkää muuttako kaukovainiolle!'
    },

    {
      topic: 'OAMK',
      body: 'Opiskelu on alkanut Oulun korkeakoululla sujuvasti, vastaa opiskelijat kyselyssä.'
    },

    {
      topic: 'URHEILU',
      body: 'Maali tuli!'
    }
  ]

  return (
    <div className="App">
      <Header />
      {
        newsDataNotifications.map(notification => <Notifications topic = {notification.topic} body = {notification.body} />)
      }
      <MainSection />
      <SideSection />
    </div>
  );
}

export default App;
