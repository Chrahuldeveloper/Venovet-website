import React from "react";
import { s55 } from "../../../images/services/RealEstate";
import DOMPurify from "dompurify";

export default function TECHNICALSERVICES({ data }) {
  return (
    <>
      <div className="flex flex-col justify-start gap-6 mt-5 md:flex-row">
        <div>
          <img src={s55} alt={""} className="lg:max-w-sm" />
        </div>
        <div className="text-[#7a7a7a] space-y-5 text-justify">
          <h1 className="text-lg font-bold text-black md:text-lg">
            Technical Services Electro Mechanical Services: Generating Impact
            with Smart Engineering
          </h1>
          <p className="leading-7">
            We offer professionally managed engineering services through a team
            of highly experienced engineers to help you increase productivity
            and reduce costs.Every project undertaken by us is handled using the
            latest equipment and quality material to ensure that performance is
            timely and of the highest standards. Built on a foundation of smart
            processes and well-trained personnel, our services provide safe and
            secure solutions in the following categories:
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Electrical Maintenance:
          </h1>
          <p>
            We provide breakdown maintenance and quick resolution of service
            queries with periodic reviews across all electrical installations to
            ensure safety and continuity. Managing DG sets ensures continuous
            power supply for your facility. We undertake regular checks on fuel
            consumption and timely procurement of fuel stock. We also coordinate
            with the OEM and handle breakdown maintenance, including procuring
            spares and AMC.
          </p>
        </div>
        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">HVAC</h1>
          <p>
            From the most routine preventative maintenance task of changing
            filters to chiller overhauls and complete HVAC system retrofits, we
            provide a full array of mechanical services using professional
            technicians with industry expertise you can count on.
          </p>
        </div>
        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Fire Protection Systems:
          </h1>
          <p>
            We serve as a single-source of contact to provide fire protection
            services for all our customers. Our highly compliant assessment,
            testing and maintenance (ATM) services help clients to mitigate
            risks.Our certified technicians ensure superior compliance through
            our integrated ATM services. We provide maintenance services for:
          </p>
          <ul className="ml-3 space-y-2.5">
            <li className="list-disc">
              Deluge, water spray and sprinkler systems
            </li>
            <li className="list-disc">
              Hydrants, post indicator valves and fire monitors
            </li>
            <li className="list-disc">Fire pumps and fire apparatuses</li>
            <li className="list-disc">Fixed and portable fire extinguishers</li>
            <li className="list-disc">
              Smoke, flame and incipient fire detection
            </li>
            <li className="list-disc">
              Manual and remote controlled fixed monitor systems
            </li>
            <li className="list-disc">
              Emergency alarm and mass notification system
            </li>
            <li className="list-disc">Fire suppression systems</li>
          </ul>
        </div>
        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Handyman Services:
          </h1>
          <p>
            Our services extend to periodic maintenance of all plumbing lines,
            ductsand toilets. We undertake routine checks for leakages and
            blockages, including water treatment, to improve quality. We also
            provide electrical and carpenter services with a team capable of
            performing a wide variety of common home or office repairs and
            maintenance services.
          </p>
        </div>
        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">{data?.Tittle5}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.SubCat5?.Para5),
            }}
          />
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            {data?.SubCat5?.Tittle6}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.SubCat5?.Para6),
            }}
          />
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Manufacturing and Industrial:
          </h1>
          <p>
            We provide services with OHSAS certified safety procedures and
            specialized delivery modules that are capable of efficiently
            supporting various products.
          </p>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="text-black">Integrated Water Management:</h1>
          <p>
            With our complete audit-to-operation approach for increased water
            reuse and recycling, we manage water treatment process designs and
            operations. We provide our customers with best practices by
            leveraging the knowledge and experience gained across a wide range
            of industries.
          </p>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Our services include:
          </h1>
          <ul className="ml-3 space-y-2">
            <li className="list-disc">
              Industrial Cleaning—Specialized delivery modules customized to
              suit the requisite industry product lines such as power,
              metallurgical, food and pharmaceutical
            </li>
            <li className="list-disc">
              State-of-the-art machines available to support mechanization
            </li>
            <li className="list-disc">Safety and security</li>
            <li className="list-disc">Industrial/Factory Act compliances</li>
            <li className="list-disc">24/7 support</li>
            <li className="list-disc">Industrial relations</li>
          </ul>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="text-black">Healthcare and Hospitality:</h1>
          <p>
            We work with our clients to address specific healthcare needs of
            hygiene, orderliness and patient care. With our trained staff and a
            proven healthcare cleaning method, we offer 24/7 support
          </p>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Our services include:
          </h1>
          <ul className="ml-3 space-y-2">
            <li className="list-disc">Infection control</li>
            <li className="list-disc">Infection control</li>
            <li className="list-disc">
              Critical cleaning in OPD, IPD, ICU, OT and other areas
            </li>
            <li className="list-disc">
              Trained staff to handle exigencies and emergencies
            </li>
            <li className="list-disc">Patient care</li>
            <li className="list-disc">Linen management</li>
            <li className="list-disc">
              Electro-mechanical maintenance of critical areas
            </li>
            <li className="list-disc">Cleaning and water management</li>
          </ul>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 claclassName="text-black font-bold lg:text-lg">
            Corporate Services, BFSI and IT/ITES:
          </h1>
          <p>
            For a competitive and non-stop working corporate environment,
            organisations must keep their facilities running in perfect
            condition. We fully recognize the 24/7 needs of corporates’ and
            deliver excellence in the following areas:
          </p>
          <ul className="ml-3 space-y-2">
            <li className="list-disc">Infection control</li>
            <li className="list-disc">Infection control</li>
            <li className="list-disc">
              Critical cleaning in OPD, IPD, ICU, OT and other areas
            </li>
            <li className="list-disc">
              Trained staff to handle exigencies and emergencies
            </li>
            <li className="list-disc">Patient care</li>
            <li className="list-disc">Linen management</li>
            <li className="list-disc">
              Electro-mechanical maintenance of critical areas
            </li>
            <li className="list-disc">Cleaning and water management</li>
          </ul>
        </div>

        <div className="text-[#7a7a7a] space-y-2 text-justify">
          <h1 className="font-bold text-black lg:text-lg">
            Residential and Educational Institutes:
          </h1>
          <p>
            Our specially trained personnel are adept at taking care of children
            and creating a safe environment for their development. Our experts
            take care of the facilities, ranging from general house-keeping,
            electro-mechanical services, pantry services to handyman services.
            In residential areas, we provide additional services such as
            concierge and helpdesks.
          </p>
          <h1 className="font-bold text-black lg:text-lg">
            Our services include:
          </h1>
          <ul className="ml-3 space-y-2">
            <li className="list-disc">Infection control</li>
            <li className="list-disc">Infection control</li>
            <li className="list-disc">
              Critical cleaning in OPD, IPD, ICU, OT and other areas
            </li>
            <li className="list-disc">
              Trained staff to handle exigencies and emergencies
            </li>
            <li className="list-disc">Patient care</li>
            <li className="list-disc">Linen management</li>
            <li className="list-disc">
              Electro-mechanical maintenance of critical areas
            </li>
            <li className="list-disc">Cleaning and water management</li>
            <li className="list-disc">Cleaning and water management</li>
            <li className="list-disc">Cleaning and water management</li>
          </ul>
        </div>
      </div>
    </>
  );
}
