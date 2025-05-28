import React from 'react';

interface BusinessHour {
  day: string;
  hours: string;
}

interface InfoBlockProps {
  variant: 'contact' | 'hours';
  fields?: { label: string; value: string }[];
  businessHours?: BusinessHour[];
  title?: string;
  className?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ variant, fields = [], businessHours = [], title = 'Information', className = '' }) => {
  return (
    <div className={`flex flex-col col-start-1 col-span-5 sm:col-start-2 sm:col-span-6 mx-[32px] sm:mx-0 sm:mt-10 lg:col-start-1 lg:col-span-3 w-full ${className}`}>
      {variant === 'contact' && (
        <div className="space-y-4 ">
          <h2 className="text-[32px] font-bold text-(--urban-white) mb-6">{title}</h2>
          <div className='lg:ml-10'>
            {fields.map((field, index) => (
              <p key={index} className="text-[16px] font-light mb-4 flex flex-col sm:block">
                  <span className="mr-2">{field.label}</span>
                  {field.value}
                </p>            
              ))}
          </div>
        </div>
      )}

      {variant === 'hours' && businessHours.length > 0 && (
        <div className="space-y-4 mb-10 sm:mx-0">
          <h2 className="text-[32px] font-bold text-(--urban-white) mb-6">{title}</h2>
          <div className="space-y-2 lg:ml-10">
            {businessHours.map((hour, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-[16px] font-light">{hour.day}</p>
                <p className="text-[16px] font-light">{hour.hours}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
