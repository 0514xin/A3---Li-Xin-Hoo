//IMAGE GALLERY
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@images';

function looping(){
  const App = () => (
    <SlCarousel loop navigation pagination>
      <SlCarouselItem>
        <img
          alt="Kenko Tea product"
          src="images/carousel-1.png"
        />
      </SlCarouselItem>
      <SlCarouselItem>
        <img
          alt="Kenko Tea character logo"
          src="images/carousel-2.png"
        />
      </SlCarouselItem>
    </SlCarousel>
  );
}

//REVIEWS
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@images';

function multipleSlidesPerView(){
  const App = () => (
    <SlCarousel navigation pagination slidesPerPage={3} slidesPerMove={1}>
      <sl-carousel-item><img alt="Always great. The only matcha I'll buy is Kenko." src="images/review-1.png"/></sl-carousel-item>
      <sl-carousel-item><img alt="Same as always. 5 stars." src="images/review-2.png"/></sl-carousel-item>
      <sl-carousel-item><img alt="I liked it so much. It's now my daily habit." src="images/review-3.png"/></sl-carousel-item>
      <sl-carousel-item><img alt="Love Kenko. Have been using them since 2016." src="images/review-4.png"/></sl-carousel-item>
    </SlCarousel>
  );
}

//FOOTER
import SlIcon from '@shoelace-style/shoelace/dist/react/icon';

function sizing(){
  const App = () => (
    <div style={{ fontSize: '32px' }}>
      <SlIcon name="facebook" />
      <SlIcon name="youtube" />
      <SlIcon name="instagram" />
      <SlIcon name="envelope" />
    </div>
  );
}

//ANIME.JS
anime({
  targets: 'div.carousel',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  }
});