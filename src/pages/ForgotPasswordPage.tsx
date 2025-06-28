import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPasswordPage: React.FC = () => {
  console.log('Forgot Password Page loaded');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Password reset requested for email:", event.currentTarget.email.value);
    // Here you would typically handle the API call
    // For now, let's just log and potentially navigate or show a message.
    // As a placeholder, we can navigate to a hypothetical confirmation page or back to login.
    // For this example, let's assume it navigates back to login after "sending" the email.
    alert("If an account with that email exists, a password reset link has been sent.");
    navigate('/');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <AuthHeader />
      
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password?</CardTitle>
          <CardDescription>
            No problem. Enter your email below and we will send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/">Back to Login</Link> {/* Path from App.tsx */}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="underline"> {/* Path from App.tsx */}
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>

      <AuthFooter />
    </div>
  );
};

export default ForgotPasswordPage;