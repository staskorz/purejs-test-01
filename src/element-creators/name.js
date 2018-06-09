const SELECTED_CLASS_NAME = "selected";

const state = {
  selectedElement: null
};

const toggleSelection = ({ element, selectedElement }) => {
  if (element === selectedElement) {
    element.classList.remove(SELECTED_CLASS_NAME);
    state.selectedElement = null;
  } else {
    if (selectedElement) {
      selectedElement.classList.remove(SELECTED_CLASS_NAME);
    }

    state.selectedElement = element;
    element.classList.add(SELECTED_CLASS_NAME);
  }
};

export default ({ name, onClick }) => {
  const div = document.createElement("div");
  div.classList.add("name");
  const text = document.createTextNode(name);
  div.appendChild(text);

  div.addEventListener("click", e => {
    e.preventDefault();

    toggleSelection({ element: div, selectedElement: state.selectedElement });

    if (onClick) {
      onClick();
    }
  });

  return div;
};
