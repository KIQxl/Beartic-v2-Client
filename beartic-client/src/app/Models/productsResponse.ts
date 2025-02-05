import { product } from "./product";

export class productsResponse {
    status!: number;
    message!: string;
    errors!: string[];
    data!: product[];
}