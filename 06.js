// ============================================================
// EXERCÍCIO 6 - TRATAMENTO CONDICIONAL DE EXCEÇÕES
// ============================================================

function safeParseCondicional(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {

        if (erro instanceof SyntaxError) {
            return null;
        }

        // Erros inesperados não devem ser escondidos.
        throw erro;
    }
}

function tratamentoCondicionalExcecoes() {
    console.log("\n=== EXERCÍCIO 6 - TRATAMENTO CONDICIONAL ===");

    console.log(
        "JSON válido:",
        safeParseCondicional('{"nome": "Lorena"}')
    );

    console.log(
        "JSON inválido:",
        safeParseCondicional("texto inválido")
    );

    console.log(
        "SyntaxError é tratado retornando null."
    );

    console.log(
        "Outros tipos de erro seriam lançados novamente com throw."
    );
}

tratamentoCondicionalExcecoes();