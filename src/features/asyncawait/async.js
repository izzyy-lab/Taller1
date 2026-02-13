        function esperarDosSegundos(numero) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(numero * 2);
                }, 2000);
            });
        }

        // Función asíncrona que usa await
        async function calcular() {
            const input = document.getElementById("numero").value;
            const numero = Number(input);

            document.getElementById("resultado").textContent = "Calculando...";

            const resultado = await esperarDosSegundos(numero);

            document.getElementById("resultado").textContent = "El doble es: " + resultado;
        }