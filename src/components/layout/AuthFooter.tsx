import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
      <div className="container mx-auto flex items-center justify-center gap-6">
        <Link 
          to="/terms" 
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Terms of Service
        </Link>
        <Link 
          to="/privacy" 
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default AuthFooter;