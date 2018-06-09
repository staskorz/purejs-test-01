import createNameElement from "./name";
import createContactElement from "./contact";

const GROUP_CHILDREN_CLASS = "group-children";

const addGroupChildren = ({ element, contacts, isRootItem }) => {
  const groupChildren = document.createElement("div");

  if (!isRootItem) {
    groupChildren.className = GROUP_CHILDREN_CLASS;
  }

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

  element.appendChild(groupChildren);
};

const removeGroupChildren = ({ element }) => {
  [...element.childNodes]
    .filter(childNode => childNode.className === GROUP_CHILDREN_CLASS)
    .forEach(childNode => {
      childNode.remove();
    });
};

const createGroupElement = ({ name, contacts }) => {
  const div = document.createElement("div");

  const isRootItem = !name;

  if (isRootItem) {
    addGroupChildren({ element: div, contacts, isRootItem });
  } else {
    div.appendChild(
      createNameElement({
        name,
        onClick: () => {
          if (div.dataset.expanded) {
            delete div.dataset.expanded;
            removeGroupChildren({ element: div });
          } else {
            div.dataset.expanded = true;
            addGroupChildren({
              element: div,
              contacts,
              isRootItem
            });
          }
        }
      })
    );
  }

  return div;
};

export default createGroupElement;
