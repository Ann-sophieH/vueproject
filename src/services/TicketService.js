import axios from "axios";

const clientApiService = axios.create({ // const want link naar data blijft altijd gelijk
    baseURL:'https://my-json-server.typicode.com/Ann-sophieH/fakejson',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
    }
})
export default{
    getEvents(perPage, page){ //paginatie toevoegen adhv 2 parameters hieronder (duidelijker in docu json)
        return clientApiService.get('/events?_limit=' + perPage + '&_page=' + page) // opsplitsen link zo kan je verschillende variabelen meegevn
    }, //limit in docum van json ontvangt aantal stuks per pagina// parameter altijd voorafgg door "?" + samenvoegen adhv &_
    getEvent(id){
        return clientApiService.get('/events/'+ id) //1 event per keer
    },
}