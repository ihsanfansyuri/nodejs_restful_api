# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresess

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jalan kenanga",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_codes": "Kode pos"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan kenanga",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_codes": "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresess/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  {
    "street": "Jalan kenanga",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_codes": "Kode pos"
  }
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan kenanga",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_codes": "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresess/:addressId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan kenanga",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_codes": "Kode pos"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## List Addressess API

Endpoint : GET /api/contacts/:contactId/addresess

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan kenanga",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_codes": "Kode pos"
    },
    {
      "id": 1,
      "street": "Jalan kenanga",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_codes": "Kode pos"
    }
  ]
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresess/:addressId

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
  "errors": "Contact is not found"
}
```
