import React from 'react'

const getIcon = (name, color) => {
  switch (name) {
    case 'Logo-2':
      return (
        <>
          <svg
            width="504"
            height="161"
            viewBox="0 0 504 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.9181 1.64971C40.611 5.88111 27.7795 33.5175 27.7795 36.5588C27.7795 38.5423 31.3512 46.7406 35.7165 54.939C40.4787 63.7985 43.6535 71.4679 43.6535 73.8481C43.6535 76.096 44.1827 78.2117 44.8441 78.6084C46.1669 79.534 47.622 76.3604 47.622 72.5257C47.622 70.939 51.1937 63.0051 55.5591 54.6745C59.9244 46.4762 63.4961 38.2778 63.4961 36.4266C63.4961 33.6497 47.0929 0.0629328 45.6378 0.0629328C45.5055 0.0629328 44.7118 0.856321 43.9181 1.64971Z"
              fill={color}            />
            <path
              d="M259.276 38.4101C257.82 39.8646 256.63 42.2448 256.63 43.6993C256.63 47.2696 261.26 51.6332 264.964 51.6332C268.8 51.6332 272.504 47.7985 272.504 43.9638C272.504 40.2613 268.006 35.7654 264.567 35.7654C263.112 35.7654 260.731 36.9555 259.276 38.4101Z"
              fill={color}            />
            <path
              d="M287.32 37.8811C281.632 41.8481 284.939 51.6332 292.082 51.6332C298.696 51.6332 301.606 41.7159 296.05 37.8811C294.463 36.6911 292.479 35.7654 291.685 35.7654C290.891 35.7654 288.907 36.6911 287.32 37.8811Z"
              fill={color}            />
            <path
              d="M17.3291 53.6167C6.34961 73.9803 0 91.8316 0 102.278C0 109.551 2.64567 120.394 6.08504 127.137C9.65669 134.41 16.1386 140.36 25.5307 144.989C35.3197 149.881 41.0079 154.509 41.0079 157.551C41.0079 158.873 41.6693 160.063 42.3307 160.063C43.1244 160.063 43.6535 153.584 43.6535 143.137C43.6535 123.964 43.7858 124.36 31.6157 117.352C22.3559 112.063 13.6252 101.617 10.9795 92.7572C8.20157 83.1043 9.65669 75.9638 17.9906 58.2448C21.4299 50.9721 23.9433 44.625 23.5465 44.2283C23.1496 43.8316 20.3717 48.063 17.3291 53.6167Z"
              fill={color}            />
            <path
              d="M73.6819 59.5671C79.6346 72.658 80.9575 76.8894 81.0898 83.1043C81.3543 97.253 73.285 109.418 57.1465 118.807C52.3842 121.584 48.548 124.757 48.1512 126.344C47.7543 127.798 47.7543 136.129 47.8866 144.856C48.2835 159.931 48.4157 160.592 50.2677 156.757C51.5905 154.113 55.9559 150.675 63.7606 146.179C70.1102 142.608 76.7244 138.245 78.4441 136.526C86.5134 128.856 92.3339 110.344 90.7465 97.782C90.2173 94.344 88.4976 87.6002 86.778 82.5754C83.074 71.6002 69.3165 43.6993 67.5968 43.6993C66.9354 43.6993 69.5811 50.8398 73.6819 59.5671Z"
              fill={color}
            />
            <path
              d="M123.024 62.7407C123.024 63.7985 124.743 64.9886 126.992 65.5175C134.532 67.2365 134.929 68.9555 134.929 102.807C134.929 119.6 134.4 134.939 133.606 136.79C132.813 139.17 131.093 140.36 127.654 141.022C125.008 141.418 123.024 142.608 123.024 143.666C123.024 145.121 126.728 145.518 142.205 145.518C157.946 145.518 161.386 145.121 161.386 143.666C161.386 142.608 159.666 141.418 157.55 140.889C150.935 139.435 150.142 137.319 150.142 119.865V103.865L169.72 103.468L189.165 103.071V119.071C189.165 127.931 188.636 136.129 187.843 137.451C187.181 138.774 184.535 140.36 181.89 140.757C179.112 141.286 177.26 142.476 177.26 143.534C177.26 145.253 180.567 145.518 196.441 145.518C212.58 145.518 215.622 145.253 215.622 143.534C215.622 142.476 214.431 141.551 213.109 141.551C211.786 141.551 209.272 140.36 207.553 139.038L204.378 136.526V103.468C204.378 67.7655 204.51 67.1043 211.654 65.6498C214.035 65.2531 215.622 64.063 215.622 62.8729C215.622 61.1539 212.712 60.8894 196.441 60.8894C180.17 60.8894 177.26 61.1539 177.26 62.8729C177.26 64.063 178.847 65.2531 181.228 65.782C187.843 66.9721 189.165 70.4101 189.165 84.9555V98.0465L169.72 97.6498L150.142 97.2531V83.8977C150.142 69.22 151.068 66.9721 157.417 65.6498C159.798 65.2531 161.386 64.063 161.386 62.8729C161.386 61.1539 158.476 60.8894 142.205 60.8894C126.463 60.8894 123.024 61.2861 123.024 62.7407Z"
              fill={color}
            />
            <path
              d="M230.173 62.8728C230.173 64.0629 231.761 65.253 234.142 65.6497C236.258 66.1786 238.639 67.1042 239.301 68.0299C239.962 68.8233 240.756 81.3852 241.153 95.9307C241.55 110.476 242.608 124.757 243.402 127.666C245.386 134.41 254.381 143.137 261.524 145.253C275.15 149.352 292.214 146.046 299.754 137.98C306.368 130.84 307.162 126.873 308.22 98.5753C308.75 84.0299 309.543 71.0712 310.205 69.8811C310.734 68.5588 312.983 66.972 315.364 66.4431C317.613 65.7819 319.597 64.3274 319.861 63.1373C320.258 61.1538 318.671 60.8894 304.384 60.8894C291.288 60.8894 288.378 61.2861 288.378 62.8728C288.378 63.9307 290.23 65.1208 292.876 65.6497C301.209 67.1042 302.003 69.3522 302.665 90.7737C303.855 128.195 297.506 140.096 277.663 138.641C268.535 137.98 264.038 135.203 260.069 127.534C257.556 122.906 257.291 119.6 256.894 97.5175C256.365 69.8811 257.027 67.2365 264.435 65.7819C266.816 65.253 268.535 64.0629 268.535 62.8728C268.535 61.1538 265.625 60.8894 249.354 60.8894C233.083 60.8894 230.173 61.1538 230.173 62.8728Z"
              fill={color}
            />
            <path
              d="M332.031 62.6084C332.031 63.7985 333.751 64.9886 336 65.5175C343.937 67.2365 343.937 67.2365 343.937 102.675C343.937 122.113 343.408 136.129 342.614 137.584C341.82 139.038 339.175 140.493 336.661 141.022C334.016 141.418 332.031 142.608 332.031 143.666C332.031 145.121 335.735 145.517 351.213 145.517C366.954 145.517 370.394 145.121 370.394 143.666C370.394 142.608 368.674 141.418 366.557 140.889C364.441 140.493 361.928 139.17 361.002 137.98C358.753 135.468 357.562 111.534 359.546 109.551C360.34 108.757 362.721 108.625 365.102 109.154C368.277 109.815 370.129 111.534 372.775 116.03C387.194 140.493 391.294 144.327 405.846 146.046C412.063 146.84 412.724 146.708 412.724 144.327C412.724 142.873 411.534 141.418 410.079 140.889C407.036 139.964 398.438 129.121 389.707 115.104C384.151 106.245 383.754 105.055 385.739 103.865C390.898 100.823 396.586 95.0051 398.173 91.3026C400.29 86.1456 399.231 75.3026 396.321 70.8068C394.998 68.8233 391.162 66.0464 387.855 64.4596C382.299 61.9473 378.728 61.5506 356.901 61.1539C335.339 60.7572 332.031 60.8894 332.031 62.6084ZM376.214 68.9555C383.357 74.6415 385.739 85.0877 381.77 94.6084C379.124 100.691 374.362 103.468 366.161 103.732L359.15 103.865L358.753 87.6001C358.62 77.9472 359.017 70.4101 359.811 68.8233C361.795 65.1208 371.452 65.1208 376.214 68.9555Z"
              fill={color}
            />
            <path
              d="M423.307 62.7406C423.307 64.0629 424.894 65.253 427.276 65.782C434.816 67.2365 435.213 68.9555 435.213 102.807C435.213 119.6 434.683 134.939 434.022 136.658C433.096 138.906 431.376 140.096 428.069 140.757C425.159 141.286 423.307 142.476 423.307 143.534C423.307 145.253 426.614 145.517 442.488 145.517C457.701 145.517 461.669 145.121 461.669 143.798C461.669 142.741 459.42 141.286 456.51 140.493C450.293 138.509 449.764 137.055 449.764 120.658C449.764 109.947 450.028 108.493 452.145 108.493C458.23 108.493 460.611 110.476 465.902 119.6C478.469 141.154 481.909 144.195 497.121 146.046C503.471 146.84 504 146.708 504 144.195C504 142.741 503.206 141.551 502.28 141.551C497.783 141.551 472.913 106.906 475.824 104.658C476.353 104.129 478.998 102.146 481.644 100.294C494.74 90.6415 493.55 71.7324 479.263 64.7241C473.443 61.815 470.929 61.5506 448.176 61.1539C425.953 60.6249 423.307 60.8894 423.307 62.7406ZM469.739 71.2034C474.104 76.096 475.824 85.0877 473.707 91.6993C471.194 99.1043 465.77 103.203 457.172 104.129L449.764 104.922V87.0712C449.764 74.6415 450.293 68.8233 451.483 67.6332C452.542 66.5753 455.32 66.1787 459.553 66.5753C464.844 66.972 466.828 68.0299 469.739 71.2034Z"
              fill={color}
            />
          </svg>
        </>
      )
    case 'Logo':
      return (
        <>
          <svg
            width="301"
            height="151"
            viewBox="0 0 301 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.741 148.621H33.978V66.509H16.9V148.6H0.117996V0H16.884V51.518H33.944V0.013H50.744L50.741 148.621Z"
              fill={color}
            />
            <path
              d="M147.782 148.6H131V-0.000152588H147.766L147.782 148.6Z"
              fill={color}
            />
            <path
              d="M164.25 66.5088L147.782 66.5089L173.734 31.9999H190.5L164.25 66.5088Z"
              fill={color}
            />
            <path
              d="M190.5 31.9999H173.734L147.766 -0.000152588L164.25 -0.000146866L190.5 31.9999Z"
              fill={color}
            />
            <path
              d="M116.358 148.622H99.609V138.852L82.956 148.626L65.722 138.756V52.5H82.5V129.217L99.581 138.617L99.609 52.5H116.358V148.622Z"
              fill={color}
            />
            <path
              d="M179.052 147.112L147.5 66.4345L164.001 66.4345L192.323 135.282L213.007 129.799L205.422 140.182L179.052 147.112Z"
              fill={color}
            />
            <path
              d="M232.782 148.6H216V0H232.766L232.782 148.6Z"
              fill={color}
            />
            <path
              d="M249.25 66.509L232.782 66.509L258.734 32H275.5L249.25 66.509Z"
              fill={color}
            />
            <path
              d="M275.5 32H258.734L232.766 0L249.25 5.72205e-06L275.5 32Z"
              fill={color}
            />
            <path
              d="M264.052 147.113L232.5 66.4347L249.001 66.4346L277.323 135.282L298.007 129.799L290.422 140.182L264.052 147.113Z"
              fill={color}
            />
          </svg>
        </>
      )
    case 'Apple':
      return (
        <path
          d="M65.8,49.692c-0.027-4.875,2.179-8.555,6.642-11.265-2.5-3.573-6.27-5.539-11.251-5.925-4.716-.372-9.87,2.75-11.756,2.75-1.993,0-6.562-2.617-10.149-2.617C31.877,32.756,24,38.547,24,50.33a33.088,33.088,0,0,0,1.913,10.786c1.7,4.875,7.837,16.831,14.24,16.631,3.348-.08,5.712-2.378,10.069-2.378,4.224,0,6.416,2.378,10.149,2.378C66.827,77.655,72.379,66.789,74,61.9c-8.661-4.078-8.2-11.955-8.2-12.208h0ZM58.285,27.881a12.511,12.511,0,0,0,3.188-9.631,14.086,14.086,0,0,0-9.02,4.636,12.707,12.707,0,0,0-3.4,9.551C52.52,32.7,55.682,30.923,58.285,27.881Z"
          fill={color}
        />
      )
    case 'Facebook':
      return (
        <path
          d="M43.52,80V53.164H34.531V42.5H43.52V34.1C43.52,24.969,49.1,20,57.242,20a75.461,75.461,0,0,1,8.227.422v9.539H59.82c-4.43,0-5.285,2.109-5.285,5.191V42.5h10L63.16,53.164H54.535V80"
          fill={color}
        />
      )
    case 'Instagram':
      return (
        <path
          d="M50.007,34.62A15.38,15.38,0,1,0,65.387,50,15.355,15.355,0,0,0,50.007,34.62Zm0,25.379a10,10,0,1,1,10-10,10.017,10.017,0,0,1-10,10h0ZM69.6,33.991A3.587,3.587,0,1,1,66.016,30.4,3.579,3.579,0,0,1,69.6,33.991Zm10.186,3.641c-0.228-4.805-1.325-9.062-4.846-12.569s-7.764-4.6-12.569-4.846c-4.953-.281-19.8-0.281-24.75,0-4.792.228-9.049,1.325-12.569,4.832s-4.6,7.764-4.846,12.569c-0.281,4.953-.281,19.8,0,24.75,0.228,4.805,1.325,9.062,4.846,12.569s7.764,4.6,12.569,4.846c4.953,0.281,19.8.281,24.75,0,4.805-.228,9.062-1.325,12.569-4.846s4.6-7.764,4.846-12.569c0.281-4.953.281-19.784,0-24.736h0Zm-6.4,30.05a10.123,10.123,0,0,1-5.7,5.7c-3.949,1.566-13.318,1.2-17.682,1.2s-13.747.348-17.682-1.2a10.123,10.123,0,0,1-5.7-5.7c-1.566-3.949-1.2-13.318-1.2-17.682s-0.348-13.747,1.2-17.682a10.123,10.123,0,0,1,5.7-5.7c3.949-1.566,13.318-1.2,17.682-1.2s13.747-.348,17.682,1.2a10.123,10.123,0,0,1,5.7,5.7C74.957,36.267,74.6,45.636,74.6,50S74.957,63.747,73.391,67.682Z"
          fill={color}
        />
      )
    case 'Soundcloud':
      return (
        <path
          d="M28.816,50.025l0.589,6.6-0.589,6.938a0.48,0.48,0,0,1-.447.447,0.44,0.44,0,0,1-.427-0.447l-0.569-6.938,0.569-6.6a0.436,0.436,0,0,1,.427-0.427A0.487,0.487,0,0,1,28.816,50.025Zm2.174-4.632a0.523,0.523,0,0,0-.508.508L29.974,56.628l0.508,6.938a0.523,0.523,0,0,0,.508.508,0.5,0.5,0,0,0,.477-0.508l0.589-6.938L31.467,45.9A0.5,0.5,0,0,0,30.99,45.393Zm2.59-2.448a0.562,0.562,0,0,0-.569.538L32.564,56.689l0.447,6.887a0.562,0.562,0,0,0,.569.538,0.535,0.535,0,0,0,.538-0.538l0.538-6.887L34.118,43.484a0.535,0.535,0,0,0-.538-0.538h0ZM18.231,52.758a0.273,0.273,0,0,0-.254.254L17.5,56.628l0.477,3.555a0.254,0.254,0,0,0,.508,0l0.569-3.555-0.569-3.616a0.273,0.273,0,0,0-.254-0.254h0Zm2.4-2.225a0.251,0.251,0,0,0-.254.254l-0.65,5.841,0.65,5.7a0.26,0.26,0,0,0,.254.284,0.3,0.3,0,0,0,.284-0.254l0.731-5.729-0.731-5.841A0.3,0.3,0,0,0,20.629,50.533Zm2.57-1.158a0.352,0.352,0,0,0-.335.335l-0.589,6.917,0.589,6.684a0.366,0.366,0,0,0,.335.315,0.316,0.316,0,0,0,.315-0.315l0.7-6.684-0.7-6.917a0.321,0.321,0,0,0-.315-0.335h0Zm2.57-.223a0.358,0.358,0,0,0-.366.366l-0.589,7.11L25.4,63.515a0.358,0.358,0,0,0,.366.366,0.4,0.4,0,0,0,.4-0.366l0.65-6.887-0.65-7.11a0.4,0.4,0,0,0-.4-0.366h0ZM50.289,37.887a0.794,0.794,0,0,0-.427-0.142,0.934,0.934,0,0,0-.569.193,1.041,1.041,0,0,0-.335.681V38.7L48.624,56.648l0.173,3.3,0.173,3.22a0.928,0.928,0,0,0,.9.874,0.88,0.88,0,0,0,.874-0.874l0.4-6.521-0.4-18.03a0.978,0.978,0,0,0-.457-0.731h0Zm-2.712,1.554A0.893,0.893,0,0,0,47.13,39.3a0.862,0.862,0,0,0-.447.142,0.8,0.8,0,0,0-.366.681l-0.03.173L46,56.628s0,0.03.315,6.664v0.03a0.766,0.766,0,0,0,.173.477,0.871,0.871,0,0,0,.65.315,0.824,0.824,0,0,0,.569-0.254,0.7,0.7,0,0,0,.254-0.569l0.03-.681,0.315-5.952L47.974,40.122a0.911,0.911,0,0,0-.4-0.681h0ZM36.262,41.726a0.617,0.617,0,0,0-.589.62L35.225,56.628l0.447,6.826a0.6,0.6,0,0,0,1.209,0l0.508-6.826L36.881,42.346a0.636,0.636,0,0,0-.62-0.62h0Zm38.265,6.379a8.158,8.158,0,0,0-3.108.62,14.117,14.117,0,0,0-14.048-12.84,13.852,13.852,0,0,0-5.109.955,0.89,0.89,0,0,0-.792.935V63.139a0.957,0.957,0,0,0,.874.935H74.516a7.984,7.984,0,0,0,.01-15.968h0ZM44.388,41.98a0.806,0.806,0,0,0-.792.792L43.26,56.658,43.6,63.322a0.8,0.8,0,0,0,.792.762,0.754,0.754,0,0,0,.762-0.762l0.4-6.664-0.4-13.886a0.781,0.781,0,0,0-.762-0.792h0Zm-5.445-.792a0.689,0.689,0,0,0-.65.681L37.9,56.628l0.4,6.8a0.666,0.666,0,0,0,1.331,0l0.447-6.8L39.624,41.869A0.716,0.716,0,0,0,38.943,41.188Zm2.712,0.345a0.7,0.7,0,0,0-.7.7l-0.4,14.394,0.4,6.745a0.716,0.716,0,0,0,.7.7,0.7,0.7,0,0,0,.7-0.7l0.427-6.745L42.356,42.234a0.69,0.69,0,0,0-.7-0.7h0Z"
          fill={color}
        />
      )
    case 'Spotify':
      return (
        <>
          <path
            d="M65.92,68.165a2.971,2.971,0,0,1-1.666-.561c-9.717-5.855-21.022-6.1-32.187-3.815a10.055,10.055,0,0,1-1.853.4,2.424,2.424,0,0,1-2.46-2.46,2.468,2.468,0,0,1,2.118-2.616C42.624,56.3,55.658,56.548,66.776,63.2a2.633,2.633,0,0,1,1.51,2.569,2.353,2.353,0,0,1-2.367,2.4h0Z"
            fill={color}
          />
          <path
            d="M70.108,57.949a3.845,3.845,0,0,1-1.915-.654c-9.732-5.762-24.245-8.082-37.155-4.578a6.413,6.413,0,0,1-1.853.4A3.024,3.024,0,0,1,26.164,50.1a3.064,3.064,0,0,1,2.414-3.223A52.377,52.377,0,0,1,43.807,44.76c10.106,0,19.87,2.507,27.562,7.085a3.246,3.246,0,0,1,1.76,3.068A3.017,3.017,0,0,1,70.108,57.949Z"
            fill={color}
          />
          <path
            d="M74.936,46.084a3.581,3.581,0,0,1-2.009-.607c-11.087-6.618-30.91-8.206-43.742-4.625a7.4,7.4,0,0,1-2.009.4,3.594,3.594,0,0,1-3.628-3.675,3.679,3.679,0,0,1,2.71-3.722,65.264,65.264,0,0,1,18.3-2.367c11.367,0,23.28,2.367,31.985,7.443a3.656,3.656,0,0,1,2.009,3.519,3.608,3.608,0,0,1-3.613,3.628h0Z"
            fill={color}
          />
        </>
      )
    case 'Twitter':
      return (
        <path
          d="M69.861,39.816c0.032,0.444.032,0.888,0.032,1.333C69.892,54.7,59.581,70.3,40.736,70.3A28.958,28.958,0,0,1,25,65.7a21.2,21.2,0,0,0,2.475.127A20.523,20.523,0,0,0,40.2,61.453a10.266,10.266,0,0,1-9.581-7.107,12.923,12.923,0,0,0,1.935.159,10.838,10.838,0,0,0,2.7-.349A10.249,10.249,0,0,1,27.03,44.1V43.972a10.32,10.32,0,0,0,4.632,1.3A10.263,10.263,0,0,1,28.49,31.567,29.128,29.128,0,0,0,49.619,42.291a11.568,11.568,0,0,1-.254-2.348A10.257,10.257,0,0,1,67.1,32.931a20.175,20.175,0,0,0,6.5-2.475A10.22,10.22,0,0,1,69.1,36.1,20.543,20.543,0,0,0,75,34.518a22.028,22.028,0,0,1-5.139,5.3h0Z"
          fill={color}
        />
      )
    case 'YouTube':
      return (
        <path
          d="M76.351,36.715a6.911,6.911,0,0,0-4.863-4.894C67.2,30.664,50,30.664,50,30.664s-17.2,0-21.488,1.157a6.911,6.911,0,0,0-4.863,4.894C22.5,41.032,22.5,50.039,22.5,50.039s0,9.007,1.149,13.324a6.808,6.808,0,0,0,4.863,4.816C32.8,69.336,50,69.336,50,69.336s17.2,0,21.488-1.157a6.808,6.808,0,0,0,4.863-4.816C77.5,59.046,77.5,50.039,77.5,50.039S77.5,41.032,76.351,36.715Zm-31.976,21.5V41.861L58.75,50.039,44.375,58.217h0Z"
          fill={color}
        />
      )
    case 'Github':
      return (
        <path
          d="M50,20.056a30.705,30.705,0,0,0-9.7,59.835c1.535.282,2.1-.666,2.1-1.48,0-.728-.027-2.659-.042-5.221-8.54,1.855-10.342-4.116-10.342-4.116-1.4-3.547-3.409-4.491-3.409-4.491-2.787-1.905.211-1.866.211-1.866,3.081.217,4.7,3.164,4.7,3.164,2.739,4.691,7.186,3.337,8.935,2.551A6.564,6.564,0,0,1,44.4,64.327c-6.817-.775-13.985-3.409-13.985-15.174a11.866,11.866,0,0,1,3.161-8.238,11.039,11.039,0,0,1,.3-8.126s2.577-.825,8.442,3.148a29.087,29.087,0,0,1,15.373,0c5.862-3.973,8.435-3.148,8.435-3.148a11.027,11.027,0,0,1,.3,8.126,11.844,11.844,0,0,1,3.156,8.238c0,11.8-7.178,14.39-14.018,15.15,1.1.948,2.084,2.822,2.084,5.686,0,4.1-.037,7.416-.037,8.422,0,.821.553,1.777,2.111,1.477A30.707,30.707,0,0,0,50,20.056Z"
          fill={color}
        />
      )
    case 'Arrow':
      return (
        <polygon
          points="51.829 7.172 46.172 12.828 79.343 46 4 46 4 54 79.343 54 46.172 87.172 51.829 92.828 94.658 50 51.829 7.172"
          fill={color}
        />
      )
    case 'Plus':
      return (
        <polygon
          points="80 46 54 46 54 20 46 20 46 46 20 46 20 54 46 54 46 80 54 80 54 54 80 54 80 46"
          fill={color}
        />
      )
    case 'Minus':
      return <rect x="20" y="46" width="60" height="8" fill={color} />
    case 'Checkmark':
      return (
        <path
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M12.1 52.1l24.4 24.4 53-53"
        />
      )
    case 'Chevron Down':
      return (
        <polygon
          points="51.5 85.657 8.672 42.828 14.328 37.172 51.5 74.343 88.672 37.172 94.328 42.828 51.5 85.657"
          fill={color}
        />
      )
    default:
      return <path />
  }
}

const Icon = (props) => {
  const { id = '', name, color, viewBox = '0 0 100 100', className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-labelledby={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}
      className={className || 'icon'}
    >
      <title id={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}>
        {name}
      </title>
      {getIcon(name, color)}
    </svg>
  )
}

export default Icon
