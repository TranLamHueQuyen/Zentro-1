import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';
type Props = {
  color: string;
};
export const Email_Icon = (props: Props) => (
  <Svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z"
      stroke={props.color}
      strokeWidth={2}
    />
    <Path
      d="M7 9L12 13L17 9"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export const Google_Icon = (props: any) => (
  <Svg
    width={26}
    height={25}
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.2141 10.4599H22.375V10.4167H13V14.5833H18.887C18.0282 17.0089 15.7204 18.75 13 18.75C9.54848 18.75 6.75004 15.9516 6.75004 12.5C6.75004 9.04845 9.54848 6.25001 13 6.25001C14.5933 6.25001 16.0427 6.85105 17.1464 7.83282L20.0927 4.88647C18.2323 3.15261 15.7438 2.08334 13 2.08334C7.24744 2.08334 2.58337 6.74741 2.58337 12.5C2.58337 18.2526 7.24744 22.9167 13 22.9167C18.7526 22.9167 23.4167 18.2526 23.4167 12.5C23.4167 11.8016 23.3448 11.1198 23.2141 10.4599Z"
      fill="#FFC107"
    />
    <Path
      d="M3.78442 7.65157L7.20682 10.1615C8.13286 7.86876 10.3756 6.25001 13 6.25001C14.5933 6.25001 16.0428 6.85105 17.1464 7.83282L20.0928 4.88647C18.2323 3.15261 15.7438 2.08334 13 2.08334C8.99901 2.08334 5.52922 4.3422 3.78442 7.65157Z"
      fill="#FF3D00"
    />
    <Path
      d="M13 22.9167C15.6906 22.9167 18.1354 21.887 19.9839 20.2125L16.7599 17.4844C15.6789 18.3064 14.3581 18.7511 13 18.75C10.2906 18.75 7.9901 17.0224 7.12344 14.6115L3.72656 17.2286C5.45052 20.6021 8.95156 22.9167 13 22.9167Z"
      fill="#4CAF50"
    />
    <Path
      d="M23.2141 10.4599H22.375V10.4167H13V14.5833H18.887C18.4762 15.7377 17.7361 16.7464 16.7583 17.4849L16.7599 17.4838L19.9839 20.212C19.7557 20.4193 23.4167 17.7083 23.4167 12.5C23.4167 11.8016 23.3448 11.1198 23.2141 10.4599Z"
      fill="#1976D2"
    />
  </Svg>
);

export const Facebook_Icon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.5324 23.75H9.56473V13.5035H6.25V9.48944H9.56473V6.53169C9.56473 4.84155 10.0167 3.53873 10.9208 2.62324C11.8248 1.70775 13.0301 1.25 14.5368 1.25C15.7422 1.25 16.7299 1.30282 17.5 1.40845V4.94718L15.4408 5C14.7042 5 14.202 5.15845 13.9342 5.47535C13.6663 5.79225 13.5324 6.26761 13.5324 6.90141V9.48944H17.3493L16.8471 13.5035H13.5324V23.75Z"
      fill="#1278F3"
    />
  </Svg>
);

export const ButtonCenter = (props: any) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_b_2_2351)">
      <Rect
        width={50}
        height={50}
        rx={25}
        fill="#1F4C6B"
      />
    </G>
    <Circle
      cx={25}
      cy={25}
      r={7.7}
      stroke="white"
      strokeWidth={1.6}
    />
    <Circle
      cx={25}
      cy={25}
      r={2.7}
      fill="white"
      stroke="white"
      strokeWidth={1.6}
    />
    <Defs></Defs>
  </Svg>
);

