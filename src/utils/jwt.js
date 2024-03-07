import jwt from 'jsonwebtoken';

//const secret = 'StateBankOfIndia';
const secret = process.env.JWT_SECRET_KEY; // Replace with a strong, secret key

export const generateToken = (payload) => {
  console.log(secret);
  return  jwt.sign(payload, secret, { expiresIn: '5d' }); // Adjust the expiration time as needed
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    return decoded;
  } catch (error) {
    // Token verification failed
    console.log(error);
    return null;
  }
};