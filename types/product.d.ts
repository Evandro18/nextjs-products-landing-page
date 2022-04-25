export type SalePrice = {
  type: string;
  value: number;
}

export type Product = {
  id: number,
  name: string,
  imageURL: string,
  listPrice: Array<SalePrice>,
  salePrice: number
}

export type ProductsResult = {
  products: Array<Product>
}