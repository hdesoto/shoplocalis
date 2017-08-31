# FINAL PROJECT - SHOP LOCALIS

## Shoplocalis is an online marketplace for local shops.

This is a project developed as a final project for the **Skylab Coders Academy** ***full-stack web developement*** bootcamp.

The main objective is to put into practice all the tools, skills and technologies learned during the course.

## SHOP LOCALIS

ShopLocalis is an online marketplace where small shops can show all their products to a wider audience. 
* The **buyer's profile**  is someone who prefer to buy into local/small shops in their neighbourhood or town, but due to lack of time (due to working in another town or without free time during the week) usually end up buying in big stores and shopping centers.

* The **seller's profile** is that of a small shop, not having a technical background nor the investment necessary (in time and capital) to create and maintain their own online stores. We aim at helping them with all the technical side as well as with the promotion of their stores in the online world.

Our objective is to offer two types of buying experiences: pick-up or delivery. The delivery could be handled by "our company".

All the payment processing will also be handled by our website.

## Wireframe

![First wireframe](https://github.com/hdesoto/shoplocalis/blob/master/Pre-Proyecto/Shop%20Localis%201.jpg)


## Technologies used in this project



## TEST APIs
curl -H "Content-Type: application/json" -X POST -d '{"title":"Yerba Mate","description":"Yerba Canarias - la yerba de mi pías", "price": 5,"uom":"kg", "stock": 25, "image_url": "http://canarias.com.uy/wp-content/uploads/2012/11/home-canarias.png"}' http://localhost:3001/api/products


curl -H "Content-Type: application/json" -X POST -d '{"title":"Patatas fritas gourmet finissimas",
"description":"Denominación del alimento:Patatas fritas
Nombre del operador de la empresa alimentaria:PepsiCo Foods. A.I.E.
Nombre del importador:PepsiCo Foods. A.I.E.
Dirección del operador/importador:Avenida de los Olmos, 2, 01013 - Vitoria, España",
"price": 1.89,
"uom":"unidad",
"stock": 50,
"image_url": "https://static.carrefour.es/hd_280x_/supermercado/bcc_static/catalogImages/product/799201/799201.png"}' http://localhost:3001/api/products