import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-primary">
      <div className="content has-text-centered">
        <div className="columns is-centered">
          <div className="column is-half">
            <ul className="footer-links is-flex">
              <li className="mr-6"><a className="has-text-white" href="mailto:wontonnoodles23@gmail.com">Email</a></li>
              <li className="mr-6"><a className="has-text-white" href="tel:732.309.5817">Phone</a></li>
              <li className="mr-6"><a className="has-text-white" href="https://open.spotify.com/playlist/75rMs9goFl18iXSisB3j5v?si=d6c9f05012ce4989">Spotify</a></li>
              <li className="mr-6"><a className="has-text-white" href="https://twitter.com/wontonnoodles23">Twitter</a></li>
              <li><a className="has-text-white" href="https://github.com/wontonchris">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
