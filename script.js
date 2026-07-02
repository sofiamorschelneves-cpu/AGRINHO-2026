function inicializarQuizModerno() {
    const botaoResponder = document.querySelector("#quiz button");
    if (!botaoResponder) return;

    botaoResponder.addEventListener("click", () => {
        const opcaoSelecionada = document.querySelector('input[name="quiz"]:checked');

        // Remove feedback anterior
        const feedbackAnterior = document.getElementById("quiz-feedback");
        if (feedbackAnterior) feedbackAnterior.remove();

        const cardFeedback = document.createElement("div");
        cardFeedback.id = "quiz-feedback";
        cardFeedback.style.marginTop = "20px";
        cardFeedback.style.padding = "16px";
        cardFeedback.style.borderRadius = "8px";
        cardFeedback.style.fontWeight = "600";

        if (!opcaoSelecionada) {
            cardFeedback.innerText = "⚠️ Selecione uma opção antes de responder!";
            cardFeedback.style.color = "#e53935";
            botaoResponder.after(cardFeedback);
            return;
        }

        const resposta = opcaoSelecionada.value;

        if (resposta === "irrigacao") {
            cardFeedback.innerText = "🎉 Correto! Irrigação Inteligente evita desperdício de água.";
            cardFeedback.style.color = "#2e7d32";
        } else {
            cardFeedback.innerText = "❌ Errado! Tente novamente.";
            cardFeedback.style.color = "#e53935";
        }

        botaoResponder.after(cardFeedback);
    });
}
/**
 * Validação do Formulário
 */
function inicializarContatoModerno() {
    const formulario = document.querySelector("#contato form");
    if (!formulario) return;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const campos = formulario.querySelectorAll("input, textarea");
        let valido = true;

        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                valido = false;
                campo.style.borderColor = "#e53935";
            } else {
                campo.style.borderColor = "#ccc";
            }
        });

        if (!valido) return;

        const msg = document.createElement("div");
        msg.innerText = "🚀 Mensagem enviada com sucesso!";
        msg.style.marginTop = "15px";
        msg.style.color = "#2e7d32";

        formulario.appendChild(msg);
        formulario.reset();
    });
}

/* ESSA PARTE FAZ TUDO FUNCIONAR */
document.addEventListener("DOMContentLoaded", () => {
    inicializarQuizModerno();
    inicializarContatoModerno();
});
