import React from 'react'

const LoginIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 50 50"
      {...props}
    >
      <rect width="50" height="50" fill="gray" rx="6"></rect>
      <path
        fill="#fff"
        stroke="#fff"
        d="M19.78 30.146a1.336 1.336 0 01-.33-.887c0-.331.11-.607.33-.829l2.227-2.227H13.37c-.34 0-.627-.115-.858-.346a1.16 1.16 0 01-.345-.857c0-.341.115-.627.346-.858a1.16 1.16 0 01.857-.346h8.637L19.78 21.57a1.173 1.173 0 01-.361-.858c0-.331.12-.617.361-.857.22-.24.497-.361.828-.361.332 0 .607.11.827.33l4.334 4.334c.12.12.205.251.256.391.05.14.075.291.075.452 0 .16-.025.31-.075.451-.05.14-.135.271-.256.391l-4.334 4.334c-.24.24-.521.35-.842.33a1.219 1.219 0 01-.813-.36zm6.424 5.687c-.341 0-.627-.115-.857-.345A1.17 1.17 0 0125 34.63c0-.342.116-.628.347-.859a1.16 1.16 0 01.857-.345h7.222V16.574h-7.222c-.341 0-.627-.116-.858-.347A1.16 1.16 0 0125 15.37c0-.34.116-.627.347-.858a1.16 1.16 0 01.857-.346h7.222a2.32 2.32 0 011.7.708c.473.472.708 1.039.707 1.7v16.852a2.32 2.32 0 01-.707 1.7 2.314 2.314 0 01-1.7.707h-7.222z"
      ></path>
    </svg>
  );
}

export default LoginIcon