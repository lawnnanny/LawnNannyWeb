const crypto = require('crypto');

const encrypt = (text) => {
  const cipher = crypto.createCipher('aes-256-ctr', 'fjlka094324');
  let crypted = cipher.update(text, 'utf-8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

export default encrypt;
