import { LocalFireDepartment } from "@mui/icons-material";

const KEY_PRODUCTS = "products";

const initialize = () => {
    const initialProductsData = [
            {
        image: {image src="/images/products/cupcake-americana.jpg"},
        name: "Delicia de Crema Americana",
        codigo: {id},
        description: lorem,
        stock: 24,
        price: "$250",
         }

          {
        image: {image src="/images/products/cupcake-arandanos.jpg"},
        name: "Tropezones de Arándanos",
        codigo: {id},
        description: lorem,
        stock: 24,
        price: "$450",
         }
          {
        image: {image src="/images/products/cupcake-caramel.jpg"},
        name: "Delicia de Caramelo",
        codigo: {id},
        description: lorem,
        stock: 24,
        price: "$350",
         }

          {
        image: {image src="/images/products/cupcake-chantilly.jpg"},
        name: "Nube de Chantilly",
        codigo: {id},
        description: lorem,
        stock: 24,
        price: "$300",
         }

          {
        image: {image src="/images/products/cupcake-cream.jpg"},
        name: "Delicia de Vainilla",
        codigo: {id},
        description: lorem,
        stock: 24
        price: "$250",
         }

          {
        image: {image src="/images/products/cupcake-darkchocolate.jpg"},
        name: "Darkcholate",
        codigo: {id},
        description: lorem,
        stock: 15,
        price: "$400",
         }

          {
        image: {image src="/images/products/cupcake-de-Naranja.jpg"},
        name: "Delicia de Naranja Dulce",
        codigo: {id},
        description: lorem,
        stock: 20,
        price: "$250",
         }

          {
        image: {image src="/images/products/cupcake-pistacho.jpg"},
        name: "Delicia de Pistacho",
        codigo: {id},
        description: lorem,
        stock: 13,
        price: "$750",
         }

          {
        image: {image src="/images/products/cupcake-Emperatriz.jpg"},
        name: "Emperatriz",
        codigo: {id},
        description: lorem,
        stock: 36,
        price: "$350",
         }

          {
        image: {image src="/images/products/cupcake-for-kids.jpg"},
        name: "Box para Niños",
        codigo: {id},
        description: lorem,
        stock: 7,
        price: "$1250",
         }

          {
        image: {image src="/images/products/cupcake-frambuesa.jpg"},
        name: "Delicia de frambuesa",
        codigo: {id},
        description: lorem,
        stock: 28,
        price: "$450",
         }

          {
        image: {image src="/images/products/cupcake-frutos-del-bosque.jpg"},
        name: "Frutos del Bosque",
        codigo: {id},
        description: lorem,
        stock: 22,
        price: "$500",
         }

          {
        image: {image src="/images/products/cupcake-frutos-secos.jpg"},
        name: "Delicia de Crema Americana",
        codigo: {id},
        description: lorem,
        stock: 17,
        price: "$750",
         }

          {
        image: {image src="/images/products/cupcake-Halloween.jpg"},
        name: "Sweet Halloween",
        codigo: {id},
        description: lorem,
        stock: 15,
        price: "300",
         }

          {
        image: {image src="/images/products/cupcake-love.jpg"},
        name: "San Valentín Box",
        codigo: {id},
        description: lorem,
        stock: 10,
        price: "$1450",
         }

          {
        image: {image src="/images/products/cupcake-Oreo.jpg"},
        name: "Sorpresa Oreo",
        codigo: {id},
        description: lorem,
        stock: 28,
        price: "$400",
         }

          {
        image: {image src="/images/products/cupcake-para-te.jpg"},
        name: "5 O'clock Box",
        codigo: {id},
        description: lorem,
        stock: 10,
        price: "$2500",
         }

          {
        image: {image src="/images/products/cupcake-party.jpg"},
        name: "Party Box",
        codigo: {id},
        description: lorem,
        stock: 12,
        price: "$5300",
         }

          {
        image: {image src="/images/products/cupcake-redvelvert.jpg"},
        name: "Mini Redvelvert",
        codigo: {id},
        description: lorem,
        stock: 36,
        price: "$550",
         }

          {
        image: {image src="/images/products/cupcake-salado.jpg"},
        name: "Cheese Cupcake",
        codigo: {id},
        description: lorem,
        stock: 28,
        price: "$350",
         }

          {
        image: {image src="/images/products/cupcake-tuti-fruti.jpg"},
        name: "Tuti-Fruti",
        codigo: {id},
        description: lorem,
        stock: 18,
        price: "$300",
         }

          {
        image: {image src="/images/products/cupcake-salado.jpg"},
        name: "Caprese",
        codigo: {id},
        description: lorem,
        stock: 20,
        price: "$550",
         }


      ]
        
        

    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(initialProductsData));

    return initialProductsData;
};

const getProductsDataFromLocalStorage = () => {
    const data = localStorage.getProduct(KEY_PRODUCTS);
    return JSON.parse(data) || initialize();
};

const fetchProductData = () => {
    return new Promise((resolve) => {
        resolve(getProductsDataFromLocalStorage());
    });
};

export default {
    fetchProductData,
};