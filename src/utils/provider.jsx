import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
import Swal from "sweetalert2";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    favorite: [],
    codepromo: [
      {
        code: "RaksyeShop",
        discountprice: 50000,
      },
    ],
    discount: 0,
    codevalue: "",
    cartCount: 0,
    cartBadge: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts,
    });
  };

  searchProduct = (e) => {
    e.preventDefault();
  };

  getItem = (id) => {
    const products = this.state.products.find((item) => item.id === id);
    return products;
  };

  handleProduct = (id) => {
    const products = this.getItem(id);

    this.setState({
      detailProduct: products,
    });
  };

  addtoCart = (id) => {
    let tempProducts = [...this.state.products];
    let tempcartCount = this.state.cartCount;

    const index = tempProducts.indexOf(this.getItem(id));

    const products = tempProducts[index];

    products.inCart = true;
    products.count = 1;
    products.cartBadge = products.cartBadge + 1;

    const price = products.price;
    products.total = price;

    Swal.fire({
      title: "Berhasil!",
      imageUrl: "img/svg/addtocart.svg",
      imageWidth: 400,
      imageHeight: 200,
      text: "Barang berhasil ditambahkan ke keranjang!",
      confirmButtonText: "OKE",
      customClass: {
        confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
      },
    });

    this.setState(
      {
        cartCount: tempcartCount + 1,
        products: tempProducts,
        cart: [...this.state.cart, products],
      },
      () => {
        this.shoppingValue();
      }
    );
  };

  shoppingValue = () => {
    let totalAwal = 0;
    this.state.cart.map((item) => (totalAwal += item.total));
    const total = totalAwal;
    this.setState({
      cartTotal: total,
    });
  };

  plusProduct = (id) => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      {
        cart: [...tempCart],
      },
      () => {
        this.shoppingValue();
      }
    );
  };

  minusProduct = (id) => {
    let tempCart = [...this.state.cart];

    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        {
          cart: [...tempCart],
        },
        () => {
          this.shoppingValue();
        }
      );
    }
  };

  removeProduct = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    let tempcartCount = this.state.cartCount;

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    const removeProduct = tempProducts[index];

    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
        cancelButton: "btn-custom btn-md btn-custom-boxshadow",
      },
      showClass: {
        popup: "animated jackInTheBox faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },
    }).then((result) => {
      if (result.value) {
        this.setState(
          {
            cartCount: tempcartCount - 1,
            cart: [...tempCart],
            products: [...tempProducts],
          },
          () => {
            this.shoppingValue();
          }
        );

        Swal.fire({
          title: "Terhapus!",
          imageUrl: "img/svg/trash.svg",
          imageWidth: 400,
          imageHeight: 200,
          text: "Barang berhasil dihapus dari keranjang!",
          confirmButtonText: "OKE",
          customClass: {
            confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
          },
        });
      }
    });
  };

  removeCart = () => {
    let tempProducts = [...this.state.products];

    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus keranjang!",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
        cancelButton: "btn-custom btn-md btn-custom-boxshadow",
      },
      showClass: {
        popup: "animated jackInTheBox faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },
    }).then((result) => {
      if (result.value) {
        tempProducts.map((item) => (item.inCart = false));
        this.setState(
          {
            cartCount: 0,
            cart: [],
          },
          () => {
            this.shoppingValue();
          }
        );
        Swal.fire({
          title: "Terhapus!",
          imageUrl: "img/svg/trash.svg",
          imageWidth: 400,
          imageHeight: 200,
          text: "Keranjang berhasil diberihkan!",
          confirmButtonText: "OKE",
          customClass: {
            confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
          },
        });
      }
    });
  };

  handlePromo = (e) => {
    e.preventDefault();

    this.setState({
      codevalue: e.target.value,
    });
  };

  checkCoupon = () => {
    if (this.state.codevalue === "") {
      return Swal.fire({
        imageUrl: "img/svg/empty.svg",
        imageWidth: 400,
        imageHeight: 200,
        title: "Kosong",
        text: "Kamu belum memasukan kode promo apapun",
        confirmButtonText: "OKE",
        customClass: {
          confirmButton: "btn-custom btn-custom-md btn-custom-boxshadow-dark",
        },
      });
    } else {
      this.state.codepromo.map((promo) => {
        let timerInterval;
        return Swal.fire({
          title: "Proses pengecekan kupon",
          html: "Harap tunggu dalam <b></b> detik.",
          timer: 2000,
          timerProgressBar: true,
          showClass: {
            popup: "animated jackInTheBox faster",
          },
          hideClass: {
            popup: "animated fadeOutUp faster",
          },

          onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              const content = Swal.getContent();
              if (content) {
                const b = content.querySelector("b");
                if (b) {
                  b.textContent = Swal.getTimerLeft();
                }
              }
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            if (this.state.codevalue === promo.code) {
              Swal.fire({
                imageUrl: "img/svg/confirmed.svg",
                imageWidth: 400,
                imageHeight: 200,
                title: "Kode Promo Sah!",
                text: "Silahkan nikmati diskonnya yaa ^_^",
                showClass: {
                  popup: "animated jackInTheBox faster",
                },
                hideClass: {
                  popup: "animated fadeOutUp faster",
                },
                customClass: {
                  confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
                },
              });
              this.setState({
                cartTotal: this.state.cartTotal - promo.discountprice,
                discount: "10%",
                codevalue: "",
              });
            } else {
              Swal.fire({
                imageUrl: "img/svg/wrong.svg",
                imageWidth: 400,
                imageHeight: 200,
                title: "Maaf Kode Promomu Tidak Valid!",
                text: "Silahkan cek kembali kode promomu ^_^",
                customClass: {
                  confirmButton: "btn-custom btn-md btn-custom-boxshadow-dark",
                },
              });
              this.setState({
                codevalue: "",
              });
            }
          }
        });
      });
    }
  };

  checkCouponPaste = () => {
    let timerInterval;
    Swal.fire({
      title: "Proses pengecekan kupon",
      html: "Harap tunggu dalam <b></b> detik.",
      timer: 2000,
      timerProgressBar: true,
      showClass: {
        popup: "animated jackInTheBox faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },

      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        return Swal.fire({
          imageUrl: "img/svg/analysis.svg",
          imageWidth: 400,
          imageHeight: 200,
          title: "Copy Paste Yaa??",
          text: "Ketik manual kupon promonya yaa ^_^",
          confirmButtonText: "IYA MAAP",
          customClass: {
            confirmButton: "btn-custom btn-custom-md btn-custom-boxshadow-dark",
          },
        });
      }
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProduct: this.handleProduct,
          addtoCart: this.addtoCart,
          shoppingValue: this.shoppingValue,
          plusProduct: this.plusProduct,
          minusProduct: this.minusProduct,
          removeProduct: this.removeProduct,
          removeCart: this.removeCart,
          handlePromo: this.handlePromo,
          checkCoupon: this.checkCoupon,
          checkCouponPaste: this.checkCouponPaste,
          searchProduct: this.searchProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
