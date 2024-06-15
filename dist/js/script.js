/* src/input.css */
@tailwind base;
@tailwind npm run components;
@tailwind utilities;

.menu-hidden {
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}
.menu-visible {
  translateX(0);
  transition: transform 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .menu-hidden, .menu-visible {
    transform: none;
    transition: none;
  }
}

import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

const unsplash = createApi({
  accessKey: 'MY_ACCESS_KEY',
  fetch: nodeFetch,
});