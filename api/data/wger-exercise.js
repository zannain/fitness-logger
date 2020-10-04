const { RESTDataSource } = require('apollo-datasource-rest');

class WgerExercise extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://wger.de/api/v2/';
    }
    async getExerciseCategories() {
        const data = await this.get(`exercisecategory`, {format: 'json', status: '2'});
        return data.results;
    }

    async getAllExercises() {
        const data = await this.get(`exercise`, {format: 'json', status: '2'});
        return data.results;
    }

    async getExercise(id) {
        const data = await this.get(`exercise/${id}`, {format: 'json',  status: '2'});
        return data;
    }

    async getEquipment(id) {
        const data = await this.get(`equipment/${id}`, {format: 'json',  status: '2'});
        return data;
    }
    async getMuscle(id) {
        const data = await this.get(`muscle/${id}`, {format: 'json',  status: '2'});
        return data;
    }

    async getAllMuscleGroups() {
        const data = await this.get(`muscle`, { format: 'json', status: '2'});
        return data.results;
    }
    async getAllEquipment() {
        const data = await this.get(`equipment`, { format: 'json', status: '2'});
        return data.results;
    }
}

module.exports = WgerExercise;