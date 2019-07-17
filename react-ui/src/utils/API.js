import axios from "axios";



export default {
    saveEntry: function(entryData, token){
        return axios.post("/api/authenticated/entries", entryData, {
            headers: {'access-token': token}
        });
    },

    updateEntry: function(entryData, token){
        return axios.put("/api/authenticated/entries", entryData, {
            headers: {'access-token': token}
        })
    },

    getEntries: function(userID,token){
        return axios.get("/api/authenticated/entries", {
            headers: {'access-token': token},
             params: {userID: userID }
            })
    },
    getEntriesByDate: function(userID, date){
        return axios.get("/api/authenticated/entries", {params: {user: userID, date: date}})
    },
    getEntriesByTag: function(userID, tag){
        return axios.get("/api/authenticated/entries", {params: {user: userID, tags: tag}})
    },

    deleteEntry: function(entryID, token){
        return axios.delete("/api/authenticated/entries", {
            headers: {'access-token': token},
            data: {noteID: entryID}
        })
    },


    register: function(userData){
        return axios.post("/api/users/register", userData)
    },

    login: function(userData) {
        return axios.post("/api/users/login", userData)
    },
    
};
