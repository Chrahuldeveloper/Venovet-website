import React from "react";

export default function LogisticsProjects({ data }) {
  return (
    <section className="space-y-10">
      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg "
          src={data.SubCat1.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat1.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat1.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Site evaluation and feasibility analysis
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Transportation, traffic, and utilities availability and needs
              assessment
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Preliminary cost estimates
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Local on-site and off-site project requirements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Entitlements, permits, and zoning specifics
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Environmental, geotechnical, wetlands, archeological, endangered
              species, and site engineering details
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Pre-lease and post-lease Property Condition Assessments (PCAs)
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg md:order-2"
          src={data.SubCat2.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat2.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat2.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Manage permits and entitlements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Review project specific requirements and procedures
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Coordinate pre-construction meetings
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Review progress drawings
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Track critical path milestones against schedule and budget
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Manage tender and contract award process
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Complete the LEED application and plan review
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg "
          src={data.SubCat3.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat3.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat3.Para}</p>
          <ul className="pl-4 text-[#7a7a7a]">
            <li className="text-sm leading-7 list-disc ">
              Outline specifications
            </li>
            <li className="text-sm leading-7 list-disc ">
              Finalize preliminary site and building concept plans
            </li>
            <li className="text-sm leading-7 list-disc ">
              Finalize preliminary budget
            </li>
            <li className="text-sm leading-7 list-disc ">
              Determine insurance requirements
            </li>
            <li className="text-sm leading-7 list-disc ">
              Build value assessments
            </li>
            <li className="text-sm leading-7 list-disc ">
              Complete LEED feasibility analysis
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg md:order-2"
          src={data.SubCat4.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold"> {data.SubCat4.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat4.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Site evaluation and feasibility analysis
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Transportation, traffic, and utilities availability and needs
              assessment
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Preliminary cost estimates
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Local on-site and off-site project requirements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Entitlements, permits, and zoning specifics
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Environmental, geotechnical, wetlands, archeological, endangered
              species, and site engineering details
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Pre-lease and post-lease Property Condition Assessments (PCAs)
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg "
          src={data.SubCat5.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat5.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat4.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Site evaluation and feasibility analysis
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Transportation, traffic, and utilities availability and needs
              assessment
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Preliminary cost estimates
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Local on-site and off-site project requirements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Entitlements, permits, and zoning specifics
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Environmental, geotechnical, wetlands, archeological, endangered
              species, and site engineering details
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Pre-lease and post-lease Property Condition Assessments (PCAs)
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg md:order-2"
          src={data.SubCat6.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat6.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat6.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Site evaluation and feasibility analysis
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Transportation, traffic, and utilities availability and needs
              assessment
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Preliminary cost estimates
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Local on-site and off-site project requirements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Entitlements, permits, and zoning specifics
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Environmental, geotechnical, wetlands, archeological, endangered
              species, and site engineering details
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Pre-lease and post-lease Property Condition Assessments (PCAs)
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-8 lg:flex-row mt-7">
        <img
          className="max-w-xs rounded-lg "
          src={data.SubCat7.image}
          alt="imge"
        />
        <div className="max-w-lg space-y-3">
          <h1 className="text-xl font-semibold">{data.SubCat7.Tittle}</h1>
          <p className="text-[#7a7a7a]">{data.SubCat7.Para}</p>
          <ul className="text-[#7a7a7a] pl-4">
            <li className="text-[#7a7a7a] list-disc text-sm leading-7">
              Site evaluation and feasibility analysis
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Transportation, traffic, and utilities availability and needs
              assessment
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Preliminary cost estimates
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Local on-site and off-site project requirements
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Entitlements, permits, and zoning specifics
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Environmental, geotechnical, wetlands, archeological, endangered
              species, and site engineering details
            </li>
            <li className="text-[#7a7a7a] text-sm leading-7 list-disc">
              Pre-lease and post-lease Property Condition Assessments (PCAs)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
