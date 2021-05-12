import views from "../views/post.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;
  return divElement;
};
