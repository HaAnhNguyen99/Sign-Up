import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export const Contact = ({ register, errors }) => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">Contact Info</h3>
        <p className="mt-2 text-gray-500">Please provide your email and phone number</p>
      </div>
      <div className="mt-4">
        <Label htmlFor="firstname">Email</Label>
        <Input
          aria-invalid={errors.email ? 'true' : 'false'}
          id="firstname"
          type="text"
          placeholder="e.g.stevenking@gmail.com"
          {...register('email', {
            required: 'Please enter email',
            maxLength: 100,
            pattern: { value: /^\S+@\S+$/i, message: 'Email must be a valid email' },
          })}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>
      <div className="mt-4 mb-8">
        <Label htmlFor="tel">Phone number</Label>
        <Input
          aria-invalid={errors.firstname ? 'true' : 'false'}
          id="tel"
          placeholder="e.g.0968127409"
          className={'mt-2'}
          {...register('phone', {
            required: 'Please enter your phone number',
            pattern: { value: /^\d{10}$/, message: 'Phone number must be 10 digits' },
          })}
        />
        {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
      </div>
      <div className="mt-4 mb-8">
        <Label htmlFor="tel">Address</Label>
        <Input
          aria-invalid={errors.address ? 'true' : 'false'}
          id="tel"
          placeholder="e.g.0968127409"
          className={'mt-2'}
          {...register('address', {
            required: 'Please enter your address',
          })}
        />
        {errors.address && <p className="text-red-600">{errors.address.message}</p>}
      </div>
    </div>
  );
};
