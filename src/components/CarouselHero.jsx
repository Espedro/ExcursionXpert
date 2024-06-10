import Carousel from 'react-bootstrap/Carousel';

function CarouselHero() {
  return (

    <div>
    <section id='home' className='hero-block'>


<Carousel fade>
<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://static.toiimg.com/photo/55704503/.jpg"
alt='First Slide'
/>



<Carousel.Caption>

<h2>Banff National Park</h2>

<p>Canada / Banff</p>



</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://travel.usnews.com/images/Istvan_Kadar_Photographycity-skyline-buidings-cn-tower.jpg"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>CN Tower</h2>
          <p>Canada / Toronto</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://www.shoreexcursionsgroup.com/img/tour/CNQBHISTORIC-2.jpg"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>Old Quebec</h2>
          <p>Canada / Quebec City</p>
</Carousel.Caption>
</Carousel.Item>



<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://media.cnn.com/api/v1/images/stellar/prod/230908155626-05-mount-fuji-overtourism.jpg?c=original"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>Mount Fuji</h2>
          <p>Japan / Shizuoka</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://blog.japanwondertravel.com/wp-content/uploads/2020/11/christian-dancke-tuen-bnGYE40VuUw-unsplash-scaled.jpg"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>Fushimi Inari Shrine</h2>
          <p>Japan / Kyoto</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://static.tildacdn.com/tild3363-3836-4230-b639-626662333830/cb89822dffa78f49d377.jpg"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>Olumo Rock</h2>
          <p>Nigeria / Abeokuta</p>
</Carousel.Caption>
</Carousel.Item>


<Carousel.Item>
<img 

className='d-block w-100 slide'
src="https://i.pinimg.com/736x/62/1a/69/621a693541566479a59a8e4758c3d600.jpg"
alt='First Slide'
/>
<Carousel.Caption>
          <h2>Citadelle Laferriere</h2>
          <p>Haiti / Cap:Haitian</p>
</Carousel.Caption>
</Carousel.Item>


</Carousel>



    </section>

    </div>
  )
}

export default CarouselHero