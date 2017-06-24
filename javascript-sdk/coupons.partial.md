

## Coupons



### Retrieve a coupon

#### Example request

```
//Retrieves a coupon by its id
marketcloud.coupons.getById(123);

```



### List coupons

#### Example request

```
//Retrieves a paginated list of coupons
// in this example, we only look for active coupons
marketcloud.coupons.list({active : true});

```

