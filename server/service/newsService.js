const axios = require('axios');

const fetchNews = async () => {
    try {
        const response = await axios.get('https://newsapi.ai/api/v1/article/getArticles', {
            params: {
                apiKey: process.env.NEWS_API_KEY,
                keywords: 'IT, AI, technology',
                language: 'en',
            },
        });

        // 데이터 가공: 필요한 필드만 추출
        const articles = response.data.articles.map((article) => ({
            title: article.title,
            description: article.description,
            url: article.url,
            publishedAt: article.publishedAt,
            source: article.source.name,
        }));

        return articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Failed to fetch news');
    }
};

module.exports = { fetchNews };
