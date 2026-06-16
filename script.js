document.addEventListener("DOMContentLoaded", () => {
    inicializarQuiz();
    inicializarContato();
    ajustarMenuMobile();
});

/**
 * Lógica do Quiz com validação e feedback visual
 */
function inicializarQuiz() {
    const botaoResponder = document.querySelector("#quiz button");
    if (!botaoResponder) return;

    botaoResponder.addEventListener("click", () => {
        const opcaoSelecionada = document.querySelector('input[name="quiz"]:checked');
        
        // Remove mensagens de feedback anteriores, se existirem
        const feedbackAnterior = document.getElementById("quiz-feedback");
        if (feedbackAnterior) feedbackAnterior.remove();

        const containerFeedback = document.createElement("p");
        containerFeedback.id = "quiz-feedback";
        containerFeedback.style.fontWeight = "bold";
        containerFeedback.style.marginTop = "15px";
        containerFeedback.style.padding = "10px";
        containerFeedback.style.borderRadius = "5px";

        if (!opcaoSelecionada) {
            containerFeedback.innerText = "⚠️ Por favor, selecione uma resposta antes de enviar.";
            containerFeedback.style.color = "#d32f2f";
            containerFeedback.style.backgroundColor = "#ffebee";
            botaoResponder.after(containerFeedback);
            return;
        }

        // Validação da resposta (A correta é Irrigação Inteligente)
        if (opcaoSelecionada.value === "Irrigação Inteligente" || opcaoSelecionada.nextSibling.textContent.includes("Irrigação Inteligente")) {
            containerFeedback.innerText = "🎉 Correto! A Irrigação Inteligente monitora o solo e evita o desperdício.";
            containerFeedback.style.color = "#2e7d32";
            containerFeedback.style.backgroundColor = "#e8f5e9";
        } else {
            containerFeedback.innerText = "❌ Resposta incorreta. Tente novamente! Dica: foque na economia de água.";
            containerFeedback.style.color = "#c62828";
            containerFeedback.style.backgroundColor = "#ffebee";
        }

        botaoResponder.after(containerFeedback);
    });
}

/**
 * Validação básica e envio do formulário de contato
 */
function inicializarContato() {
    const formulario = document.querySelector("#contato form");
    if (!formulario) return;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const camposInput = formulario.querySelectorAll("input, textarea");
        let formularioValido = true;

        camposInput.forEach(campo => {
            if (campo.value.trim() === "") {
                formularioValido = false;
                campo.style.borderColor = "#d32f2f";
            } else {
                campo.style.borderColor = "#cccccc";
            }
        });

        if (!formularioValido) {
            alert("Por favor, preencha todos os campos do formulário.");
            return;
        }

        // Simulação de envio bem-sucedido
        alert("Obrigado pelo contato! Sua mensagem sobre sustentabilidade foi enviada com sucesso.");
        formulario.reset();
    });
}

/**
 * Melhora a experiência de navegação ao clicar nos links do menu
 */
function ajustarMenuMobile() {
    const linksMenu = document.querySelectorAll("nav a");
    
    linksMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            const destinoId = link.getAttribute("href");
            
            // Ativa rolagem suave nativa do navegador
            if (destinoId.startsWith("#")) {
                evento.preventDefault();
                const elementoDestino = document.querySelector(destinoId);
                
                if (elementoDestino) {
                    elementoDestino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
}
