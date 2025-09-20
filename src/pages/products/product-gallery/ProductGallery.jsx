import productsData from "@/api/data/products-data";
import ProductCard from "@/components/cards/ProductCard";
import { SearchBar } from "@/components/searchBar/SearchBar";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { products, isLoading } = productsContext;

    return (
        <div className="product-gallery">
            <SearchBar />
            <ProductNewItem/>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isLoading={isLoading}/>
            ))}
            <ProductCard>
                {productsData.map((productData) => (
                    <productCard key={productData.id} productData={productData} />

                ))}
            </ProductCard>

        </div>
    );
};

export default ProductGallery;