import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
export const Secure = ({ register, errors, getValues }) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ width: '0%', color: 'white', point: 0 });

  const handlePasswordChange = (e) => {
    let value = e.target.value;
    setPassword(value);
    const widthPower = ['1%', '10%', '40%', '70%', '100%'];
    const ColorPower = ['#ff1d1d', '#ff9818', '#18ff30', '#e259dd', '#59e2a1'];
    let point = 0;
    if (value >= 6) point++;
    if (/[a-z]/.test(value)) point++;
    if (/[0-9]/.test(value)) point++;
    if (/[A-Z]/.test(value)) point++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) point++;
    setStrength({ width: widthPower[point], color: ColorPower[point], point });
  };

  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">Password</h3>
        <p className="mt-2 text-gray-500">Please provide your password</p>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          aria-invalid={errors.password ? 'true' : 'false'}
          id="password"
          type="password"
          {...register('password', {
            onChange: (e) => {
              handlePasswordChange(e);
            },
            required: 'Please enter password',
            minLength: { value: 6, message: 'Password has at least 6 letters' },
          })}
        />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}

        {password.length >= 6 && (
          <div className="mt-2 text-left">
            <p>Streng: {['week', 'medium', 'strong', 'very strong'][strength.point - 1]}</p>
            <div className="h-[10px] bg-slate-500 rounded">
              <div className="h-[10px] rounded" style={{ width: strength.width, background: strength.color }}></div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 mb-8">
        <Label htmlFor="confirmpassword">Confirm password</Label>
        <Input
          aria-invalid={errors.firstname ? 'true' : 'false'}
          id="confirmpassword"
          type="password"
          className={'mt-2'}
          {...register('confirmPassword', {
            required: 'Please enter your confirm password',
            validate: (value) => {
              return value === getValues('password') || 'Confirm password does not match';
            },
          })}
        />
        {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
      </div>
    </div>
  );
};
