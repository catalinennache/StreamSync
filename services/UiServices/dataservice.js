
export default class UiDataService{
    constructor(){
        this.test = 2
    }

    async getUser(){
        return {
            userName:'Jhon Doe',
            followups: ['62a5f3713864d24f93a702de', '62a7af337fb3ed8ab605320b']
        }
    }

   async fetchSomeData(){
        var response = await fetch("/api/hello")
        return await response.json();
    }
}