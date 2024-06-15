import { useEffect } from 'react';
import './EmojiRain.css';

const emojis = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '🔥', '😁', '😱', '🌴', '👏'];;

const EmojiRain = () => {
    useEffect(() => {
        const createEmoji = () => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
            emoji.style.top = '-' + (Math.random() * 100) + 'px';

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 5000);
        };

        const interval = setInterval(createEmoji, 100);

        setTimeout(() => clearInterval(interval), 30000);

        return () => clearInterval(interval);
    }, []);

    return null;
};

export default EmojiRain;
