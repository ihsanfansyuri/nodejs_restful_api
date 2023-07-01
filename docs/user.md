# User API Spec

## Register User API

Endpoint : POST /api/users

Requset Body :

```json
{
  "username": "san",
  "password": "rahasia",
  "name": "ihsan"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "san",
    "name": "ihsan"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "san",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors": "Username or password wrong"
}
```

## Update User API

Enpoint : PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "ihsan lagi", //optional
  "password": "new password" //optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "san",
    "name": "ihsan lagi"
  }
}
```

Response Body Error :

```json
{
  "errors": "Name length max 100"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "san",
    "name": "ihsan"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
