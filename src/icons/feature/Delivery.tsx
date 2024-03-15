import { PropsIcon } from "../interfaceIcon";

export const Delivery: React.FC<PropsIcon> = ({ className }) => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect
        width="498"
        height="498"
        x="7"
        y="7"
        rx="20"
        fill="transparent"
        stroke="transparent"
        strokeWidth="14"
        strokeOpacity="94%"
        paintOrder="stroke"
      ></rect>
      <svg width="313px" height="313px" viewBox="0 0 32 32" fill="currentColor" x="99.5" y="99.5" role="img" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
          <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
          <path
            fill="currentColor"
            d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394ZM9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
          />
        </g>
      </svg>
    </svg>
  );
};
