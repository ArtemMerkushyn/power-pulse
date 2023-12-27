import React from 'react'
import PropTypes from 'prop-types'

const Icons = ({ icon }) => {
    const icons = {

        logo: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 17" fill="none">
        <path d="M43 7.28571C43.5523 7.28571 44 7.73343 44 8.28571V8.71429C44 9.26657 43.5523 9.71429 43 9.71429H41.8571C41.3049 9.71429 40.8571 10.162 40.8571 10.7143V13.5714C40.8571 14.1237 40.4094 14.5714 39.8571 14.5714H38.7143C38.162 14.5714 37.7143 15.0191 37.7143 15.5714V16C37.7143 16.5523 37.2666 17 36.7143 17H34C33.4477 17 33 16.5523 33 16V10.7143C33 10.162 32.5523 9.71429 32 9.71429H12C11.4477 9.71429 11 10.162 11 10.7143V16C11 16.5523 10.5523 17 10 17H7.28572C6.73343 17 6.28571 16.5523 6.28571 16V15.5714C6.28571 15.0191 5.838 14.5714 5.28571 14.5714H4.14286C3.59057 14.5714 3.14286 14.1237 3.14286 13.5714V10.7143C3.14286 10.162 2.69514 9.71429 2.14286 9.71429H0.999999C0.447714 9.71429 0 9.26657 0 8.71429V8.28571C0 7.73343 0.447715 7.28571 1 7.28571H2.14286C2.69514 7.28571 3.14286 6.838 3.14286 6.28571V3.42857C3.14286 2.87629 3.59057 2.42857 4.14286 2.42857H5.28572C5.838 2.42857 6.28571 1.98086 6.28571 1.42857V0.999999C6.28571 0.447714 6.73343 0 7.28571 0H10C10.5523 0 11 0.447715 11 1V6.28572C11 6.838 11.4477 7.28571 12 7.28571H32C32.5523 7.28571 33 6.838 33 6.28571V0.999999C33 0.447714 33.4477 0 34 0H36.7143C37.2666 0 37.7143 0.447715 37.7143 1V1.42857C37.7143 1.98086 38.162 2.42857 38.7143 2.42857H39.8571C40.4094 2.42857 40.8571 2.87629 40.8571 3.42857V6.28572C40.8571 6.838 41.3049 7.28571 41.8571 7.28571H43Z" fill="#E6533C"/>
        </svg>,

        settings: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#EFEDE8" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8058 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73755 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12153 4.68775 7.32205 4.82186 7.49091 4.99091L7.54546 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8194 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8058 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12153 19.1781 7.32205 19.0091 7.49091L18.9545 7.54546C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8194 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="#EFEDE8" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,

        user: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M10.5 3.5C11.4283 3.5 12.3185 3.86875 12.9749 4.52513C13.6313 5.1815 14 6.07174 14 7C14 7.92826 13.6313 8.8185 12.9749 9.47488C12.3185 10.1313 11.4283 10.5 10.5 10.5C9.57175 10.5 8.68151 10.1313 8.02513 9.47488C7.36875 8.8185 7 7.92826 7 7C7 6.07174 7.36875 5.1815 8.02513 4.52513C8.68151 3.86875 9.57175 3.5 10.5 3.5ZM10.5 17.5C10.5 17.5 17.5 17.5 17.5 15.75C17.5 13.65 14.0875 11.375 10.5 11.375C6.9125 11.375 3.5 13.65 3.5 15.75C3.5 17.5 10.5 17.5 10.5 17.5Z" fill="#EFEDE8" fillOpacity="0.1"/>
        </svg>,

        exit: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3333 14.1666L17.5 9.99998M17.5 9.99998L13.3333 5.83331M17.5 9.99998H7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

        menu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12H15M3 6H21M3 18H21" stroke="#E6533C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }

    return icons[icon];
}

Icons.propTypes = {
    icon: PropTypes.string
}

export default Icons;