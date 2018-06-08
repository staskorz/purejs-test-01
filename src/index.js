import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");

const p = document.createElement("p");
const text = document.createTextNode("Hello from PureJS!");
p.appendChild(text);
rootElement.appendChild(p);

registerServiceWorker();
