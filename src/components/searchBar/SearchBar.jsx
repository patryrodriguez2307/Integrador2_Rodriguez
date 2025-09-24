import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import Button from "../buttons/Button";
import "./searchBar.scss";

const SearchBar = ({ productsData, searchTerm, onChange, onClear }) => {
    let filteredProductsData = productsData;

    if (SearchBar.length>= 3){
        filteredProductsData = productsData.filter((productData) =>{
            const term = searchTerm.toLowerCase();
            return(
                productData.name.toLowerCase().includes(term) ||
                productData.description.toLowerCase().includes(term)
            );
        });
    };

    return(
        <div className="searchBar-box">
            <TextField
                value={searchTerm}
                onChange={onChange}
                placeholder="Buscá aquí tu antojo..."
                size="small"
                className="searcher" />
            <Button variant= "contained" onClick={onClear}>Limpiar</Button>

        </div>
    );
};
SearchBar.propTypes={
    productsData:PropTypes.string.isRequired,
    searchTerm:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    onClear:PropTypes.func.isRequired,
};

export default SearchBar;