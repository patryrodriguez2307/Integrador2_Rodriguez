import { MissionDescrip } from "./data/mission-descrip.js";
import { ValuesDescrip } from "./data/values-descrip.js";
import { VisionDescrip } from "./data/vision-descrip.js";

const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Anita Cupcakes",
        address: "Av. Dardo Rocha 123, Monte Grande, Argentina",
        phone: "011 15 264 3323",
        email: "pedidos@anitacupcakes.com",
        about: {
            mission: MissionDescrip,
            vision: VisionDescrip,
            values: ValuesDescrip,
        },

    };

    localStorage.setItem(KEY_INSTITUTION, JSON.stringify(initialData));

    return initialData;
};

const getInstitutionFromLocalStorage = () => {
    const data = localStorage.getItem(KEY_INSTITUTION);
    return JSON.parse(data) || initialize();
};

const fetchInstitution = () => {
    return new Promise((resolve) => {
        resolve(getInstitutionFromLocalStorage());
    });
};

export default {
    fetchInstitution,
};