export default () => {
  const views = `
      <h1>Hello PRODUCT</h1>
      <p> Hello PRODUCT with javascript router</p>
      `;
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;
  return divElement;
};
