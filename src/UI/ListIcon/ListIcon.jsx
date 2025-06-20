import s from "./ListIcon.module.scss";

export const ListIcon = () => {
  return (
    <svg
      className={`sidebar-icon ${s.svg}`}
      xmlns="http://www.w3.org/2000/svg"
      height="21"
      viewBox="0 0 21 21"
      width="21"
    >
      <g fill="none" fillRule="evenodd" transform="translate(4 5)">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11.5 5.5h-7" />
          <path d="m11.5 9.5h-7" />
          <path d="m11.5 1.5h-7" />
        </g>
        <path
          d="m1.49884033 2.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
