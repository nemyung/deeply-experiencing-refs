import * as React from "react";
import { DOMReference } from "../components";

function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">DOMReference</h1>
      <h2 className="text-2xl font-medium mb-4">
        The Container changes background when triggering useEffect
      </h2>
      <h2 className="text-2xl font-medium mb-4">
        The child changes background by accessing child's DOM Node
      </h2>
      <DOMReference />
    </main>
  );
}

export default Home;
