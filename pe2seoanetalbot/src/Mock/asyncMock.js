// const products = [
//     {
//         id: 1,
//         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         price: 109.95,
//         description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         stock: 5,
//     },
//     {
//         id: 2,
//         title: "Mens Casual Premium Slim Fit T-Shirts ",
//         price: 22.3,
//         description:
//         "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         image:
//         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         stock: 2,
//     },
//     {
//         id: 3,
//         title: "Mens Cotton Jacket",
//         price: 55.99,
//         description:
//         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         stock: 4,
//     },
//     {
//         id: 4,
//         title: "Mens Casual Slim Fit",
//         price: 15.99,
//         description:
//         "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         stock: 0,
//     },
//     {
//         id: 5,
//         title:
//         "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         price: 695,
//         description:
//         "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//         stock: 1,
//     },
// ];

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products);
//         }, 2000);
//     });
// };

// export const getProductById = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find((product) => product.id === id));
//         }, 2000);
//     });
// };

// export const getProductByCategory = (category) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter((product) => product.category === category));
//         }, 2000);
//     });
// };



const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        stock: 5,
        category: "sweaters",
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        stock: 2,
        category: "pantalones",
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        stock: 4,
        category: "sweaters",
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        stock: 0,
        category: "pantalones",
    },
    {
        id: 5,
        title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        stock: 1,
        category: "complementos",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id));
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 2000);
    });
};