// ============================================================
// EXERCÍCIO 12 - STEP OVER, STEP INTO E STEP OUT
// ============================================================

function externo(n) {
    return interno(n) + 1;
}

function interno(m) {
    return m * 3;
}

function stepOverStepIntoStepOut() {
    console.log("\n=== EXERCÍCIO 12 - STEP OVER, STEP INTO E STEP OUT ===");

    console.log("Resultado de externo(4):", externo(4));

    console.log("\nStep Over:");
    console.log(
        "Executa a chamada da função sem entrar nos detalhes internos dela."
    );

    console.log("\nStep Into:");
    console.log(
        "Entra dentro da função interno() para acompanhar sua execução linha por linha."
    );

    console.log("\nStep Out:");
    console.log(
        "Sai da função atual e retorna para a função que fez a chamada."
    );
}

stepOverStepIntoStepOut();