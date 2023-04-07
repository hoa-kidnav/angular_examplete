import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-san-pham-theo-loai',
  templateUrl: './san-pham-theo-loai.component.html',
  styleUrls: ['./san-pham-theo-loai.component.css']
})
export class SanPhamTheoLoaiComponent {
  listSanPham: ISanpham[] = [];
  tenLoai: string = "";
  idLoai: number = 0;

  pageNum: number = 1;
  pageSize: number = 3;
  total: number = 0;

  constructor(
    private d: DuLieuService,
    private route: ActivatedRoute,
    private cartservice: CartService
  ) { }
  ngOnInit(): void {
    this.idLoai = Number(this.route.snapshot.params['id']);

    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe(
      res => {
        this.listSanPham = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      }
    );
  }
  addToCart(product: any) {
    this.cartservice.addToCart(product)
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng')

  }
  chuyenDenTrang(p: number) {
    this.pageNum = p;
    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe(
      res => {
        this.listSanPham = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      }
    );
  }

}

