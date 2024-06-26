// App che permette di loggare e fare logout , salvare una lista di to do list associata all'utente.
// Può loggare sempre 1 utente alla volta , l'utente può vedere solo le cose inserite da se stesso

// BUSINESS LOGIC
class App {
  // PROPERTIES
  #username = "";
  #todolist = [];
  // METHODS
  login(username) {
    if (!!this.#username) console.log("Already logged in");
    else this.#username = username;
  }

  logout() {
    if (!!this.#username) this.#username = "";
    else console.log("User is not logged in");
  }

  todo() {}
}
