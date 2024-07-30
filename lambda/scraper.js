const axios = require('axios');
const cheerio = require('cheerio');

async function getPetCareAdvice() {
    try {
        const { data } = await axios.get('https://example.com/pet-care-advice');
        const $ = cheerio.load(data);
        let adviceList = [];

        $('.advice-item').each((index, element) => {
            adviceList.push($(element).text());
        });

        if (adviceList.length === 0) {
            throw new Error('No advice found');
        }

        return adviceList[Math.floor(Math.random() * adviceList.length)];
    } catch (error) {
        console.error('Error fetching pet care advice:', error);
        return 'Sorry, I couldn\'t fetch pet care advice at the moment.';
    }
}

module.exports = { getPetCareAdvice };