export const Marker = (props: any) => (
  <Svg
    width={34}
    height={51}
    viewBox="0 0 34 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      opacity={0.15}
      cx={17}
      cy={41.783}
      rx={15.786}
      ry={9.217}
      fill="url(#a)"
    />
    <Ellipse
      opacity={0.5}
      cx={17}
      cy={41.783}
      rx={7.286}
      ry={4.301}
      fill="url(#b)"
    />
    <Path
      d="M34 17.205c0 7.455-10.467 19.1-14.974 23.77a2.798 2.798 0 0 1-4.051 0C10.466 36.304 0 24.66 0 17.204A17.31 17.31 0 0 1 4.98 5.039 16.898 16.898 0 0 1 17 0c4.509 0 8.833 1.813 12.02 5.04A17.31 17.31 0 0 1 34 17.204Z"
      fill="#234F68"
    />
    <Path
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      fill="#fff"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(26.24835 21.43457 -22.19497 27.17952 1.214 29.565)"
      >
        <Stop
          offset={0.047}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(39.546 -45.327 31.552) scale(15.7105 16.3029)"
      >
        <Stop
          offset={0.047}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983}
          stopColor="#8BC83F"
        />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const House_Active = (props: any) => (
  <Svg
    width={25}
    height={34}
    viewBox="0 0 25 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 21.599V18.5C15 18.0353 15 17.803 14.9616 17.6098C14.8038 16.8164 14.1836 16.1962 13.3902 16.0384C13.197 16 12.9647 16 12.5 16C12.0354 16 11.803 16 11.6098 16.0384C10.8165 16.1962 10.1963 16.8164 10.0384 17.6098C10 17.803 10 18.0353 10 18.5V21.599H8.71691C8.3629 21.599 7.82232 21.5317 7.28246 21.3815C6.75733 21.2353 6.11841 20.98 5.66729 20.5327C5.37444 20.2423 5.12948 19.9974 4.78221 19.4184L4.76748 19.3938C4.56932 19.0635 4.42948 18.8304 4.30197 18.4621C4.17427 18.0933 4.13034 17.7471 4.06768 17.2534L4.06767 17.2533L4.06767 17.2533L4.06039 17.196L3.31849 11.3603C3.3145 11.3289 3.3125 11.2973 3.3125 11.2657C3.3125 10.1746 3.82066 9.14631 4.68668 8.47908L4.687 8.47883L10.2898 4.15829L12.4993 4.15825V4.375H12.4993V4.15825L14.7088 4.15829L20.3115 8.47883L20.3119 8.47908C21.1779 9.14631 21.686 10.1746 21.686 11.2657C21.686 11.2973 21.684 11.3289 21.68 11.3603L20.9381 17.196L20.9309 17.2533L20.9309 17.2533C20.8682 17.7471 20.8243 18.0933 20.6966 18.4621C20.569 18.8304 20.4292 19.0635 20.231 19.3938L20.2163 19.4184C19.869 19.9974 19.6241 20.2423 19.3312 20.5327C18.8801 20.98 18.2412 21.2353 17.7161 21.3815C17.1762 21.5317 16.6356 21.599 16.2816 21.599H15ZM10.2898 4.15825L12.4993 4.15823V3.41713L12.4677 3.41699C11.6796 3.41699 10.9132 3.67744 10.2898 4.15825ZM14.7087 4.15825L12.4993 4.15823V3.41713L12.5308 3.41699C13.3189 3.41699 14.0853 3.67744 14.7087 4.15825Z"
      fill="url(#paint0_radial_2_2569)"
    />
    <Circle
      cx={12.5}
      cy={31.5}
      r={2.5}
      fill="#234F68"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_2569"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3.3125 0.457124) rotate(54.1508) scale(26.0831 26.1703)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#234F68"
          stopOpacity={0.83}
        />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const Heart_Active = (props: any) => (
  <Svg
    width={25}
    height={34}
    viewBox="0 0 25 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={12.5}
      cy={31.5}
      r={2.5}
      fill="#234F68"
    />
    <Path
      d="M22 9.53642C22.0033 10.9897 21.4401 12.3877 20.4287 13.437C18.1097 15.8275 15.8601 18.3199 13.4556 20.6225C12.9036 21.1419 12.0287 21.123 11.5014 20.58L4.57108 13.438C2.47631 11.2789 2.47631 7.79389 4.57108 5.6358C5.06617 5.11918 5.66163 4.70789 6.32137 4.42687C6.98111 4.14585 7.69138 4.00094 8.40913 4.00094C9.12687 4.00094 9.83714 4.14585 10.4969 4.42687C11.1566 4.70789 11.7521 5.11918 12.2472 5.6358L12.4999 5.89458L12.7516 5.6358C13.2477 5.12041 13.8434 4.70987 14.5029 4.42879C15.1623 4.14771 15.8721 4.00186 16.5897 4C18.0337 4 19.4141 4.58934 20.4277 5.6358C21.4395 6.68495 22.003 8.083 22 9.53642V9.53642Z"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
    <Path
      d="M22 9.53642C22.0033 10.9897 21.4401 12.3877 20.4287 13.437C18.1097 15.8275 15.8601 18.3199 13.4556 20.6225C12.9036 21.1419 12.0287 21.123 11.5014 20.58L4.57108 13.438C2.47631 11.2789 2.47631 7.79389 4.57108 5.6358C5.06617 5.11918 5.66163 4.70789 6.32137 4.42687C6.98111 4.14585 7.69138 4.00094 8.40913 4.00094C9.12687 4.00094 9.83714 4.14585 10.4969 4.42687C11.1566 4.70789 11.7521 5.11918 12.2472 5.6358L12.4999 5.89458L12.7516 5.6358C13.2477 5.12041 13.8434 4.70987 14.5029 4.42879C15.1623 4.14771 15.8721 4.00186 16.5897 4C18.0337 4 19.4141 4.58934 20.4277 5.6358C21.4395 6.68495 22.003 8.083 22 9.53642Z"
      fill="#234F68"
      stroke="#234F68"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
  </Svg>
);

export const Search_Active = (props: any) => (
  <Svg
    width={25}
    height={34}
    viewBox="0 0 25 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.2383 16.7595L15.5786 16.3931C15.4011 16.2282 15.131 16.2143 14.9375 16.3601L15.2383 16.7595ZM20.7058 21.8364L20.3656 22.2028L20.7058 21.8364ZM21.7945 20.6639L21.4543 21.0303L21.7945 20.6639ZM16.4125 15.6663L16.0356 15.3377C15.8581 15.5413 15.8744 15.849 16.0723 16.0327L16.4125 15.6663ZM10.6252 4.05001C6.99392 4.05001 4.0502 6.99374 4.0502 10.625H5.0502C5.0502 7.54603 7.54621 5.05001 10.6252 5.05001V4.05001ZM17.2002 10.625C17.2002 6.99374 14.2565 4.05001 10.6252 4.05001V5.05001C13.7042 5.05001 16.2002 7.54602 16.2002 10.625H17.2002ZM10.6252 17.2C14.2565 17.2 17.2002 14.2563 17.2002 10.625H16.2002C16.2002 13.704 13.7042 16.2 10.6252 16.2V17.2ZM4.0502 10.625C4.0502 14.2563 6.99392 17.2 10.6252 17.2V16.2C7.54621 16.2 5.0502 13.704 5.0502 10.625H4.0502ZM3.4502 10.625C3.4502 6.66237 6.66255 3.45001 10.6252 3.45001V2.45001C6.11027 2.45001 2.4502 6.11008 2.4502 10.625H3.4502ZM10.6252 17.8C6.66255 17.8 3.4502 14.5877 3.4502 10.625H2.4502C2.4502 15.1399 6.11027 18.8 10.6252 18.8V17.8ZM14.9375 16.3601C13.7371 17.2642 12.2444 17.8 10.6252 17.8V18.8C12.4689 18.8 14.1713 18.1891 15.5391 17.1588L14.9375 16.3601ZM21.046 21.47L15.5786 16.3931L14.8981 17.1259L20.3656 22.2028L21.046 21.47ZM21.47 21.4543C21.3573 21.5757 21.1675 21.5828 21.046 21.47L20.3656 22.2028C20.8917 22.6914 21.7143 22.6609 22.2028 22.1348L21.47 21.4543ZM21.4543 21.0303C21.5757 21.1431 21.5828 21.3329 21.47 21.4543L22.2028 22.1348C22.6914 21.6086 22.6609 20.7861 22.1348 20.2975L21.4543 21.0303ZM16.0723 16.0327L21.4543 21.0303L22.1348 20.2975L16.7527 15.2999L16.0723 16.0327ZM17.8002 10.625C17.8002 12.4292 17.1349 14.0768 16.0356 15.3377L16.7894 15.9949C18.0414 14.5588 18.8002 12.6799 18.8002 10.625H17.8002ZM10.6252 3.45001C14.5878 3.45001 17.8002 6.66237 17.8002 10.625H18.8002C18.8002 6.11008 15.1401 2.45001 10.6252 2.45001V3.45001Z"
      fill="#234F68"
    />
    <Path
      d="M10.625 17.4998C14.422 17.4998 17.5 14.4218 17.5 10.6248C17.5 6.82786 14.422 3.74982 10.625 3.74982C6.82804 3.74982 3.75 6.82786 3.75 10.6248C3.75 14.4218 6.82804 17.4998 10.625 17.4998Z"
      stroke="#234F68"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={12.5}
      cy={31.5}
      r={2.5}
      fill="#234F68"
    />
  </Svg>
);

export const Profile_Active = (props: any) => (
  <Svg
    width={25}
    height={34}
    viewBox="0 0 25 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4996 6.70001C11.2929 6.70001 10.1356 7.17939 9.2823 8.03268C8.42901 8.88597 7.94963 10.0433 7.94963 11.25C7.94963 12.4567 8.42901 13.6141 9.2823 14.4673C9.6036 14.7887 9.96801 15.0569 10.3619 15.2666C8.93816 15.6162 7.62351 16.3493 6.56963 17.4032C6.37427 17.5986 6.18992 17.8029 6.01698 18.0152C5.93551 18.0542 5.85931 18.1078 5.7923 18.1759C5.4824 18.4908 5.48645 18.9973 5.80136 19.3072C7.52425 21.0027 9.89041 22.0502 12.4996 22.0502C14.958 22.0502 17.201 21.1203 18.8932 19.5943C19.2213 19.2984 19.2474 18.7926 18.9515 18.4644C18.8857 18.3914 18.8094 18.3333 18.727 18.2904C18.6976 18.2054 18.6533 18.124 18.5937 18.0499C18.4127 17.8251 18.2189 17.6092 18.013 17.4032C17.0272 16.4174 15.8132 15.7122 14.4951 15.3391C14.9437 15.1202 15.3573 14.827 15.717 14.4673C16.5703 13.6141 17.0496 12.4567 17.0496 11.25C17.0496 10.0433 16.5703 8.88597 15.717 8.03268C14.8637 7.17939 13.7064 6.70001 12.4996 6.70001Z"
      fill="#234F68"
    />
    <Circle
      cx={12.5}
      cy={31.5}
      r={2.5}
      fill="#234F68"
    />
  </Svg>
);

export const House_Icon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4995 4.96725L12.4679 4.967C12.0211 4.967 11.5878 5.11473 11.2366 5.38565L11.2365 5.38569L5.6334 9.70653L5.63305 9.70679C5.15804 10.0727 4.87723 10.6288 4.86324 11.2194L5.59821 17.0005C5.67088 17.5721 5.69768 17.7552 5.76685 17.955C5.83809 18.1607 5.90042 18.2689 6.11167 18.6212C6.36213 19.0388 6.5066 19.182 6.74937 19.4227L6.75878 19.432C6.92898 19.6007 7.26235 19.7669 7.6982 19.8882C7.953 19.9591 8.20058 20.0032 8.40021 20.0269V18C8.40021 17.4106 8.56386 16.5622 9.10175 15.8151C9.69839 14.9865 10.6787 14.4 12.0002 14.4H13.0002C13.5896 14.4 14.438 14.5637 15.1851 15.1016C16.0138 15.6982 16.6002 16.6785 16.6002 18V20.0267C16.7996 20.003 17.0466 19.959 17.3007 19.8882C17.7366 19.7669 18.0699 19.6007 18.2401 19.432L18.2495 19.4227C18.4923 19.182 18.6368 19.0388 18.8872 18.6212C19.0985 18.2689 19.1608 18.1607 19.2321 17.955C19.3012 17.7552 19.328 17.5721 19.4007 17.0005L20.1357 11.2194C20.1217 10.6288 19.8409 10.0727 19.3659 9.70679L19.3655 9.70653L13.7624 5.38569L13.7623 5.38565C13.4111 5.11473 12.9778 4.967 12.531 4.967L12.4995 4.96725V4.11867L14.7395 4.11872L20.3422 8.43924L20.3426 8.4395C21.2208 9.11614 21.7362 10.159 21.7362 11.2657C21.7362 11.2995 21.7341 11.3332 21.7298 11.3666L20.9879 17.2023L20.9803 17.2621C20.918 17.7536 20.8734 18.1047 20.744 18.4785C20.6148 18.8517 20.4726 19.0888 20.2748 19.4184L20.2594 19.4441C19.9091 20.0282 19.6609 20.2764 19.3666 20.5682C18.9064 21.0245 18.2577 21.2827 17.7297 21.4297C17.2719 21.557 16.8132 21.6254 16.4654 21.6439C16.4645 21.6459 16.4636 21.6478 16.4627 21.6498H15.0002V18.5C15.0002 18.0354 15.0002 17.803 14.9618 17.6098C14.804 16.8165 14.1838 16.1963 13.3904 16.0384C13.1972 16 12.9649 16 12.5002 16C12.0356 16 11.8032 16 11.61 16.0384C10.8166 16.1963 10.1965 16.8165 10.0386 17.6098C10.0002 17.803 10.0002 18.0354 10.0002 18.5V21.6498H8.53767C8.53681 21.6479 8.53595 21.6459 8.53509 21.644C8.18705 21.6256 7.72766 21.5572 7.26925 21.4297C6.74124 21.2827 6.09247 21.0245 5.63228 20.5682C5.338 20.2764 5.08981 20.0282 4.73952 19.4441L4.72411 19.4184C4.52635 19.0888 4.38415 18.8517 4.25492 18.4785C4.12547 18.1047 4.08093 17.7536 4.01858 17.2621L4.01099 17.2023L3.26908 11.3666C3.26483 11.3332 3.2627 11.2995 3.2627 11.2657C3.2627 10.159 3.77812 9.11614 4.65634 8.4395L4.65668 8.43924L10.2594 4.11872L12.4995 4.11867V4.96725ZM12.4995 4.11865L10.2595 4.11867C10.8917 3.63108 11.6688 3.367 12.4679 3.367L12.4995 3.36714V4.11865ZM12.4995 4.11865L14.7394 4.11867C14.1072 3.63108 13.3301 3.367 12.531 3.367L12.4995 3.36714V4.11865Z"
      fill="#252B5C"
    />
  </Svg>
);

