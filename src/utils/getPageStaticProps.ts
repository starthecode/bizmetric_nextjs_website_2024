import { getPages } from '@/queries/graphqlQuery';
import client from '../../client';

export const getPageStaticProps = async (context: any) => {
  let data; // Declare the data variable outside the try block

  try {
    const response = await client.query({
      query: getPages,
    });
    data = response.data; // Assign the data from the response
    return {
      props: {
        homePage: data.pageBy,
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        homePage: null, // You might want to handle this case differently
        data, // Use the data here as well if needed
      },
      revalidate: 10,
    };
  }
};
