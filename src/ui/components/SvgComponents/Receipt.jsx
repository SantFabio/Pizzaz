
function Receipt(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={36}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ai ai-Receipt"
            {...props}
        >
            <path d="M19 21H7a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v13c0 1.657.343 3 2 3z" />
            <path d="M21 10a2 2 0 00-2-2h-2v10.5c0 1.38.62 2.5 2 2.5s2-1.12 2-2.5V10zM13 11H7M13 7H7M10 15H7" />
        </svg>
    )
}

export default Receipt;