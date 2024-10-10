import { createElement,imageMaker,textElement } from "./elementMaker";


const contentHeaderContainer = createElement('div','content-header-container');
const h1 = document.createElement('h1');
textElement(h1,"About Our Restaurant");
contentHeaderContainer.append(h1);

const contentBody = createElement('div','content-body');
contentBody.innerHTML =`
<div class="section-one">
  <div class="section-one-image-container">
    <img src="public/istockphoto-499236186-612x612.jpg" width="400" height="400" alt="Restaurant ">
  </div>
  <article class="section-one-para">
    <h2>Restaurant's History</h2>
    <p>
      Once a humble family-run trattoria nestled in a quaint Italian village, the restaurant began as a place
      where locals gathered for home-cooked meals made with love. Mama's secret pasta recipe and Papa's warm
      hospitality soon attracted attention beyond the village. Word spread like wildfire, and before long,
      celebrities,critics, and food lovers were flocking in from all over.Seizing the momentum, the family
      expanded,transforming their cozy spot into a sprawling empire of luxury restaurants across the globe,
      aech retaining the charm and the soul of their small Italian roots while dripping in opulence.
    </p>
  </article>
</div>

<div class="section-two">
  <article class="section-two-para">
    <h2>Restaurant's Owner</h2>
    <p>
      <strong>Giovanni Linguini</strong>, the heart and soul behind the Linguini restaurant empire, grew
      up in the kitchen of his family's small trattoria in Italy, where he learned the art of cooking from
      his mother and the value of genuine hospitality from his father. With a passion for authentic Italian
      cuisine and a vision to share his family's traditions with the world, Giovanni expanded the family 
      business into a renowned chain of luxury restaurants. Despite the international success, he remains
      deeply committed to preserving the warmth, authenticity, and love that defined his family's original
      restaurant
    </p>
  </article>
  <div class="section-two-image-container">
    <img src="public/79dd0c5b3af03d27842017a102ef04bd.jpg" width="480" height="400" alt="Restaurant founder">
  </div>
</div>

<div class="section-three">
  <div class="section-three-grid-container">
    <div class="section-three-grid-item">
      <h2>50%</h2>
      <p>Customer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>500</h2>
      <p>Consumer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>22</h2>
      <p>Consooomer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>400</h2>
      <p>Consooooomer</p>
    </div>
  </div>
  <article class="section-three-para">
    <h2>Restaurant's History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
    </p>
  </article>
</div>

<div class="section-four">
  <article class="section-four-para">
    <h2>Restaurant's History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
    </p>
  </article>
</div>
`
export{contentHeaderContainer,contentBody};





{/* <div class="content-header-container">
<h1>About Our Restaurant</h1>
</div>
<div class="content-body">
<div class="section-one">
  <div class="section-one-image-container">
    <img src="public/istockphoto-499236186-612x612.jpg" width="400" height="400" alt="Restaurant ">
  </div>
  <article class="section-one-para">
    <h2>Restaurant's History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
    </p>
  </article>
</div>

<div class="section-two">
  <article class="section-two-para">
    <h2>Restaurant's Owner</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
    </p>
  </article>
  <div class="section-two-image-container">
    <img src="public/79dd0c5b3af03d27842017a102ef04bd.jpg" width="480" height="400" alt="Restaurant founder">
  </div>
</div>

<div class="section-three">
  <div class="section-three-grid-container">
    <div class="section-three-grid-item">
      <h2>50%</h2>
      <p>Customer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>500</h2>
      <p>Consumer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>22</h2>
      <p>Consooomer</p>
    </div>
    <div class="section-three-grid-item">
      <h2>400</h2>
      <p>Consooooomer</p>
    </div>
  </div>
  <article class="section-three-para">
    <h2>Restaurant's History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
    </p>
  </article>
</div>

<div class="section-four">
  <article class="section-four-para">
    <h2>Restaurant's History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid, quis odit officia numquam harum nulla illum nihil qui. Vero voluptatum natus modi veritatis blanditiis recusandae nesciunt optio. Ad, aperiam
    </p>
  </article>
</div>
</div> */}