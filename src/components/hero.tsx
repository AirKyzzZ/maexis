import Button from '@/src/components/button';
import React from 'react';

type ButtonConfig = {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

type HeroProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  disclaimerText?: string;
  className?: string;
};

export default function Hero({
  title,
  description,
  primaryButton,
  secondaryButton,
  disclaimerText = 'GDPR Compliant - No credit card required',
  className,
}: HeroProps) {
  const primary = primaryButton ?? { label: 'Get Started', variant: 'primary', size: 'lg' };
  const secondary = secondaryButton ?? { label: 'Learn More', variant: 'outline', size: 'lg' };

  return (
    <div className={"text-center px-8 sm:px-16 lg:px-24 " + (className ?? '')}>
      {title}
      {description}

      {(primary || secondary) && (
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mb-4">
          {primary && (
            <Button
              variant={primary.variant ?? 'primary'}
              size={primary.size ?? 'lg'}
              className={"!text-white hover:!text-white " + (primary.className ?? '')}
              onClick={primary.onClick}
            >
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button
              variant={secondary.variant ?? 'outline'}
              size={secondary.size ?? 'lg'}
              className={"hover:!text-white " + (secondary.className ?? '')}
              onClick={secondary.onClick}
            >
              {secondary.label}
            </Button>
          )}
        </div>
      )}

      {disclaimerText && (
        <p className="text-xs text-foreground-50 text-center">
          {disclaimerText}
        </p>
      )}
    </div>
  );
}