export const Search_Icon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.625 17.5C14.422 17.5 17.5 14.422 17.5 10.625C17.5 6.82804 14.422 3.75 10.625 3.75C6.82804 3.75 3.75 6.82804 3.75 10.625C3.75 14.422 6.82804 17.5 10.625 17.5Z"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.2503 21.25L15.417 15.8333"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Heart_Icon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22 9.53642C22.0033 10.9897 21.4401 12.3877 20.4287 13.437C18.1097 15.8275 15.8601 18.3199 13.4556 20.6225C12.9036 21.1419 12.0287 21.123 11.5014 20.58L4.57108 13.438C2.47631 11.2789 2.47631 7.79389 4.57108 5.6358C5.06617 5.11918 5.66163 4.70789 6.32137 4.42687C6.98111 4.14585 7.69138 4.00094 8.40913 4.00094C9.12687 4.00094 9.83714 4.14585 10.4969 4.42687C11.1566 4.70789 11.7521 5.11918 12.2472 5.6358L12.4999 5.89458L12.7516 5.6358C13.2477 5.12041 13.8434 4.70987 14.5029 4.42879C15.1623 4.14771 15.8721 4.00186 16.5897 4C18.0337 4 19.4141 4.58934 20.4277 5.6358C21.4395 6.68495 22.003 8.083 22 9.53642V9.53642Z"
      stroke="#252B5C"
      strokeWidth={1.67}
      strokeLinejoin="round"
    />
  </Svg>
);

