import { gql } from '@apollo/client';

// export const getMenu = gql`
//   query MenuQuery {
//     menuItems(where: { location: PRIMARY }, first: 15) {
//       nodes {
//         key: id
//         parentId
//         title: label
//         url
//         path
//       }
//     }
//   }
// `;

export const getPages = gql`
  query HomeQuery {
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
    pageBy(uri: "/") {
      id
      title
      HomePage {
        showSlider
        homeSlider {
          fieldGroupName
          homeSliderImage {
            sourceUrl
          }
          homeSliderMiniText
          homeSliderTitle
          homeSliderDesc
          homeSliderBtn1Text
          homeSliderBtn1Url
          homeSliderBtn2Text
          homeSliderBtn2Url
          services1
          services2
          services3
          addVideo
          addVideoUrl
        }
        partnerLogo {
          partnerLogoImage {
            sourceUrl
          }
        }
        industriesSection {
          industryIcon
          industryTitle
          industryId
        }
        testimonialsItems {
          testimonialsTitle
          testimonialsSub
          testimonialsDesc
        }
      }
    }
    pages(where: { parent: 0, in: [157, 159, 161] }) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`;

// export const getPageByUri = gql`
//   query PageQuery {
//     pageBy(uri: uri) {
//       id
//       title
//     }
//   }
// `;
