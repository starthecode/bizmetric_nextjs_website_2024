import { NextApiRequest, NextApiResponse } from 'next';
import useFetch from './useFetch';

type Data = {
  answerName: string;
  ipAddress: string;
};

interface LocationResponse {
  city: string;
  country: string;
  // Add other properties as needed
}

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

    const locationRes = await fetch(
      `https://ipinfo.io/${ipAddress}?token=${process.env.IPINFO_IO_TOKEN}`
    );

    const locationData = (await locationRes.json()) as LocationResponse;

    const city = locationData.city ? locationData.city : 'N/A';
    const country = locationData.country ? locationData.country : 'N/A';

    // Prepare the data to be sent to WordPress
    const pollData = {
      answerName,
      ipAddress,
      city,
      country,
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
