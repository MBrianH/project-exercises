countel=document.getElementById("count");
increasel=document.getElementById("increase");
decreasel=document.getElementById("decrease");
resetel=document.getElementById("reset");
let count=0;
increasel.addEventListener("click", () => {
    count++;
    countel.textContent=count;
}
);
decreasel.addEventListener("click", () => {
    count--;
    countel.textContent=count;
}
);
resetel.addEventListener("click", () => {
    count=0;
    countel.textContent=count;
}
);  
