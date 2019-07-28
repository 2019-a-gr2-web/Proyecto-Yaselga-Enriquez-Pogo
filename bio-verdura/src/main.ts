import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');
import * as express from 'express';
import {join} from "path";
import {NestExpressApplication} from "@nestjs/platform-express";
const session = require('express-session');


const FileStore = require('session-file-store')(session); // Nodejs

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;

  app.use(
      session({
        name:'server-session-id',
        secret:'Ya valio barriga señor ....',
        resave:false,
        cookie:{
            secure:true,
            maxAge: 60000
        },
        store: new FileStore()
      }));

  app.use(cookieParser('Vamos a tomar'));
  app.use(express.static('public'));
  //@ts-ignore
  app.set('view engine','ejs');
  //app.setBaseViewsDir(join(__dirname,'..','views'));
  await app.listen(3000);
}
bootstrap();
