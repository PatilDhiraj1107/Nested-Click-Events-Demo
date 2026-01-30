const g = document.querySelector(".grandparent");
const p = document.querySelector(".parent");
const c = document.querySelector(".child");

g.addEventListener('click', (e) => {
    alert("grandparent clicked");
    e.stopPropagation();
});

p.addEventListener('click', (e) => {
    alert("parent clicked");
    e.stopPropagation();
});

c.addEventListener('click', (e) => {
    alert("child clicked");
    e.stopPropagation();
});