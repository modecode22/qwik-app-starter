import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {


  return <main class={""}>The App Page 😃</main>;
});

export const head: DocumentHead = {
  title: 'Qwik app main',
};
