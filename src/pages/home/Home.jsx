import { Text } from "@/components/texts";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Text className="home__title" variant="h2">Especiales de esta semana...</Text>
            <img className="home__image" src={"/images/products/cupcake-darkchocolate.jpg"} alt="cupcake-darkchocolate" />
            <Text className="home__image__title" variant="h4">DarkChocolate</Text>
            <img className="home__image" src={"/images/products/cupcake-Emperatriz.jpg"} alt="cupcake-Emperatriz" />
            <Text className="home__image__title" variant="h4">Emperatriz</Text>
            <img className="home__image" src={"/images/products/cupcake-love.jpg"} alt="cupcake-love" />
            <Text className="home__image__title" variant="h4">Sweet Love</Text>
        </div>
    );
};

export default Home;