import { useState } from "react";
import "./App.css";
import Meat from "./components/Meat";
import Header from "./components/Header";

const lambChops = "img/Lamb Chops.jpg";
const beefChops = "img/Beef Chops.jpg";
const chickenWings = "img/Chicken Wings.jpg";
const chickenFillet = "img/chicken fillet.jpg";
const vealFillet = "img/Veal Fillet.jpg";
const vealSteak = "img/veal steak.jpg";
const vealSausage = "img/Veal Sausage.jpg";
const goatSausage = "img/goat sausage.jpg";

const homemadeCheese = "img/Homemade Cheese.jpg";
const fetaCheese = "img/Feta Cheese.jpg";
const grilledFetaCheese = "img/Grilled Feta Cheese.jpg";
const yellowCheese = "img/Yellow Cheese.jpg";
const pickledEggplant = "img/Pickled Eggplant.jpg";
const olives = "img/Olives.jpg";
const peppersInMilk = "img/Peppers in Milk Cream.jpg";
const pickledCabbage = "img/Pickled Cabbage.jpg";
const yogurtSauce = "img/Yougurt Sauce.jpg";
const bread = "img/Bread.jpg";
const chips = "img/Chips.jpg";
const mixOfPickles = "img/Mix of Pickles.jpg";
const cornBread = "img/Corn Bread.jpg";

const chefSalad = "img/Chef Salad.jpg";
const greenLettuce = "img/Green Lettuce.jpg";
const redWhiteCarrotsSalad = "img/Red & White Cabbage + Carrots Salad.jpg";
const chicorySalad = "img/Chicory Salad.jpg";
const caesarSalad = "img/Caesar Salad.jpg";
const grilledVegetables = "img/Grilled Vegetables.jpg";
const grilledMashrooms = "img/Grilled Mushrooms.jpg";

const meat = {
  item1: {
    name: "Lamb Chops",
    description:
      "Tender lamb chops, seasoned and grilled to perfection, offering a rich and smoky flavor.",
    price: "1100 AL / 500 gr",
    image: lambChops,
  },
  item2: {
    name: "Beef Chops",
    description:
      "Robust beef chops, expertly grilled to retain their juiciness, delivering a hearty and satisfying taste.",
    price: "1000 AL / 500 gr",
    image: beefChops,
  },
  item3: {
    name: "Chicken Wings",
    description:
      "Plump chicken wings, marinated and grilled for a crispy exterior and moist, flavorful meat.",
    price: "550 AL / 500 gr",
    image: chickenWings,
  },
  item4: {
    name: "Chicken Fillet Quenched in Wine",
    description:
      "Succulent chicken fillet, delicately infused with a wine essence, creating a sophisticated and tender dish.",
    price: "300 AL",
    image: chickenFillet,
  },
  item5: {
    name: "Veal Fillet in Wine",
    description:
      "Exquisite veal fillet, bathed in a velvety wine sauce, offering a blend of tenderness and refined flavors.",
    price: "600 AL / 200 gr",
    image: vealFillet,
  },
  item6: {
    name: "Veal Steak",
    description:
      "Premium cut veal steak, grilled to your preference, ensuring a succulent and tender dining experience.",
    price: "1700 AL",
    image: vealSteak,
  },
  item7: {
    name: "Veal Sausage",
    description:
      "Delectable veal sausage, crafted with premium ingredients, delivering a delightful burst of flavors.",
    price: "700 AL / 250 gr",
    image: vealSausage,
  },
  item8: {
    name: "Goat Sausage",
    description:
      "Distinctive goat sausage, seasoned to perfection, providing a unique and savory taste experience.",
    price: "700 AL / 250 gr",
    image: goatSausage,
  },
};

