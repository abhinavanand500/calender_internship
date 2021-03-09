import axios from "axios";
const instance = axios.create({
    // baseURL: "https://www.presencex.com/REVA/school/gettimetable",
    baseURL: "https://www.presencex.com/REVA/school/gettimetable",
});
export default instance;
