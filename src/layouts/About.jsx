export function About() {
  const list = [
    {
      id: 1,
      title: "Track company-wide progress",
      desc: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: 2,
      title: "Advanced built-in reports",
      desc: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: 3,
      title: "Everything you need in one place",
      desc: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <div className="w-full max-w-[1110px] m-auto px-5 flex flex-col gap-[50px]  mt-[94px] md:flex-row md:gap-3">
      <div className="mb-[54px] md:w-[50%]">
        <h2 className="text-[30px] font-extrabold text-navtext text-center md:text-start">
          What’s different about Manage?
        </h2>
        <p className="text-[14px] leading-[200%] text-navtext text-center opacity-50 md:text-start">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="md:w-[50%] flex flex-col gap-7">
        {list.map((item) => {
          return (
            <div key={item.id}>
              <div className="bg-bgabout mb-2 rounded-l-full">
                <span className="px-5 py-2 sm:px-5 bg-buttonbg rounded-full text-white font-bold inline-block">
                  {item.id}
                </span>
                <span className="font-bold text-base ml-1 text-nowrap md:mb-5">
                  {item.title}
                </span>
              </div>
              <p className="text-base text-navtext opacity-50  inline-block">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
