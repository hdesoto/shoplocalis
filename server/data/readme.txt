mongoexport -d shoplocalis -c users --jsonArray -o server/data/users.json
mongoexport -d shoplocalis -c products --jsonArray -o server/data/products.json
mongoexport -d shoplocalis -c orders --jsonArray -o server/data/orders.json

mongoimport -d shoplocalis -c users --jsonArray --file server/data/users.json
mongoimport -d shoplocalis -c products --jsonArray --file server/data/products.json
mongoimport -d shoplocalis -c orders --jsonArray --file server/data/orders.json