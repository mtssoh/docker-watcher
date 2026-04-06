import type { DockerHost } from "../interfaces/DockerHost";

function return_fetch_docker(res: Response): Response {
  if (!res.ok)
    throw new Error(`Docker API error: ${res.status} ${res.statusText}`);
  else return res;
}

export async function fetch_docker(
  host: DockerHost,
  docker_endpoint: string,
): Promise<Response> {
  switch (host.conn.type) {
    case "unix":
      return await fetch(`http://localhost${docker_endpoint}`, {
        unix: host.conn.path,
      }).then((res) => return_fetch_docker(res));

    case "http":
      return await fetch(`http://${host.conn.url}${docker_endpoint}`).then(
        (res) => return_fetch_docker(res),
      );

    case "https":
      throw new Error("HTTPS not defined yet");
  }
}
