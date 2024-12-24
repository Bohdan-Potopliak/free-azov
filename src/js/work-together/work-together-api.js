import axios from 'axios';
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

export async function postRequest(formData) {
  const response = await axios.post(BASE_URL, formData);

  return response;
}
