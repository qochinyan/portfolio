import { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import store from "./Redux/store";
import Menu from "./features/mobileMenu/Menu";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
      <Provider store={store}>
        <div className="App">
          <Header setDarkTheme={setDarkTheme} />
          <Menu />
          <Home />
          <Footer />
        </div>
      </Provider>
  );
}

export default App;
