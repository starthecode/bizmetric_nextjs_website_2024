// import { useEffect, useState } from 'react';

// export default function useFetch(url: any) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
//     async function loadData() {
//       const response = await fetch(apiDomain + url);

//       if (!response.ok) {
//         return 'Not Working';
//       }

//       const posts = await response.json();

//       setData(posts);
//     }

//     loadData();
//   }, [url]);
//   return data;
// }

import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
    async function loadData() {
      setIsLoading(true);
      try {
        const response = await fetch(apiDomain + url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const posts = await response.json();
        setData(posts);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('An error occurred')
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [url]);

  return { data, error, isLoading };
}
