export class OMDB {
    static apiKey: any;
    constructor(apiKey: any) {
        OMDB.apiKey = apiKey;
    }

   static async search(title: any, type: any, page: any) {
        const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB.apiKey}&s=${title}&type=${type}&page=${page}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error searching for movies:", error);
            throw new Error("Failed to search for movies");
        }
    }

    static async getMovie(movieId: any) {
        const apiUrl = `http://www.omdbapi.com/?apikey=${OMDB.apiKey}&i=${movieId}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching movie details:", error);
            throw new Error("Failed to fetch movie details");
        }
    }
}