class Marketplace {
  users = [];
  ads = [];
  reviews = [];
  auth = [];
  reports = [];
  favorites = [];

  login(username, password) {
    //controllo nell'array degli users se esiste l'account con quell'username e quella password
  }

  logout(token) {
    //richiedo il token all'user e lo reinderizzo alla home di login
  }

  register(email, password) {
    //form di compilazione email e password e push nell'array 'users'
  }

  createAd(
    token,
    title,
    description,
    category,
    status,
    price,
    address,
    sold,
    urlPhoto
  ) {
    //legge i dati e crea l'annuncio
  }

  updateAd(
    token,
    title,
    description,
    category,
    status,
    price,
    address,
    sold,
    urlPhoto
  ) {
    //legge i dati e li modifica
  }

  deleteAd(token) {
    //controlla il token ed elimina l'annuncio
  }

  createReview(token, referenceKeyAd, title, description, rating) {
    //controlla il token , targhetta l'annuncio e legge i dati
  }

  updateReview(token, referenceKeyAd, title, description, rating) {
    //controlla il token , targhetta l'annuncio e modifica i dati
  }

  deleteReview(token, referenceKeyAd) {
    //controlla il token , targhetta l'annuncio e elimina la recensione
  }

  deleteAccount(token, password) {
    //controlla il token , richiede la password per la conferma e elimina l'account
  }

  updateUsername(token) {
    //controlla il token e modifica l'username
  }

  markAsSold(token, referenceKeyAd) {
    //controlla il token , targhezza l'annuncio e lo marchia come venduto tramite un booleano
  }

  searchAdList(category) {
    //cerca nell'array degli 'Ads' tutti gli oggetti con quella categoria
  }

  findAd(title) {
    //cerca nell'array degli 'Ads' il titolo inserito
  }

  getAdListSoldByUser(referenceKeyUser, referenceKeyAd, sold) {
    //cerca nell'array 'Ads' tutti gli oggetti col valore sold 'true'
  }

  getAdListPurchasedByUser(token) {
    //cerca nell'array 'Ads' tutti gli oggetti col valore sold 'false'
  }

  favoriteList(referenceKeyAd, referenceKeyUser) {
    //
  }

  addFavorite(referenceKeyAd, referenceKeyUser, username) {
    //aggiunge nell'array 'favorites' l'annuncio targhettizzato tramite la referenceKey
  }

  deleteFavorite(referenceKeyAd, referenceKeyUser, username) {
    //elimina dall'array 'favorites' l'annuncio targhettizzato tramite la referenceKey
  }
}

class ModelUser {
  constructor(username, email, password) {
    this.primaryKey = Math.random();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

class ModelAd {
  constructor(
    referenceKeyUser,
    title,
    description,
    category,
    status,
    price,
    address,
    sold,
    urlPhoto
  ) {
    this.primaryKey = Math.random();
    this.date = new Date();
    this.referenceKeyUser = referenceKeyUser;
    this.title = title;
    this.description = description;
    this.category = category;
    this.status = status;
    this.price = price;
    this.address = address;
    this.sold = sold;
    this.urlPhoto = urlPhoto;
  }
}

class ModelReview {
  constructor(referenceKeyUser, referenceKeyAd, title, description, rating) {
    this.primaryKey = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.referenceKeyAd = referenceKeyAd;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.date = new Date();
  }
}

class ModelAuth {
  constructor(referenceKeyUser) {
    this.primaryKey = Math.random();
    this.token = Math.random();
    this.referenceKeyUser = referenceKeyUser;
  }
}

class ModelReport {
  constructor(referenceKeyUser, referenceKeyAd, description, status) {
    this.primaryKey = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.referenceKeyAd = referenceKeyAd;
    this.description = description;
    this.status = status;
  }
}

class ModelFavorite {
  constructor(referenceKeyUser, referenceKeyAd) {
    this.primaryKey = Math.random();
    this.referenceKeyUser = referenceKeyUser;
    this.referenceKeyAd = referenceKeyAd;
  }
}
