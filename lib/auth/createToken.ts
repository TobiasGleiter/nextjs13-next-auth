import jwt from 'jsonwebtoken';

export interface ICreateApiBearerTolen {
  payload: {
    username: string;
  };
}

export default function createApiBearerToken({
  payload,
}: ICreateApiBearerTolen) {
  const secretApiKey = process.env.SECRET_API_KEY as string;
  const token = jwt.sign(payload, secretApiKey, { expiresIn: '1m' });
  return token;
}
