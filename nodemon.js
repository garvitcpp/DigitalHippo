{
    "watch": [
      "server.ts",
      "collections/**/*.ts",
      "trpc/index.ts"
    ],
    "exec": "ts-node --project tsconfig.server.json src/server.ts -- -I",
    "ext": "js ts",
    "stdin": false
  }
  