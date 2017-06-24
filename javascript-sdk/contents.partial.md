## Contents



### Retrieve a content

```
//Retrieves a content by its id
  marketcloud.contents.getById(content_id, function(err,response){

});
```



### List contents

```
//Retrieves a paginated list of categories filtered and sorted by the query object
  marketcloud.contents.list(query, function(err,response){
});
```