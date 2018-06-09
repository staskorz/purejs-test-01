import createNameElement from "./name";
import createContactElement from "./contact";

const createGroupElement = ({ name, contacts }) => {
  const div = document.createElement("div");

  // root item has no name
  if (name) {
    div.appendChild(
      createNameElement({
        name
      })
    );
  }

  const groupChildren = document.createElement("div");

  // root item has no name
  if (name) {
    groupChildren.className = "group-children";
  }

  div.appendChild(groupChildren);

  contacts.forEach(({ name, type, contacts }) => {
    if (type === "Group") {
      groupChildren.appendChild(
        createGroupElement({
          name,
          contacts
        })
      );
    } else {
      groupChildren.appendChild(
        createContactElement({
          name
        })
      );
    }
  });

  return div;
};

export default createGroupElement;
