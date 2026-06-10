// Aguarda que a página carregue completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o botão de calcular e a área de resultado
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoDiv = document.getElementById("resultado-simulacao");

    // Adiciona o evento de clique
    btnCalcular.addEventListener("click", function () {

        const metrosQuadrados = parseFloat(
            document.getElementById("tamanho-terreno").value
        );

        // Verifica se o valor digitado é válido
        if (isNaN(metrosQuadrados) || metrosQuadrados <= 0) {

            resultadoDiv.innerHTML =
                "<p style='color: #e63946; font-weight: bold;'>Por favor, insira um tamanho de terreno válido (maior que 0).</p>";

            resultadoDiv.style.display = "block";
            return;
        }

        // Cálculos estimados
        const producaoComida = (metrosQuadrados * 4).toFixed(0);
        const arvoresPlantadas = (metrosQuadrados * 0.5).toFixed(0);

        // Exibe o resultado
        resultadoDiv.innerHTML = `
            <h4>🌱 O Potencial da Sua Agrofloresta:</h4>

            <p>Em um terreno de <strong>${metrosQuadrados} m²</strong>, você pode:</p>

            <ul>
                <li>Produzir cerca de <strong>${producaoComida} kg</strong> de alimentos saudáveis por ano.</li>

                <li>Plantar e cuidar de cerca de <strong>${arvoresPlantadas} árvores</strong> nativas e frutíferas no ecossistema.</li>
            </ul>

            <p style="font-size: 0.9rem; color: #555; margin-top: 1rem;">
                <em>*Cálculo baseado em estimativas médias para Sistemas Agroflorestais diversificados.</em>
            </p>
        `;

        resultadoDiv.style.display = "block";
    });
    const temaBtn = document.getElementById("tema-btn");

temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        temaBtn.textContent = "☀️ Modo Claro";
    } else {
        temaBtn.textContent = "🌙 Modo Escuro";
    }

});
});
