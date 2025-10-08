
let userData = {
    ecoCoins: 150,
    level: 1,
    levelTitle: "Reciclador Iniciante",
    itemsRecycled: 28,
    totalSavings: 45,
    nextLevel: 300,
    progress: 45
};

// navegação
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// interface
function updateUI() {
    document.querySelectorAll('.eco-balance strong').forEach(el => {
        el.textContent = userData.ecoCoins + ' EcoCoins';
    });
}

// descarte
function showDiscardModal() {
    document.getElementById('discard-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('discard-modal').classList.remove('active');
}

function confirmDiscard() {
    const quantity = 2; // quantidade fixa para teste
    const pointsEarned = 50;

    userData.ecoCoins += pointsEarned;
    updateUI();
    closeModal();

    alert(`✅ Descarte registrado!\n+${pointsEarned} EcoCoins`);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    updateUI();
    console.log('App EcoColeta carregado!');
});

// Botões funcionais
document.querySelector('.search-box button').addEventListener('click', function() {
    alert('Buscando pontos de coleta...');
});