import { Router } from 'express';
import connect from "./connect";
import { ApiBootstrap } from '@andes/api-tool/build/bootstrap';
import { apiOptionsMiddleware } from '@andes/api-tool';

const db: string = 'mongodb://localhost:27017/prueba'
connect(db);

const info = {
    name: 'ResourceBase',
    version: '1.0.0'
};
const port = 3000;
const host = 'localhost';
const key = ''

export const application = new ApiBootstrap(info, { port, host, key });
application.add(apiOptionsMiddleware as Router);