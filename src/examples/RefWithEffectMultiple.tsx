import * as React from "react";
import { nanoid } from "nanoid";

type ITEM = { id: string };

const createItem = () => ({ id: nanoid() });

function RefWithEffectMultiple() {
  const [list, setList] = React.useState<ITEM[]>([{ id: nanoid() }]);
  const add = () => setList((prev) => prev.concat(createItem()));
  const remove = () =>
    list.length > 1 && setList((prev) => prev.slice(0, prev.length - 1));

  const lastElementRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    lastElementRef.current?.focus();
    return () => {
      console.log(lastElementRef.current);
    };
  }, [list]);

  return (
    <div className="p-4">
      <button
        className="p-4 mt-4 rounded border-2 border-orange-600 mr-4"
        type="button"
        onClick={add}
      >
        Add Item
      </button>
      <button
        className="p-4 mt-4 rounded border-2 border-orange-600 mr-4"
        type="button"
        onClick={remove}
      >
        Remove Item
      </button>

      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul className="mt-8 flex flex-wrap gap-4" role="list">
        {list.map((item, index, { length }) => (
          <li key={item.id + String(index)} role="presentation">
            <button
              ref={index + 1 === length ? lastElementRef : null}
              className="p-4 bg-blue-400 text-gray-50 rounded focus:outline-8 focus:outline-rose-700 focus:bg-amber-900"
            >
              {item.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RefWithEffectMultiple;
