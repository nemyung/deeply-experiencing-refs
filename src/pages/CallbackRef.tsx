import * as React from "react";
import { RefWithEffect, RefWithEffectMultiple } from "../examples";

function CallbackRef() {
  const [openExample1, setOpenExample1] = React.useState(false);
  const toggle1 = () => setOpenExample1((prev) => !prev);

  const [openExample2, setOpenExample2] = React.useState(false);
  const toggle2 = () => setOpenExample2((prev) => !prev);

  return (
    <div>
      <h1>CallbackRef</h1>
      <h2>
        React will <strong>invoke function</strong> which is attached to{" "}
        <code>ref</code> props whenever the <code>ref</code> gets attached to
        different node.
      </h2>
      <h3>
        The function receives the React component instance or HTML DOM element
        as its argument, which can be stored and accessed elsewhere.
      </h3>
      <h3>
        React will call the <code>ref</code> callback with the DOM element when
        the component <strong>mounts</strong> and call it with <code>null</code>{" "}
        when it <strong>unmounts</strong>
      </h3>
      <button
        className="w-max p-4 border-2 mt-8 mb-6"
        onClick={toggle1}
        type="button"
      >
        Open Component which uses ref with effect - Single Component
      </button>
      {openExample1 && <RefWithEffect />}
      <button
        className="w-max p-4 border-2 mt-8 mb-6"
        onClick={toggle2}
        type="button"
      >
        Open Component which uses ref with effect - Multiple Component
      </button>
      {openExample2 && <RefWithEffectMultiple />}
    </div>
  );
}

export default CallbackRef;
