// relógio.js - Relógio Funcional em JavaScript
function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    // Converte para formato de 12 horas
    let periodo = 'AM';
    if (horas >= 12) {
        periodo = 'PM';
        if (horas > 12) horas -= 12;
    }
    horas = horas.toString().padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos} ${periodo}`;
    document.getElementById('clockValue').textContent = horarioFormatado;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();  // Chama imediatamente ao carregar a página
