import * as React from "react";

function DOMReference() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    containerRef.current?.classList.remove("bg-red-100");
    containerRef.current?.classList.add("bg-gray-100");
  }, []);

  const handleClick: React.MouseEventHandler = () => {
    childRef.current?.classList.remove("bg-blue-400");
    childRef.current?.classList.add("bg-amber-300");
  };

  return (
    <>
      <div
        ref={containerRef}
        className="w-full transition-colors delay-1000 h-full max-w-[300px] min-h-[300px] bg-red-100 p-4"
      >
        <h3 className="text-gray-700 font-serif font-bold">
          This is container
        </h3>
        <div
          ref={childRef}
          className="mt-4 w-full h-full p-4 max-w-[200px] min-h-[200px] bg-blue-400"
        >
          <h4 className="text-gray-100">this is child</h4>
        </div>
      </div>
      <button onClick={handleClick} className="mt-6 p-2 border-2">
        Change child's background
      </button>
    </>
  );
}

export default DOMReference;
