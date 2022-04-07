import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  productsAll: ProductModelServer[]=[];
  
  constructor(private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthService) { }

    ngOnInit(): void {
      this.getData()

      // @ts-ignore
      this.productService.getAllInPageProducts().subscribe((prods: serverResponse ) => {
        this.productsAll = prods.products;
        console.log(this.productsAll);
      });
    }

  //Pagination
  p:any;
  data:any=[];
  getData() {
  this.authService.getData().subscribe(
    (data) => {
      this.data = data;

    }
  );
}

    selectProduct(masp: Number) {
      this.router.navigate(['/details', masp]).then();
    }

    AddProduct(masp: Number) {
      this.cartService.AddProductToCart(masp);
    }

  }
