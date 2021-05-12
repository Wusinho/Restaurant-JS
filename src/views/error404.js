export default () => {
  const views = `
      <h1>Error 404</h1>
      `;
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;
  return divElement;
};
