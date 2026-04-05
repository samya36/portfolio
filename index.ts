import index from "./index.html";

Bun.serve({
  port: 4000,
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
});
