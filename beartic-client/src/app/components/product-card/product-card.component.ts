import { Component, OnInit } from '@angular/core';
import { productServices } from '../../services/productServices';
import { product } from '../../Models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  constructor(private productService: productServices) { }

  public products!: product[];
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(
      productsList => {
        this.products = productsList;
        console.log(this.products);
      },
      error => {
        console.log(error);
      }
    );
  }
}
