import React from "react";

//CSS properties
const cssInput =
  "border borde-black rounded-md w-[420px] h-[39px] text-[16p x] bg-[#ffffff]";
const cssIcon = " absolute -translate-x-10 translate-y-2";

export const SearchBar = () => {
  return (
    <>
      <input className={cssInput} type="text" placeholder="Search..." />
      <span className={cssIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          aria-hidden="true"
          class="crayons-icon c-btn__icon"
          focusable="false"
        >
          <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
        </svg>
      </span>
    </>
  );
};
