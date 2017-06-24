## Promotions



### Retrieve a promotion

```
//Retrieves a promotion by its id
  marketcloud.categories.getById(category_id, function(err,response){

});
```



### List all promotions

```
//Retrieves a list of promotions filtered and sorted by the query object
  marketcloud.promotions.list(query, function(err,response){
});
```



### Get by cart id

```
//Retrieves a list of promotions eligible for a specific cart
  marketcloud.promotions.getByCart(cart_id, function(err,response){
});
```