export const Profile_Icon = (props: any) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.3577 19C16.8068 20.3986 14.7528 21.25 12.4999 21.25C10.109 21.25 7.94212 20.2911 6.36279 18.7368"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <Path
      d="M17.9709 18.5516C17.8077 18.349 17.6331 18.1544 17.4475 17.9688C16.0801 16.6014 14.2254 15.8331 12.2915 15.8331C10.3577 15.8331 8.503 16.6014 7.13554 17.9688C6.89006 18.2143 6.66389 18.4755 6.45801 18.75"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 15C13.4946 15 14.4484 14.6049 15.1517 13.9017C15.8549 13.1984 16.25 12.2446 16.25 11.25C16.25 10.2554 15.8549 9.30161 15.1517 8.59835C14.4484 7.89509 13.4946 7.5 12.5 7.5C11.5054 7.5 10.5516 7.89509 9.84835 8.59835C9.14509 9.30161 8.75 10.2554 8.75 11.25C8.75 12.2446 9.14509 13.1984 9.84835 13.9017C10.5516 14.6049 11.5054 15 12.5 15V15Z"
      stroke="#252B5C"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Chat_Icon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.99984 18.3334C14.6023 18.3334 18.3332 14.6026 18.3332 10.0001C18.3332 5.39758 14.6023 1.66675 9.99984 1.66675C5.39734 1.66675 1.6665 5.39758 1.6665 10.0001C1.6665 11.5176 2.07234 12.9417 2.7815 14.1667L2.08317 17.9167L5.83317 17.2184C7.09945 17.951 8.53693 18.3356 9.99984 18.3334V18.3334Z"
      stroke="#252B5C"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66992 8.3335H13.3366"
      stroke="#252B5C"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66992 11.6667H10.0033"
      stroke="#252B5C"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Bed_Icon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.8335 5.83341H4.16683V11.6667H2.50016V4.16675H0.833496V16.6667H2.50016V14.1667H17.5002V16.6667H19.1668V9.16675C19.1668 8.28269 18.8156 7.43485 18.1905 6.80973C17.5654 6.1846 16.7175 5.83341 15.8335 5.83341Z"
      fill="#8BC83F"
    />
  </Svg>
);

