(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function m(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(t){if(t.ep)return;t.ep=!0;const n=m(t);fetch(t.href,n)}})();const i=(e,s)=>{const m=document.createElement(e);return m.classList.add(s),m},r=(e,s)=>(e.textContent=s,e),O=(e,s,m,h)=>{const t=document.createElement("img");return t.setAttribute("src",e),t.setAttribute("width",s),t.setAttribute("height",m),t.setAttribute("alt",h),t},g=i("div","text-container"),k=i("div","greeting"),S=document.createElement("h1");r(S,"Welcome to Linguini");const A=document.createElement("h2");r(A,"Ho Chi Minh's best italian restaurant");k.append(S);k.append(A);const E=i("div","button-container"),F=document.createElement("button");r(F,"Check Menu!");E.append(F);g.append(k);g.append(E);function a(e,s,m,h){const t=i("div","menu-item-card"),n=i("div","menu-item-image-container"),p=O(e,"80","80","image of food");n.append(p);const v=i("div","menu-item-para"),w=i("h2","menu-item-title");r(w,s);const q=i("p","menu-item-desc");r(q,m);const C=i("div","menu-item-price");return r(C,h),v.append(w),v.append(q),v.append(C),t.append(n),t.append(v),t}const $=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");$.setAttribute("id","card1");const x=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");x.setAttribute("id","card2");const R=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),I=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),P=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),D=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),W=[$,x,R,I,P,D],V=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Lunch","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");V.setAttribute("id","card1");const T=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");T.setAttribute("id","card2");const G=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),K=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),U=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),J=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),Q=[V,T,G,K,U,J],j=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Dinner","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");j.setAttribute("id","card1");const z=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50");z.setAttribute("id","card2");const X=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),Y=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),Z=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),_=a("/assets/salt-and-pepper-chicken-la-horiz-4.jpg","Salted Fried Chicken","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.","$35.50"),ee=[j,z,X,Y,Z,_],b=i("div","menu-container"),L=document.createElement("h1");r(L,"Our Menu");L.setAttribute("id","ourMenu");const B=document.createElement("h2");r(B,"Even the most picky eaters will have many options with our menu");b.append(L);b.append(B);const f=i("div","menu-content"),y=i("div","time-period-buttons-container"),c=document.createElement("button");r(c,"BREAKFAST");c.setAttribute("id","breakfastB");const d=document.createElement("button");r(d,"LUNCH");d.setAttribute("id","lunchB");const l=document.createElement("button");r(l,"DINNER");l.setAttribute("id","dinnerB");const u=i("div","menu-items-container");c.addEventListener("click",()=>{d.className="",l.className="",c.classList.contains("active")||(document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.remove("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.remove("move")}),u.innerHTML="",W.forEach(e=>{u.append(e)}),f.append(u),setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),c.classList.add("active")},10),document.querySelector(".menu-item-image-container").classList.includes("move")||setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),c.classList.add("active")},10))});d.addEventListener("click",()=>{c.className="",l.className="",d.classList.contains("active")||(document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.remove("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.remove("move")}),u.innerHTML="",Q.forEach(e=>{u.append(e)}),f.append(u),setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),d.classList.add("active")},10),document.querySelector(".menu-item-image-container").classList.includes("move")||setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),d.classList.add("active")},10))});l.addEventListener("click",()=>{d.className="",c.className="",l.classList.contains("active")||(document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.remove("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.remove("move")}),u.innerHTML="",ee.forEach(e=>{u.append(e)}),f.append(u),setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),l.classList.add("active")},10),document.querySelector(".menu-item-image-container").classList.includes("move")||setTimeout(()=>{document.querySelectorAll(".menu-item-image-container").forEach(e=>{e.classList.add("move")}),document.querySelectorAll(".menu-item-para").forEach(e=>{e.classList.add("move")}),l.classList.add("active")},10))});y.append(c);y.append(d);y.append(l);f.append(y);b.append(f);const M=i("div","content-header-container"),N=document.createElement("h1");r(N,"About Our Restaurant");M.append(N);const H=i("div","content-body");H.innerHTML=`
<div class="section-one">
  <div class="section-one-image-container">
    <img src="/assets/istockphoto-499236186-612x612.jpg" width="400" height="400" alt="Restaurant ">
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
    <img src=/assets/79dd0c5b3af03d27842017a102ef04bd.jpg" width="480" height="400" alt="Restaurant founder">
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
`;const o=document.querySelector("#content"),te=document.querySelector("#home"),ae=document.querySelector("#menu"),ie=document.querySelector("#about");te.addEventListener("click",()=>{o.className="",o.classList.add("content-home"),o.innerHTML="",o.append(g)});ae.addEventListener("click",()=>{o.className="",o.classList.add("content-menu"),o.innerHTML="",o.append(b),window.scrollTo({top:0,behavior:"smooth"}),document.querySelector("#breakfastB").click()});ie.addEventListener("click",()=>{o.className="",o.classList.add("content-about"),o.innerHTML="",o.append(M),o.append(H)});o.append(g);
