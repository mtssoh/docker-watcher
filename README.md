# docker-watcher

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.3. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


WIP src/docker/parse_config.ts
De alguna manera parsear .yaml correcto

WIP src/docker/fetch_docker.ts
Implementar fetch https con certificados

WIP index.ts
Implementar endpoints personalizados para todo eso (Docker API)
- /info
- /version
- /containers/json
- /containers/{id}/stats?stream=false
- /containers/{id}/top
- /system/df
- /events
