import Home from "../controllers/home.controller";
import Post from "../controllers/post.controller";
import About from "../controllers/about.controller";
import Error404 from "../controllers/error404.controller";

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

    case "#/about": {
      return content.appendChild(About());
    }
    default: {
      return content.appendChild(Error404());
    }
  }
};

export default router;
