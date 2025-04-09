import React from 'react';
import ArticlePreview from './ArticlePreview';

interface NewsBlockProps{
    header: string;
    // titles: string[];
    // paragraphs: string[];
}

const NewsBlock: React.FC<NewsBlockProps> = ({ header }) => {
return (
    <div className='col-span-full'>
        <h1 className='text-[32px] font-semibold mb-[40px]'>{header}</h1>

        <ArticlePreview
              title="2024 City of Boston SucessLink Program"
              paragraphs={[
                "Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.", 
                "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing  funding for employment opportunities to youth participants between the  ages of 14-18, and young adults between the ages of 19-24.", 
                "We are looking forward to employing 11 youth workers and 1 young adult  worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.", 
                
              ]}
              link="/"

              />
            <ArticlePreview
              title="2024 Lorem ipsum dolor sit amet consectetur. Gravida."
              paragraphs={[
                "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis..", 
                "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id..", 
              ]}
              link="/"

              />

    </div>

    );

};

export default NewsBlock;
