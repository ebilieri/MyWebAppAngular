import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListaProduto } from './loja/listaProduto.component';
import { DataServices } from './servicos/dataServices';
import { Carrinho } from './loja/carrinho/carrinho.component';
import { RouterModule } from "@angular/router";
import { Loja } from "./loja/loja.component";
import { EfetivarCompra } from "./loja/efetivarCompra/efetivarCompra.component";
var router = [
    { path: "", component: Loja },
    { path: "efetivarCompra", component: EfetivarCompra }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ListaProduto,
                Carrinho,
                Loja,
                EfetivarCompra
            ],
            imports: [
                BrowserModule,
                HttpModule,
                RouterModule.forRoot(router, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [DataServices],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map