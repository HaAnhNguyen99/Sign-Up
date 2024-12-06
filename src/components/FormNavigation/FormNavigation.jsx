import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export const FormNavigation = ({ next, prev, total, currentStep }) => {
  return (
    <div className="flex justify-between">
      <button
        size="icon"
        onClick={prev}
        disabled={currentStep === 0}
        className="rounded shadow-sm cursor-pointer shadow-black px-2 py-1 hover:opacity-85 active:scale-95 transform transition-all hover:shadow-none hover:border hover:border-bgPrimary">
        <ChevronLeft />
      </button>
      <button
        size="icon"
        onClick={next}
        type={currentStep === total - 1 ? 'submit' : 'button'}
        value={currentStep === total ? 'Submit' : 'Next'}
        className="rounded shadow-sm cursor-pointer shadow-black px-2 py-1 hover:opacity-85 active:scale-95 transform transition-all hover:shadow-none hover:border hover:border-bgPrimary">
        <ChevronRight />
      </button>
    </div>
  );
};
