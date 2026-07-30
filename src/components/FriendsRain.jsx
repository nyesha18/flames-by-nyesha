export default function FriendsRain() {

    return (
        <div className="rain-container">
            {Array.from({ length: 40 }).map((_, i) => (
                <span
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1.8 + Math.random()}s`
                    }}
                />
            ))}
        </div>
    );

}