import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-san-pham-chi-tiet',
  templateUrl: './san-pham-chi-tiet.component.html',
  styleUrls: ['./san-pham-chi-tiet.component.css']
})
export class SanPhamChiTietComponent {
  constructor(
    private d:DuLieuService,
    private route:ActivatedRoute,
    private cartservice:CartService
  ) { }
  spChiTiet:ISanpham={
    id:0, tensp:"", giasp:0,
    solanxem:0, hinh:"",
    mota:"", hot:0, ngay:"", idLoai:0
  };
  idSP:number=0;
  idLoai:number=0;
  tenLoai:string="";
  listspchitiet:ISanpham[]=[]
  ngOnInit(): void {
    this.idSP = Number(this.route.snapshot.params['id']);
    this.d.getSanPhamChiTiet(this.idSP).subscribe (
      res => {
        this.spChiTiet  = res[0];
        this.idLoai = this.spChiTiet.idLoai;
        this.d.getTenLoaiSanPham(this.idLoai).subscribe(
          (d:any) => this.tenLoai = d[0]
        );
      }//res
    );
  }
  addToCart(product:any){
    this.cartservice.addToCart(product)
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng')

  }
}
