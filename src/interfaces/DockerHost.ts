export interface DockerHost {
  name: string;
  labels?: Record<string, string>;
  conn:
    | { type: "unix"; path: string }
    | { type: "http"; url: string }
    | { type: "https"; url: string; cert: string; key: string; ca: string };
}
