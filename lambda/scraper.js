const axios = require('axios');
const cheerio = require('cheerio');

async function getPetCareAdvice() {
    try {
        console.log('Fetching pet care advice...');
        const { data } = await axios.get('https://www.petmd.com/dog/care');
        console.log('Data fetched successfully.');

        const $ = cheerio.load(data);
        let adviceList = [];

        $('.node-title a').each((index, element) => {
            adviceList.push($(element).text());
        });

        console.log('Advice list:', adviceList);

        if (adviceList.length === 0) {
            throw new Error('No advice found');
        }

        const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
        console.log('Selected advice:', randomAdvice);
        return randomAdvice;
    } catch (error) {
        console.error('Error fetching pet care advice:', error.message);
        return 'Sorry, I couldn\'t fetch pet care advice at the moment.';
    }
}

module.exports = { getPetCareAdvice };
