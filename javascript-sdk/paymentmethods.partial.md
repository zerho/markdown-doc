## Payment methods

Payment methods are a way to describe how customers will pay the goods they are buying. We have some default payment methods which are integrated into the system such as Braintree and Stripe, but your store might want some custom methods, such as cash on delivery.

#### Usage with orders

In order to tell Marketcloud that an order is using a certain payment method, just create an order with a `payment_method_id` value. See [orders.create](#orders.create) for an example



### Retrieve a payment method

```
//Retrieves a payment method by its id
  marketcloud.paymentMethods.getById(payment_method_id, function(err,response){

});
```



### List all payment methods

```
//Retrieves a list of payment methods filtered and sorted by the query object
  marketcloud.paymentMethods.list(query, function(err,response){
});
```