export const Bath_Icon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.125 10.9375H3.125V3.90621C3.12428 3.64142 3.17608 3.37911 3.27741 3.13448C3.37875 2.88984 3.5276 2.66773 3.71535 2.48101L3.73098 2.46539C4.02522 2.17158 4.403 1.97577 4.8127 1.90473C5.2224 1.83368 5.64405 1.89085 6.02004 2.06844C5.66495 2.65882 5.51736 3.35095 5.60072 4.03483C5.68408 4.71872 5.99361 5.35512 6.48012 5.84293L6.90789 6.2707L6.12051 7.05812L7.00434 7.94195L7.79172 7.15457L12.1546 2.7918L12.942 2.00441L12.0581 1.12054L11.2707 1.90793L10.8429 1.48015C10.3307 0.969424 9.6556 0.654591 8.93515 0.590519C8.2147 0.526446 7.4946 0.717197 6.90035 1.12953C6.27372 0.733792 5.53112 0.56295 4.79455 0.645067C4.05798 0.727184 3.37124 1.05738 2.84715 1.5814L2.83152 1.59703C2.52732 1.89957 2.28615 2.25944 2.12196 2.65581C1.95777 3.05218 1.87383 3.47718 1.875 3.90621V10.9375H0.625V12.1875H1.875V13.3867C1.87497 13.4874 1.89122 13.5875 1.92312 13.6831L3.08594 17.1714C3.14799 17.3582 3.26731 17.5206 3.42695 17.6357C3.5866 17.7508 3.77844 17.8126 3.97523 17.8125H4.47914L4.02344 19.375H5.32551L5.78125 17.8125H13.9102L14.3789 19.375H15.6836L15.2148 17.8125H16.0246C16.2214 17.8127 16.4133 17.7508 16.573 17.6357C16.7327 17.5207 16.852 17.3582 16.9141 17.1714L18.0768 13.6831C18.1087 13.5875 18.125 13.4874 18.125 13.3867V12.1875H19.375V10.9375H18.125Z"
      fill="#8BC83F"
    />
  </Svg>
);

