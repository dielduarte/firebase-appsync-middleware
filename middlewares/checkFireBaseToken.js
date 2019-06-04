const admin = require('../utils/firebaseAdmin');

const checkFireBaseToken = async (req, res) => {
  try {
    const { idToken } = req.headers;
    const decodedToken = admin.auth().verifyIdToken(idToken);
  } catch (e) {
    res.end('invalid token');
  }
};

module.exports = checkFireBaseToken;
