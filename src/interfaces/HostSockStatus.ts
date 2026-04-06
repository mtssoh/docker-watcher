import type { DockerHost } from "./DockerHost";
export interface HostSockStatus {
  host: DockerHost;
  online: boolean;
}
