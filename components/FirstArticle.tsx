import React from "react";
import '../app/globals.css';


export default function FirstArticle() {
  return (
    <div className="col-start-2 col-span-4 grid-rows-auto">
        <div className="text-[28px] font-bold ">2024 City of Boston SucessLink Program</div>
        <div className="whitespace-break-spaces">
        <p>
          Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.
        </p>
        <br />
        <p>
          The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.
        </p>
        <br />
        <p>
          We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.
        </p>
        </div>
    </div>
  );
}