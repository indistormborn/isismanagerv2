export interface Config {
  version: string;
  db: {
    url: string,
    port: number,
    user: string,
    password: string
  },
  server: {
    http: {
      enabled: boolean;
      port: number;
    },
    https: {
      enabled: boolean;
      port: number;
      certificate: {
        ca: string;
        key: string;
        certificate: string;
        passphrase: string
      }
    }
  },
  frontend: object
}