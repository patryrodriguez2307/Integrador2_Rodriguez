import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./vision.scss";

const Vision = () => {
    const { institutionContext } = useContext(AppContext);
    const { institution } = institutionContext;

    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Visión</Text>
            <div className="vision-content">
                <Text className="vision__description" variant="p">{institution.about.vision}</Text>
                <img className="vision__image" src={"/images/about/vision.jpg"} alt="Imagen de la visión de la empresa"/>
            </div>
        </section>
    );
};

export default Vision;