import { PropsIcon } from "../interfaceIcon";

export const Star: React.FC<PropsIcon> = ({ className }) => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="transparent"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      ></rect>
      <svg width="256px" height="256px" viewBox="0 0 1024 1024" fill="#fff700" x="128" y="128" role="img" xmlns="http://www.w3.org/2000/svg">
        <g fill="#fff700">
          <path
            fill="currentColor"
            d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z"
          />
        </g>
      </svg>
    </svg>
  );
};
