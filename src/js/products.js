
//Store the data-panes!
const product = document.getElementById("product");
const accesories = document.getElementById("accesories");
const productModal = document.getElementById("productModal");
const productToast = document.getElementById("productToast");
const productWrapper = document.getElementById("product_wrapper");
const loader = document.getElementById("loader");

///Render Product Data to DOM
const renderProductList = (data, card, cloth, acc, modal, modalRender) => {
  //map data to product-list-wrapper
  data?.map((it) => {
    !it.isAccessory ? card(cloth, it) : card(acc, it);
  });
  loader.style.display = "none";
  productWrapper.style.display = "block";
  //render modal window
  modal(data, modalRender);
};

//Product Card Layout
const productLayoutCard = (dataPane, { ...args }) => {
  const { preview, name, price, id, brand, description } = args;
  if (dataPane !== null)
    return (dataPane.innerHTML += `
  <div data-id="${id}" class="shopping-item-card">
  <div class="shopping-card-image"><div class="shopping-card-quickshop">
  <button data-id="${id}" data-name="${name}" data-preview="${preview}" 
  data-price="${price}" data-brand="${brand}" data-description="${description}">
  Quick Shop</button></div><img src="${preview}" /></div><div class="shopping-card-body">
  <div class="product-name"><h2>${name}</h2></div>
  <div class="shopping-card-brand"><p>${brand}</p></div>
  <div class="shopping-card-price"><h4>Rs.${price}</h4></div></div></div>`);
};


const productModalRender = ({ ...args }) => {
  const { preview, name, price, id, brand, description } = args;
  return (productModal.innerHTML = `
  <div id="modal_overlay" class="product-modal-overlay"></div>
  <div class="product-modal" id="modal-${name}">
  <div class="product-modal-close"><i id="close_modal" class="fas fa-times"></i>
  </div><div class="product-modal-row"><div class="product-modal-col">
  <img src="${preview}" alt="product-image"/></div>
  <div class="product-modal-col modal--desc">
  <div class="product-modal-title"><h2>${name}</h2></div>
  <div class="product-modal-brand">${brand}</div><div class="product-modal-desc">
  <h4>Product Details : </h4><p>${description}</p></div>
  <div class="product-modal-price"><h4>Rs.${price}</h4></div>
  <div class="product-modal-cart"><button data-name="${name}" id="add_to_cart">
  <i id="cart_bag" data-name="${name}" class="fas fa-shopping-bag"></i>Додати у кошик</button></div></div></div>
  </div>`);
};

//Modal Data handler
const modalHandler = (data, modal) => {
  //retrive all the quickShopButtons
  const quickShop = [
    ...document.querySelectorAll(".new-shop-item")
  ];
  //attach eventlistner to the quickShop
  quickShop.map((it) => {
    it.addEventListener("click", () => {
      modal(it.dataset);
      productModal.classList.toggle("product-modal-active");
    });
  });
  //Model wrapper eventlistner
  productModal.addEventListener("click", (e) => {
    const {
      id,
      dataset: { name }
    } = e.target;
    if (id === "modal_overlay" || id === "close_modal") {
      productModal.classList.toggle("product-modal-active");
    }
    if (id === "add_to_cart" || id === "cart_bag") {
      productModal.classList.toggle("product-modal-active");
      productToast.children[1].innerHTML = `<span>${name}</span> - added to your imaginary cart!!!😁`;
      productToast.classList.toggle("product-toast--active");

      //remove the toast from the UI
      setTimeout(() => {
        productToast.classList.toggle("product-toast--active");
      }, 2000);
    }
  });
};

//Data list
const productList = [
  {
    id: "1",
    name: "Название",
    preview:
      '',
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "2",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "3",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "4",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "5",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "6",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "7",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "8",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "9",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  },
  {
    id: "10",
    name: "Название",
    preview:
      "",
    photos: [
      
    ],
    description:
      "описание",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "бренд",
    price: 'цена'
  }
];
//exec productItems
  renderProductList(
  productList,
  productLayoutCard,
  product,
  accesories,
  modalHandler,
  productModalRender
);