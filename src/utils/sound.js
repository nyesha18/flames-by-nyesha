let enabled = true;

export function setSoundEnabled(value) {
    enabled = value;
}

export function playSound(sound) {
    if (!enabled) return;

    const audio = new Audio(sound);
    audio.volume = 0.45;

    audio.play().catch(() => {});
}