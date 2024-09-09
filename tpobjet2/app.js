class product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.cart = [];
  }
  // Méthode pour ajouter
  addProduct(product, quantityToAdd) {
    const existingProduct = this.cart.find(
      (p) => p.product.name === product.name
    );

    if (existingProduct) {
      // Mise à jour de la quantité si le produit existe déjà dans le panier
      if (product.quantity >= quantityToAdd) {
        existingProduct.quantity += quantityToAdd;
        product.quantity -= quantityToAdd;
      } else {
        console.log("Quantité en stock insuffisante");
      }
    } else {
      // Ajout du produit s'il n'est pas déjà dans le panier
      if (product.quantity >= quantityToAdd) {
        this.cart.push({ product, quantity: quantityToAdd });
        product.quantity -= quantityToAdd;
      } else {
        console.log("Quantité en stock insuffisante");
      }
    }
  }
  // // Méthode pour retirer
  removeProduct(productName, quantityToRemove) {
    const productInCart = this.cart.find((p) => p.product.name === productName);

    if (productInCart) {
      if (productInCart.quantity > quantityToRemove) {
        productInCart.quantity -= quantityToRemove;
        productInCart.product.quantity += quantityToRemove; // Remettre en stock
      } else if (productInCart.quantity === quantityToRemove) {
        // Retirer complètement le produit du panier
        this.cart = this.cart.filter((p) => p.product.name !== productName);
        productInCart.product.quantity += quantityToRemove; // Remettre en stock
      } else {
        console.log("Quantité à retirer supérieure à celle dans le panier");
      }
    } else {
      console.log("Le produit n'est pas dans le panier");
    }
  }
  // Méthode pour calculer le total du panier
  calculateTotal() {
    let total = 0;
    this.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }
  // Afficher les éléments du panier
  showCart() {
    console.log("Panier :");
    this.cart.forEach((item) => {
      console.log(
        `${item.product.name} - Prix: ${item.product.price} € - Quantité: ${item.quantity}`
      );
    });
  }
}