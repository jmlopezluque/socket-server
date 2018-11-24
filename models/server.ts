
// Instalamos la dependencia de desarrollo de typescript para express
// npm install @types/express --save-dev

import express from 'express';
import { SERVER_PORT } from './../config/environment';

export default class Server {

    public app: express.Application;
    public port: Number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT
    }

    start(callback: Function) {
        this.app.listen(this.port, callback);
    }

}