## Orders



### List all orders



```

//Returns orders made by the currently authenticated user
marketcloud.orders.list(query,function(err,response){

})      

```



### Retrieve an order



```

  //Returns informations about an order made by the currently authenticated user
  marketcloud.orders.getById(id,function(err,response){
  });     

```



### Create an order

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| items | Array | An array of line items.This is required if the <span class="code">cart_id</span> is missing. |
| cart_id <span class="label label-success">Required</span> | Integer | The id of the cart that is going to be turned into an order. This is required if <span class="code">items</span> is missing |
| state | String | The state of the order. Defaults to _created_ |
| shipping_address_id <span class="label label-success">Required</span> | Integer | The id of the shipping address |
| shipping_address | Object | A shipping address object. See Address for more informations. This is required if the <span class="code">shipping_address_id</span> is missing. |
| billing_address_id <span class="label label-success">Required</span> | Integer | The id of the billing address |
| billing_address | Object | A sbilling address object. See Address for more informations. This is required if the <span class="code">billing_address_id</span> is missing. |
| user_id | Integer | The id of the user making the order |
| shipping_id | Integer | The id of the **shipping method** chosen for the order. Be careful, this is not the shipping address. |
| store_id | Integer | The id of the store receiving in the order |
| promotion_id | Number | The id of the promotion to apply. |
| coupon_code | String | The code of the coupon to apply. |



```

  //Returns informations about an order made by the currently authenticated user
  var the_order = {
    shipping_address : {
      // See address for more informations
    },
    billing_address : {
      // See address for more informations
    },
    cart_id : 0,
    payment_method_id : 123 //Optional payment method id
  }

```

Alternatively, instead of passing a cart_id you can pass a 'items' array containing line items. See cart for more informations.

```

  var the_order = {
    shipping_address : {
      // See address for more informations
    },
    billing_address : {
      // See address for more informations
    },
    items : [{product_id : 1, quantiyt: 1}]
  }
  marketcloud.orders.create(the_order,function(err,response){
  });     

```