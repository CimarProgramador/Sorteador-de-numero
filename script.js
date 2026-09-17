const sorteioButton = document.getElementById('btn-sortear');
const numMin = document.getElementById('input-min');
const numMax = document.getElementById('input-max');
const resultado = document.getElementById('resultado');

function sortear() {
    const min = parseInt(numMin.value);
    const max = parseInt(numMax.value);
    if (isNaN(min)) {
        alert("Por favor, insira valores válidos para o mínimo.");
        return;
    }
    if (isNaN(max)) {
        alert("Por favor, insira valores válidos para o máximo.");
        return;
    }
    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }
    
    const resultSorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    Swal.fire({
        title: 'Sorteando...',
        text: 'Por favor, aguarde o resultado.',
        imageUrl: './assets/espera2.gif',
        imageWidth: 400,
        imageHeight: 400,
        showConfirmButton: false, // Esconde o botão para o usuário não fechar antes
        allowOutsideClick: false, // Impede o usuário de fechar clicando fora
    });
    setTimeout(() => {
    resultado.textContent = resultSorteio;
    Swal.fire({
        title: 'Temos um vencedor!',
        html: `O número sorteado foi: <br><span style="color: #ff0000; font-weight: bold; font-size: 100px;">${resultado.textContent}</span>`,
        icon: 'success',
        confirmButtonText: 'Legal!'
    });
    }, 5000);
}

sorteioButton.addEventListener('click', sortear);