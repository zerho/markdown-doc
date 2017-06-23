### Products



#### Retrieve a product

```
//Retrieves a product by its id
  marketcloud.products.getById(product_id, function(err,response){

});
```

**product** is in the following form:

```

  {
      "id": 1111,
      "name": "The lord of the rings",
      "sku": "TLOTR",
      "price": 15.50,
      "description": "A brief description of this fantastic book.",
      "published": true,
      "stock_level": 30,
      "stock_type": "track",
      "stock_status": null
  }

```

Products can also have custom attributes! :

```

  {
      "id": 13687,
      "name": "A song of fire and ice: A feast for crows",
      "sku": "ASOFAI_AFFC",
      "price": 7.79,
      "description": "A brief description of this fantastic book.",
      "published": true,
      "stock_level": 30,
      "stock_type": "track",
      "stock_status": null,
      "author": "George R. R. Martin",
      "isbn-10": "055358202X",
      "isbn-13": "978-0553582024",
      "pages": 1060,
      "editor": "Bantam Books",
      "genre": "Fantasy",
      "cover": "Paperback",
      "publication_year": "2001"
    }

```

Note that starting from author, the remaining fields are custom attributes defined when the product was created.



#### List all products

Retrieves a list of products filtered and sorted by the query object.

##### Arguments



| Field | Type | Description |
| --- | --- | --- |
| q | String | Filter results performing a text research on your products. |
| price_gt | Number | Display only products that cost more than the specified value. |
| price_lt | Number | Display only products that cost less than the specified value. |
| category | String | Display only products that belongs to the specified category path or to a sub category. For example, `?category=/shoes` matches all producs in categories /shoes, /shoes/running /shoes/classic and other subcategories of "shoes" |
| `<attribute_name>` | Mixed | Filter products by any custom field. |
| fields | String | Comma separated list of attribute names to retrieve. Use it to retrieve only the fields you need. |
| per_page | Number | The number of products to retrieve per page |
| page | Number | The page number of products to display |



##### Example request

```
//Retrieves a list of products filtered and sorted by the query object
  marketcloud.products.list(query, function(err,response){
})
```

The query parameter is an object and you can use it to filter your products.

```
var query = {
    category_id : 5,
    price_lt:50
  }

```

The previous example queries the api for products that belongs to the category with id equal to 5 and that cost less than 50