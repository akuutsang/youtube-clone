// src/components/icons/Icons.js

import React from 'react';

export const Home = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z"
      fillRule="evenodd"
    />
  </svg>
);
export const Shorts = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M18.45 8.851c1.904-1.066 2.541-3.4 1.422-5.214-1.119-1.814-3.57-2.42-5.475-1.355L5.55 7.247c-1.29.722-2.049 2.069-1.968 3.491.081 1.423.989 2.683 2.353 3.268l.942.404-1.327.742c-1.904 1.066-2.541 3.4-1.422 5.214 1.119 1.814 3.57 2.421 5.475 1.355l8.847-4.965c1.29-.722 2.049-2.068 1.968-3.49-.081-1.423-.989-2.684-2.353-3.269l-.942-.403 1.327-.743ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const Subscription = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M5.5 3A1.5 1.5 0 004 4.5h16A1.5 1.5 0 0018.5 3h-13ZM2 7.5A1.5 1.5 0 013.5 6h17A1.5 1.5 0 0122 7.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 18.5v-11Zm8 2.87a.5.5 0 01.752-.431L16 13l-5.248 3.061A.5.5 0 0110 15.63v-5.26Z"
      fillRule="evenodd"
    />
  </svg>
);

export const MyIcon = ({
  fill = 'currentColor',
  height = '24',
  width = '24',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M18.37 19.709A9.98 9.98 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 003.63 7.709A9.96 9.96 0 0012 22a9.96 9.96 0 006.37-2.291ZM6.15 18.167a6.499 6.499 0 0111.7 0A8.47 8.47 0 0112 20.5a8.47 8.47 0 01-5.85-2.333ZM15.5 9.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
      fillRule="evenodd"
    />
  </svg>
);

export const YourClips = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd" // Use camelCase for attributes
      d="M21.9 19.071c-1.563 1.562-4.095 1.562-5.657 0l-4.4-4.4-.994.995c.468 1.394.147 2.995-.964 4.105-1.562 1.562-4.094 1.562-5.656 0-1.563-1.562-1.563-4.095 0-5.657.98-.98 2.342-1.345 3.608-1.095l1.177-1.177-.928-.927c-1.334.356-2.817.01-3.864-1.036-1.562-1.562-1.562-4.095 0-5.657 1.562-1.562 4.094-1.562 5.657 0 1.046 1.047 1.392 2.53 1.035 3.865l.928.927.002-.002 2.83 2.83-.002.002 7.227 7.227ZM8.5 7c0-.828-.672-1.5-1.5-1.5-.829 0-1.5.672-1.5 1.5 0 .829.671 1.5 1.5 1.5.828 0 1.5-.671 1.5-1.5Zm7.584-2.228c1.563-1.562 4.097-1.56 5.659.001l-6.007 6.007-2.83-2.83 3.178-3.178ZM8.507 16.993c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5 0-.829.671-1.5 1.5-1.5.828 0 1.5.671 1.5 1.5Z"
      fillRule="evenodd" // Use camelCase for attributes
    ></path>
  </svg>
);

export const PlayList = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M4 5c-.552 0-1 .448-1 1s.448 1 1 1h16c.552 0 1-.448 1-1s-.448-1-1-1H4Zm-1 5c0-.552.448-1 1-1h16c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1Zm11 3.862c0-.384.415-.625.748-.434L21 17l-6.252 3.573c-.333.19-.748-.05-.748-.435v-6.276ZM4 13c-.552 0-1 .448-1 1s.448 1 1 1h6c.552 0 1-.448 1-1s-.448-1-1-1H4Zm-1 5c0-.552.448-1 1-1h6c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

