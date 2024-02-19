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

import { zodResolver } from '@hookform/resolvers/zod';
import { TSignUpSchema, singUpSchema } from '@/lib/utils';
import toast from 'react-hot-toast';

export function LoginZod() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(singUpSchema),
  });

  async function onSubmit(data: TSignUpSchema) {
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
            (verification with react hook form)
          </span>
        </CardTitle>
        <CardDescription>Fill the form to register</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='hookemail'>Email</Label>
              <Input
                type='email'
                id='hookemail'
                placeholder='Enter your email'
                {...register('email')}
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{`${errors.email.message}`}</p>
              )}
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='hookpassword'>
                Password
                <span className='text-gray-500 text-sm'>
                  (at least 10 characters)
                </span>
              </Label>
              <Input
                id='hookpassword'
                type='password'
                placeholder='Enter your password'
                {...register('password')}
              />
              {errors.password && (
                <p className='text-red-500 text-sm'>{`${errors.password.message}`}</p>
              )}
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='hookconfirmpassword'>Confrim Password</Label>
              <Input
                id='hookconfirmpassword'
                type='password'
                placeholder='Enter your password'
                {...register('confirmPassword')}
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
