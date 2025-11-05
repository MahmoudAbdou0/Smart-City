const Background = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-[#f7f7f7] to-white">
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full opacity-5"
                    preserveAspectRatio="xMinYMin slice"
                >
                    <defs>
                        <pattern id="egyptian-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path
                                d="M100 30 Q100 20 105 20 Q110 20 110 25 Q110 30 105 32 Q100 34 95 32 Q90 30 90 25 Q90 20 95 20 Q100 20 100 30 M100 32 L100 60 M85 45 L115 45"
                                stroke="rgb(209, 169, 99)"
                                fill="none"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M50 100 Q40 85 50 70 M50 100 Q50 85 50 70 M50 100 Q60 85 50 70"
                                stroke="rgb(209, 169, 99)"
                                fill="none"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M150 100 Q160 95 170 100 M150 100 Q155 110 160 108 M160 108 L165 100"
                                stroke="rgb(209, 169, 99)"
                                fill="none"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M30 180 L50 150 L70 180 Z"
                                stroke="rgb(172, 65, 67)"
                                fill="none"
                                strokeWidth="1.5"
                            />
                            <rect x="140" y="150" width="20" height="20" fill="none" stroke="rgb(209, 169, 99)" strokeWidth="1" />
                            <circle cx="180" cy="40" r="8" fill="none" stroke="rgb(172, 65, 67)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#egyptian-pattern)" />
                </svg>
            </div>
        </div>
    );
};

export default Background;
