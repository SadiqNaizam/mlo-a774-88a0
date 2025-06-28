import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.62-4.55 1.62-3.87 0-7-3.13-7-7s3.13-7 7-7c1.93 0 3.57.72 4.92 2.02l3.43-3.43C19.78 1.18 16.63 0 12.48 0 5.88 0 0 5.88 0 12s5.88 12 12.48 12c7.04 0 12.02-4.92 12.02-12.24 0-.8-.08-1.54-.22-2.28H12.48z"
    />
  </svg>
);

const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  const handleGoogleLogin = () => {
    // Placeholder for Google login logic
    console.log("Attempting Google login...");
    // In a real app, this would trigger the OAuth flow.
  };

  const handleGithubLogin = () => {
    // Placeholder for GitHub login logic
    console.log("Attempting GitHub login...");
    // In a real app, this would trigger the OAuth flow.
  };

  return (
    <div className="w-full">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" onClick={handleGithubLogin}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" type="button" onClick={handleGoogleLogin}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;