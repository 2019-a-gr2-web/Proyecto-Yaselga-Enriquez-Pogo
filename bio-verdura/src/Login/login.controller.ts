import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {LoginService} from "./login.service";

@Controller('bioverdura/login')
export class LoginController {
    constructor(private readonly _LoginService:LoginService){

    }


}