export const Setting_Icon = (props: any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.5547 8.14844C18.5353 8.06107 18.4974 7.97889 18.4434 7.90745C18.3895 7.83602 18.3209 7.777 18.2422 7.73438L16.3828 6.70313C16.2832 6.50101 16.171 6.30532 16.0469 6.11719L16.086 3.99219C16.0867 3.90306 16.069 3.81474 16.0341 3.73274C15.9991 3.65075 15.9476 3.57684 15.8828 3.51563C14.957 2.67622 13.8621 2.04487 12.6719 1.66406C12.5864 1.63741 12.4963 1.6292 12.4074 1.63997C12.3185 1.65075 12.2329 1.68026 12.1563 1.72656L10.336 2.82031C10.1094 2.8125 9.89064 2.8125 9.66408 2.82031L7.84377 1.72656C7.76714 1.68026 7.68155 1.65075 7.59266 1.63997C7.50378 1.6292 7.41362 1.63741 7.32814 1.66406C6.13632 2.04516 5.04098 2.67945 4.11721 3.52344C4.05185 3.58254 3.9999 3.65496 3.96487 3.73581C3.92983 3.81666 3.91251 3.90408 3.91408 3.99219L3.95314 6.11719C3.82814 6.30469 3.71877 6.5 3.60939 6.70313L1.75002 7.73438C1.67246 7.77744 1.60509 7.83672 1.55251 7.90817C1.49993 7.97963 1.46338 8.06158 1.44533 8.14844C1.17968 9.36852 1.17968 10.6315 1.44533 11.8516C1.46474 11.9389 1.50268 12.0211 1.55659 12.0925C1.61051 12.164 1.67913 12.223 1.75783 12.2656L3.61721 13.2969C3.71688 13.499 3.82908 13.6947 3.95314 13.8828L3.91408 16.0078C3.91337 16.0969 3.93104 16.1853 3.96599 16.2673C4.00093 16.3493 4.05241 16.4232 4.11721 16.4844C5.04302 17.3238 6.13789 17.9551 7.32814 18.3359C7.41362 18.3626 7.50378 18.3708 7.59266 18.36C7.68155 18.3493 7.76714 18.3197 7.84377 18.2734L9.66408 17.1797H10.336L12.1641 18.2734C12.2591 18.3359 12.3707 18.3686 12.4844 18.3672C12.5479 18.3644 12.6109 18.3539 12.6719 18.3359C13.8637 17.9548 14.9591 17.3206 15.8828 16.4766C15.9482 16.4175 16.0001 16.345 16.0352 16.2642C16.0702 16.1833 16.0875 16.0959 16.086 16.0078L16.0469 13.8828C16.1719 13.6953 16.2813 13.5 16.3906 13.2969L18.25 12.2656C18.3276 12.2226 18.3949 12.1633 18.4475 12.0918C18.5001 12.0204 18.5367 11.9384 18.5547 11.8516C18.8204 10.6315 18.8204 9.36852 18.5547 8.14844ZM17.3828 11.3125L15.6094 12.2969C15.4969 12.3623 15.407 12.4604 15.3516 12.5781C15.2231 12.8444 15.0742 13.1004 14.9063 13.3438C14.8349 13.4529 14.7969 13.5805 14.7969 13.7109L14.8281 15.7344C14.1555 16.3071 13.3855 16.7543 12.5547 17.0547L10.8125 16.0078C10.7153 15.9512 10.6047 15.9215 10.4922 15.9219H10.4453C10.1489 15.9453 9.85112 15.9453 9.55471 15.9219C9.42662 15.9149 9.2992 15.9447 9.18752 16.0078L7.44533 17.0547C6.61555 16.7557 5.8457 16.3113 5.17189 15.7422L5.20314 13.7109C5.2031 13.5805 5.16509 13.4529 5.09377 13.3438C4.92873 13.0986 4.77997 12.8428 4.64846 12.5781C4.59077 12.4619 4.50139 12.3644 4.39064 12.2969L2.61721 11.3125C2.46091 10.4445 2.46091 9.55552 2.61721 8.6875L4.39064 7.70313C4.50315 7.63774 4.59308 7.53963 4.64846 7.42188C4.77699 7.1556 4.92587 6.89963 5.09377 6.65625C5.16509 6.54706 5.2031 6.41948 5.20314 6.28906L5.17189 4.26563C5.84451 3.69291 6.61456 3.2457 7.44533 2.94531L9.18752 3.99219C9.29887 4.05614 9.42654 4.08602 9.55471 4.07813C9.85112 4.05468 10.1489 4.05468 10.4453 4.07813C10.5734 4.08512 10.7008 4.0553 10.8125 3.99219L12.5547 2.94531C13.3845 3.24425 14.1543 3.68871 14.8281 4.25781L14.7969 6.28906C14.7969 6.41948 14.8349 6.54706 14.9063 6.65625C15.0713 6.90143 15.2201 7.15719 15.3516 7.42188C15.4093 7.53807 15.4986 7.63558 15.6094 7.70313L17.3828 8.6875C17.5391 9.55552 17.5391 10.4445 17.3828 11.3125ZM10 5.625C9.13473 5.625 8.28886 5.88159 7.5694 6.36232C6.84993 6.84305 6.28918 7.52633 5.95805 8.32576C5.62691 9.12519 5.54027 10.0049 5.70908 10.8535C5.87789 11.7022 6.29457 12.4817 6.90643 13.0936C7.51828 13.7054 8.29783 14.1221 9.1465 14.2909C9.99517 14.4597 10.8748 14.3731 11.6743 14.042C12.4737 13.7108 13.157 13.1501 13.6377 12.4306C14.1184 11.7112 14.375 10.8653 14.375 10C14.375 8.83968 13.9141 7.72688 13.0936 6.90641C12.2731 6.08594 11.1603 5.625 10 5.625ZM10 13.125C9.38195 13.125 8.77777 12.9417 8.26386 12.5983C7.74996 12.255 7.34942 11.7669 7.1129 11.1959C6.87637 10.6249 6.81449 9.99653 6.93506 9.39034C7.05564 8.78415 7.35327 8.22733 7.79031 7.79029C8.22735 7.35325 8.78417 7.05563 9.39036 6.93505C9.99655 6.81447 10.6249 6.87635 11.1959 7.11288C11.7669 7.3494 12.255 7.74994 12.5984 8.26384C12.9417 8.77775 13.125 9.38193 13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125Z"
      fill="#234F68"
    />
  </Svg>
);

