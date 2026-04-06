import { container_mapper } from "../docker/container_mapper";
import { fetch_docker } from "../docker/fetch_docker";
import { check_host } from "./get_active_hosts";
import type { ConfigHosts } from "../interfaces/ConfigHosts";
import type { ContainersResponse } from "../interfaces/ContainersResponse";

export async function get_containers(
  name: string,
  config: ConfigHosts,
): Promise<ContainersResponse> {
  const docker_host = config.hosts.find((host) => host.name === name);
  if (!docker_host) {
    console.log("Fallo en !docker_host (no encontro nada al parecer)");
    return { online: false, containers: [] };
  }

  try {
    const res = await fetch_docker(docker_host, "/containers/json");

    const res_json = (await res.json()) as Array<any>;
    return {
      online: true,
      containers: res_json.map((c) => container_mapper(c)),
    };
  } catch (err) {
    console.error("fallo en try/catch", err);
    return { online: false, containers: [] };
  }
}
