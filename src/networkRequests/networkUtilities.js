const crypto = require('crypto');

export const encrypt = (text) => {
  const cipher = crypto.createCipher('aes-256-ctr', 'fjlka094324');
  let crypted = cipher.update(text, 'utf-8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

export const jsonToUrlEncode = (json) => {
  let url = '';
  Object.keys(json).forEach((key) => {
    url += `${key}=${json[key]}&`;
  });
  return url.substring(0, url.length - 1);
};
