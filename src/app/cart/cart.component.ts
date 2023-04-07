import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(
private cartservice:CartService
){}
items =this.cartservice.getItems()
tongtien(){
  let tt:number =0;
  this.items.forEach(item=>tt+=item.soluong*item.giasp)
  return tt
}
tongsoluong(){
  let tsl:number=0
  this.items.forEach(item=>tsl+=item.soluong)
  console.log(tsl);
  return tsl
}

// xoasanpham(idspgiohang:number){
// let loc=this.items.filter(item=>item.idsp==idspgiohang)
// return loc
// }
}
