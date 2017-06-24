<section class="resource">

## Payments

Marketcloud supports a certain number of payment methods. Most of them requires client side and server side configuration, we try to abstract the server side part, so you just have to configure client side scripts.

You can find the list of payment methods supported by Marketcloud in your application's dashboard under the **settings** > **payments** page. There you will also find a link to the documentation related to each payment method.

> **Info**
> In order to create payments using a payment method, you must enable and configure that method in your dashboard.



### Create a payment

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| method <span class="label label-success">Required</span> | String | A valid name of one of the supported payment methods. You can see a list of supported payment methods in Dashboard > settings > payments. |
| order_id | Integer | The id of the order related to this payment. |
|  | Mixed | Every payment method requires different additional parameters. Refer to the payment method documentation for more informations. |



#### Example request

```

// Braintree example
var payment = {
  method: 'Braintree',
  order_id: created_order.id,
  nonce: 'nonce-from-braintree.js'
};

marketcloud.payments.create(payment);

// Stripe example
var payment = {
  method: 'Stripe',
  order_id: created_order.id,
  source: 'value-from-stripe.js'
};

marketcloud.payments.create(payment);

// In both cases, nonce and source are obtained from Braintree
// and Stripe servers using their client side SDKs

```

</section>