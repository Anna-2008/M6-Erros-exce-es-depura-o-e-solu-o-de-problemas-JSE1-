
// ============================================================
// EXERCÍCIO 8 - LANÇANDO ERROS CUSTOMIZADOS
// ============================================================

class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError(
            "Idade fora do intervalo"
        );
    }

    return "Idade válida";
}

function lancandoErrosCustomizados() {
    console.log("\n=== EXERCÍCIO 8 - ERROS CUSTOMIZADOS ===");

    const idades = [-5, 30, 200];

    idades.forEach(function (idade) {

        try {
            console.log(
                `Idade ${idade}:`,
                checkAge(idade)
            );

        } catch (erro) {

            console.log(
                `Idade ${idade}: ${erro.name} - ${erro.message}`
            );
        }
    });
}

lancandoErrosCustomizados();
