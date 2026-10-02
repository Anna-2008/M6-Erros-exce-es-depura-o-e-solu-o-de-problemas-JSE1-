// ============================================================
// EXERCÍCIO 4 - TIPOS DE ERROS EM JAVASCRIPT
// ============================================================

function tiposDeErrosJS() {
    console.log("\n=== EXERCÍCIO 4 - TIPOS DE ERROS EM JS ===");

    console.log("ReferenceError:");
    console.log("Ocorre quando tentamos acessar uma variável ou função que não foi definida.");

    console.log("\nTypeError:");
    console.log("Ocorre quando tentamos realizar uma operação incompatível com o tipo de dado.");

    console.log("\nSyntaxError:");
    console.log("Ocorre quando existe um erro na sintaxe do código.");

    // Exemplos:
    console.log("\nExemplos:");
    console.log("ReferenceError -> console.log(nome) quando nome não existe.");
    console.log("TypeError -> tentar usar um método de string em um número.");
    console.log("SyntaxError -> esquecer um parêntese ou chave no código.");
}

tiposDeErrosJS();
