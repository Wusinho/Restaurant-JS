import views from "../views/about.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;
  return divElement;
};
