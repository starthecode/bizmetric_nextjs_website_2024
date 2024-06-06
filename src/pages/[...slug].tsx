import { gql } from '@apollo/client';
import client from '../../client';

import { Contact } from '@/components/ContactUs/Contact';
import ParentPage from '@/components/page/ServicesPage/ParentPage';
import Blog from '@/components/TechTalks/Blog';
import { SinglePost } from '@/components/TechTalks/SinglePost';
import SingleSolution from '@/components/Solutions/SingleSolution';

export default function Page({ data, homePage }: any) {
  if (data?.nodeByUri?.title == 'Blogs') {
    return (
      <>
        <Blog />
      </>
    );
  } else if (data?.nodeByUri?.checkPage?.checkPageField) {
    if (data?.nodeByUri?.checkPage?.addPageField == 'services')
      return <ParentPage homePage={homePage} />;
  } else if (data?.nodeByUri?.title == 'Contact Us') {
    return <Contact />;
  } else if (data?.nodeByUri?.__typename == 'Post') {
    return <SinglePost postData={data?.nodeByUri} />;
  } else if (data?.nodeByUri?.__typename == 'Solution') {
    return <SingleSolution postData={data?.nodeByUri} />;
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
          ... on Solution {
            id
            title
            excerpt
            solutions_field {
              showSolutionVideo
              solutionVideo
              showSolution2Content
              solutionContent2Title
              solutionContent2TitleCursive
              solutionContent2SubTitle
              solutionContent2Text {
                listText1
                listText2
              }
              solutionContent2Image {
                mediaItemUrl
              }
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
        pages(first: 500) {
          nodes {
            uri
          }
        }
        posts(first: 1000) {
          nodes {
            uri
          }
        }
        solutions(first: 500) {
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

  const postSolutions = data?.solutions?.nodes
    .map((post: any) => post.uri)
    .map((uri: string) => ({
      params: {
        slug: uri.split('/').filter((segment: string) => segment !== ''),
      },
    }));

  const allPaths = [...pagePaths, ...postPaths, ...postSolutions];

  return {
    paths: allPaths,
    fallback: false,
  };
};
