type SprigProps = {
  className?: string;
  flip?: boolean;
};

export default function Sprig({ className = "", flip = false }: SprigProps) {
  return (
    <svg
      viewBox="0 0 120 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M60 250C58 190 58 130 60 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 40C60 40 30 30 20 55C10 80 35 95 60 80"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 90C60 90 90 80 100 105C110 130 85 145 60 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 140C60 140 30 130 20 155C10 180 35 195 60 180"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 190C60 190 90 180 100 205C108 226 90 238 68 232"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
