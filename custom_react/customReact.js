function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "http://reactjs.org",
    target: "_blank"
  },
  children: "CLick me to visit react"
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
