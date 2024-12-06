import { useState } from 'react';
import './App.css';
import { StepNav } from './components/StepNav/StepNav';
import { YourInfo } from './components/YourInfo/YourInfo';
import { FormNavigation } from './components/FormNavigation/FormNavigation';
import { useForm } from 'react-hook-form';
import { Contact } from './components/Contact/Contact';
import { Secure } from './components/Secure/Secure';
import { Check } from 'lucide-react';
function App() {
  const steps = [
    {
      id: 'Step 1',
      name: 'Your info',
      field: ['firstname', 'lastname'],
    },
    {
      id: 'Step 2',
      name: 'Contact',
      field: ['email', 'phone'],
    },
    {
      id: 'Step 3',
      name: 'Secure',
      field: ['password', 'confirmPassword'],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [prevtStep, setPrevtStep] = useState(0);

  const next = async () => {
    const fields = steps[currentStep].field;
    const isValid = await trigger(fields, { shouldFocus: true });

    if (!isValid) return;
    if (currentStep < steps.length) {
      setPrevtStep(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPrevtStep(currentStep);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm();

  const onprogress = (data) => {
    localStorage.setItem('FormData', JSON.stringify(data));
  };

  return (
    <section className="p-2 flex md:flex-row flex-col gap-2 border border-white mt-[20vh] rounded-lg shadow-slate-500 shadow-2xl md:max-w-[60vw] md:max-h-[60vh] mx-auto my-auto">
      <div className="bg-StepBg border-white rounded-lg  border shadow-md">
        <StepNav steps={steps} currentStep={currentStep} />
      </div>
      <form className="p-4 flex-1 flex flex-col " onSubmit={handleSubmit(onprogress)}>
        <div className="text-left flex-1">
          {currentStep === 0 && <YourInfo register={register} errors={errors} />}
          {currentStep === 1 && <Contact register={register} errors={errors} />}
          {currentStep === 2 && <Secure register={register} errors={errors} getValues={getValues} />}
          {currentStep === 3 && (
            <div className="bg-transparent mb-20">
              <div className="flex justify-center items-center mt-[5rem] ">
                <span className="h-fit w-fit p-2 border border-gray-400 bg-black rounded-full">
                  <Check size={40} strokeWidth={2.5} color="#ffffff" />
                </span>
              </div>
              <p className="text-bold text-center font-semibold text-2xl  mt-8 ">Thank you</p>
              <p className="text-center mt-2 text-gray-500 font-semibold">You are now registed.</p>
            </div>
          )}
        </div>
        <FormNavigation next={next} prev={prev} total={steps.length} currentStep={currentStep} />
      </form>
    </section>
  );
}

export default App;
