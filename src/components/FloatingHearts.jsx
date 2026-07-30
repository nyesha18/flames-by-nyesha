export default function FloatingHearts() {
    const hearts = ["❤️","💖","💕","💗","💘","💝"];

    return (
        <>
            {hearts.map((heart, index) => (
                <span
                    key={index}
                    className={`heart heart${index}`}
                >
                    {heart}
                </span>
            ))}
        </>
    );
}