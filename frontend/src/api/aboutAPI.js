import api from "./api";

class aboutAPI {
    getAbout = () => api.get("/api/abouts?sort[0]=date");
    //&locale=
}

export default new aboutAPI();