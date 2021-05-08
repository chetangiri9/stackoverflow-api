import axios from 'axios';

export const fetchQuestions = page =>
  axios({
    method: 'GET',
    url:
      'https://api.stackexchange.com/2.2/questions?site=stackoverflow&filter=withBody',
    params: { page },
  });
