const yinSide = document.getElementById('yinSide');
const yangSide = document.getElementById('yangSide');

yinSide.addEventListener('click', () => {
    if(yinSide.className == 'yin') {
        yinSide.className = 'yang'
        yangSide.className = 'yin'
    } else {
        yinSide.className = 'yin'
        yangSide.className = 'yang'
    }
    
});

yangSide.addEventListener('click', () => {
    if(yinSide.className == 'yin') {
        yinSide.className = 'yang'
        yangSide.className = 'yin'
    } else {
        yinSide.className = 'yin'
        yangSide.className = 'yang'
    }
});
