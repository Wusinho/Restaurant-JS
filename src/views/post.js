export default () => {
  const views = `
      <h1>Hello Post</h1>
      <p> Hello Post with javascript router</p>
      `;
  const divElement = document.createElement("div");
  divElement.classList = "text-white";
  divElement.innerHTML = views;
  return divElement;
};
