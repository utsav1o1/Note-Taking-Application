exports.dashboard = async (req, res)=> {
    const locals = {
        title:'Dashboard',
        description:'This is a simple note taking app built with NodeJs and ExpressJs',
        userName: 'Utsav Karki',
    }
    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    });
}