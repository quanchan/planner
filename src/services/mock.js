import axios from 'axios';

const fetchMockData = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
export default fetchMockData();