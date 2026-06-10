// Aguarda que a página carregue completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão de calcular e o campo de input
    const btnCalcular = document.getElementById("btn-calcular");
    const resultadoDiv = document.getElementById("resultado-simulacao");

    // Adiciona o evento de clique
    btnCalcular.addEventListener("click", function() {
        const metrosQuadrados = parseFloat(document.getElementById("tamanho-terreno").value);

        // Validação básica para garantir que o utilizador digitou um número válido
        if (isNaN(metrosQuadrados) || metrosQuadrados <= 0) {
            resultadoDiv.innerHTML = "<p style='color: #e63946; font-weight: bold;'>Por favor, insere um tamanho de terreno válido (maior que 0).</p>";
            resultadoDiv.style.display = "block";
            return;
        }

        /* Cálculos baseados em médias estimadas de Agrofloresta:
           - Produção média de alimentos: ~4 kg por m² ao ano (somando hortaliças e frutas)
           - Árvores integradas/plantadas por m² no sistema: ~0.5 árvores por m²
        */
        const producaoComida = (metrosQuadrados * 4).toFixed(0);
        const arvoresPlantadas = (metrosQuadrados * 0.5).toFixed(0);

        // Atualiza a interface
        resultadoDiv.innerHTML = `
            <h4>🌱 O Potencial da Tua Agrofloresta:</h4>
            <p>Num terreno de <strong>${metrosQuadrados} m²</strong>, tu podes:</p>
            <ul>
                <li>Produzir cerca de <strong>${producaoComida} kg</strong> de alimentos saudáveis por ano.</li>
                <li>Introduzir e cuidar de cerca de <strong>${arvoresPlantadas} árvores</strong> nativas e frutíferas no ecossistema.</li>
            </ul>
            <p style='font-size: 0.9rem; color: #555; margin-top: 1rem;'><em>*Cálculo baseado em estimativas médias para Sistemas Agroflorestais diversificados.</em></p>
        `;

        // Mostra a div de resultado com uma transição simples
        resultadoDiv.style.display = "block";
    });
});