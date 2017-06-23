Variables

### Retrieve a variable

```
//Retrieves a variable by its id
  marketcloud.variables.getById(variable_id, function(err,response){

});
```



### List all variables

```
//Retrieves a list of variables filtered and sorted by the query object
  marketcloud.variables.list(query, function(err,response){
});
```