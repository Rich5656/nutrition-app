// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios = require('axios');

const handler = async (event) => {
  
  const query = event.queryStringParameters.searchedFood;
  const pageSize = '10';
  const API_KEY = process.env.API_KEY;
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(API_KEY)}&query=${encodeURIComponent(query)}&pageSize=${encodeURIComponent(pageSize)}`;
  
  try {
    const {data} = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data}) 
    };
  }
}

module.exports = { handler }
