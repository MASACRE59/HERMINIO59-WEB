export default function LionLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#E5B84C" />
          <stop offset="100%" stopColor="#F0CB6E" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g filter="url(#glow)">
        <path
          d="M50 10 L70 30 L85 25 L80 50 L95 70 L70 70 L50 95 L30 70 L5 70 L20 50 L15 25 L30 30 Z"
          stroke="url(#gold)"
          strokeWidth="1.5"
          fill="rgba(201, 168, 76, 0.05)"
        />
        <path
          d="M50 25 L65 40 L50 55 L35 40 Z"
          stroke="url(#gold)"
          strokeWidth="1.5"
          fill="rgba(201, 168, 76, 0.1)"
        />
        <path
          d="M35 55 L50 75 L65 55"
          stroke="url(#gold)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="42" cy="45" r="2" fill="url(#gold)" />
        <circle cx="58" cy="45" r="2" fill="url(#gold)" />
      </g>
    </svg>
  );
}