export const Pencil_Icon = (props: any) => (
  <Svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.01005 2.914L9.48505 5.389M7.01005 2.914L8.42505 1.5L10.8995 3.975L9.48505 5.389L7.01005 2.914ZM7.01005 2.914L2.20705 7.7175C2.11327 7.81125 2.06058 7.9384 2.06055 8.071V10.339H4.32855C4.46114 10.339 4.5883 10.2863 4.68205 10.1925L9.48505 5.389L7.01005 2.914Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Marker_Icon = (props: any) => (
  <Svg
    width={40}
    height={58}
    viewBox="0 0 40 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      opacity={0.15}
      cx={19.9575}
      cy={47.0738}
      rx={17.5085}
      ry={10.2228}
      transform="rotate(0.926985 19.9575 47.0738)"
      fill="#8BC83F"
    />
    <Ellipse
      opacity={0.5}
      cx={19.9577}
      cy={47.0738}
      rx={8.08086}
      ry={4.77063}
      transform="rotate(0.926985 19.9577 47.0738)"
      fill="#8BC83F"
    />
    <Path
      d="M39.2515 20.1217C39.1157 28.5155 26.9387 41.5044 21.9909 46.4408C20.8524 47.5767 19.047 47.5475 17.9459 46.3754C13.1604 41.2815 1.40996 27.9054 1.54577 19.5116C1.62765 14.4513 3.69245 9.63038 7.28595 6.10939C10.8794 2.5884 15.7073 0.655783 20.7074 0.736687C25.7074 0.81759 30.4702 2.90539 33.9479 6.54079C37.4256 10.1762 39.3334 15.0614 39.2515 20.1217Z"
      fill="#8BC83F"
    />
  </Svg>
);

export const Pin_Location = (props: any) => (
  <Svg
    width={34}
    height={51}
    viewBox="0 0 34 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      opacity={0.15}
      cx={16.9996}
      cy={41.7833}
      rx={15.7857}
      ry={9.21687}
      fill="url(#paint0_radial_2_3188)"
    />
    <Ellipse
      opacity={0.5}
      cx={16.9996}
      cy={41.7831}
      rx={7.28571}
      ry={4.30121}
      fill="#234F68"
    />
    <Path
      d="M34 17.2048C34 24.6601 23.5333 36.3049 19.0255 40.9744C17.9085 42.1315 16.0915 42.1315 14.9745 40.9744C10.4667 36.3049 0 24.6601 0 17.2048C0 12.6418 1.79107 8.26571 4.97919 5.03918C8.1673 1.81265 12.4913 0 17 0C21.5087 0 25.8327 1.81265 29.0208 5.03918C32.2089 8.26571 34 12.6418 34 17.2048Z"
      fill="url(#paint1_radial_2_3188)"
    />
    <Path
      d="M17 22C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17C22 15.6739 21.4732 14.4021 20.5355 13.4645C19.5979 12.5268 18.3261 12 17 12C15.6739 12 14.4021 12.5268 13.4645 13.4645C12.5268 14.4021 12 15.6739 12 17C12 18.3261 12.5268 19.5979 13.4645 20.5355C14.4021 21.4732 15.6739 22 17 22Z"
      fill="white"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_3188"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1.21387 29.5656) rotate(39.2353) scale(33.8883 35.0905)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2_3188"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(2.69431e-06 -7.00196) rotate(60.5253) scale(57.4495 52.0133)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const Plus = (props: any) => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.3942 1.76596V9.02311"
      stroke="white"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.76562 5.39453H9.02277"
      stroke="white"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Minus = (props: any) => (
  <Svg
    width={11}
    height={11}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.76562 5.39453H9.02277"
      stroke="white"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Success = (props: any) => (
  <Svg
    width={163}
    height={162}
    viewBox="0 0 163 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.1}
      filter="url(#filter0_f_2_3111)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={71}
        fill="url(#paint0_radial_2_3111)"
      />
    </G>
    <G
      opacity={0.15}
      filter="url(#filter1_f_2_3111)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={55}
        fill="url(#paint1_radial_2_3111)"
      />
    </G>
    <Circle
      cx={81.5}
      cy={81}
      r={35}
      fill="url(#paint2_radial_2_3111)"
    />
    <Path
      d="M75.8612 91.1C75.8612 90.875 75.8362 90.775 75.7362 90.775L75.1612 91.05C75.1612 90.925 75.0862 90.85 74.9612 90.8L74.7612 90.775C74.5862 90.775 74.5112 90.8 74.2612 90.95C74.1862 90.8 74.0862 90.625 74.0112 90.475C73.3612 89.225 72.6862 87.35 72.3862 86.525C72.2362 86.1 72.0862 85.225 71.9112 83.9C72.1112 84.025 72.2612 84.075 72.3362 84.075C72.4362 84.075 72.5612 83.9 72.6612 83.55C72.7112 83.625 72.8112 83.65 72.9362 83.65C73.0112 83.65 73.1112 83.625 73.1612 83.55L73.5612 82.95L74.0112 83.1H74.0362C74.0862 83.1 74.1612 83.025 74.2862 82.95C74.4112 82.875 74.5112 82.825 74.5862 82.825L74.6612 82.85C75.0612 83.05 75.3362 83.4 75.4612 83.95C75.7612 85.225 76.0362 85.85 76.3612 85.85C76.6362 85.85 77.0112 85.525 77.4112 84.9C77.8112 84.275 78.2112 83.425 78.6612 82.4C78.6862 82.6 78.7112 82.7 78.7612 82.7C78.9112 82.7 79.2862 81.825 80.2112 80.35C81.5862 78.125 84.9862 73.85 85.8612 73.25C86.5112 72.8 87.0112 72.375 87.3612 72C87.3112 72.25 87.2612 72.425 87.2612 72.5C87.2612 72.575 87.3112 72.6 87.3612 72.6L88.0612 72.25V72.35C88.0612 72.475 88.0862 72.55 88.1612 72.55C88.2612 72.55 88.6612 72.15 88.7112 72L88.6612 72.35L89.5112 71.85L89.3112 72.3C89.5612 72.125 89.7612 72.025 89.8862 72.025C90.0112 72.025 90.0862 72.225 90.0862 72.35C90.0862 72.55 89.9112 72.825 89.6362 73.175C89.3362 73.575 88.5862 74.35 86.3362 76.925C85.3612 78.025 81.0362 83.9 80.2112 85.3L78.6612 87.925C77.9862 89.05 77.5612 89.775 77.3362 90.05C77.1112 90.325 76.8362 90.6 76.5112 90.85L76.2862 90.725L76.0862 90.85L75.8612 91.1Z"
      fill="white"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_3111"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.5 -13.1163) rotate(54.4352) scale(202.981)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2_3111"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(26.5 8.09303) rotate(54.4352) scale(157.238)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_2_3111"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(46.5 34.6047) rotate(54.4352) scale(100.061)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const Error = (props: any) => (
  <Svg
    width={163}
    height={162}
    viewBox="0 0 163 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.1}
      filter="url(#filter0_f_2_3073)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={71}
        fill="url(#paint0_radial_2_3073)"
      />
    </G>
    <G
      opacity={0.15}
      filter="url(#filter1_f_2_3073)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={55}
        fill="url(#paint1_radial_2_3073)"
      />
    </G>
    <Circle
      cx={81.5}
      cy={81}
      r={35}
      fill="url(#paint2_radial_2_3073)"
    />
    <Path
      d="M79.771 84.2L79.171 72.5H82.871L82.246 84.2H79.771ZM81.021 90.175C80.4377 90.175 79.9543 89.9833 79.571 89.6C79.1877 89.2167 78.996 88.7583 78.996 88.225C78.996 87.6917 79.1877 87.2417 79.571 86.875C79.9543 86.4917 80.4377 86.3 81.021 86.3C81.6043 86.3 82.0793 86.4917 82.446 86.875C82.8127 87.2417 82.996 87.6917 82.996 88.225C82.996 88.7583 82.8127 89.2167 82.446 89.6C82.0793 89.9833 81.6043 90.175 81.021 90.175Z"
      fill="white"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_3073"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.5 -13.1163) rotate(54.4352) scale(202.981)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
          stopOpacity={0.42}
        />
        <Stop
          offset={0.983052}
          stopColor="#234F68"
        />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2_3073"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(26.5 8.09303) rotate(54.4352) scale(157.238)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
          stopOpacity={0.42}
        />
        <Stop
          offset={0.983052}
          stopColor="#234F68"
        />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_2_3073"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(46.5 34.6047) rotate(54.4352) scale(100.061)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
          stopOpacity={0.42}
        />
        <Stop
          offset={0.983052}
          stopColor="#234F68"
        />
      </RadialGradient>
    </Defs>
  </Svg>
);

export const Empty = (props: any) => (
  <Svg
    width={163}
    height={162}
    viewBox="0 0 163 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      opacity={0.1}
      filter="url(#filter0_f_2_4033)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={71}
        fill="url(#paint0_radial_2_4033)"
      />
    </G>
    <G
      opacity={0.15}
      filter="url(#filter1_f_2_4033)"
    >
      <Circle
        cx={81.5}
        cy={81}
        r={55}
        fill="url(#paint1_radial_2_4033)"
      />
    </G>
    <Circle
      cx={81.5}
      cy={81}
      r={35}
      fill="url(#paint2_radial_2_4033)"
    />
    <Path
      d="M79.5521 87.86V75.14H81.4421V87.86H79.5521ZM73.9721 82.4V80.63H87.0221V82.4H73.9721Z"
      fill="white"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_2_4033"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.5 -13.1163) rotate(54.4352) scale(202.981)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="paint1_radial_2_4033"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(26.5 8.09303) rotate(54.4352) scale(157.238)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
      <RadialGradient
        id="paint2_radial_2_4033"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(46.5 34.6047) rotate(54.4352) scale(100.061)"
      >
        <Stop
          offset={0.046875}
          stopColor="#234F68"
        />
        <Stop
          offset={0.983052}
          stopColor="#8BC83F"
        />
      </RadialGradient>
    </Defs>
  </Svg>
);
