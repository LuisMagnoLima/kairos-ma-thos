const API_URL = "http://127.0.0.1:8000";

const form = document.getElementById("uploadForm");
const loading = document.getElementById("loading");
const resultado = document.getElementById("resultado");
const arquivoInput = document.getElementById("arquivo");
const fileName = document.getElementById("fileName");

arquivoInput.addEventListener("change", function () {
  if (arquivoInput.files.length > 0) {
    fileName.textContent = arquivoInput.files[0].name;
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
  }
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const arquivo = arquivoInput.files[0];
  const tipoAnalise = document.getElementById("tipoAnalise").value;

  if (!arquivo) {
    alert("Selecione um arquivo.");
    return;
  }

  const formData = new FormData();
  formData.append("arquivo", arquivo);
  formData.append("tipo_analise", tipoAnalise);

  loading.classList.remove("d-none");

  resultado.innerHTML = `
    <p class="empty-state">
      Processando o documento. Aguarde enquanto o Kairos MA-thos realiza a análise...
    </p>
  `;

  try {
    const resposta = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData
    });

    const dados = await resposta.json();

    loading.classList.add("d-none");

    if (dados.erro) {
      resultado.innerText = dados.erro + "\n\n" + (dados.detalhes || "");
      return;
    }

    localStorage.setItem("timestamp", new Date().toLocaleString());

    resultado.innerHTML = `
  <div class="resultado-final">
    <h4>Arquivo analisado: ${dados.nome}</h4>

    <div class="resposta-container">
      ${dados.resposta}
    </div>

    <div class="result-actions">
      <a href="leitura.html" class="btn-outline-custom">
        Leitura completa
      </a>

      <a href="chat.html" class="btn-chat-custom">
        Conversar com o documento
      </a>
    </div>
  </div>
`;

  } catch (erro) {
    loading.classList.add("d-none");

    resultado.innerText =
      "Erro ao conectar com o backend. Verifique se o servidor FastAPI está rodando em http://127.0.0.1:8000.";

    console.error(erro);
  }
});