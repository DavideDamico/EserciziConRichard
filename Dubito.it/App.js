class Marketplace {
  users = [];
  ads = [];
  reviews = [];
  auth = [];
  reports = [];
  favorites = [];

  getUserByToken(token) {
    //controllerà nella tabella auth l'id utente dato il token , se il token non esiste restituisce null, se esiste restituisce l'oggetto utente
  }

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
    urlPhoto
  ) {
    //legge i dati e crea l'annuncio
  }

  updateAd(
    token,
    referenceKeyAd,
    title,
    description,
    category,
    status,
    price,
    address,
    urlPhoto
  ) {
    //legge i dati e li modifica
  }

  deleteAd(token, referenceKeyAd) {
    //controlla il token , trova l'annuncio tramite l'id ed elimina l'annuncio
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

  updateUsername(token, newUsername) {
    //controlla il token e modifica l'username
  }

  markAsSold(token, referenceKeyAd, referenceKeyUserPurchased) {
    //controlla il token , targhetta l'annuncio e lo marchia come venduto
  }

  adListByCategory(category) {
    //cerca nell'array degli 'Ads' tutti gli oggetti con quella categoria
  }

  adListByText(text) {
    //cerca nell'array degli 'Ads' il testo inserito all'interno di 'title' e 'description'
  }

  adDetail(referenceKeyAd) {
    //cerca nell'array degli 'Ads' l'annuncio tramite la referenceKey
  }

  adListSoldByUser(token) {
    //cerca nell'array 'Ads' tutti gli oggetti col valore sold 'true'
  }

  adListPurchasedByUser(token) {
    //cerca nell'array 'Ads' tutti gli oggetti col valore sold 'false'
  }

  favoriteList(token) {
    //
  }

  favoriteAdd(token, referenceKeyAd) {
    //aggiunge nell'array 'favorites' l'annuncio targhettizzato tramite la referenceKey
  }

  favoriteDetail(token, referenceKeyAd) {
    //cerca nell'array 'favorites' l'annuncio targhettizzato tramite la referenceKey
  }

  favoriteDelete(token, referenceKeyAd) {
    //elimina dall'array 'favorites' l'annuncio targhettizzato tramite la referenceKey
  }

  getPhoneNumber(token, referenceKeyAd) {}

  getListOfInterestedUserByAd(token, referenceKeyAd) {}

  getListOfPurchasedToBeConfirmed(token) {}

  markAsBought(token, referenceKeyAd) {}
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
    phone,
    urlPhoto
  ) {
    this.primaryKey = Math.random();
    this.date = new Date();
    this.lead = [];
    this.referenceKeyUserPurchased = "";
    this.referenceKeyUser = referenceKeyUser;
    this.title = title;
    this.description = description;
    this.category = category;
    this.status = status;
    this.price = price;
    this.address = address;
    this.phone = phone;
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
