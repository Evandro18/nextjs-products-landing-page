// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, ProductsResult } from '../../types/product'

export const products: Array<Product> = [
   {
      "id":1,
      "name":"Smartphone Xiaomi Redmi Note 10S 6GB RAM 128GB Android",
      "imageURL":"-14338370.jpg",
      "salePrice":1314.42,
      "listPrice":[
         {
            "type":"cash",
            "value":1314.42
         }
      ]
   },
   {
      "id":2,
      "name":"Smartphone Apple iPhone 11 64GB iOS Câmera Dupla",
      "imageURL":"929874931.jpg",
      "salePrice":3599,
      "listPrice":[
         {
            "type":"cash",
            "value":3599
         }
      ]
   },
   {
      "id":3,
      "name":"Smartphone Samsung Galaxy A32 SM-A325M 128GB Android",
      "imageURL":"1456021832.jpg",
      "salePrice":1349,
      "listPrice":[
         {
            "type":"cash",
            "value":1349
         }
      ]
   },
   {
      "id":4,
      "name":"Smartphone Samsung Galaxy S20 FE SM-G780F 128GB Android",
      "imageURL":"1251501705.jpg",
      "salePrice":2109.1,
      "listPrice":[
         {
            "type":"cash",
            "value":2109.1
         }
      ]
   },
   {
      "id":5,
      "name":"Smartphone Apple iPhone 11 128GB iOS Câmera Dupla",
      "imageURL":"929873676.jpg",
      "salePrice":4034.05,
      "listPrice":[
         {
            "type":"cash",
            "value":4034.05
         }
      ]
   },
   {
      "id":6,
      "name":"Smartphone Samsung Galaxy M52 5G 128GB Android Câmera Tripla",
      "imageURL":"-38403078.jpg",
      "salePrice":1649,
      "listPrice":[
         {
            "type":"cash",
            "value":1649
         }
      ]
   },
   {
      "id":7,
      "name":"Smartphone Samsung Galaxy A12 SM-A125MZ 64GB Android",
      "imageURL":"1971586738.jpg",
      "salePrice":947.67,
      "listPrice":[
         {
            "type":"cash",
            "value":947.67
         }
      ]
   },
   {
      "id":8,
      "name":"Smartphone Xiaomi Redmi 9A 32GB Android 13.0 MP",
      "imageURL":"1152378623.jpg",
      "salePrice":689.9,
      "listPrice":[
         {
            "type":"cash",
            "value":689.9
         }
      ]
   },
   {
      "id":9,
      "name":"Smartphone Apple iPhone 12 128GB iOS Câmera Dupla",
      "imageURL":"-522504692.jpg",
      "salePrice":4701,
      "listPrice":[
         {
            "type":"cash",
            "value":4701
         }
      ]
   },
   {
      "id":10,
      "name":"Smartphone Samsung Galaxy S21 5G SM-G991B 128GB Android",
      "imageURL":"-13675178.jpg",
      "salePrice":2949,
      "listPrice":[
         {
            "type":"cash",
            "value":2949
         }
      ]
   },
   {
      "id":11,
      "name":"Smartphone Xiaomi Redmi Note 11 128GB Android Câmera Quádrupla",
      "imageURL":"-463951000.jpg",
      "salePrice":1250,
      "listPrice":[
         {
            "type":"cash",
            "value":1250
         }
      ]
   },
   {
      "id":12,
      "name":"Smartphone Apple iPhone 12 64GB iOS Câmera Dupla",
      "imageURL":"-522515954.jpg",
      "salePrice":4199,
      "listPrice":[
         {
            "type":"cash",
            "value":4199
         }
      ]
   },
   {
      "id":13,
      "name":"Smartphone Apple iPhone 13 128GB iOS Câmera Dupla",
      "imageURL":"-555380900.jpg",
      "salePrice":5099,
      "listPrice":[
         {
            "type":"cash",
            "value":5099
         }
      ]
   },
   {
      "id":14,
      "name":"Smartphone Samsung Galaxy A22 4GB RAM 128GB Android Câmera Quádrupla Leitor Biométrico na Lateral",
      "imageURL":"-573948178.jpg",
      "salePrice":1316.28,
      "listPrice":[
         {
            "type":"cash",
            "value":1316.28
         }
      ]
   },
   {
      "id":15,
      "name":"Smartphone Samsung Galaxy A52s 5G SM-A528BZ 128GB Android",
      "imageURL":"-14938369.jpg",
      "salePrice":1800.28,
      "listPrice":[
         {
            "type":"cash",
            "value":1800.28
         }
      ]
   },
   {
      "id":16,
      "name":"Smartphone Samsung Galaxy S20 FE Snapdragon SM-G780G 128GB Android",
      "imageURL":"1927785230.jpg",
      "salePrice":2199,
      "listPrice":[
         {
            "type":"cash",
            "value":2199
         }
      ]
   },
   {
      "id":17,
      "name":"Smartphone Xiaomi Redmi Note 10S 8GB RAM 128GB Android",
      "imageURL":"-14335661.jpg",
      "salePrice":1497.98,
      "listPrice":[
         {
            "type":"cash",
            "value":1497.98
         }
      ]
   },
   {
      "id":18,
      "name":"Smartphone Apple iPhone 13 Pro Max 128GB iOS Câmera Tripla",
      "imageURL":"-555408035.jpg",
      "salePrice":6999,
      "listPrice":[
         {
            "type":"cash",
            "value":6999
         }
      ]
   },
   {
      "id":19,
      "name":"Smartphone Samsung Galaxy A52 SM-A525M 128GB Android",
      "imageURL":"1515023556.jpg",
      "salePrice":1699,
      "listPrice":[
         {
            "type":"cash",
            "value":1699
         }
      ]
   },
   {
      "id":20,
      "name":"Smartphone Xiaomi Redmi Note 10S 6GB RAM 64GB Android",
      "imageURL":"-14338925.jpg",
      "salePrice":1236.9,
      "listPrice":[
         {
            "type":"cash",
            "value":1236.9
         }
      ]
   },
   {
      "id":21,
      "name":"Smartphone Samsung Galaxy M12 SM-M127F 64GB Android",
      "imageURL":"1632166624.jpg",
      "salePrice":1079,
      "listPrice":[
         {
            "type":"cash",
            "value":1079
         }
      ]
   }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductsResult>
) {
  res.status(200).json({ products });
}