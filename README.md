# 🏛️ Kairos MA-thos

> “O momento oportuno do conhecimento.”

Kairos MA-thos é uma plataforma web de leitura inteligente baseada em Inteligência Artificial, desenvolvida para processar documentos como PDFs, livros, relatórios e planilhas, gerando resumos automáticos, comparações de ideias e interações inteligentes com o conteúdo.

O projeto busca unir tecnologia, acessibilidade e apoio acadêmico através de uma experiência moderna inspirada em ferramentas como NotebookLM.

# 🚀 Funcionalidades

✅ Upload de arquivos PDF e XLSX  
✅ Leitura automática de documentos  
✅ Resumos inteligentes com IA  
✅ Histórico de leitura  
✅ Chat com documentos  
✅ Comparação de conteúdos  
✅ Interface moderna e responsiva  
✅ Organização de informações acadêmicas  

---

# 🧠 Tecnologias Utilizadas

## Front-end
- HTML5
- CSS3
- JavaScript
- Bootstrap

## Back-end
- Python
- FastAPI
- Uvicorn

## IA e Processamento
- Transformers
- PyPDF2
- Pandas

---

# ⚙️ Instalação
## 1️⃣ Clone o repositório
- git clone https://github.com/LuisMagnoLima/kairos-ma-thos.git

## 2️⃣ Entre na pasta
- cd kairos-ma-thos

# 🖥️ Back-end
## 3️⃣ Crie o ambiente virtual
- python -m venv venv
# Ativar ambiente virtual
- venv\Scripts\activate

## 4️⃣ Instale as dependências
- pip install -r requirements.txt
## 5️⃣ Inicie o servidor
- uvicorn main:app --reload
# 📂 Estrutura do Projeto

```bash
kairos-ma-thos/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   └── upload.html
│
└── README.md

