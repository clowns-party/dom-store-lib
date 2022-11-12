import "./style.css";
import Icon from "./icon.png";
import { createStore } from "./store";

function component() {
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  let store = createStore(counter);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "DECREMENT" });
  store.dispatch({ type: "INCREMENT" });

  const element = document.createElement("div");

  element.innerHTML = "<div>hello</div>";
  element.classList.add("hello");

  const myIcon = new Image();

  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.append(component());
