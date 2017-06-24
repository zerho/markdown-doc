

## Collections



### Retrieve a collection

#### Example request

```
//Retrieves a collection by its id
marketcloud.collections.getById(123)
.then(function(response){

})
.catch(function(error){

})

```



### List all collections

Retrieves a list of Collections filtered and sorted by the query object.

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| fields | String | Comma separated list of attribute names to retrieve. Use it to retrieve only the fields you need. |
| per_page | Integer | The number of collections to retrieve per page |
| page | Integer | The page number of collections to display |



#### Example request

```

marketcloud.collections.list({})
.then(function(response){

})
.catch(function(error){

})

```

