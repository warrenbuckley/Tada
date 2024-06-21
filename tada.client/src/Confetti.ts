import confetti from 'canvas-confetti';

interface Option {
    particleRatio: number;
    opts: confetti.Options;
}

export function launchConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 },
        ticks: 5000
    };

    function fire(particleRatio: number, opts: object) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    const options: Option[] = [
        { particleRatio: 0.25, opts: { spread: 26, startVelocity: 55 } },
        { particleRatio: 0.2, opts: { spread: 60 } },
        { particleRatio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
        { particleRatio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
        { particleRatio: 0.1, opts: { spread: 120, startVelocity: 45 } }
    ];

    options.forEach(option => fire(option.particleRatio, option.opts));
}

