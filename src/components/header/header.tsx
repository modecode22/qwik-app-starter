import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <header
      class={
        "bg-white shadow-sm h-14 flex justify-center items-center px-5 gap-5 text-slate-50"
      }
    >
      <Link
        href="/"
        class={
          "shadow-sm active:shadow-sm duration-100 select-none p-2 cursor-pointer bg-rose-600 rounded-lg hover:bg-rose-600/80 active:bg-rose-600/70 "
        }
      >
        Main Page
      </Link>
      <Link
        href="/app"
        class={
          "shadow-sm active:shadow-sm duration-100 select-none p-2 cursor-pointer bg-rose-600 rounded-lg hover:bg-rose-600/80 active:bg-rose-600/70 "
        }
      >
        The App
      </Link>
    </header>
  );
});
