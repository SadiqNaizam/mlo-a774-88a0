import React, { useState } from 'react';
import { forwardRef } from 'react';
import { Input, type InputProps } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const PasswordField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    console.log('PasswordField loaded');

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-12', className)} // Add padding to the right to make space for the button
          ref={ref}
          {...props}
        />
        <Button
          type="button" // This is crucial to prevent the button from submitting the form
          variant="ghost"
          size="icon"
          className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-12 text-muted-foreground hover:text-foreground"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1} // Prevents the button from being focused when tabbing through the form
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </Button>
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';

export default PasswordField;