type User={
    "id":Number ,
    "name": String,
    "username": String,
    "email": String,
    "address": {
      "street": String,
      "suite": String,
      "city": String,
      "zipcode": String,
      "geo": {
        "lat": String,
        "lng": String
      }
    },
    "phone":String ,
    "website":String ,
    "company": {
      "name": String,
      "catchPhrase": String,
      "bs": String
    }
  };
  type Posts={
    "userId": Number,
    "id": Number,
    "title": String,
    "body":String
  }
  type Props={
    promise:Promise<Posts[]>
  }
  