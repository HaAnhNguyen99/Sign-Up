const StepComponent = ({ number, name, isPrev, id }) => {
  return (
    <div className="flex gap-2 flex-col md:flex-row  items-center max-h-20">
      <div>
        <span
          className={`flex justify-center items-center w-5 md:w-10 h-5 md:h-10 border font-bold border-white rounded-full p-4 transform transition-all  ${
            isPrev ? 'bg-bgSecondary text-header' : 'bg-transparent text-white'
          }`}>
          {id + 1}
        </span>
      </div>
      <div className="text-left">
        <p className="text-base font-bold uppercase text-gray-400 hidden md:block">{number}</p>
        <p className=" font-bold uppercase text-white">{name}</p>
      </div>
    </div>
  );
};

export const StepNav = ({ steps, currentStep }) => {
  return (
    <div className="p-4 my-[2rem] flex md:flex-col flex-row justify-between md:justify-normal gap-2 md:gap-10 mb-2">
      {steps.map((step, index) =>
        index <= currentStep ? (
          <StepComponent number={step.id} name={step.name} id={index} key={index} isPrev={true} />
        ) : (
          <StepComponent number={step.id} name={step.name} id={index} key={index} isPrev={false} />
        )
      )}
    </div>
  );
};
