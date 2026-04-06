import type { DockerContainer } from "./DockerContainer";

export interface ContainersResponse {
  online: boolean;
  containers: DockerContainer[];
}
