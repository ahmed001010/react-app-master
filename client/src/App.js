import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Software from "./pages/Software";
import Seo from "./pages/Seo";
import Blockchain from "./pages/Blockchain";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
// import BlogDetails from "./pages/BlogDetails";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/software" component={Software} />
        <Route path="/seo" component={Seo} />
        <Route path="/blockchain" component={Blockchain} />
        {/* <Route path="/blogs" exact component={Blogs} />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Home} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
