import styles from './App.module.scss';
import Header from './components/Header'
import Info from './components/Info';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Info />
    </div>
  );
}

export default App;
