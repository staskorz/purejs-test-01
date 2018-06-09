export default ({ name }) => {
  const div = document.createElement("div");
  const text = document.createTextNode(name);
  div.appendChild(text);

  return div;
};
