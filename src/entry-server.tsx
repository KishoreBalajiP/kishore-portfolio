// Used only at build time: renders the page to HTML so search engines see the full content.
import { renderToString } from 'react-dom/server';
import App from './App';

export function render() {
  return renderToString(<App />);
}

// Content for llms.txt (build-time only).
// eslint-disable-next-line react-refresh/only-export-components
export * as data from './data';
