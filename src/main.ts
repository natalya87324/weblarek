import './scss/styles.scss';
import {apiProducts} from '../src/utils/data.ts';
import { Products } from './components/models/Products.ts';
import { Cart } from './components/models/Cart.ts';
import { Buyer } from './components/models/Buyer.ts';
import { Api } from './components/base/Api.ts';
import { WebLarekApi } from './components/api/WebLarekApi.ts';
import { API_URL } from './utils/constants.ts';


//создает экземпляр класса Products
const productsModel = new Products();

//принимает массив товаров и сохраняет его в каталоге
productsModel.setItems(apiProducts.items);

//сохраняет первый товар для подробного отображения
productsModel.setSelectedProduct(apiProducts.items[0]);

//возвращает массив товаров каталога
console.log('Массив товаров из каталога:', productsModel.getItems());

//находит второй товар по идентификатору и возвращает его
console.log('Второй товар по идентификатору:', productsModel.getProductById(apiProducts.items[1].id));

//возвращает выбранный первый товар
console.log('Выбранный первый товар:', productsModel.getSelectedProduct());


//создает экземпляр класса Cart
const cartModel = new Cart();

//проверяет начальное состояние
console.log('Пустая корзина:', cartModel.getItems());
console.log('Количество:', cartModel.getItemCount());
console.log('Общая стоимость:', cartModel.getTotalPrice());

//добавляет товары в корзину
cartModel.addItem(apiProducts.items[0]); 
cartModel.addItem(apiProducts.items[1]);

//возвращает массив товаров в корзине
console.log('Товары в корзине:', cartModel.getItems());

//возвращает количество товаров в корзине
console.log('Количество:', cartModel.getItemCount());

//возвращает суммарную стоимость товаров в корзине
console.log('Общая стоимость:', cartModel.getTotalPrice());

//проверяет наличие товара в корзине: товар находится в корзине
console.log('Наличие второго товара в корзине:', cartModel.hasItem(apiProducts.items[1].id));

//проверяет наличие товара в корзине: товара нет в корзине
console.log('Наличие третьего товара в корзине:', cartModel.hasItem(apiProducts.items[2].id));

//удаляет товар из корзины по его id
cartModel.removeItem(apiProducts.items[0]);

//возвращает массив товаров в корзине после удаления товара
console.log('Корзина после удаления товара:',cartModel.getItems());

//удаляет все товары из корзины
cartModel.clear();

//возвращает массив товаров в корзине после очистки
console.log('Корзина после удаления всех товаров:',cartModel.getItems());


//создает экземпляр класса Buyer
const buyer = new Buyer();

//проверка начального состояния
console.log('Начальные данные:', buyer.getData());
console.log('Начальные ошибки:', buyer.validate());

//заполняет только email
buyer.setEmail('text@test.com');

console.log('После заполнения email:', buyer.getData());
//проверка полей на пустые значения
console.log('Ошибки:', buyer.validate());

//заполняет телефон
buyer.setPhone('+79999999999');

console.log('После заполнения телефона:', buyer.getData());
//проверка полей на пустые значения
console.log('Ошибки:', buyer.validate());

buyer.setPayment('cash');
buyer.setEmail('text@test.com');
buyer.setPhone('+79999999999');
buyer.setAddress('101000, Москва, ул. Театральная, д.18');

//возвращает объект со всеми текущими данными покупателя
console.log('Данные покупателя после заполнения всех полей:',buyer.getData());

//проверка полей на пустые значения
console.log('Ошибки:', buyer.validate());

//очищает все данные покупателя
buyer.clear();

console.log('Данные покупателя после очистки полей:', buyer.getData());

const api = new Api(API_URL);
const webLarekApi = new WebLarekApi(api);

webLarekApi.getProducts()
  .then(response => {
    productsModel.setItems(response.items);
    console.log('Каталог товаров:', productsModel.getItems())
  })
  .catch(error => console.error('Ошибка загрузки товаров:', error)
  );

