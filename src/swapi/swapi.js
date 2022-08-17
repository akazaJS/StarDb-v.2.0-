export default class SwapiService{

    _apiBase='https://swapi.dev/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}/${url}/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `,received ${res.status}`);
        }
        return await res.json()
    }

    async getItems(url){
        const res =await this.getResource(`${url}`)
        return res.results
    }

    async getAllPeople(){
        const res =await this.getResource(`/people/`)
        return res.results
    }
    async getAllPlanets(){
        const resPlanets=await this.getResource(`/planets/`)
        return resPlanets.results
    }
    async getAllStarships(){
        const res=await this.getResource(`/starships/`)
        return res.results
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}`)
    }
    getStarship(id){
        return this.getResource(`/starships/${id}`)
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`)
    }
}

