import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');
  
  return (
    <header className="absolute top-0 left-0 right-0 p-4 sm:p-6">
      <div className="container mx-auto flex items-center justify-start">
        <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
          <LogIn className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tight">QuickAuth</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;