let button = document.getElementById("handleSubmit");

button.onclick = async function () {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let reclamacoes = document.getElementById("reclamacoes").value;
    
    let data = { nome, email, telefone, reclamacoes };

    console.log("Dados do formulário:", data); // Verifica se os dados foram corretamente capturados

    const response = await fetch('http://localhost:3001/api/store/task', {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    try {
        const content = await response.json();
        console.log("Resposta do servidor:", content); // Verifica a resposta do servidor
        if (content.success) {
            alert("Sucesso");
        } else {
            alert("Erro ao enviar os dados.");
        }
    } catch (error) {
        console.error("Erro ao processar a resposta do servidor:", error);
        alert("Erro ao processar a resposta do servidor. Por favor, tente novamente.");
    }
};
