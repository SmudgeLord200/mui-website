import api from "./api";

class aboutAPI {
    getAbout = () => api.get("/api/abouts");
}

export default new aboutAPI();