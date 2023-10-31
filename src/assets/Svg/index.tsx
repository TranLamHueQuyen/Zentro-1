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
