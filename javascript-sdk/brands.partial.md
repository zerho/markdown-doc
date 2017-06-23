Brands

### Retrieve a brand

```
//Retrieves a brand by its id
  marketcloud.brands.getById(brand_id, function(err,response){

});
```



### List all brands

Retrieves a list of Brands filtered and sorted by the query object.

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| fields | String | Comma separated list of attribute names to retrieve. Use it to retrieve only the fields you need. |
| per_page | Number | The number of brands to retrieve per page |
| page | Number | The page number of brands to display |



#### Example request

```
//Retrieves a list of Brands filtered and sorted by the query object
marketcloud.brands.list(query, function(err,response){
});
```

Categories

### Retrieve a category

```
//Retrieves a category by its id
  marketcloud.categories.getById(category_id, function(err,response){

});
```



### List all categories

```
//Retrieves a list of categories filtered and sorted by the query object
  marketcloud.categories.list(query, function(err,response){
});
```