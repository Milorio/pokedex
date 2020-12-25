pesquisa_input = document.querySelectorAll(".pesquisa");
a = 0
for (i of pesquisa_input) {
    pesquisa_card = document.querySelectorAll(".card")
    i.onkeyup = function(e) {
        reg = new RegExp(this.value.toLowerCase(), "g")
        lis = pesquisa_card[a - 1]
        for (j of lis.children) {
            if (!j.getAttribute("nome").match(reg))
                j.style.display = "none"
            else
                j.removeAttribute("style")
        }
    }
    a++
}