export const YourVideos = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Download = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M17.707 11.707c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L13 13.586V3c0-.552-.448-1-1-1s-1 .448-1 1v10.586l-3.293-3.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l5 5 .707.707.707-.707 5-5ZM19.25 21c.552 0 1-.448 1-1s-.448-1-1-1H4.75c-.552 0-1 .448-1 1s.448 1 1 1h14.5Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Trending = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M14 2 7.305 5.956C4.637 7.533 3 10.401 3 13.5c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5V1l-6 4V2ZM9 15c0-1.226.693-2.346 1.789-2.894L15 10v5c0 1.657-1.343 3-3 3s-3-1.343-3-3Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Music = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M18.49 2.128A1 1 0 0119 3v13a3 3 0 11-2-2.83V7.784l-7 4.278V19a3 3 0 11-2-2.83V8.5a1 1 0 01.479-.853l9-5.5a1 1 0 011.01-.02Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Gaming = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M1 7.803c0-.502.25-.97.668-1.248L6.21 3.527c.482-.322 1.107-.337 1.604-.039L12 6l4.186-2.512c.497-.298 1.122-.283 1.604.039l4.542 3.028c.417.278.668.746.668 1.248v6.307c0 .549-.3 1.054-.782 1.316l-9.5 5.182c-.447.244-.989.244-1.436 0l-9.5-5.182C1.3 15.164 1 14.658 1 14.11V7.803ZM16 12.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5Zm-9-5c-.552 0-1 .448-1 1V10H4.5c-.552 0-1 .448-1 1 0 .553.448 1 1 1H6v1.5c0 .553.448 1 1 1s1-.447 1-1V12h1.5c.552 0 1-.447 1-1 0-.552-.448-1-1-1H8V8.5c0-.552-.448-1-1-1ZM18.5 11c.828 0 1.5-.672 1.5-1.5S19.328 8 18.5 8 17 8.672 17 9.5s.672 1.5 1.5 1.5Z"
      fillRule="evenodd"
    />
  </svg>
);

export const News = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M2 5.121V3l.94.94.56.56.5.5.94-.94.12-.12L6 3l.94.94.12.12L8 5l.94-.94.12-.12L10 3l.94.94.12.12L12 5l.94-.94.12-.12L14 3l.94.94.12.12L16 5l.94-.94.12-.12L18 3l.94.94.12.12L20 5l.5-.5.56-.56L22 3v16c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V5.121ZM10.75 19.5h-4.5v-5.25h4.5v5.25Zm1.25 0V13H5v6.5H4c-.276 0-.5-.224-.5-.5V7.65l2.514-2.514.925.925L8 7.12l1.06-1.06.94-.94.94.94L12 7.12l1.06-1.06.94-.94.94.94L16 7.12l1.06-1.06.926-.925L20.5 7.65V19c0 .276-.224.5-.5.5h-8ZM19 9v2H5V9h14Zm-5 4h5v1.5h-5V13Zm5 3h-5v1.5h5V16Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Sports = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M6.5 2C5.672 2 5 2.672 5 3.5V4H3c-.552 0-1 .448-1 1v3c0 2.493 1.825 4.56 4.212 4.938 1.082 1.588 2.8 2.707 4.788 2.991V18.5H9.5c-.828 0-1.5.672-1.5 1.5v2h8v-2c0-.828-.672-1.5-1.5-1.5H13v-2.57c1.988-.285 3.706-1.404 4.788-2.992C20.175 12.56 22 10.493 22 8V5c0-.552-.448-1-1-1h-2v-.5c0-.828-.672-1.5-1.5-1.5h-11ZM19 5.25V9c0 .844-.15 1.654-.424 2.403C19.86 10.808 20.75 9.508 20.75 8V5.25H19ZM5.424 11.403C5.15 10.654 5 9.845 5 9V5.25H3.25V8c0 1.508.89 2.808 2.174 3.403Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Settings = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M9.792 2.725A1 1 0 0110.753 2h2.492a1 1 0 01.961.725l.67 2.347c.605.251 1.17.58 1.682.972l2.37-.593a1 1 0 011.108.47l1.246 2.158a1 1 0 01-.147 1.195l-1.698 1.755a7.584 7.584 0 010 1.942l1.698 1.755a1 1 0 01.147 1.195l-1.245 2.158a1 1 0 01-1.11.47l-2.369-.593a7.494 7.494 0 01-1.681.972l-.67 2.347a1 1 0 01-.962.725h-2.492a1 1 0 01-.961-.725l-.67-2.347a7.494 7.494 0 01-1.682-.972l-2.37.593a1 1 0 01-1.108-.47L2.716 15.92a1 1 0 01.147-1.195l1.698-1.755a7.574 7.574 0 010-1.942L2.863 9.274a1 1 0 01-.147-1.195L3.962 5.92a1 1 0 011.109-.47l2.369.593a7.492 7.492 0 011.681-.972l.67-2.347ZM11.999 15a3 3 0 100-6 3 3 0 000 6Z"
      fillRule="evenodd"
    />
  </svg>
);

