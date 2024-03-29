import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { MainPage, Page404 } from '../pages';

function App() {
  const [darkMode, toggleTheme] = useState(false);

  const onChangeMode = () => {
    toggleTheme(darkMode => !darkMode)
  }

  return (
    <Router>
      <main data-theme={darkMode ? 'dark' : 'light'}>
          <Routes>
              <Route end path='/' element={ <MainPage darkMode={darkMode} toggleTheme={onChangeMode} /> }/>
              <Route end path='*' element={ <Page404/> }/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
