import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { DangkyComponent } from './dangky/dangky.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { SanPhamBanChayComponent } from './san-pham-ban-chay/san-pham-ban-chay.component';
import { CacLoaiComponent } from './cac-loai/cac-loai.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { SanPhamChiTietComponent } from './san-pham-chi-tiet/san-pham-chi-tiet.component';
import { SanPhamLienQuanComponent } from './san-pham-lien-quan/san-pham-lien-quan.component';
import { CartComponent } from './cart/cart.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { SanPhamMoiComponent } from './san-pham-moi/san-pham-moi.component';
@NgModule({
  declarations: [
    AppComponent,
    DanhsachsanphamComponent,
    ChitietsanphamComponent,
    DangkyComponent,
    HomeComponent,
    LienheComponent,
    NotfoundComponent,
    DangnhapComponent,
    SanPhamBanChayComponent,
    CacLoaiComponent,
    SanPhamTheoLoaiComponent,
    SanPhamChiTietComponent,
    SanPhamLienQuanComponent,
    CartComponent,
    ThanhToanComponent,
    SanPhamMoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
