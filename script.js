const contactForm = document.querySelector("#contact-form");
const nome = document.querySelector("#name");
const phone = document.querySelector("#phone");
const tableContact = document.querySelector("#contacts-table");
let novaLinha;

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    criarLinha();
    adicionarLinha();
});

function criarLinha() {
    // Movido para dentro da função de evento submit
    let nomeValor = nome.value;
    let phoneValor = phone.value;

    novaLinha = document.createElement('tr');
    const contato = `<td>${nomeValor}</td><td>${phoneValor}</td>`;
    novaLinha.innerHTML = contato;
}

function adicionarLinha() {
    tableContact.appendChild(novaLinha);
    // Limpa os campos do formulário após adicionar a linha
    nome.value = "";
    phone.value = "";
}
