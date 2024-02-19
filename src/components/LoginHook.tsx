import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import toast from 'react-hot-toast';

export function LoginHook() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data: FieldValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
    console.log(data);
    toast.success('Successfully created!');
  }

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>
          Sign Up{' '}
          <span className='text-sm text-gray-500'>
            (verification with react hook form and zod)
          </span>
        </CardTitle>
        <CardDescription>Fill the form to register</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='zodemail'>Email</Label>
              <Input
                type='email'
                id='zodemail'
                placeholder='Enter your email'
                {...register('email', {
                  required: 'Email is required',
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{`${errors.email.message}`}</p>
              )}
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='zodpassword'>
                Password
                <span className='text-gray-500 text-sm'>
                  (at least 10 characters)
                </span>
              </Label>
              <Input
                id='zodpassword'
                type='password'
                placeholder='Enter your password'
                {...register('password', {
                  required: 'Password is Required',
                  minLength: {
                    value: 10,
                    message: 'Password must be at least 10 characters',
                  },
                })}
              />
              {errors.password && (
                <p className='text-red-500 text-sm'>{`${errors.password.message}`}</p>
              )}
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='zodconfirmpassword'>Confrim Password</Label>
              <Input
                id='zodconfirmpassword'
                type='password'
                placeholder='Enter your password'
                {...register('confirmPassword', {
                  required: 'Password cannot be empty',
                  validate: (value) =>
                    value === getValues('password') || 'password must match',
                })}
              />
              {errors.confirmPassword && (
                <p className='text-red-500 text-sm'>{`${errors.confirmPassword.message}`}</p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className='flex-1' type='submit' disabled={isSubmitting}>
            Sign up
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
