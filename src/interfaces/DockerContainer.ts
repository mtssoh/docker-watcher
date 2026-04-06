export interface DockerContainer {
  id: string;
  names: string[];
  image: string;
  created: number;
  state: string;
  status: string;
  networks: string[];
}
