
// ============================================================
// EXERCÍCIO 13 - CALL STACK
// ============================================================

function callStack() {
    console.log("\n=== EXERCÍCIO 13 - CALL STACK ===");

    console.log("Quando interno() está sendo executada, a Call Stack é:");

    console.log("▶ externo(4)");
    console.log("   ▶ interno(4)");

    console.log(
        "\nA função externo() chamou interno(), por isso interno() está no topo da pilha."
    );
}

callStack();