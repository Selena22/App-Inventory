import {
  Component,
  EventEmitter
} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw7b2fe8d7/zoom/CG4111_01_standard.jpg?sh=600&strip=false',
        ['Men', 'Shoes', 'Running shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/assets/ru-ru/images/product/prod_5289085_1_613x613.jpg',
        ['Men', 'Accesories', 'Hats'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'https://cdn.shopify.com/s/files/1/0157/8796/products/charcoal_explorer1_grande.jpg?v=1519083411',
        ['Men', 'Accesories', 'Hats'],
        29.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product); }
}


