const API_URL = "http://127.0.0.1:8000";

const chatForm = document.getElementById("chatForm");
const perguntaInput = document.getElementById("pergunta");
const chatBox = document.getElementById("chatBox");

function adicionarMensagem(texto, tipo) {
  const div = document.createElement("div");

  div.className = tipo === "user"
    ? "message user-message"
    : "message ai-message";

  div.innerText = texto;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const pergunta = perguntaInput.value.trim();

  if (!pergunta) return;

  adicionarMensagem(pergunta, "user");
  perguntaInput.value = "";

  adicionarMensagem("Analisando o documento...", "ai");

  const formData = new FormData();
  formData.append("pergunta", pergunta);

  try {
    const resposta = await fetch(`${API_URL}/chat`, {
      method: "POST",
      body: formData
    });

    const dados = await resposta.json();

    const mensagens = document.querySelectorAll(".ai-message");
    mensagens[mensagens.length - 1].remove();

    if (dados.erro) {
      adicionarMensagem(dados.erro + "\n" + (dados.detalhes || ""), "ai");
      return;
    }

    adicionarMensagem(dados.resposta, "ai");

  } catch (erro) {
    const mensagens = document.querySelectorAll(".ai-message");
    mensagens[mensagens.length - 1].remove();

    adicionarMensagem(
      "Erro ao conectar com o backend. Verifique se o FastAPI está rodando.",
      "ai"
    );

    console.error(erro);
  }
});