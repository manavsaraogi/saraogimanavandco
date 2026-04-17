(function() {
    var phoneNumber = '916362378039';
    var message = 'Hello! I would like to know more about your services.';

    var style = document.createElement('style');
    style.textContent = '\
        #wa-fab { position: fixed; bottom: 24px; right: 24px; z-index: 9999; width: 60px; height: 60px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(37,211,102,0.4); transition: transform 0.2s, box-shadow 0.2s; border: none; outline: none; } \
        #wa-fab:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(37,211,102,0.5); } \
        #wa-fab svg { width: 32px; height: 32px; fill: #fff; } \
        #wa-tooltip { position: fixed; bottom: 92px; right: 24px; z-index: 9999; background: #fff; color: #333; padding: 10px 16px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); font-family: Inter, sans-serif; font-size: 14px; max-width: 220px; opacity: 0; transform: translateY(8px); transition: opacity 0.3s, transform 0.3s; pointer-events: none; } \
        #wa-tooltip.show { opacity: 1; transform: translateY(0); } \
        #wa-tooltip::after { content: ""; position: absolute; bottom: -6px; right: 28px; width: 12px; height: 12px; background: #fff; transform: rotate(45deg); box-shadow: 2px 2px 4px rgba(0,0,0,0.05); } \
        @media (max-width: 640px) { #wa-fab { bottom: 16px; right: 16px; width: 54px; height: 54px; } #wa-tooltip { bottom: 78px; right: 16px; } } \
    ';
    document.head.appendChild(style);

    var tooltip = document.createElement('div');
    tooltip.id = 'wa-tooltip';
    tooltip.textContent = 'Chat with us on WhatsApp';
    document.body.appendChild(tooltip);

    var fab = document.createElement('a');
    fab.id = 'wa-fab';
    fab.href = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    fab.target = '_blank';
    fab.rel = 'noopener noreferrer';
    fab.setAttribute('aria-label', 'Chat on WhatsApp');
    fab.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.004 2.667A13.24 13.24 0 002.667 15.85a13.12 13.12 0 001.87 6.79L2.667 29.333l6.93-1.82a13.27 13.27 0 006.393 1.63h.014A13.27 13.27 0 0029.333 15.88 13.24 13.24 0 0016.004 2.667zm0 24.27a11.01 11.01 0 01-5.618-1.54l-.403-.24-4.178 1.096 1.116-4.073-.263-.418A10.88 10.88 0 014.93 15.85a11.01 11.01 0 0111.074-10.93 11.01 11.01 0 0111.063 10.96 11.02 11.02 0 01-11.063 11.057zm6.066-8.27c-.333-.167-1.97-.972-2.276-1.083-.306-.111-.528-.167-.75.167-.222.333-.861 1.083-1.056 1.305-.194.222-.389.25-.722.083-.333-.167-1.405-.518-2.676-1.65-.989-.882-1.657-1.97-1.851-2.303-.194-.333-.021-.514.146-.68.15-.15.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.472-.27-.65-.546-.562-.75-.573l-.639-.01c-.222 0-.583.083-.889.417-.306.333-1.167 1.139-1.167 2.778s1.194 3.222 1.361 3.444c.167.222 2.352 3.592 5.7 5.038.796.344 1.418.55 1.903.703.8.255 1.527.219 2.103.133.641-.096 1.97-.806 2.249-1.583.278-.778.278-1.444.194-1.583-.083-.14-.306-.222-.639-.389z"/></svg>';
    document.body.appendChild(fab);

    // Show tooltip briefly after page load
    setTimeout(function() { tooltip.classList.add('show'); }, 2000);
    setTimeout(function() { tooltip.classList.remove('show'); }, 6000);

    // Show/hide tooltip on hover
    fab.addEventListener('mouseenter', function() { tooltip.classList.add('show'); });
    fab.addEventListener('mouseleave', function() { tooltip.classList.remove('show'); });
})();
