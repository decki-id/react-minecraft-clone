module.exports = {
  apps: [
    {
      name: "minecraft",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./build",
        PM2_SERVE_PORT: 3000,
      },
    },
  ],
}