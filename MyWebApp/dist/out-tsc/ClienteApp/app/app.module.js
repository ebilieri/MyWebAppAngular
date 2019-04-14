import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './loja/listaProduto.component';
import { DataServices } from './servicos/dataServices';
import { Carrinho } from './loja/carrinho/carrinho.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ListaProduto,
                Carrinho
            ],
            imports: [
                BrowserModule,
                HttpModule,
                RouterModule.forRoot([], { useHash: true, enableTracing: true })
            ],
            providers: [DataServices],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map