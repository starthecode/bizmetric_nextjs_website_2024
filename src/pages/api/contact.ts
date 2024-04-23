import type { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '../../services/mailService';

type DataProps = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataProps>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    form: { email, emailDesc },
  } = req.body;

  if (!email || !emailDesc) {
    return res.status(400).json({ message: 'Missing email or emailDesc' });
  }

  try {
    await sendMail('TEST Email', email, emailDesc);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}
