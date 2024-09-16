const Note = require('../models/Note');
const mongoose = require('mongoose');

exports.dashboard = async (req, res) => {
    let perPage = 12;
    let page = req.query.page || 1;

    const locals = {
        title: 'Dashboard',
        description: 'This is a simple note taking app built with NodeJs and ExpressJs',

    }

    const notes = await Note.aggregate([
        { $sort: { updatedAt: -1 } },
        { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
        
        {
            $project: {
                title: { $substr: ["$title", 0, 30] },
                body: { $substr: ["$body", 0, 100] },
            },
        }
    ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();


   
        const count = await Note.countDocuments({ user: req.user.id });

    res.render('dashboard/index', {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage)
    });

   
}

exports.add = (req, res) => {

    res.render('dashboard/add', {
        layout: '../views/layouts/dashboard'
    });
}

exports.addNote = async (req, res) => {
    console.log(req.body);
    const { title, content } = req.body;
    const note = new Note({
        title,
        content,
        user: req.user.id
    });
    await note.save();
    res.redirect('/dashboard');
}