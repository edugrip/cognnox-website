var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('site/index');
});
router.get('/web_development', function(req, res, next) {
    res.render('site/web_development');
});
router.get('/about', function(req, res, next) {
    res.render('site/about');
});
router.get('/blog', function(req, res, next) {
    res.render('site/blog');
});
router.get('/contact', function(req, res, next) {
    res.render('site/contact');
});
router.get('/services', function(req, res, next) {
    res.render('site/services');
});
router.get('/blockchain', function(req, res, next) {
    res.render('site/blockchain');
});
router.get('/responsive', function(req, res, next) {
    res.render('site/responsive');
});
router.get('/react', function(req, res, next) {
    res.render('site/react');
});
router.get('/web_development', function(req, res, next) {
    res.render('site/web_development');
});
router.get('/uiuxdesigner', function(req, res, next) {
    res.render('site/uiuxdesigner');
});
router.get('/flutter', function(req, res, next) {
    res.render('site/flutter');
});
router.get('/androidappdevelopment', function(req, res, next) {
    res.render('site/androidappdevelopment');
});
router.get('/flutter', function(req, res, next) {
    res.render('site/flutter');
});
module.exports = router;