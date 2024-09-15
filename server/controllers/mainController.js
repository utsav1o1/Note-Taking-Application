// get homepage

exports.homepage = async (req, res)=> {
    const locals = {
        title:'NodeJs Notes',
        description:'This is a simple note taking app built with NodeJs and ExpressJs',
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}
// get about page
exports.about = async (req, res)=> {
    const locals = {
        title:'About NodeJs Notes',
        description:'This is about simple note taking app built with NodeJs and ExpressJs',
    }
    res.render('about', locals);
}