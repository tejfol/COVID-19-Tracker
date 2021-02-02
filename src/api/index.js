import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = response;
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
        return modifiedData;
    } catch (e) {
        console.log(e);
    }
};
