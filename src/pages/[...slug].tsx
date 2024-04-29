import { gql } from '@apollo/client';
import client from '../../client';

import { Contact } from '@/components/ContactUs/Contact';

export default function Page({ data }: any) {
  if (data?.nodeByUri?.title == 'Blogs') {
    return (
      <>
        <h2>This is blog page</h2>
      </>
    );
  } else if (data?.nodeByUri?.title == 'Contact Us') {
    return (
      <>
        <Contact />;
      </>
    );
  } else if (data?.nodeByUri?.title == 'Contact Us') {
    return <></>;
  } else {
    return '';
  }
}

export const getStaticProps = async (context: any) => {
  const uri = context?.params?.slug
    ? `/${context?.params?.slug.join('/')}`
    : '/';

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
          }
        }
        menuItems(where: { location: PRIMARY }, first: 45) {
          nodes {
            key: id
            parentId
            title: label
            url
            path
            description
            menuAcfFields {
              showMenuLabel
              menuLabelText
              showMegaMenu
              showServicesMegaMenu
              menuClasses
              menuIcon {
                mediaItemUrl
              }
            }
          }
        }
      }
    `,
    variables: { uri }, // Pass the "uri" variable here
  });

  // Your other logic here...

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages(first: 100) {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data?.pages?.nodes
      .map((page: any) => page.uri)
      .filter((uri: string) => uri !== '/')
      .map((uri: string) => ({
        params: {
          slug: uri.split('/').filter((segment: string) => segment !== ''),
        },
      })),
    fallback: false,
  };
};
