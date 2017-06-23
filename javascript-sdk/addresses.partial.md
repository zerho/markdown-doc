Addresses

### Create an address

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| full_name Required | String | The full name of the resident |
| email Required | String | A valid email address |
| country Required | String | The country of the address |
| state | String | The state of the address |
| city Required | String | The city of the address |
| address1 Required | String | The first address |
| address2 | String | Additional address space |
| postal_code Required | String | The postal code of the address |
| phone_number | String | The phone number for the address |
| alternate_phone_number | String | An alternate phone number for the address |



#### Example request

```

marketcloud.addresses.create(new_address,function(err,response){

})

```



### List all addresses

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| user_id | Number | Filter addresses by the customer's id. |
| fields | String | Comma separated list of attribute names to retrieve. Use it to retrieve only the fields you need. |
| per_page | Number | The number of addresses to retrieve per page |
| page | Number | The page number of addresses to display |



Retrieves a list of addresses filtered and sorted by the query object.

#### Example request

```

marketcloud.addresses.list(query,function(err){
  // Your code here
})

```



### Retrieve an address

Retrieves an address by its id.

#### Example request

```

marketcloud.addresses.getById(address_id,function(err,response){
  // Your code here
})

```



### Update an address

Updates a address by id.

#### Arguments



| Field | Type | Description |
| --- | --- | --- |
| address_id Required | Number | The univocal address identifier |
| update_data Required | Object | An object containing the updates. See [addresses.create()](#addresses.create) for more informations. |



#### Example request

```

marketcloud.addresses.update(address_id,update_data,function(err,response){
  // Your code here
})

```



### Delete an address

Deletes a address by id.

#### Example request

```

marketcloud.addresses.delete(address_id,function(err){
  // Your code here
})

```