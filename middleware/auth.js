const jwt = require('jsonwebtoken');
module.exports = function(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({error:true,message:'Authorization header (\'Bearer token\') not found'});
  const token = auth.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({error:true,message:'Invalid JWT token'});
    req.user = decoded;
    next();
  });
};
