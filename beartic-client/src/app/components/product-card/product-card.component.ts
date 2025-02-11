import { Component, OnInit } from '@angular/core';
import { productServices } from '../../services/productServices';
import { product } from '../../Models/product/product';
import { CommonModule } from '@angular/common';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';

registerLocaleData(localePt);

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
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
      },
      error => {
        console.log(error);
      }
    );
  }

  addToCart(productId: string): void {
    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]'); // Recupera o carrinho ou cria um array vazio
    if (!cart.includes(productId)) {
      cart.push(productId);  // Adiciona o ID do produto
      sessionStorage.setItem('cart', JSON.stringify(cart)); // Salva o carrinho na sessionStorage
    }
  }
}