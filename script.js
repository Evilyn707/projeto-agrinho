// Mostra o botão quando rolar para baixo
const topoBtn = document.getElementById("topoBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }
};

topoBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
