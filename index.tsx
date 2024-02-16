import { Hono } from 'hono';
import Home from "./pages/home/page";

const app = new Hono();

app.get("/", (c) => {
    return c.html(<Home/>);
  })

app.get("/vader", (c) => {
    return c.json({name: 'vader'});
  })

Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000,
})