import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import PasswordField from '@/components/PasswordField';
import SocialLoginButtons from '@/components/SocialLoginButtons';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login attempt submitted");
    // In a real application, you would handle form submission here,
    // call an API, and on success, navigate the user.
    // For this example, we'll simulate a login failure to show the error message.
    setError("Invalid email or password. Please try again.");
    // On success, you might do: navigate('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <AuthHeader />
      
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to log in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password" // Path from App.tsx
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <PasswordField
                id="password"
                required
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me" className="text-sm font-normal text-muted-foreground">
                Remember me
              </Label>
            </div>
            
            {error && (
              <p className="text-sm font-medium text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <SocialLoginButtons />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link
              to="/sign-up" // Path from App.tsx
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      <AuthFooter />
    </div>
  );
};

export default LoginPage;