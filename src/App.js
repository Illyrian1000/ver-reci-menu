import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Meat from "./components/Meat";
import Header from "./components/Header";
import Contact from "./components/Contact";

import { meat } from "./data/meat";
import { meze } from "./data/meze";
import { salads } from "./data/salads";

function App() {
  const [menuBtn, setMenuBtn] = useState(meat);

  const menuChange = (menuItem) => {
    setMenuBtn(menuItem);
  };

  return (
    <Router>
      <div className="main-cont">
        <div className="content-cont">
          <Header />

          <Switch>
            <Route exact path="/">
              <div className="description-cont">
                <h1>Welcome to Ver Reci</h1>
                <p>
                  Indulge in locally sourced, sizzling delights. Taste the
                  essence of Albania's finest grilled specialties.
                </p>
              </div>

              <div className="buttons-cont">
                <button
                  className={` ${
                    menuBtn === meat ? "buttonActive" : null
                  } menuButtons`}
                  onClick={() => menuChange(meat)}
                >
                  Meat
                </button>
                <button
                  className={` ${
                    menuBtn === meze ? "buttonActive" : null
                  } menuButtons`}
                  onClick={() => menuChange(meze)}
                >
                  Meze
                </button>
                <button
                  className={` ${
                    menuBtn === salads ? "buttonActive" : null
                  } menuButtons`}
                  onClick={() => menuChange(salads)}
                >
                  Salads
                </button>
              </div>

              <div className="products-cont">
                {Object.values(menuBtn).map((e) => {
                  return (
                    <Meat
                      key={e.name}
                      name={e.name}
                      description={e.description}
                      price={e.price}
                      image={e.image}
                    />
                  );
                })}
              </div>
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>

          <footer>
            <p> &copy; IP Tech Solutions</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
