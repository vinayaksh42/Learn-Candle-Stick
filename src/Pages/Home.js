import { Link } from "react-router-dom";
import React from "react";

function Home() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
}

export default Home;