import React from "react";

function Body() {
  return (
    <div id="work">{
    <main className="section">
      <div className="container">
        <h1 className="has-text-white title is-2">Work</h1>
        <div className="content">
          <p>
            <a className="has-text-white button is-link" href="https://youtu.be/D4Elu1HraaU">IT|Tech Support</a>
          </p>
          <p>
            <a className="has-text-white button is-link" href="https://bite-buddy23-22fb9ad56b45.herokuapp.com/">Bite Buddy App</a>
          </p>
          <p>
            <a className="has-text-white button is-link" href="https://github.com/wontonchris">GitHub Repo</a>
          </p>
          <p>
            <a className="has-text-white button is-link" href="https://gitlab.com/wontonchris">GitLab Repo</a>
          </p>
        </div>
      </div>
    </main>}
    </div>
  );
}

export default Body;
