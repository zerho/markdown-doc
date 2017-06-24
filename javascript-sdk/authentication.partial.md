

## Authentication and security

Every application identifies itself to Marketcloud using a unique public key. Since you must ship the public key with your client application code, this key is **public**. The application security is guaranteed by the secret key, which you should never share with anyone. The only place where it should be safe to store and use the secret key is (in case you need it) your server side code.

```
//Create a new instance of the client
  var marketcloud = new Marketcloud.Client({
    public_key : 'your-apps-public-key'
  })

```

> **Note**
> By default, the SDK will have very limited write and read access. Most write operations will require user authentication. If the default user authorizations are not enough for your application (for example if you are building a Marketplace) you can create new user roles. [Learn more](#)

Some methods requires a user authorization token. This is because, for example, only logged users should be able to edit their profile informations, or review their orders and items in carts. Whenever a method requires authentication, you will see a <span class="text-muted">Authentication required</span> label.

In order to authenticate a user, use the [users.authenticate()](#users) method.