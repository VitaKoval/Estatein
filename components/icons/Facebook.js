import React from 'react'

function Facebook({ color = '#A685FA', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.7442 3.98403H18.0002V0.168036C16.9079 0.0544523 15.8104 -0.00162514 14.7122 3.58369e-05C11.4482 3.58369e-05 9.21622 1.99203 9.21622 5.64003V8.78402H5.53223V13.056H9.21622V24H13.6322V13.056H17.3042L17.8562 8.78402H13.6322V6.06003C13.6322 4.80003 13.9682 3.98403 15.7442 3.98403Z"
        fill={color}
      />
    </svg>
  )
}

export default Facebook
