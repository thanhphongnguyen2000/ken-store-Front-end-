import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productOT: ProductModelServer[] = [];
  constructor(private productService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllTypeOfProducts().subscribe((prods: serverResponse ) => {
      this.productOT = prods.products;
      console.log(this.productOT);
    });
  }
  selectProductOfType(tenlsp: String) {
    this.router.navigate(['/products/loaisp', tenlsp]).then();
  }

}
