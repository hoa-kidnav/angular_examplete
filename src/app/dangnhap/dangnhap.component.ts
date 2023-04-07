import { Component } from '@angular/core';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent {
  tensach ="Nói với tuổi 20"; //khai báo biến string
  giasach = 25000;   //khai báo biến số
  sinhvien = {       //khai báo biến kiểu object
    hoten:'Mai Anh Tới',
    ngaysinh:'2004-3-24',
  }
  tinhTuoi(){ //định nghĩa 1 hàm
   var ns:Date = new Date(this.sinhvien.ngaysinh);
   return new Date().getFullYear() - ns.getFullYear();
  }
}
