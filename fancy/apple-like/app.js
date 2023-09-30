const html = document.documentElement;
const wrapper = document.querySelector('.wrapper');
const canvas = document.querySelector('.airpods-scrolling');
const context = canvas.getContext('2d');
const linkToImages = 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/';
const frameCount = 147;

const currentFrame = index => (
    `${linkToImages}${index.toString().padStart(4, '0')}.jpg`
);
console.log(currentFrame(1));
// Set canvas dimensions
canvas.width=1158;
canvas.height=770;
const img = new Image();

const updateImage = (index) => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

const preloadImages = () => {
    for (let i = 1; i < frameCount; ++i) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

preloadImages();

let hasBeenRelative = false;

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = wrapper.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, ~~(scrollFraction * frameCount) + 1)
    img.onload = updateImage(frameIndex);
    console.log(frameIndex)
    // TODO: ВЫУЧИТЬ ПРОМИСЫ, АСИНК И ПОДОБНОЕ, ЧТОБЫ ИЗБЕГАТЬ ТАКИХ КОСТЫЛЕЙ И ПОЧИНИТЬ ЭТО
    // Когда доскроллит до 148, то position меняем на relative
    if (frameIndex >= frameCount - 10) {
        canvas.style.position = "relative";
        wrapper.style.height = "100vh";
        console.log('yes')
    }
    else {
        wrapper.style.height = "250vh";
        canvas.style.position = "fixed";
    }

})