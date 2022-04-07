import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {

  productsList: ProductModelServer[]=[];


  constructor(private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute,
              private cartService: CartService) {}

  ngOnInit(): void {

    let tenloaisp = this.route.snapshot.paramMap.get('tenloaisp');
    // @ts-ignore
    this.productService.getProductsFromType(tenloaisp).subscribe((prods: serverResponse ) => {
      this.productsList = prods.products;
      console.log(this.productsList);
    });
  }

  selectProduct(masp: Number) {
    this.router.navigate(['/details', masp]).then();
  }

  AddProduct(masp: Number) {
    this.cartService.AddProductToCart(masp);
  }

}
