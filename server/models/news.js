const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    publishedAt: Date,
    source: String,
});

const News = mongoose.model('News', newsSchema);

newArticle.save()
    .then(() => console.log('News article saved!'))
    .catch((error) => console.error('Error saving article:', error));


module.exports = News;
