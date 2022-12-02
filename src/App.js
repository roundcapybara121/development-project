import "./App.css";
import { useState, useEffect } from "react";
import plantData from "./assets/plant-data.json";
import PlantItem from "./components/plantItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
plantData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [plantGrid, setplantGrid] = useState(plantData);
  const [count, setCount] = useState(0);
  const [checkedSort, setCheckedSort] = useState("");
  const [checkedIndoor, setCheckedIndoor] = useState("");
  const [checkedOutdoor, setCheckedOutdoor] = useState("");

  const handleClick = (item, price) => {
    setCart([...cart, item])
    setCount(count + price)
  }

  const handleSort = () => {
    if (checkedSort === "") {
      setCheckedSort("checked");
      let newcart = plantGrid.sort((a, b) => (a.price - b.price))
      setplantGrid(newcart);
    } else {
      setCheckedSort("");
      let newcart = plantGrid.sort((a, b) => (a.id - b.id))
      setplantGrid(newcart);
    }
  }

  const handleIndoor = () => {
    if (checkedIndoor === "") {
      setCheckedIndoor("checked");
      let newcart = plantGrid.filter(x => x.sunlight < 2)
      setplantGrid(newcart);
    } else {

      setCheckedIndoor("");
      let newcart = plantData
      if (checkedOutdoor === "checked") {
        newcart = plantData.filter(x => x.sunlight >= 2)
      }
      if (checkedSort === "checked") {
        newcart = newcart.sort((a, b) => (a.price - b.price))
      }
      setplantGrid(newcart);
    }
  }

  const handleOutdoor = () => {
    if (checkedOutdoor === "") {
      setCheckedOutdoor("checked");
      let newcart = plantGrid.filter(x => x.sunlight >= 2)
      setplantGrid(newcart);
    } else {
      setCheckedOutdoor("");
      let newcart = plantData
      if (checkedIndoor === "checked") {
        newcart = plantData.filter(x => x.sunlight < 2)
      }
      if (checkedSort === "checked") {
        newcart = newcart.sort((a, b) => (a.price - b.price))
      }
      setplantGrid(newcart);
    }
  }

  return (
    <div className="App">
      <h1>The Plant Shop</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="container">

        <div className="content"> {/* class name */}
          {/* sort by price */}


          {plantGrid.map((item, index) => ( // TODO: map plantData to plantItem components iterates through the data and does something
            // <p>Bakery Item {index}</p> // replace with plantItem component
            <PlantItem className="card" image={item.image} name={item.name} sunlight={item.sunlight} price={item.price} handleClick={handleClick} />
          ))}
        </div>

        <div className="sidebar">

          <p>
            Sort by price: lowest to high
            <input type="checkbox" checked={checkedSort} onChange={handleSort} />
            <span class="checkmark"></span>
          </p>

          <h3>Filters:</h3>
          <label>
            Indoor Plants
            <input type="checkbox" checked={checkedIndoor} onChange={handleIndoor} />
            <span class="checkmark"></span>
          </label>
          <br></br>
          <label>
            Outdoor Plants
            <input type="checkbox" checked={checkedOutdoor} onChange={handleOutdoor} />
            <span class="checkmark"></span>
          </label>

          <h2>Cart</h2>
          <h2>Total Price: {count}</h2>
          <h4>Items: {cart.map((item, index) => (<p>{item} <button onClick={() => { setCart(cart.filter((item, itemIndex) => itemIndex != index)); setCount(count - plantData.find(x => x.name === item).price) }}>X</button></p>))}</h4>
        </div>

      </div>
    </div>
  );
}
/* 
*/
export default App;
