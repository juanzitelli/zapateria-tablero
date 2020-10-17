import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
export const Home = () => (
  <>
    <Navbar />
    <div className="jumbotron container mt-5">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4"></hr>
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <span className="btn btn-primary btn-lg" role="button">
          Learn more
        </span>
      </p>
    </div>
    <Footer />
  </>
);
