import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="d-flex justify-content-around row">
        <div>
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <span className="text-muted">Cool stuff</span>
            </li>
            <li>
              <span className="text-muted">Random feature</span>
            </li>
            <li>
              <span className="text-muted">Team feature</span>
            </li>
            <li>
              <span className="text-muted">Stuff for developers</span>
            </li>
            <li>
              <span className="text-muted">Another one</span>
            </li>
            <li>
              <span className="text-muted">Last time</span>
            </li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <span className="text-muted">Resource</span>
            </li>
            <li>
              <span className="text-muted">Resource name</span>
            </li>
            <li>
              <span className="text-muted">Another resource</span>
            </li>
            <li>
              <span className="text-muted">Final resource</span>
            </li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <span className="text-muted">Team</span>
            </li>
            <li>
              <span className="text-muted">Locations</span>
            </li>
            <li>
              <span className="text-muted">Privacy</span>
            </li>
            <li>
              <span className="text-muted">Terms</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
