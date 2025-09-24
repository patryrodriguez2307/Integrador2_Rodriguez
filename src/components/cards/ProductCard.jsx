import { Text } from "@/components/texts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ButtonPrimary } from "../buttons";
import "./product-card.scss";

const ProductCard =(productData ) => {
    return (
        <>
            <div className="product-card">
                <img className="product-card__image"src={productData.thumbnail} alt={productData.name} />
                <Text variant="h3" className="product-card__title">{productData.name}</Text>
                <Text variant="p" className="product-card__code">Código: {productData.id}</Text>
                <Text variant="p" className="product-card__description">{productData.description}</Text>
                <Text variant="p" className="product-card__price">${productData.price.toFixed(2)}</Text>

                <div className="action-card">
                    <ButtonPrimary className="product-item__add" size="sm" onClick={handleAddArticle}>
                        <AddShoppingCartIcon/>
                    </ButtonPrimary>
                    <ButtonPrimary className="product-item__remove" size="sm" onClick={handleSubtractArticle}>
                        <RemoveCircleOutlineIcon/>
                    </ButtonPrimary>
                </div>
            </div>
        </>

    );
};
export default ProductCard;