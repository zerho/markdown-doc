Users

### Checking if a user is authenticated

Whenever you create a new instance of the client (at pageloads for example), it immediatly looks for a user token in the current environment (the browser). If the client find user information, it populates the value `client.token`.

If you want to check if the current user already has an auth token:

```

var client = new Marketcloud.Client({publicKey : '...'});
if (client.token) {
  // Then the user is authenticated and its data is in
  console.log(client.currentUser);
} else {
  // User not authenticated, prompt the user for username and password
}

```



### Authenticate a user

### Authenticate with username and password

Authenticates a user with email and password. Under the hood, the marketcloud api tests the user credentials and if they are valid, a token is received from the API and stored in the user's browser.

```

marketcloud.users.authenticate('john.snow@wall.com','IKnowNothing',
  function(err,response){
    //data.user contains user data
})      

```

If the authentication is successful, `data` is an object:

```
{
  user : {
    email : "john.doe@example.com",
    full_name : "John Doe",
    custom_attribute : "Some Value"
  },
  token : "SECRET_TOKEN"
}

```

### Authenticate with Facebook

Authenticates a user using Facebook login. Please, note that using this authentication strategy requires a couple more setup steps on the Facebook side. We have a [dedicated guide](/documentation/guides/facebook-login) to help you get started with Facebook and Marketcloud.

```

marketcloud.users.authenticateWithFacebook(user_id,access_token,
  function(err,response){
    //data.user contains user data
})      

```

The data object is the same as in the authenticate() method.



### Logout

This method will log the user out, forgetting the auth token and the current cart's id

```

marketcloud.users.logout();     

```



### Check login status

This method will return true if there is a local auth token. False otherwise.

```
var isLogged = marketcloud.users.isAuthenticated();

```



### Create a user

Use this method to register users to you eCommerce app.

```

  //Authenticates a user given email and password
  marketcloud.users.create({
                    name: "John Snow",
                    email: "john.snow@thewall.com",
                    password : "IknowKnothing"
              },function(err,response){
  })      

```



### Retrieve the currently authenticated user

Authentication required

```

//Returns complete informations about the currently authenticated user
marketcloud.users.getCurrent(function(err,response){

})      

```



### Update a user

Authentication required

```

//Update the information about the currently authenticated user
marketcloud.users.update({email : 'newaddress@example.com'},function(err,response){

})      

```



### Delete a user

Authentication required

```

  //Delete the currently authenticated user
  marketcloud.users.delete(function(err){
  })      

```