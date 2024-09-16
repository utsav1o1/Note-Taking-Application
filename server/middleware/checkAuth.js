exports.isLoggedIn = function(req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(401).json({ message: 'You must log in to continue' });
}
 
