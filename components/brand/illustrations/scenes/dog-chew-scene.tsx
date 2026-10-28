import * as React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function DogChewScene({ size = 400, className, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {/* Floor shadow */}
      <ellipse cx="200" cy="270" rx="160" ry="12" fill="#1F3A2E" opacity="0.08" />

      {/* Left paper tube */}
      <g transform="translate(40, 110)">
        <rect
          x="0"
          y="0"
          width="60"
          height="120"
          rx="8"
          fill="#F5EFE6"
          stroke="#1F3A2E"
          strokeWidth="2"
        />
        <rect x="0" y="0" width="60" height="8" rx="3" fill="#293DA6" />
        <rect x="0" y="50" width="60" height="20" fill="#E8B547" />
        <text x="30" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1F3A2E">
          PROBIOTIC
        </text>
        <text x="30" y="20" textAnchor="middle" fontSize="6" fill="#1F3A2E">
          PawBite
        </text>
      </g>

      {/* Right paper tube */}
      <g transform="translate(300, 105)">
        <rect
          x="0"
          y="0"
          width="60"
          height="125"
          rx="8"
          fill="#F5EFE6"
          stroke="#1F3A2E"
          strokeWidth="2"
        />
        <rect x="0" y="0" width="60" height="8" rx="3" fill="#293DA6" />
        <rect x="0" y="55" width="60" height="20" fill="#C8765B" />
        <text x="30" y="69" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#F5EFE6">
          JOINT + MOBILITY
        </text>
        <text x="30" y="20" textAnchor="middle" fontSize="6" fill="#1F3A2E">
          PawBite
        </text>
      </g>

      {/* Dog in the middle */}
      <g transform="translate(140, 80)">
        {/* Body */}
        <ellipse
          cx="60"
          cy="135"
          rx="55"
          ry="38"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        {/* Tail */}
        <path
          d="M108 120 Q 130 105 132 90 Q 122 95 114 108 Z"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        {/* Head */}
        <ellipse
          cx="60"
          cy="75"
          rx="48"
          ry="42"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        {/* Ears */}
        <ellipse
          cx="20"
          cy="65"
          rx="14"
          ry="24"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
          transform="rotate(-20 20 65)"
        />
        <ellipse
          cx="100"
          cy="65"
          rx="14"
          ry="24"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
          transform="rotate(20 100 65)"
        />
        {/* Re-paint head on top */}
        <ellipse
          cx="60"
          cy="75"
          rx="48"
          ry="42"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        {/* Eyes (closed/happy) */}
        <path
          d="M40 75 Q 46 70 52 75"
          stroke="#1F3A2E"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M68 75 Q 74 70 80 75"
          stroke="#1F3A2E"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Nose */}
        <ellipse cx="60" cy="92" rx="6" ry="4" fill="#1F3A2E" />
        {/* Tongue out */}
        <path
          d="M52 102 Q 60 114 68 102 L 68 108 Q 60 118 52 108 Z"
          fill="#C8765B"
          stroke="#1F3A2E"
          strokeWidth="2"
        />
        {/* Front legs */}
        <rect
          x="40"
          y="155"
          width="10"
          height="22"
          rx="5"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        <rect
          x="70"
          y="155"
          width="10"
          height="22"
          rx="5"
          fill="#F4B8A8"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
      </g>

      {/* Chew on the floor */}
      <g transform="translate(180, 250)">
        <rect
          x="0"
          y="0"
          width="40"
          height="14"
          rx="7"
          fill="#E8B547"
          stroke="#1F3A2E"
          strokeWidth="2"
        />
        <line x1="10" y1="4" x2="10" y2="10" stroke="#1F3A2E" strokeWidth="1" opacity="0.4" />
        <line x1="20" y1="4" x2="20" y2="10" stroke="#1F3A2E" strokeWidth="1" opacity="0.4" />
        <line x1="30" y1="4" x2="30" y2="10" stroke="#1F3A2E" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Sparkles */}
      <g fill="#E8B547">
        <path d="M 90 50 L 92 56 L 98 58 L 92 60 L 90 66 L 88 60 L 82 58 L 88 56 Z" />
        <path d="M 310 60 L 312 65 L 317 67 L 312 69 L 310 74 L 308 69 L 303 67 L 308 65 Z" />
      </g>
    </svg>
  );
}
