// 基本的に 1file 1class
class BaseProduct {
  echoProduct(){
    console.log('親クラスです');
  }

  getProduct(){
    console.log('親の関数です');
  }
}

class Product extends BaseProduct{

  constructor(productName){
    super();
    //this.test = productName;
    this.test = [productName];
  }

  getProduct(){
    // 上書きしている
    console.log(this.test);
  }

  addProduct(item){
    // this.test += item;
    this.test.push(item);
  }

  static testProduct(){
    console.log('静的関数です');
  }
}

Product.testProduct();

const product = new Product('テスト');

console.log(product);
console.log(product.test);

product.getProduct();
product.addProduct('追加分です');
product.getProduct();
product.echoProduct();