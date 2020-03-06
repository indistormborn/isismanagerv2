import { Router, Express } from 'express';
import { Server } from 'net';
import { HTTPError } from 'http-errors';
import * as express from "express";
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';

import {Config} from "../interfaces/Config";


export class HttpServer {
  private server: Express;
  private router: Router;
  private http: Server;
  private https: Server;

  constructor() {

  }

  public async init(config: Config) : Promise <void> {
    try {
      this.server = express();
      this.router = Router();

      this.server.use(bodyParser.json());
      this.server.use(cookieParser());
      this.server.use(cors());
      this.server.set('view engine', 'ejs');
      this.server.use(express.static(path.join(__dirname, 'public')));

      if (config.server.https.enabled) {
        let options = {
          key: config.server.https.certificate.key
        };
        this.https = https.createServer(options, this.server).listen(config.server.https.port)

      }
      if (config.server.http.enabled) {
        this.http = this.server.listen(config.server.http.port)
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  private async initRoutes(router: Router) : Promise <void> {
    let file_names = fs.readdirSync(path.resolve('routes'));
    for (let name of file_names) {
      let model_routes = require(path.resolve(name))

    }
  }
}
