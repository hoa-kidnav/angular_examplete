import { SanPhamChiTietComponent } from './san-pham-chi-tiet/san-pham-chi-tiet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CartComponent } from './cart/cart.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { SanPhamMoiComponent } from './san-pham-moi/san-pham-moi.component';
const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'sanpham', component:SanPhamMoiComponent},
  { path:'thanhtoan', component:ThanhToanComponent},
  { path:'cart', component:CartComponent},
  { path:'sp/:id', component:SanPhamChiTietComponent},
  { path:'loai/:id', component:SanPhamTheoLoaiComponent},
  { path:'sanpham', component:DanhsachsanphamComponent},
  { path:'sanpham/:id', component:ChitietsanphamComponent},
  { path:'lienhe' , component:LienheComponent},
  { path:'dangnhap', component:DangnhapComponent},
  { path:'dangky', component:DangkyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
