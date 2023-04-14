import styled from "styled-components";

const CircleProgressBar = ({ percentage, circleWidth }) => {
  const radius = 85;
  let dashArray = radius * Math.PI * 2;
  let dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <Div>
      <svg
        width={ circleWidth }
        height={ circleWidth }
        viewBox={ `0 0 ${circleWidth} ${circleWidth}` }
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#12c2e9" />
            <stop offset="50%" stopColor="#c471ed" />
            <stop offset="100%" stopColor="#f64f59" />
          </linearGradient>
        </defs>

        <circle
          cx={ circleWidth / 2 }
          cy={ circleWidth / 2 }
          strokeWidth="15px"
          r={ radius }
          className="circle-background"
        />

        <circle
          cx={ circleWidth / 2 }
          cy={ circleWidth / 2 }
          strokeWidth="15px"
          r={ radius }
          className="circle-progress"
          style={ {
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          } }
          transform={ `rotate(-90 ${circleWidth / 2} ${circleWidth / 2} )` }
          stroke="url(#gradient)"
        />

        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fill="url(#gradient)"
          className="circle-text"
        >
          { percentage }%
        </text>
      </svg>
    </Div>
  );
};

const Div = styled.div`
	svg {
		width: 30vw;

		.circle-background {
			fill: none;
			stroke: #ddd;
		}

		.circle-progress {
			fill: none;
			/* stroke: var(--color1); */
			stroke-linecap: round;
			stroke-linejoin: round;
		}

		.circle-text {
			font-size: 3rem;
			font-weight: bold;
		}
	}
`;

export default CircleProgressBar;
