## Carts



### Create a cart

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| items  | Array of Objects | The list of items, in the form `{product_id:1,quantity:10, [variant_id:1]}`, added on the cart |



A line item is an object with the following attributes



| Field | Type | Description |
| --- | --- | --- |
| product_id  | Number | The univocal product identifier |
| variant_id | Number | The univocal number identifying a product's variant. |
| quantity  | Number | A _positive_ number that indicates how many units of the chosen product must be added to cart. |



Creates a new cart with a product in it.

#### Example request

```

  //Creates a new cart for the user with given email
  marketcloud.carts.create({
      items:[{'product_id':111,'quantity':1}]
  },function(err,response){

  });

```



### Retrieve a cart

#### Example request

```

marketcloud.carts.getById(cart_id,function(err,response){
  // Your code here
})

```



### Add items to cart

```

  //Add products to a cart identified by its id
  marketcloud.carts.add(cart_id,[{'product_id':5785,'quantity':2}],
  ,function(err,response){

  });

```



### Update cart contents

```

  marketcloud.carts.update(testCart.id,[
                      {'product_id':5712,'quantity':1},
                      {'product_id':5785,'quantity':1}
      ],function(err,response){

  })

```



### Add a coupon to the cart

```

  marketcloud.carts.addCoupon(testCart.id,"COUPON_CODE",function(err,response){

  })

```



### Remove cart contents

```

  marketcloud.carts.remove(testCart.id,[
                      {'product_id':5712},
                      {'product_id':5785}
      ],function(err,response){
          //Assuming that the cart had only 2 products,
          //It should be empty now

      })

```

If your store works with **variants**, you need to explicitly indicate which variant you want to add/remove/update .

```

  //Adds an item to the cart
  marketcloud.carts.add(cart_id,[{'product_id':5785,'quantity':2, 'variant_id' : 3}],
  ,function(err,response){

  });

  //Updates an item in the cart
  marketcloud.carts.update(cart_id,[{'product_id':5785,'quantity':1, 'variant_id' : 3}],
  ,function(err,response){

  });

  //Remove an item from the cart
  marketcloud.carts.remove(cart_id,[{'product_id':5785, 'variant_id' : 3}],
  ,function(err,response){

  });

```