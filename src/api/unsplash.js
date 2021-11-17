import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6HDq47J0gv-SG1tc-a6-_saEs3N4sYILPaqXhJkiR_Q',
  },
});
