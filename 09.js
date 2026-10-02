// ============================================================
// EXERCÍCIO 9 - DEPURAÇÃO COM CONSOLE.LOG
// ============================================================

function soma(a, b) {
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);

    return a + b;
}

function depuracaoConsoleLog() {
    console.log("\n=== EXERCÍCIO 9 - DEPURAÇÃO COM CONSOLE.LOG ===");

    console.log("Antes de executar a soma.");

    const resultado = soma(2, undefined);

    console.log("Depois de executar a soma.");
    console.log("Resultado:", resultado);

    console.log(
        "Causa: b possui o valor undefined. Por isso, 2 + undefined resulta em NaN."
    );
}

depuracaoConsoleLog();