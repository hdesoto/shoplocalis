# FINAL PROJECT - SHOP LOCALIS

![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)
[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![Bootstrap4](https://github.com/MarioTerron/logo-images/raw/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](http://mongoosejs.com/)
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![PUG](https://avatars0.githubusercontent.com/u/9338635?v=4&s=200)](https://pugjs.org)


# [SHOPLOCALIS](https://shoplocalis.herokuapp.com/#!/)

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/).

---

### To run the server:

```
$ npm start
```

and wait for all dependencies to install automatically.

### It's possible to run it in dev mode:

```
$npm run dev
```

## API

The server part has multiple **API endpoints** using several routes:

- `/api/orders` -> Will handle all order related requests.
- `/api/products` -> Handles all product related operations.
- `/api/users` -> Handles all user related operations.

---

## Built with:

- **Front-end**

    - angular: 1.6.4
      - angular-route: 1.6.6
      - angular-jwt: 0.1.9
    - bower: 1.8.0
    - font-awesome: 4.7.0
    - Bootstrap: 4.0.0-beta

- **Back-end**
  - express: 4.15.4
    - express-jwt: 5.3.0
  - jsonwebtoken: 7.4.3
  - mongoose: 4.11.7
  - passport: 0.4.0
    - passport-jwt: 3.0.0
    - passport-local: 1.0.0
    - passport-local-mongoose: 4.2.1

---

## Author

[Hernán de Soto](https://github.com/hdesoto)

# Description of the concept.

## Shoplocalis is an online store for small shops to implement without much hassle.

This app was developed as a final project for the **Skylab Coders Academy** ***full-stack web developement*** bootcamp.

The main objective is to work and put into practice all the tools, skills and technologies learned during the course:

## SHOP LOCALIS

ShopLocalis is an online store where a small shop can show all their products to a wider audience as well as receive simple purchase orders.

In the main page:
* The buyer will land in the main home, with the products visible and a big search button. At this first stage the user doesn't need to be registered to browse the products, add to the cart nor make an order.

In the /admin part of the site:
* The seller (or Admin) will be able to:
1 see all the products available
2 Modify product info: pictures, title, description, price, and unit of measure (per kg, per unit, etc).
3 Create new products.
4 Delete products.
5 See all the Purchase Orders received with all the information of the order.


## Mobile Screenshots



## Technologies used in this project



## TEST APIs

curl -H "Content-Type: application/json" -X POST -d '{"title":"Yerba Mate","description":"Yerba Canarias - la yerba de mi pías", "price": 5,"uom":"kg", "stock": 25, "image_url": "http://canarias.com.uy/wp-content/uploads/2012/11/home-canarias.png"}' http://localhost:3001/api/products


**Create Product**
curl -H "Content-Type: application/json" -X POST -d '{"title":"Nuevo producto",
"description":"Denominación del alimento:Patatas fritas
Nombre del operador de la empresa alimentaria:PepsiCo Foods. A.I.E.
Nombre del importador:PepsiCo Foods. A.I.E.
Dirección del operador/importador:Avenida de los Olmos, 2, 01013 - Vitoria, España",
"price": 3,
"uom":"unidad",
"stock": 50,
"image_url": "https://static.carrefour.es/hd_280x_/supermercado/bcc_static/catalogImages/product/799201/799201.png"}' http://localhost:3001/api/products



**Create Order**
curl -H "Content-Type: application/json" -X POST -d '{"ordernbr":2,"email": "some@mail.com","deliveryaddress":"Carrer Ferran nro 28, piso 3","items": [{"_id":"59a7df85c10c4820648155f9"}]}' localhost:3001/api/orders
****************************************
