import { Text } from '@/components/Home/Headings/Text';
import React from 'react';
import { ChildPageCards } from './ChildPageCards';
import { BoxesItems } from './BoxesItems';
import { OverviewItems } from './OverviewItems';
import { WhySection } from './WhySection';
import { ApproachSection } from './ApproachSection';

const ParentPage = ({ postData }: any) => {
  if (postData?.PageUnderConstructionStatus?.pageUnderConstruction === true) {
    return (
      <div className="text-center my-10">
        <h1 className="text-2xl uppercase">Page Under Construction</h1>
      </div>
    );
  }

  return (
    <section className="container mt-40">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <div className="w-[700px]">
          <Text
            small={''}
            main={postData?.ServicesAcfFields?.serviceTitle1}
            specialTitle={postData?.ServicesAcfFields?.serviceSpecialTitleText}
            classes={'font-inter'}
            desc={postData?.ServicesAcfFields?.serviceText1}
          />
        </div>
      </div>

      <BoxesItems BoxItem={postData?.ServicesAcfFields?.boxesItemsX3} />

      <OverviewItems
        title1={postData?.ServicesAcfFields?.serviceTitle2}
        title2={postData?.ServicesAcfFields?.serviceSmallTitle2}
        OvItems={postData?.ServicesAcfFields?.overviewSection}
      />

      <WhySection
        WyItemsImg={postData?.ServicesAcfFields?.fourthSectionImage}
        WyItemsSmallTitle={postData?.ServicesAcfFields?.fourthSectionSmallTitle}
        WyItemsMainTitle={postData?.ServicesAcfFields?.fourthSectionMainTitle}
        WyItemsSpecialTitle={
          postData?.ServicesAcfFields?.fourthSectionSpecialTitle
        }
        WyItemsDesc={postData?.ServicesAcfFields?.fourthSectionDesc}
        WyItemsList={postData?.ServicesAcfFields?.fourthSectionList}
      />

      <ApproachSection
        ApproachSmallTitle={postData?.ServicesAcfFields?.fifthSectionSmallTitle}
        ApproachMainTitle={postData?.ServicesAcfFields?.fifthSectionMainTitle}
        ApproachList={postData?.ServicesAcfFields?.fifthSectionListItems}
      />

      {postData?.children && <ChildPageCards childData={postData?.children} />}
    </section>
  );
};

export default ParentPage;
