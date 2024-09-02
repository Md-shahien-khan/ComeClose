// // hero carousel
const slider1 = document.querySelector('#glide_1');
if(slider1){
    new Glide(slider1, {
        type : 'carousel', 
        startAt : 0,
        Autoplay : 3000,
        gap : 0,
        hoverpause : true,
        preView : 1, 
        animationDuration : 800,
        AnimationTimingFunc : 'linear',
    }).mount();
}