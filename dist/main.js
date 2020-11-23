(()=>{"use strict";const e=(e,t)=>{e.addListener(t),t(e)},t=()=>{const t=document.createElement("div");t.id="content",t.style.display="grid",t.style.placeItems="center",t.style.gridGap="1rem",t.style.padding="2rem";const n=document.createElement("h1");n.textContent="Kai's Kebab",n.style.fontSize="3rem";const a=document.createElement("img");a.id="main-img",a.src="assets/kebab.jpg",a.alt="Plate of kebab meat with tomatoes, chillies and pitta bread";const d=document.createElement("h2");d.textContent="Best kebab in town!",d.style.fontWeight="400",t.appendChild(n),t.appendChild(d),t.appendChild(a),document.getElementById("container").appendChild(t);const l=window.matchMedia("(max-width: 1000px)"),c=window.matchMedia("(max-width: 400px)");e(l,(function(e){e.matches?t.style.padding="1rem":t.style.padding="2rem"})),e(c,(function(e){e.matches?(n.style.fontSize="2.5rem",d.style.fontSize="1rem"):(n.style.fontSize="3rem",d.style.fontSize="1.5rem")}))},n={Kebabs:[{name:"Chicken Kebab",price:"5.00"},{name:"Donner Kebab",price:"4.50"},{name:"Donner Meat in a Bun",price:"3.00"}],Burgers:[{name:"Chicken Fillet Burger",price:"3.25"},{name:"Beef Burger",price:"4.15"}],"Kids Meals":[{name:"Chicken Nugget Meal",price:"3.25"},{name:"Cheeseburger Meal",price:"3.75"}],Sides:[{name:"Chips",price:"1.50"},{name:"Cheesey Chips",price:"2.50"},{name:"Salad",price:"2.25"}],Shakes:[{name:"Oreo Milkshake",price:"5.00"},{name:"Strawberry Milkshake",price:"5.00"}]};(()=>{const t=document.createElement("main");t.id="container",t.style.margin="2rem auto",t.style.maxWidth="1000px",t.style.backgroundColor="#fff";const n=document.createElement("ul");n.style.display="flex",n.style.listStyleType="none",n.style.height="50px",n.style.backgroundColor="#2c3e50";const a=document.createElement("li");a.classList.add("active-tab"),a.dataset.tabTarget="home",a.textContent="Home";const d=document.createElement("li");d.dataset.tabTarget="menu",d.textContent="Menu";const l=document.createElement("li");l.dataset.tabTarget="contact",l.textContent="Contact",n.appendChild(a),n.appendChild(d),n.appendChild(l),n.querySelectorAll("li").forEach((e=>{e.style.width="200px",e.style.display="grid",e.style.placeItems="center",e.style.backgroundColor="#bdc3c7",e.style.cursor="pointer",e.style.transition="all 0.3s",e.classList.contains("active-tab")&&(a.style.backgroundColor="#fff",a.style.fontSize="1.3rem")})),t.appendChild(n),document.body.prepend(t);const c=window.matchMedia("(max-width: 1000px)");e(c,(function(e){e.matches?t.style.margin="0":t.style.margin="2rem auto"}))})(),t();const a=document.querySelectorAll("[data-tab-target]");a.forEach((d=>{d.addEventListener("click",(()=>{switch(document.getElementById("content").remove(),a.forEach((e=>{e.style.cssText="width: 200px; display: grid; place-items: center; background-color: rgb(189, 195, 199); cursor: pointer;",e.classList.remove("active-tab")})),d.classList.add("active-tab"),d.style.backgroundColor="#fff",d.style.fontSize="1.3rem",d.dataset.tabTarget){case"home":t();break;case"menu":(()=>{const t=document.createElement("div");t.id="content",t.style.display="grid",t.style.placeItems="center",t.style.padding="2rem";const a=document.createElement("h1");a.textContent="Menu",a.style.marginBottom="2rem",a.style.fontSize="3rem";const d=document.createElement("div");d.style.display="grid",d.style.gridGap="2rem",d.style.width="50%",d.style.fontSize="1.3rem";for(let e in n){const t=document.createElement("section");t.style.display="grid",t.style.gridGap="1rem";const a=document.createElement("h2");a.classList.add("category-heading"),a.textContent=""+e,a.style.fontSize="2rem",t.appendChild(a),n[e].forEach((e=>{const n=document.createElement("div");n.style.display="flex";const a=document.createElement("p");a.textContent=e.name,a.style.width="50%";const d=document.createElement("p");d.textContent="£"+e.price,d.style.width="50%",d.style.textAlign="right",d.style.letterSpacing="3px",n.appendChild(a),n.appendChild(d),t.appendChild(n)})),d.appendChild(t)}t.appendChild(a),t.appendChild(d),document.getElementById("container").appendChild(t);const l=window.matchMedia("(max-width: 1000px)"),c=window.matchMedia("(max-width: 400px)");e(l,(function(e){e.matches?t.style.padding="1rem":t.style.padding="2rem"})),e(c,(function(e){const t=document.querySelectorAll(".category-heading");e.matches?(a.style.fontSize="2.5rem",a.style.marginBottom="1rem",t.forEach((e=>e.style.fontSize="1.5rem")),d.style.width="100%",d.style.fontSize="1rem"):(a.style.fontSize="3rem",a.style.marginBottom="2rem",t.forEach((e=>e.style.fontSize="2rem")),d.style.width="50%",d.style.fontSize="1.3rem")}))})();break;case"contact":(()=>{const e=document.createElement("div");e.id="content",e.style.display="grid",e.style.placeItems="center",e.style.padding="2rem";const t=document.createElement("h1");t.textContent="Contact us",t.style.marginBottom="2rem",t.style.fontSize="3rem";const n=document.createElement("div");n.style.display="grid",n.style.gridGap="1.5rem",n.style.width="50%",n.style.fontSize="1.3rem";const a=document.createElement("section"),d=document.createElement("h2"),l=document.createElement("p"),c=document.createElement("p"),o=document.createElement("p");d.textContent="Opening Times",l.textContent="Monday - Saturday",c.textContent="5:00pm - 11:00pm",o.textContent="Collection or Delivery",a.appendChild(d),a.appendChild(l),a.appendChild(c),a.appendChild(o);const i=document.createElement("section"),r=document.createElement("h2"),s=document.createElement("p");r.textContent="Address",s.textContent="45 Kebab Road, London, KE8 4BS",i.appendChild(r),i.appendChild(s);const m=document.createElement("section"),p=document.createElement("h2"),y=document.createElement("p");p.textContent="Telephone",y.textContent="0207 946 0949",m.appendChild(p),m.appendChild(y);const h=document.createElement("section"),u=document.createElement("h2"),C=document.createElement("p"),g=document.createElement("a");u.textContent="Email",g.textContent="kaizkebabs@kebab.com",g.href="mailto:kaizkebabs@kebab.com",g.style.color="black",g.style.textDecoration="none",C.appendChild(g),h.appendChild(u),h.appendChild(C),n.appendChild(a),n.appendChild(i),n.appendChild(m),n.appendChild(h),n.querySelectorAll("section").forEach((e=>{e.style.display="grid",e.style.gridGap="0.5rem"})),n.querySelectorAll("h2").forEach((e=>{e.style.fontSize="2rem"})),e.appendChild(t),e.appendChild(n),document.getElementById("container").appendChild(e)})();break;default:t()}}))}))})();