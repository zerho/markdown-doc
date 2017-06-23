

### Sorting

Whenever you are requesting a list of resources, using a `list(query,callback)` method, you can pass sorting parameters to the query object:

```

client.products.list({
  sort_by : "name",
  sort_order : "ASC"
})

```

`sort_by` is the name of the attribute you want to use for sorting and `sort_order` can have two values, `ASC` or `DESC`.