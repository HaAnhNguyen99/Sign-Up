import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export const YourInfo = ({ register, errors, getValues }) => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">Personal Info</h3>
        <p className="mt-2 text-gray-500">Please provide your name</p>
      </div>
      <div className="mt-4">
        <Label htmlFor="firstname">First name</Label>
        <Input
          aria-invalid={errors.firstname ? 'true' : 'false'}
          id="firstname"
          placeholder="e.g.Steven"
          {...register('firstname', { required: 'This field must not empty', maxLength: 100 })}
        />
        {errors.firstname && <p className="text-red-600">{errors.firstname.message}</p>}
      </div>
      <div className="mt-4 mb-8">
        <Label htmlFor="lastname">Last name</Label>
        <Input
          aria-invalid={errors.firstname ? 'true' : 'false'}
          id="lastname"
          placeholder="e.g.King"
          className={'mt-2'}
          //   style={{ border: `${errors.firstname && '1px solid #dc2626'}` }}
          {...register('lastname', { required: 'This field must not empty', maxLength: 100 })}
        />
        {errors.lastname && <p className="text-red-600">{errors.lastname.message}</p>}
      </div>
    </div>
  );
};
