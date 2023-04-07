import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-san-pham-moi',
  templateUrl: './san-pham-moi.component.html',
  styleUrls: ['./san-pham-moi.component.css']
})
export class SanPhamMoiComponent {
  constructor( private d:DuLieuService,private cartservice: CartService ) { }
  listSanPham:ISanpham[] = [];
  addToCart(product:any){
    this.cartservice.addToCart(product)
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng')

  }
  ngOnInit(): void {
    this.d.getDienThoaiMoi().subscribe( d => this.listSanPham = d);
  }

}
