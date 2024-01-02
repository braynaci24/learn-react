import styles from './App.module.css'
import { Title } from './ComponentsStyle';

function App() {
  console.log(styles)
  return (
    <div className="App">
     
     <h1 className={styles.App}>COMPONENET CSS</h1>
     <Title> STYLED COMPONENTS TITLE </Title>
     <Title theme='dark'> STYLED COMPONENTS TITLE </Title>
    </div>
  );
}

export default App;
