import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import contacts from "./data/contacts";
import createGroupElement from "./element-creators/group";

const rootElement = document.getElementById("root");

rootElement.appendChild(createGroupElement({ name: null, contacts }));

registerServiceWorker();
