const axios = require('axios');

module.exports = async function() {
  console.log('Fetching new github stargazers count…');

  const result = await axios.get('https://api.github.com/repos/11ty/eleventy');

  console.log(result.data.stargazers_count);

  return {
    stargazers: result.data.stargazers_count,
  };
};
