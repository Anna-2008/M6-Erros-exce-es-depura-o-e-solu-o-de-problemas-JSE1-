// ============================================================
// EXERCÍCIO 5 - TRY...CATCH BÁSICO
// ============================================================

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        return null;
    }
}

function tryCatchBasico() {
    console.log("\n=== EXERCÍCIO 5 - TRY...CATCH BÁSICO ===");

    console.log(
        "JSON válido:",
        safeParse('{"nome": "Leandromeda"}')
    );

    console.log(
        "JSON inválido:",
        safeParse("texto inválido")
    );
}

tryCatchBasico();