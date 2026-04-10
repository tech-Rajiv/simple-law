import React from "react";
import PageHeading from "@/components/shared/PageHeading";
import { allAssesments } from "../utils/allAssesments";
import AssessmentCategoryLists from "@/components/AssessmentCategoryLists";

function page() {
  const allAssesmentsData = allAssesments;
  return (
    <div className="w-full py-5 lg:py-10">
      {/* <PageHeading
        title="All Assessments"
        description="Take the assessment to test your knowledge and improve your skills"
      /> */}

      <div className="w-full mx-auto ">
        <AssessmentCategoryLists allAssesmentsData={allAssesmentsData} />
      </div>
    </div>
  );
}

export default page;