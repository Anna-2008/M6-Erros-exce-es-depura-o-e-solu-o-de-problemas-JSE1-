// ============================================================
// EXERCÍCIO 7 - BLOCO FINALLY
// ============================================================

function safeParseFinally(jsonString) {
    try {
        return JSON.parse(jsonString);

    } catch (erro) {

        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;

    } finally {
        console.log("Parse attempt finished");
    }
}

function blocoFinally() {
    console.log("\n=== EXERCÍCIO 7 - BLOCO FINALLY ===");

    console.log("Teste com JSON válido:");
    console.log(
        safeParseFinally('{"nome": "Lorena"}')
    );

    console.log("\nTeste com JSON inválido:");
    console.log(
        safeParseFinally("texto inválido")
    );

    console.log(
        "\nO finally é executado nos dois casos."
    );
}

blocoFinally();
