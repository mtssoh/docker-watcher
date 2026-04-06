import type { DockerContainer } from "../interfaces/DockerContainer";

export function container_mapper(docker_res: any): DockerContainer {
  const container: DockerContainer = {
    id: docker_res.Id,
    names: docker_res.Names,
    image: docker_res.Image,
    created: docker_res.Created,
    state: docker_res.State,
    status: docker_res.Status,
    networks: Object.keys(docker_res.NetworkSettings.Networks),
  };

  return container;
}
