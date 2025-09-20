import "./searchBar.scss";

export const SearchBar = ({ products, setProducts }) => {

    return(
        <div className="searchBar-box">
            <input
                type={"text"}
                name={products}
                placeholder="Busca aquí tu cupcake..."
                onChange={(e)=>setProducts(e.target.value)} />

        </div>
    );
};