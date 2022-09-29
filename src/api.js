import axios from 'axios';

let code = '4e6f5b7782434d3c9c189660a6a6ca8f';


const getData = async ()=>{
    const api=  await axios.get(`http://www.omdbapi.com/?s=mafia&apikey=fc15c048`);
    return api.data.Search
}

export {getData}