const meze = {
  item1: {
    name: "Home-made Cheese",
    description:
      "Rich and creamy homemade cheese, bursting with authentic flavors.",
    price: "300 AL",
    image: homemadeCheese,
  },
  item2: {
    name: "Feta Cheese",
    description:
      "Classic Feta cheese, brimming with tangy and salty notes, perfect for any dish.",
    price: "300 AL",
    image: fetaCheese,
  },
  item3: {
    name: "Grilled Feta Cheese",
    description:
      "Feta cheese delicately grilled for a warm, smoky taste that complements its creamy texture.",
    price: "300 AL",
    image: grilledFetaCheese,
  },
  item4: {
    name: "Yellow Cheese",
    description:
      "Mild and creamy yellow cheese, a versatile addition to your palate.",
    price: "300 AL",
    image: yellowCheese,
  },
  item5: {
    name: "Pickled Eggplant",
    description:
      "Tangy and flavorful pickled eggplant, a zesty addition to your meze selection.",
    price: "200 AL",
    image: pickledEggplant,
  },
  item6: {
    name: "Olives",
    description:
      "Assorted olives, brined to perfection, offering a medley of savory flavors.",
    price: "250 AL",
    image: olives,
  },
  item7: {
    name: "Peppers in Milk Cream",
    description:
      "Succulent peppers immersed in creamy goodness for a delightful taste sensation.",
    price: "250 AL",
    image: peppersInMilk,
  },
  item8: {
    name: "Pickled Cabbage",
    description:
      "Crunchy pickled cabbage, delivering a crisp and tangy bite with every serving.",
    price: "200 AL",
    image: pickledCabbage,
  },
  item10: {
    name: "Yogurt Sauce",
    description:
      "Smooth and refreshing yogurt sauce, perfect for complementing various dishes.",
    price: "250 AL",
    image: yogurtSauce,
  },
  item11: {
    name: "Bread",
    description:
      "Freshly baked bread, a comforting staple to accompany your delightful meze spread.",
    price: "30 AL",
    image: bread,
  },
  item112: {
    name: "Chips",
    description:
      "Crunchy and savory chips, a classic snack to enjoy alongside your meal.",
    price: "200 AL",
    image: chips,
  },
  item13: {
    name: "Mix of Pickles",
    description:
      "A delightful mix of assorted pickles, offering a burst of tangy and sour flavors.",
    price: "250 AL",
    image: mixOfPickles,
  },
  item14: {
    name: "Corn Bread",
    description:
      "Deliciously fluffy corn bread, a delightful addition to complement your meze selection.",
    price: "150 AL",
    image: cornBread,
  },
};

//// SALADS
//// SALADS
//// SALADS
//// SALADS
//// SALADS
//// SALADS
//// SALADS
//// SALADS
//// SALADS

const salads = {
  item1: {
    name: "Grilled Mushrooms",
    description:
      "Juicy grilled mushrooms, offering a smoky and earthy flavor in every bite.",
    price: "300 AL",
    image: grilledMashrooms,
  },
  item2: {
    name: "Grilled Vegetables",
    description:
      "Assorted vegetables grilled to perfection, bursting with natural flavors and textures.",
    price: "250 AL",
    image: grilledVegetables,
  },
  item3: {
    name: "Caesar Salad",
    description:
      "Classic Caesar salad, a harmonious blend of crisp lettuce, savory dressing, and parmesan cheese.",
    price: "450 AL",
    image: caesarSalad,
  },
  item4: {
    name: "Chicory Salad",
    description:
      "Chicory salad with a refreshing and slightly bitter taste, complemented by a zesty dressing.",
    price: "250 AL",
    image: chicorySalad,
  },
  item5: {
    name: "Red & White Cabbage + Carrots Salad",
    description:
      "Vibrant salad featuring red and white cabbage with carrots, offering a colorful and crunchy delight.",
    price: "250 AL",
    image: redWhiteCarrotsSalad,
  },
  item6: {
    name: "Green Lettuce",
    description:
      "Fresh and crisp green lettuce, a versatile and refreshing addition to any meal.",
    price: "250 AL",
    image: greenLettuce,
  },
  item7: {
    name: "Chef Salad",
    description:
      "A flavorful medley of ingredients in a chef-inspired salad, packed with delightful textures and tastes.",
    price: "450 AL",
    image: chefSalad,
  },
};

function App() {
  const [menuBtn, setMenuBtn] = useState(meat);

  const menuChange = (menuItem) => {
    setMenuBtn(menuItem);
  };

  return (
    <div className="main-cont">
      <div className="content-cont">
        <Header />
        <div className="description-cont">
          <h1>Welcome to Ver Reci</h1>
          <p>
            Indulge in locally sourced, sizzling delights. Taste the essence of
            Albania's finest grilled specialties.
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

        <footer>
          <p> &copy; IP Tech Solutions</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
