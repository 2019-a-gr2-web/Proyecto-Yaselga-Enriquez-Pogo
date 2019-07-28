import {Controller, Get, Response, Req, Post, Body} from '@nestjs/common';
import {ClienteService} from './Cliente/cliente.service';
import {DetalleService} from './Detalle/detalle.service';
import {DetallePedService} from './DetallePed/detallePed.service';
import {FacturaService} from './Factura/factura.service';
import {LoginService} from './Login/login.service';
import {PedidoService} from './Pedido/pedido.service';
import {ProductoService} from './Producto/producto.service';
import {ProveedorService} from './Proveedor/proveedor.service';
import {RepartidorService} from './Repartidor/repartidor.service';

@Controller('/bioverdura')
export class AppController {
  constructor(  private readonly _clienteService: ClienteService,
                private readonly _detalleService: DetalleService,
                private readonly _detallePedService: DetallePedService,
                private readonly _facturaService: FacturaService,
                private readonly _loginService: LoginService,
                private readonly _pedidoService: PedidoService,
                private readonly _productoService: ProductoService,
                private readonly _proveedorService: ProveedorService,
                private readonly _repartidorService: RepartidorService) {}

  @Get('index')
  index(@Response() res) {
    return res.render('pages/index');
  }

  @Get('login')
  login(@Response() res) {
    return res.render('login/login');
  }

  @Post('login')
  login_post(@Body('usuario')usuario: string, @Response() res, @Req() req) {
    res.cookie('usuario', usuario, {signed: true}).redirect('/bioverdura/home');
  }

  @Get('home')
  menu(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('pages/home', {
        usuario: req.signedCookies.usuario,
      });
    }
  }

  @Get('signup')
  signup(@Response() res) {
    return res.render('login/signup');
  }

  @Post('signup')
  signup_post(@Response() res) {
    return res.render('login/signup');
  }

  @Get('cliente')
  cliente(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('cliente/index');
    }
    return res.render('login/signup');
  }

  @Get('factura')
  factura(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('factura/index');
    }
    return res.render('login/signup');
  }

  @Get('pedido')
  pedido(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('pedido/index');
    }
    return res.render('login/signup');
  }

  @Get('producto')
  producto(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('producto/index');
    }
    return res.render('login/signup');
  }

  @Get('proveedor')
  proveedor(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('proveedor/index');
    }
    return res.render('login/signup');
  }

  @Get('repartidor')
  repartidor(@Response() res, @Req() req) {
    if (this._loginService.validarCookies(req, res)) {
      res.render('repartidor/index');
    }
    return res.render('login/signup');
  }
}
