// code from https://vizhub.com/amierfaudzi/5052838d7c9941ea8c4e7e6e2bc4dd93?edit=files&file=ProgressDonut.js
import { arc } from 'd3';
import './ProgressDonut.css';

// props received - radius, width, progress, color
export const ProgressDonut = ({
  radius,
  width,
  progress,
  color,
  vsly
}) => {

  // Background Circle
  const arcGenBg = arc()
    .innerRadius(radius - width)
    .outerRadius(radius)
    .startAngle(0)
    .endAngle(Math.PI * 2);

  // Foreground circle
  const arcGenFg = arc()
    .innerRadius(radius - width)
    .outerRadius(radius)
    .startAngle(0)
    .endAngle(Math.PI * 2 * progress);

  return (
    <svg className="donut">
    <g transform={`translate(${radius},${radius})`}>
      <path d={arcGenBg()} fill="#ddd" />
      <path d={arcGenFg()} fill={color} />
      <text
        textAnchor="middle"
        dy="0.30em"
        fill={color}
        fontSize="1.5rem"
      >
        {Math.floor(progress * 100) + '%'}
      </text>
      <text
        textAnchor="bottom"
        dy="1.5em"
        dx="-0.8em"
        fill="gray"
        fontSize="1rem"
      >
        {vsly ? vsly : 'N/A'}
      </text>
    </g>
    </svg>
  );
};
