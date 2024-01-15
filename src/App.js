import styles from './App.module.css'
import { Title } from './ComponentsStyle';
import { Fragment } from 'react';
import Button from './components/Button';
import Tab from './components/Tab';
import './index.css'
function App() {
  return (
    <Fragment>
      <Tab activeTab={1}>
        <Tab.Panel title="Profil">1. tab</Tab.Panel>
        <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
      </Tab>
      <div>
      <Button text="Button" variant="danger"/>
      <Button text="Button" variant="success"/>
      <Button text="Button" variant="warning"/>
      </div>
      <h1 className={styles.App}>COMPONENET CSS</h1>
      <Title> STYLED COMPONENTS TITLE </Title>
      <Title theme='dark'> STYLED COMPONENTS TITLE </Title>
    </Fragment>
  );
}

export default App;
