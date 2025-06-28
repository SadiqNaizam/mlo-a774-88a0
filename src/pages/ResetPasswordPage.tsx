import React from 'react';

// Custom Components
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import PasswordField from '@/components/PasswordField';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ResetPasswordPage = () => {
  console.log('ResetPasswordPage loaded');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted for password reset.');
    // In a real application, you would handle form validation and the API call to update the password.
    // On success, you might show a toast notification and redirect to the login page.
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <AuthHeader />
      <main className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Set a New Password
            </CardTitle>
            <CardDescription>
              Please enter your new password below. Make sure it's secure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <PasswordField
                  id="new-password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <PasswordField
                  id="confirm-password"
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
              </div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <AuthFooter />
    </div>
  );
};

export default ResetPasswordPage;