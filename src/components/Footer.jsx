import React from "react";

function Footer() {
  return (
    <div>
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <footer className="footer has-background-primary">
          <div className="container">
            <div id="contact" className="hero is-small has-text-centered">
              <ul className="footer-links is-flex">
                <li className="mr-6"><a className="has-text-white is-size-5" href="mailto:wontonnoodles23@gmail.com">Email</a></li>
                <li className="mr-6"><a className="has-text-white is-size-5" href="tel:732.309.5817">Phone</a></li>
                <li className="mr-6"><a className="has-text-white is-size-5" href="https://open.spotify.com/playlist/75rMs9goFl18iXSisB3j5v?si=d6c9f05012ce4989">Spotify</a></li>
                <li className="mr-6"><a className="has-text-white is-size-5" href="https://twitter.com/wontonnoodles23">Twitter</a></li>
                <li><a className="has-text-white is-size-5" href="https://github.com/wontonchris">GitHub</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </nav>
      <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/2a5aMQIXlQYWvhqd0umrgu?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

export default Footer;
