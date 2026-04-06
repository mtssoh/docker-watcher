import type { ConfigHosts } from "./interfaces/ConfigHosts";
import { get_active_hosts } from "./controllers/get_active_hosts";
import { get_containers } from "./controllers/get_containers";
const config = await Bun.file("config-example.json").json();

/*
  ENDPOINTS:
  /hosts
  /host/:name/info
  /host/:name/containers
  /host/:name/containers/:id/metrics
*/
const server = Bun.serve({
  routes: {
    "/ping": new Response("pong"),
  },
  async fetch(req) {
    const url_parts = new URL(req.url).pathname
      .split("/")
      .filter((part) => part !== "");

    /*
      ENDPOINT: /host
    */
    if (url_parts[0] === "host" && url_parts.length == 1) {
      return Response.json(await get_active_hosts(config));
    }

    /*
      ENDPOINT: /host/:name/info
    */

    if (
      url_parts[0] === "host" &&
      url_parts[2] === "info" &&
      url_parts.length == 3
    ) {
    }

    /*
      ENDPOINT: /host/:name/containers
    */

    if (
      url_parts[0] === "host" &&
      url_parts[2] === "containers" &&
      url_parts.length == 3
    ) {
      return Response.json(await get_containers(url_parts[1]!, config));
    }

    /*
      ENDPOINT: /host/:name/containers/:id/metris
    */

    if (
      url_parts[0] === "host" &&
      url_parts[2] === "containers" &&
      url_parts[4] === "metrics" &&
      url_parts.length == 3
    ) {
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running on ${server.url}`);
