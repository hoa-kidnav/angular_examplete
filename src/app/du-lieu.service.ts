import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISanpham } from './isanpham';
import { ILoaisp } from './iloaisp';
@Injectable({
  providedIn: 'root'
})
export class DuLieuService {

  constructor( private h:HttpClient ) { }
  laySP(id:number=0){
    return this.h.get(`http://localhost:3000/sanpham/${id}`);
  }
  getLaptopBanChay(){
    var url='http://localhost:3000/sanpham?idLoai=2&_sort=solanxem&_order=desc&_limit=6';
    return this.h.get<ISanpham[]>( url );
  }
  getDienThoaiMoi(){
    var url='http://localhost:3000/sanpham?idLoai=1&_sort=ngay&order=desc&_limit=6';
    return this.h.get<ISanpham[]>( url );
  }
  getListLoaiSP(){
    var url="http://localhost:3000/loaisp"
    return this.h.get<ILoaisp[]>(url)
  }
  //du-lieu.service.ts
  getSanPhamTheoLoai(idLoai:Number=0, pageSize:number=1, pageNum:number=1) {
    var url = `http://localhost:3000/sanpham?idLoai=${idLoai}&_sort=ngay&order=desc`;
    url+= `&_page=${pageNum}&_limit=${pageSize}`;
    return this.h.get<any>(url, {observe: 'response'});
  }
getTenLoaiSanPham(idLoai:Number=0){
  var url = `http://localhost:3000/loaisp?id=${idLoai}`;
  return this.h.get<ILoaisp[]>(url, {observe: 'response'});
}
getSanPhamChiTiet(idSP:Number=0){
  var url = `http://localhost:3000/sanpham?id=${idSP}`;
  return this.h.get<ISanpham[]>(url);
}
getSanPhamLienQuan(idLoai:number=0, soSP:number=0){
  var url = `http://localhost:3000/sanpham?idLoai=${idLoai}&_limit=${soSP}`;
  return this.h.get<ISanpham[]>(url);
}
}
