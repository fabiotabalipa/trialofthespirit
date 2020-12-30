import axios from 'axios';

const api = axios.create({
  baseURL: 'http://swquotesapi.digitaljedi.dk/api/SWQuote',
});

export default api;
