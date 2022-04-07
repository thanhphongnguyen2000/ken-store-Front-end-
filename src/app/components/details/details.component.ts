import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from "rxjs/operators";
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id!: number;
  product: any;

  @ViewChild('soluong') soluongInput:any;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(map((param:ParamMap)=>{
      //@ts-ignore
      return param.params.masp})
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
      })
    });

  }

  Increase(){
    let value = parseInt(this.soluongInput.nativeElement.value);
    if(this.product.soluong >= 1){
      value++;
      if(value > this.product.soluong){
        value=this.product.soluong;
      }
    }else{
      return;
    }
    this.soluongInput.nativeElement.value = value.toString();
  }
  Decrease(){
    let value = parseInt(this.soluongInput.nativeElement.value);
    if(this.product.soluong > 0){
      value--;
      if(value <= 1){
        value = 1;
      }
    }else{
      return;
    }
    this.soluongInput.nativeElement.value = value.toString();
  }

  addToCart(masp: number){
    let value = parseInt(this.soluongInput.nativeElement.value);
    this.cartService.AddProductToCart(masp, value);
  }
}
