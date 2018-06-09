export default ({ name, onClick }) => {
  const div = document.createElement("div");
  const text = document.createTextNode(name);
  div.appendChild(text);

  if (onClick) {
    div.addEventListener("click", e => {
      e.preventDefault();

      onClick();
    });
  }

  return div;
};
