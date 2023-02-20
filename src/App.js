import style from './app.module.css';
import Footer from './containers/footer/footer';
import Header from './containers/header/header';
import WeatherApp from './containers/weather-app/weather-app';

function App() {
  return (
    <div className={style['full']}>
      <Header />
      <main className={style['main']}>
        <WeatherApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
