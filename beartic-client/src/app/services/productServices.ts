import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "../Models/product/product";
import { productsResponse } from "../Models/product/productsResponse";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root' // Isso já deve permitir a injeção automática
  }) 
export class productServices{

    constructor(private http: HttpClient) { }
    protected BaseURL: string = "https://localhost:7161/v2";

    getProducts() : Observable<product[]> {

        return this.http.get<productsResponse>(`${this.BaseURL}/products`)
            .pipe(
                map(response => response.data || [])
            );
    }
}