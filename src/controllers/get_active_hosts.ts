import type { ConfigHosts } from "../interfaces/ConfigHosts";
import { fetch_docker } from "../docker/fetch_docker";
import type { HostSockStatus } from "../interfaces/HostSockStatus";

export async function get_active_hosts(
  config: ConfigHosts,
): Promise<HostSockStatus[]> {
  const results = await Promise.allSettled(
    config.hosts.map((host) => fetch_docker(host, "/_ping")),
  );

  return results.map((result, i) => ({
    host: config.hosts[i]!,
    online: result.status === "fulfilled" && result.value.ok,
  }));
}
