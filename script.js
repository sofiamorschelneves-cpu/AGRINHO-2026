document.addEventListener("DOMContentLoaded", () => {
    inicializarQuizModerno();
    inicializarContatoModerno();
});

/**
 * Lógica do Quiz com Feedback Visual em Cartão Moderno
 */
function inicializarQuizModerno() {
    const botaoResponder = document.querySelector("#quiz button");
    if (!botaoResponder) return;

    botaoResponder.addEventListener("click", () => {
        const opcaoSelecionada = document.querySelector('input[name="quiz"]:checked');
        
        // Remove feedback anterior de forma limpa
        const feedbackAnterior = document.getElementById("quiz-feedback");
        if (feedbackAnterior) feedbackAnterior.remove();

        // Cria o contêiner do feedback no formato de cartão moderno
        const cardFeedback = document.createElement("div");
        cardFeedback.id = "quiz-feedback";
        cardFeedback.style.marginTop = "20px";
        cardFeedback.style.padding = "16px";
        cardFeedback.style.borderRadius = "8px";
        cardFeedback.style.fontWeight = "600";
        cardFeedback.style.width = "100%";
        cardFeedback.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
        cardFeedback.style.animation = "fadeIn 0.3s ease-in-out";

        // Caso o usuário não selecione nada
        if (!opcaoSelecionada) {
            cardFeedback.innerText = "⚠️ Selecione uma opção antes de responder!";
            cardFeedback.style.color = "var(--error, #e53935)";
            cardFeedback.style.backgroundColor = "var(--error-bg, #ffebee)";
            cardFeedback.style.borderLeft = "4px solid var(--error, #e53935)";
            botaoResponder.after(cardFeedback);
            return;
        }

        // Validação usando o valor ou o texto do nó
        const respostaTexto = opcaoSelecionada.value || opcaoSelecionada.nextSibling.textContent.trim();

        if (respostaTexto.includes("Irrigacao Inteligente")) {
            cardFeedback.innerText = "🎉 Excelente escolha! A Irrigação Inteligente monitora as condições do solo em tempo real e evita o desperdício crítico de recursos hídricos.";
            cardFeedback.style.color = "var(--success, #2e7d32)";
            cardFeedback.style.backgroundColor = "var(--success-bg, #e8f5e9)";
            cardFeedback.style.borderLeft = "4px solid var(--success, #2e7d32)";
        } else {
            cardFeedback.innerText = "❌ Essa não é a alternativa correta. Dica: foque nas tecnologias voltadas diretamente para a preservação e economia da água!";
            cardFeedback.style.color = "var(--error, #e53935)";
            cardFeedback.style.backgroundColor = "var(--error-bg, #ffebee)";
            cardFeedback.style.borderLeft = "4px solid var(--error, #e53935)";
        }

        botaoResponder.after(cardFeedback);
    });
}

/**
 * Validação Avançada do Formulário com Mensagem Inline Dinâmica
 */
function inicializarContatoModerno() {
    const formulario = document.querySelector("#contato form");
    if (!formulario) return;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Bloqueia o recarregamento brusco da página

        const camposInput = formulario.querySelectorAll("input[type='text'], input[type='email'], textarea");
        let formularioValido = true;

        // Limpa mensagens de sucesso anteriores se existirem
        const msgSucessoAnterior = document.getElementById("contato-sucesso");
        if (msgSucessoAnterior) msgSucessoAnterior.remove();

        // Verifica campo por campo mudando a borda dinamicamente
        camposInput.forEach(campo => {
            if (campo.value.trim() === "") {
                formularioValido = false;
                campo.style.borderColor = "var(--error, #e53935)";
                campo.style.boxShadow = "0 0 0 3px rgba(229, 57, 53, 0.15)";
            } else {
                campo.style.borderColor = "#e0e0e0";
                campo.style.boxShadow = "none";
            }
        });

        if (!formularioValido) {
            return; // Interrompe se houver campos em branco
        }

        // Transforma o botão em estado de "Enviando..." temporariamente
        const botaoEnviar = formulario.querySelector("button[type='submit']");
        const textoOriginalBotao = botaoEnviar.innerText;
        botaoEnviar.innerText = "Enviando mensagem...";
        botaoEnviar.disabled = true;
        botaoEnviar.style.opacity = "0.7";

        // Simula uma resposta de servidor de 1.2 segundos
        setTimeout(() => {
            botaoEnviar.innerText = textoOriginalBotao;
            botaoEnviar.disabled = false;
            botaoEnviar.style.opacity = "1";

            // Cria o alerta de sucesso integrado ao design de cartões
            const cartaoSucesso = document.createElement("div");
            cartaoSucesso.id = "contato-sucesso";
            cartaoSucesso.innerText = "🚀 Mensagem enviada com sucesso! Obrigado por apoiar o futuro sustentável.";
            cartaoSucesso.style.marginTop = "20px";
            cartaoSucesso.style.padding = "16px";
            cartaoSucesso.style.borderRadius = "8px";
            cartaoSucesso.style.color = "var(--success, #2e7d32)";
            cartaoSucesso.style.backgroundColor = "var(--success-bg, #e8f5e9)";
            cartaoSucesso.style.borderLeft = "4px solid var(--success, #2e7d32)";
            cartaoSucesso.style.fontWeight = "600";
            cartaoSucesso.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";

            formulario.appendChild(cartaoSucesso);
            formulario.reset();
        }, 1200);
    });

    // Remove o destaque vermelho de erro assim que o usuário digita algo
    formulario.querySelectorAll("input, textarea").forEach(campo => {
        campo.addEventListener("input", () => {
            if (campo.value.trim() !== "") {
                campo.style.borderColor = "var(--accent, #4caf50)";
                campo.style.boxShadow = "0 0 0 3px rgba(76, 175, 80, 0.15)";
            }
        });
    });
}
