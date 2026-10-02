// ============================================================
// EXERCÍCIO 11 - USO DO DEBUGGER
// ============================================================

function testeDebug(x) {
    const y = x * 2;

    debugger;

    return y;
}

function usoDebugger() {
    console.log("\n=== EXERCÍCIO 11 - USO DO DEBUGGER ===");

    const resultado = testeDebug(5);

    console.log("Resultado da função testeDebug:", resultado);

    console.log(
        "Relatório: ao executar a função com as ferramentas do navegador abertas, a execução é pausada na linha debugger."
    );

    console.log(
        "Nesse momento, é possível verificar os valores das variáveis, como x = 5 e y = 10."
    );
}

usoDebugger();