export const ReportHistory = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M5 3h6.073a1.5 1.5 0 011.342.83L13 5h5.5A1.5 1.5 0 0120 6.5v8a1.5 1.5 0 01-1.5 1.5h-5.573a1.5 1.5 0 01-1.342-.83L11 14H6v7a1 1 0 11-2 0V3h1Z"
      fillRule="evenodd"
    />
  </svg>
);
export const Help = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M3.5 12c0 4.694 3.806 8.5 8.5 8.5s8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5S3.5 7.306 3.5 12ZM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm2.245 7.505v-.003l-.003-.045c-.004-.044-.012-.114-.03-.2-.034-.174-.103-.4-.234-.619-.234-.39-.734-.883-1.978-.883s-1.744.494-1.978.883c-.131.22-.2.445-.235.62-.017.085-.025.155-.029.2l-.003.044v.004c-.004.415-.34.749-.755.749-.417 0-.755-.338-.755-.755H9h-.755v-.022l.001-.036.008-.114c.008-.092.023-.218.053-.367.058-.294.177-.694.42-1.1.517-.86 1.517-1.616 3.273-1.616 1.756 0 2.756.756 3.272 1.617.244.405.363.805.421 1.1.03.148.046.274.053.366l.008.114v.036l.001.013v.008L15 9.5h.755c0 .799-.249 1.397-.676 1.847-.374.395-.853.634-1.202.808l-.04.02c-.398.2-.646.333-.82.516-.136.143-.262.358-.262.809 0 .417-.338.755-.755.755s-.755-.338-.755-.755c0-.799.249-1.397.676-1.847.374-.395.853-.634 1.202-.808l.04-.02c.398-.2.646-.333.82-.516.135-.143.261-.356.262-.804ZM12 18.25c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
      fillRule="evenodd"
    />
  </svg>
);

export const SendFeedback = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M6.379 17.5H19c.276 0 .5-.224.5-.5V5c0-.276-.224-.5-.5-.5H5c-.276 0-.5.224-.5.5v14.379l1.44-1.44.439-.439Zm-1.879 4-.033.033-.26.26-.353.353c-.315.315-.854.092-.854-.353V5c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H7l-2.5 2.5ZM12 6c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1Zm0 9.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25Z"
      fillRule="evenodd"
    />
  </svg>
);

export const LikedVideo = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z"
      fillRule="evenodd"
    />
  </svg>
);

export const History = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inherit',
    }}
  >
    <path
      clipRule="evenodd"
      d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z"
      fillRule="evenodd"
    />
  </svg>
);

export const Search = ({
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    viewBox="0 0 24 24"
    width={width}
    focusable="false"
    aria-hidden="true"
    style={{
      pointerEvents: 'none',
      display: 'inline-block',
      width: '100%',
      height: '100%',
    }}
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
    ></path>
  </svg>
);

export const CreateIcon = ({
  width = 29, // Fixed width
  height = 29, // Fixed height
  fill = 'currentColor',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width} // Set width from props or default value
    height={height} // Set height from props or default value
    fill={fill} // Set fill color from props
    style={{
      pointerEvents: 'none',
      display: 'inherit', // Keeps the default display behavior
    }}
    viewBox="0 0 24 24"
    focusable="false"
    aria-hidden="true"
    {...props} // Pass any additional props
  >
    <path
      d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
      className="camera"
    />
  </svg>
);
