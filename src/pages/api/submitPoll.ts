import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answerName: string;
  ipAddress: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string } | { error: string }>
) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const { answerName } = req.body;
    const ipAddress =
      req.headers['x-real-ip'] ||
      req.socket.localAddress ||
      req.socket.remoteAddress ||
      (req.socket.localAddress as any)?.socket?.remoteAddress;

    // Your WordPress REST API endpoint
    const apiUrl = 'https://test.experimentalapp.xyz/wp-json/wp/v2/submit-poll';

    // Prepare the data to be sent to WordPress
    const pollData = {
      answerName,
      ipAddress, // Include the client's IP address
    };

    // Send the data to WordPress using fetch
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer YOUR_WORDPRESS_API_TOKEN`,
      },
      body: JSON.stringify(pollData),
    });

    if (response.ok) {
      const responseData = await response.json();
      res.status(200).json({ message: responseData.message });
    } else {
      // Error creating post
      const errorData = await response.json();
      res.status(response.status).json({ error: errorData.message });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
