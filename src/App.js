
import './App.css';
import Particles from './Particles'
import NavigationBar from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header'
import AboutMe from './screens/aboutMe/AboutMe'
import Technologies from './screens/technologies/Technologies'
import ContactMe from './screens/contactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
      <AboutMe />
      <Technologies />
      <ContactMe />
    </div>
  );
}

export default App;
