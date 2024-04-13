function Door(props) {
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
            className="ai ai-Door"
            {...props}
        >
            <path d="M5 2h11a3 3 0 013 3v14a1 1 0 01-1 1h-3" />
            <path d="M5 2l7.588 1.518A3 3 0 0115 6.459V20.78a1 1 0 01-1.196.98l-7.196-1.438A2 2 0 015 18.36V2zM12 12v2" />
        </svg>
    )
}

export default Door;