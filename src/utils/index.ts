import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export function genToken(payload: object) {
  const privateKey = fs.readFileSync(path.resolve(__dirname, '../config/key/private.key'));
  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    // 2天过期
    expiresIn: 60 * 60 * 24 * 2,
  });
}

export function verifyToken(token: string) {
  const publicKey = fs.readFileSync(path.resolve(__dirname, '../config/key/public.key'));
  return new Promise((resolve, reject) => {
    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, function (err, payload) {
      if (err) {
        reject(false);
      }
      resolve(payload);
    });
  });
}
