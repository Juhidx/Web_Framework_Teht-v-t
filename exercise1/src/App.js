import './App.css';
import Header from './components/Header';
import Notifications from './components/Notifications';
import MainNews from './components/MainNews';
import SideSection from './components/SideSection';
import Topics from './components/Topics';

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

  const newsDataMain = [
    {
      header: 'Koululaiset pakenevat koulusta oulussa!',
      picture: "https://www.runnerstribe.com/wp-content/uploads/2019/11/Running-a-Marathon.jpg",
      body: 'Integer tristique posuere eleifend. Aenean sit amet massa sit amet ex euismod bibendum vel vitae arcu. In sed porttitor orci. Aliquam erat volutpat. In tempus at elit eget euismod.',
      topic: 'Hyvinvointi',
      time: '13:00'
    },

    {
      header: 'Onko juhliminen hauskaa?',
      picture: "https://drugpolicy.org/sites/default/files/crowd-at-concert_0.png",
      body: 'Curabitur congue commodo ultricies. In a odio vitae nisi ultricies porttitor. Vivamus ligula metus, faucibus non bibendum a, viverra at lorem. Mauris odio quam, luctus et ex ut, accumsan cursus neque.',
      topic: 'Kulttuuri',
      time: '16:20'
    }
  ]

  const sideTopics = [
    {
      topic: 'Luetuimmat',
      newsData: [
        {
          number: '1',
          topic: 'Etiam mi',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium at ipsum a lobortis. Vivamus mollis vitae eros quis egestas.'
        },
        {
          number: '2',
          topic: 'Mauris at',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia scelerisque enim, et efficitur nisi dapibus mollis. Maecenas lobortis metus'
        },
        {
          number: '3',
          topic: 'Nullam sollicitudin',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ipsum non imperdiet bibendum. Quisque tincidunt luctus nunc, quis auctor.'
        }
      ]
    },
    {
      topic: 'Urheilu',
      newsData: [
        {
          number: '1',
          topic: 'Quisque interdum',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra condimentum ornare. Nunc ultrices venenatis magna. Donec vitae orci eu.'
        },
        {
          number: '2',
          topic: 'Quisque ornare',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales in ipsum at dignissim. Fusce scelerisque id metus non mollis.'
        },
        {
          number: '3',
          topic: 'Aliquam tellus',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tincidunt urna. Sed fermentum suscipit magna, sed sodales nisi finibus.'
        }
      ]
    }
  ]

  

  return (
    <div className = "App">
      <Header />
      <Topics />

      <main className = "mainBody">
        <div>
          <section className = "notifications">
          {
            newsDataNotifications.map(notification => <Notifications topic = {notification.topic} body = {notification.body} />)
          }
          </section>
          <section className = "innerBody">
            <section className = "mainNews">
              {
                newsDataMain.map(news => <MainNews header = {news.header} topic = {news.topic} time = {news.time} picture = {news.picture} body = {news.body} />)
              }
            </section>
            <section className = "side">
              {
                sideTopics.map(topic => <SideSection topic = {topic.topic} newsData = {topic.newsData} />)
              }
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;