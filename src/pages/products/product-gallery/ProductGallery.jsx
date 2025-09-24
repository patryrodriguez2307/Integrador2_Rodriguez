import ProductCard from "@/components/cards/ProductCard.jsx";
import { SearchBar } from "@/components/searchBar/SearchBar.jsx";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import ProductItem from "../product-item/ProductItem";
import ProductNewItem from "../product-new-item/ProductNewItem";
import "./product-gallery.scss";

const ProductGallery = () => {
    const { productsContext } = useContext(AppContext);
    const { productsData, isLoading } = productsContext;

    const filteredProductsData= productsData;

    return (
        <div className="product-gallery">
            <SearchBar />
            <ProductNewItem/>
            {filteredProductsData.length === 0 ? (
                <Text variant="p" className="no-result">No se encontró el producto</Text>
            ) : (
                filteredProductsData.map((productData) => (
                    <ProductItem
                        key={productData.id}
                        product={productData}
                        isLoading={isLoading}/>
                ))
            )};
            <ProductCard>
                {productsData.map((productData) => (
                    <productCard key={productData.id} productData={productData} />

                ))}
            </ProductCard>

        </div>
    );
};

export default ProductGallery;