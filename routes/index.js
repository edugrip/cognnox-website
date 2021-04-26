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
router.get('/internetofthings', function(req, res, next) {
    res.render('site/internetofthings');
});
router.get('/blockchaindevelopmentblog', function(req, res, next) {
    res.render('site/blockchaindevelopmentblog');
});
router.get('/androidappblog', function(req, res, next) {
    res.render('site/androidappblog');
});
router.get('/iosappdevelopmentblog', function(req, res, next) {
    res.render('site/iosappdevelopmentblog');
});
router.get('/reactnativeappblog', function(req, res, next) {
    res.render('site/reactnativeappblog');
});
router.get('/phonegapappblog', function(req, res, next) {
    res.render('site/phonegapappblog');
});
router.get('/webdesignblog', function(req, res, next) {
    res.render('site/webdesignblog');
});
router.get('/blog2', function(req, res, next) {
    res.render('site/blog2');
});
router.get('/wordpressblog', function(req, res, next) {
    res.render('site/wordpressblog');
});
router.get('/ecommercedevelopment', function(req, res, next) {
    res.render('site/ecommercedevelopment');
});
router.get('/frontdeveloperblog', function(req, res, next) {
    res.render('site/frontdeveloperblog');
});
router.get('/backenddeveloperblog', function(req, res, next) {
    res.render('site/backenddeveloperblog');
});
router.get('/fullstackdevelopmentblog', function(req, res, next) {
    res.render('site/fullstackdevelopmentblog');
});

module.exports = router;