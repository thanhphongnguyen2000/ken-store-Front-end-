export interface ProductModelServer {
  masp: Number;
  tensanpham: String;
  dongia: Number;
  soluong: Number;
  hinhanh: String;
  mota: String;
  maloaisp: Number;
  tenloaisp: String;
  hinhlsp: String;
}

export interface serverResponse  {
  count: number;
  products: ProductModelServer[];
};
