export class OMDB {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async search(title, type, page) {
        const apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}&type=${type}&page=${page}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error searching for movies:", error);
            throw new Error("Failed to search for movies");
        }
    }

    async getMovie(movieId) {
        const apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}&i=${movieId}`;
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