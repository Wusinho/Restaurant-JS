import Post from "../views/post";
import Product from "../views/product";
import Error404 from "../views/error404";
import Home from "../controllers/index.controller";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";

  switch (route) {
    case "#/": {
      return content.appendChild(Home());
    }
    case "#/posts": {
      return content.appendChild(Post());
    }

    case "#/products": {
      return content.appendChild(Product());
    }
    default: {
      return content.appendChild(Error404());
    }
  }
};

export default router;
