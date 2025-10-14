import React from 'react';

interface UnderlineSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const UnderlineSvg = ({
  color = 'rgb(240,142,177)',
  strokeWidth = 14,
  className = '',
  ...props
}: UnderlineSvgProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 100" 
      width="400" 
      height="100" 
      preserveAspectRatio="xMidYMid meet" 
      style={{ 
        width: '100%', 
        height: '100%'
      }}
      className={className}
      {...props}
    >
      {/* Simplified wave path - static version */}
      <path 
        strokeLinecap="butt" 
        strokeLinejoin="miter" 
        fill="none"
        strokeMiterlimit="4" 
        stroke={color}
        strokeOpacity="1" 
        strokeWidth={strokeWidth}
        d="M 50,80 
           C 100,60 150,100 200,80 
           C 250,60 300,100 350,80"
      />
      
      {/* Secondary subtle wave */}
      <path 
        strokeLinecap="butt" 
        strokeLinejoin="miter" 
        fill="none"
        strokeMiterlimit="4" 
        stroke={color}
        strokeOpacity="0.6" 
        strokeWidth={strokeWidth - 4}
        d="M 30,85 
           C 120,65 180,95 250,85 
           C 320,75 370,95 370,85"
      />
    </svg>
  );
};

// Alternative: Simple straight underline
export const SimpleUnderline = ({
  color = 'rgb(240,142,177)',
  strokeWidth = 3,
  className = '',
  ...props
}: UnderlineSvgProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 20" 
      width="400" 
      height="20" 
      preserveAspectRatio="xMidYMid meet" 
      style={{ 
        width: '100%', 
        height: '100%'
      }}
      className={className}
      {...props}
    >
      <path 
        strokeLinecap="round" 
        fill="none"
        stroke={color}
        strokeOpacity="1" 
        strokeWidth={strokeWidth}
        d="M 0,10 L 400,10"
      />
    </svg>
  );
};

// Wavy underline variant
export const WavyUnderline = ({
  color = 'rgb(240,142,177)',
  strokeWidth = 2,
  className = '',
  ...props
}: UnderlineSvgProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 20" 
      width="400" 
      height="20" 
      preserveAspectRatio="xMidYMid meet" 
      style={{ 
        width: '100%', 
        height: '100%'
      }}
      className={className}
      {...props}
    >
      <path 
        strokeLinecap="round" 
        fill="none"
        stroke={color}
        strokeOpacity="1" 
        strokeWidth={strokeWidth}
        d="M 0,15 
           C 50,10 100,20 150,15 
           C 200,10 250,20 300,15 
           C 350,10 400,20 400,15"
      />
    </svg>
  );
};

// Text with static underline component
export const TextWithUnderlineSvg = ({ 
  children,
  underlineVariant: Variant = UnderlineSvg,
  underlineColor = 'rgb(240,142,177)',
  className = '',
  ...props 
}: { 
  children: React.ReactNode;
  underlineVariant?: React.ComponentType<UnderlineSvgProps>;
  underlineColor?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={`static-underline-container ${className}`}
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        ...props.style 
      }}
      {...props}
    >
      {children}
      <Variant 
        color={underlineColor}
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '-110px',
          width: '100%',
          height: '30px'
        }}
      />
    </div>
  );
};