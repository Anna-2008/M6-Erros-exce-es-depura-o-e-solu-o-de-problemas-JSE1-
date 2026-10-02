// ============================================================
// EXERCÍCIO 3 - CONFIABILIDADE LIMITADA
// ============================================================

function confiabilidadeLimitada() {
    console.log("\n=== EXERCÍCIO 3 - CONFIABILIDADE LIMITADA ===");

    let numero = "10";

    console.log("Valor recebido:", numero);
    console.log("Tipo recebido:", typeof numero);

    if (typeof numero !== "number") {
        console.log("Validação: era esperado um número, mas foi recebida uma string.");
    }

    let texto = 123;

    console.log("\nOutro exemplo:");
    console.log("Valor recebido:", texto);
    console.log("Tipo recebido:", typeof texto);

    if (typeof texto !== "string") {
        console.log("Validação: era esperada uma string.");
    }
}

confiabilidadeLimitada();
