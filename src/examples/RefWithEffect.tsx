import * as React from "react";

function RefWithEffect() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const elRef = React.useRef<HTMLDivElement>(null);
  const idRef = React.useRef(1);

  React.useEffect(() => {
    idRef.current += 1;
    elRef.current?.setAttribute("id", String(idRef.current));

    return () => {
      console.log(elRef.current);
    };
  }, []);

  return (
    <div id={String(idRef.current)} ref={elRef} className="w-4/5 mx-auto p-2">
      <p className="leading-loose mb-8">
        The ref value 'elRef.current' will likely have changed by the time this
        effect cleanup function runs. If this ref points to a node rendered by
        React, copy 'elRef.current' to a variable inside the effect, and use
        that variable in the cleanup function.(react-hooks/exhaustive-dep
      </p>
      <button
        className="w-max p-4 border-2 rounded"
        onClick={toggle}
        type="button"
      >
        {open ? "close" : "open"} paragraph
      </button>
      {open && (
        <div className="mt-4">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc
            justo, accumsan nec accumsan ornare, fermentum eget tellus.
            Suspendisse vel quam neque. Phasellus rutrum sodales velit, nec
            hendrerit lacus fermentum sed. Aliquam ut faucibus erat, at cursus
            magna. Pellentesque in ipsum at diam malesuada cursus. Nulla quam
            orci, tincidunt quis est ut, auctor scelerisque augue. Mauris ornare
            consequat pellentesque. Proin enim quam, consectetur quis placerat
            tempor, tincidunt facilisis risus. Ut fermentum, dui lacinia
            condimentum fringilla, mi eros eleifend dui, eu vestibulum quam
            neque in velit. Ut facilisis ligula risus, ac bibendum augue auctor
            vel. Nulla facilisi. Proin pellentesque semper facilisis. Sed sit
            amet malesuada ante. Mauris sit amet sapien diam. Sed laoreet risus
            sit amet velit dignissim consequat. Sed rhoncus quam sollicitudin
            arcu laoreet, sit amet bibendum erat vulputate. Sed euismod purus
            nec dolor faucibus, sed cursus dui viverra. Ut eget mauris sit amet
            ipsum laoreet consectetur ut eget augue. Praesent viverra egestas
            turpis, et ultrices augue volutpat nec. In tincidunt vestibulum
            odio, eu varius lectus pretium eget. In hac habitasse platea
            dictumst. Nullam lobortis nulla quis placerat dapibus. Phasellus eu
            mollis orci, non semper sapien. Duis tincidunt, ex in auctor tempus,
            neque sem congue lorem, et hendrerit ipsum turpis vel metus. Mauris
            ultricies, diam ac euismod sollicitudin, sem mauris rhoncus turpis,
            sed consectetur erat risus ut sapien. Morbi ornare nibh sem,
            sollicitudin pretium orci aliquet sed. Nulla facilisi. Morbi
            ultrices ligula non molestie tincidunt. Sed id vestibulum lectus.
            Suspendisse et vestibulum nulla, eu varius nisl. Vestibulum dapibus
            pharetra metus in pulvinar. Vestibulum mollis orci eu convallis
            posuere. Etiam in nisl aliquam, porta arcu at, ultricies augue.
            Proin nec lacinia nibh. Nunc id sagittis metus. Donec at rutrum
            magna. Praesent id gravida nisl, elementum venenatis risus. Sed
            semper massa ut eros vulputate, non finibus felis rhoncus. Nunc
            sollicitudin auctor sagittis. Nulla sapien ligula, eleifend id
            varius eget, bibendum eu ligula. Integer vel gravida elit.
            Vestibulum dignissim vestibulum viverra. Quisque blandit dapibus
            erat id porta. Nunc odio enim, feugiat ultrices ex a, faucibus
            pharetra turpis. Mauris a lacinia risus, id consequat ipsum. Nam ac
            blandit diam, a lacinia diam. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Etiam et enim lacinia, suscipit lacus a,
            rhoncus velit. Vestibulum aliquam sapien est, eu euismod lectus
            venenatis at.
          </p>
        </div>
      )}
    </div>
  );
}

export default RefWithEffect;
