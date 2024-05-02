import { gql } from '@apollo/client';
import client from '../../client';

import { Contact } from '@/components/ContactUs/Contact';
import ParentPage from '@/components/page/ServicesPage/ParentPage';
import Blog from '@/components/TechTalks/Blog';
import { SinglePost } from '@/components/TechTalks/SinglePost';

export default function Page({ data }: any) {
  console.log('test', data?.nodeByUri);

  if (data?.nodeByUri?.title == 'Blogs') {
    return (
      <>
        <Blog />
      </>
    );
  } else if (data?.nodeByUri?.checkPage?.checkPageField) {
    if (data?.nodeByUri?.checkPage?.addPageField == 'services')
      return <ParentPage />;
  } else if (data?.nodeByUri?.title == 'Contact Us') {
    return <Contact />;
  } else if (data?.nodeByUri?.__typename == 'Post') {
    return <SinglePost postData={data?.nodeByUri} />;
  } else {
    <>test page</>;
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
            excerpt
            checkPage {
              checkPageField
              addPageField
            }
          }
          ... on Post {
            id
            title
            excerpt
            content
            date
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
            singleBlogFields {
              customTextBox1
            }
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
        posts(first: 100) {
          nodes {
            uri
          }
        }
      }
    `,
  });

  // return {
  //   paths: data?.pages?.nodes
  //     .map((page: any) => page.uri)
  //     .filter((uri: string) => uri !== '/')
  //     .map((uri: string) => ({
  //       params: {
  //         slug: uri.split('/').filter((segment: string) => segment !== ''),
  //       },
  //     })),
  //   fallback: false,
  // };

  const pagePaths = data?.pages?.nodes
    .map((page: any) => page.uri)
    .filter((uri: string) => uri !== '/')
    .map((uri: string) => ({
      params: {
        slug: uri.split('/').filter((segment: string) => segment !== ''),
      },
    }));

  const postPaths = data?.posts?.nodes
    .map((post: any) => post.uri)
    .map((uri: string) => ({
      params: {
        slug: uri.split('/').filter((segment: string) => segment !== ''),
      },
    }));

  const allPaths = [...pagePaths, ...postPaths];

  return {
    paths: allPaths,
    fallback: false,
  };
};
