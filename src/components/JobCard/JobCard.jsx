import dayjs from "dayjs";
import React from "react";

const JobCard = (props) => {
  // Ensure `postedOn` is defined and valid
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3 ">
          <h1 className="text-lg font-semibold ">
            {props.title} - {props.company}
          </h1>
          <p className="">
            {props.type} & {props.experience} . {props.location}
          </p>
          <div className="flex items-center gap-2">
            {/* Conditionally render skills only if `props.skills` is defined and is an array */}
            {props.skills && props.skills.length > 0 ? (
              props.skills.map((skill) => (
                <p
                  key={skill}
                  className="text-gray-500 py-1 px-2 rounded-md border border-black"
                >
                  {skill}
                </p>
              ))
            ) : (
              <p>No skills provided</p> // You can handle the case where skills are missing
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays} days ago</p>
          <a href={props.job_Link}>
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
