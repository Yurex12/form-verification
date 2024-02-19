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
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassoword, setConfirmPassword] = useState('');
  const [error, setErrors] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  function validateEmail(email: string) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors('');
    setIsSubmiting(true);

    if (password === '' || confirmPassoword === '' || email === '') {
      setErrors('cannot be empty');
      setIsSubmiting(false);
      return;
    }

    if (!validateEmail(email)) {
      setErrors('Invalid email address');
    }

    if (password.length < 9) {
      setErrors('password is to short');
      setIsSubmiting(false);
      return;
    }

    if (confirmPassoword !== password) {
      setErrors('Password does not match');
      setIsSubmiting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setEmail('');
    setConfirmPassword('');
    setPassword('');

    setIsSubmiting(false);
    toast.success('Successfully created!');
  }

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>
          Sign Up{' '}
          <span className='text-sm text-gray-500'>(verification with js)</span>
        </CardTitle>
        <CardDescription>Fill the form to register</CardDescription>

        {error && <p className='text-red-500'>{error}</p>}
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='text'
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>
                Password
                <span className='text-gray-500 text-sm'>
                  (at least 10 characters)
                </span>
              </Label>
              <Input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='confirmpassword'>Confrim Password</Label>
              <Input
                id='confirmpassword'
                type='password'
                placeholder='Enter your password'
                value={confirmPassoword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className='flex-1 disabled:bg-gray-500 disabled:text-primary-foreground'
            type='submit'
            disabled={isSubmiting}
          >
            {isSubmiting ? 'Submiting' : 'Sign up'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
