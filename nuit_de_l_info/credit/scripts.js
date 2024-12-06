const anecdotes = [
    { type: 'anecdote', info: 'Chaque année, environ 8 millions de tonnes de plastique finissent dans les océans.', img: 'https://via.placeholder.com/150?text=Pollution+1' },
    { type: 'anecdote', info: 'Les microplastiques sont ingérés par de nombreuses espèces marines, perturbant les écosystèmes.', img: 'https://via.placeholder.com/150?text=Pollution+2' },
    { type: 'anecdote', info: 'La pollution des océans menace plus de 100 000 espèces marines.', img: 'https://via.placeholder.com/150?text=Pollution+3' },
    { type: 'anecdote', info: 'Les filets de pêche abandonnés continuent de piéger et de tuer des animaux marins.', img: 'https://via.placeholder.com/150?text=Pollution+4' },
    { type: 'anecdote', info: 'Les marées noires causées par les déversements de pétrole ont des effets dévastateurs sur la vie marine.', img: 'https://via.placeholder.com/150?text=Pollution+5' },
    { type: 'anecdote', info: 'La pollution sonore des océans perturbe les communications des mammifères marins.', img: 'https://via.placeholder.com/150?text=Pollution+6' },
    { type: 'anecdote', info: 'Les eaux acides dues au changement climatique affectent les coraux et autres organismes calcifiés.', img: 'https://via.placeholder.com/150?text=Pollution+7' },
    { type: 'anecdote', info: 'Les déchets électroniques déversés dans les océans libèrent des substances toxiques.', img: 'https://via.placeholder.com/150?text=Pollution+8' },
    { type: 'anecdote', info: 'Les bateaux transportant des déchets contribuent significativement à la pollution marine.', img: 'https://via.placeholder.com/150?text=Pollution+9' },
    { type: 'anecdote', info: 'Les mégaplastiques, des amas de plastique de plus de 5 cm, sont particulièrement nuisibles pour la faune.', img: 'https://via.placeholder.com/150?text=Pollution+10' },
    { type: 'anecdote', info: 'La biodiversité marine est gravement menacée par la pêche intensive.', img: 'https://via.placeholder.com/150?text=Pollution+11' },
    { type: 'anecdote', info: 'Les récifs coralliens, abris pour des milliers d’espèces, disparaissent à un rythme alarmant.', img: 'https://via.placeholder.com/150?text=Pollution+12' },
    { type: 'anecdote', info: 'Les oiseaux marins ingèrent souvent du plastique, confondant les déchets avec leur nourriture.', img: 'https://via.placeholder.com/150?text=Pollution+13' },
    { type: 'anecdote', info: 'Les zones mortes des océans, où la vie marine ne peut survivre, sont en augmentation.', img: 'https://via.placeholder.com/150?text=Pollution+14' },
    { type: 'anecdote', info: 'La fonte des glaces due au réchauffement climatique menace les écosystèmes polaires.', img: 'https://via.placeholder.com/150?text=Pollution+15' },
    { type: 'anecdote', info: 'Les hydrocarbures qui fuient des navires affectent gravement les écosystèmes marins.', img: 'https://via.placeholder.com/150?text=Pollution+16' },
    { type: 'anecdote', info: 'La surexploitation des ressources marines, comme le thon rouge, met en péril leur survie.', img: 'https://via.placeholder.com/150?text=Pollution+17' },
    { type: 'anecdote', info: 'Les produits chimiques utilisés dans l’agriculture se retrouvent dans les océans, causant des algues toxiques.', img: 'https://via.placeholder.com/150?text=Pollution+18' },
    { type: 'anecdote', info: 'Les animaux marins confondent souvent les sacs plastiques avec des méduses et les ingèrent.', img: 'https://via.placeholder.com/150?text=Pollution+19' },
    { type: 'anecdote', info: 'Les câbles sous-marins et infrastructures humaines modifient les écosystèmes.', img: 'https://via.placeholder.com/150?text=Pollution+20' },
    { type: 'anecdote', info: 'L’augmentation du CO₂ dans l’océan rend l’eau plus acide, affectant la vie marine.', img: 'https://via.placeholder.com/150?text=Pollution+21' },
    { type: 'anecdote', info: 'Les filets de pêche fantômes continuent à capturer des animaux marins longtemps après leur perte.', img: 'https://via.placeholder.com/150?text=Pollution+22' },
    { type: 'anecdote', info: 'Les rejets de plastique fragmenté créent des "soupes de plastique" dans les océans.', img: 'https://via.placeholder.com/150?text=Pollution+23' },
    { type: 'anecdote', info: 'Les îles de plastique sont désormais des zones de pollution majeures dans l’océan.', img: 'https://via.placeholder.com/150?text=Pollution+24' },
    { type: 'anecdote', info: 'Les bancs de coraux sont essentiels pour protéger les côtes, mais sont en danger.', img: 'https://via.placeholder.com/150?text=Pollution+25' },
    { type: 'anecdote', info: 'Le réchauffement climatique entraîne la migration forcée des espèces marines.', img: 'https://via.placeholder.com/150?text=Pollution+26' },
    { type: 'anecdote', info: 'Les déchets marins peuvent parcourir des milliers de kilomètres en suivant les courants.', img: 'https://via.placeholder.com/150?text=Pollution+27' },
    { type: 'anecdote', info: 'Les dauphins et les baleines sont particulièrement sensibles à la pollution sonore sous-marine.', img: 'https://via.placeholder.com/150?text=Pollution+28' },
    { type: 'anecdote', info: 'Chaque année, des milliers de tortues de mer meurent en ingérant des plastiques.', img: 'https://via.placeholder.com/150?text=Pollution+29' },
    { type: 'anecdote', info: 'Les océans absorbent environ un quart du CO₂ produit par les activités humaines.', img: 'https://via.placeholder.com/150?text=Pollution+30' }
];

const githubLinks = {
    'YLAN Woelffle': 'https://github.com/DubbelF34140',
    'Guillaume TOURNAN': 'https://github.com/GuiTrn',
    'Hugo CIRETTE': 'https://github.com/hugogos-c',
    'Ludovic PROUX': 'https://github.com/LudovicProuxDev',
    'Arthur BOUCHAUD': 'https://github.com/bcharthur'
};

const userDescriptions = {
    'YLAN Woelffle': 'Ylan à travaillé sur le projet Global ainsi que le Game Cha et Cookie Cauchemar.',
    'Guillaume TOURNAN': 'Guillaume à travaillé sur le projet de la page des crédits.',
    'Hugo CIRETTE': 'Hugo à travaillé sur le Jeu intégrant des IA.',
    'Ludovic PROUX': 'Ludo à travaillé sur le projet Global.',
    'Arthur BOUCHAUD': 'Arthur à travaillé sur le projet GreenIT.'
};





        const specialCards = [
            { type: 'special', img: 'img/ylan.png', name: 'YLAN Woelffle' },
            { type: 'special', img: 'img/guillaume.png', name: 'Guillaume TOURNAN' },
            { type: 'special', img: 'img/hugo.png', name: 'Hugo CIRETTE' },
            { type: 'special', img: 'img/ludo.png', name: 'Ludovic PROUX' },
            { type: 'special', img: 'img/arthur.png', name: 'Arthur BOUCHAUD' }
        ];

        const descriptions = [
            "Passionné par la nature et l'environnement, toujours prêt à plonger dans l'océan.",
            "A participé à de nombreuses missions de nettoyage des plages.",
            "Aime sensibiliser le public aux enjeux de la pollution marine.",
            "Expert en biologie marine, connait chaque créature sous-marine.",
            "A parcouru les côtes du monde pour comprendre l'impact du plastique.",
            "Soutient activement les ONG travaillant sur la préservation des océans.",
            "A un talent caché : peut reconnaitre le chant de chaque mammifère marin.",
            "Inspiré par Cousteau, il rêve d'un océan sans déchets.",
            "A déjà nettoyé plus de 10 000 mégots de cigarettes sur les plages.",
            "Transmet sa passion de l'océan aux plus jeunes."
        ];

        let boosterCards = []; 
        let currentCardIndex = 0; 
        let lastBoosterCards = []; // Variable pour stocker les cartes du dernier booster

        const booster = document.getElementById('booster');
        const btnOpen = document.getElementById('btnOpen');
        const btnNext = document.getElementById('btnNext');
        const tearLine = document.getElementById('tearLine');
        const tearProgress = document.getElementById('tearProgress');
        const card = document.getElementById('card');
        const cardContent = document.getElementById('cardContent');
        const deck = document.getElementById('deck');
        const modal = document.getElementById('modal');
        const modalCard = document.getElementById('modalCard');
        const closeModalBtn = document.getElementById('closeModal');
        const modalName = document.getElementById('modalName');
        const modalDesc = document.getElementById('modalDesc');
        const openCounter = document.getElementById('openCounter'); // Élément du badge
        const boosterSummary = document.getElementById('boosterSummary'); // Conteneur du récapitulatif

        // Gestion des sons
        const soundOcean = document.getElementById('soundOcean');
        const soundChill = document.getElementById('soundChill');
        const soundPaper = document.getElementById('soundPaper');
        const soundFlipping = document.getElementById('soundFlipping'); // Son de flipping existant
        const soundWin = document.getElementById('soundWin'); // Nouveau son win
        const soundClick = document.getElementById('soundClick'); // Son de clic ajouté

        let isDragging = false;
        let isTearing = false;
        let startX = 0;
        let rotation = { x: 0, y: 0 };

        let modalIsDragging = false;
        let modalStartX = 0;
        let modalRotation = { x: 0, y: 0 };

        const MAX_ROT_X = 10;
        const MAX_ROT_Y = 20;
        const collectedCards = [];

        // Initialisation du compteur de tirages
        let remainingOpens = specialCards.length; // Aligné avec le nombre de cartes spéciales
        openCounter.textContent = remainingOpens;

        // Jouer les sons de fond au chargement de la page et les relancer dès qu'ils finissent
        window.addEventListener('DOMContentLoaded', () => {
            soundOcean.loop = false; // Désactiver la boucle pour gérer manuellement
            soundChill.loop = false; // Désactiver la boucle pour gérer manuellement

            // Fonction pour jouer et relancer le son Ocean
            const playOcean = () => {
                soundOcean.currentTime = 0;
                soundOcean.play().catch(e => console.log('Autoplay prevented for oceanSound'));
            };

            // Fonction pour jouer et relancer le son Chill
            const playChill = () => {
                soundChill.currentTime = 0;
                soundChill.play().catch(e => console.log('Autoplay prevented for chillSound'));
            };

            // Événements pour relancer les sons lorsqu'ils se terminent
            soundOcean.addEventListener('ended', playOcean);
            soundChill.addEventListener('ended', playChill);

            // Démarrer la lecture initiale
            playOcean();
            playChill();
        });

        // Effet 3D sur le booster
        booster.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            booster.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || booster.classList.contains('zoom')) return;
            const deltaX = e.clientX - startX;
            rotation.y = Math.max(-MAX_ROT_Y, Math.min(MAX_ROT_Y, rotation.y + deltaX * 0.2));
            booster.style.transform = `rotateX(0deg) rotateY(${rotation.y}deg)`;
            startX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            booster.style.cursor = 'grab';
        });

        // Clic sur un item du deck en bas
        deck.addEventListener('click', (e) => {
    const entry = e.target.closest('.card-entry');
    if (!entry) return;

    const img = entry.querySelector('img');
    const link = entry.querySelector('a');
    if (!img || !link) return;

    // Récupère le nom depuis le lien de la carte
    const name = link.textContent.trim();
    const githubLink = githubLinks[name] || '#'; // Lien par défaut si non trouvé
    const description = userDescriptions[name] || 'Aucune description disponible pour cet utilisateur.';

    // Met à jour le contenu de la modale
    modalCard.style.backgroundImage = `url(${img.src})`;
    modalName.textContent = name; // Affiche le prénom et nom
    modalDesc.innerHTML = `
        GitHub: <a href="${githubLink}" target="_blank">${githubLink}</a>
        <p>${description}</p>
    `; // Ajoute le lien GitHub et la description

    // Affiche la modale
    modal.classList.add('show');
    modalRotation = { x: 0, y: 0 };
    modalCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
});




        modalCard.addEventListener('mousedown', (e) => {
            modalIsDragging = true;
            modalStartX = e.clientX;
            modalCard.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!modalIsDragging) return;
            const deltaX = e.clientX - modalStartX;
            modalRotation.y = Math.max(-MAX_ROT_Y, Math.min(MAX_ROT_Y, modalRotation.y + deltaX * 0.2));
            modalCard.style.transform = `rotateX(0deg) rotateY(${modalRotation.y}deg)`;
            modalStartX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            if (modalIsDragging) {
                modalIsDragging = false;
                modalCard.style.cursor = 'grab';
            }
        });

        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        btnOpen.addEventListener('click', () => {
            // Jouer le son de clic
            soundClick.currentTime = 0;
            soundClick.play().catch(e => console.log('Cannot play click sound'));

            if (remainingOpens <= 0) {
                alert('Vous avez utilisé toutes vos ouvertures !');
                return;
            }

            if (specialCards.length === 0) {
                alert('Vous avez collecté toutes les cartes spéciales disponibles !');
                return;
            }

            rotation.y = 0;
            booster.style.transform = 'rotateX(0deg) rotateY(0deg)';

            const selectedAnecdotes = getRandomAnecdotes(4);
            const specialIndex = Math.floor(Math.random() * specialCards.length);
            const selectedSpecialCard = specialCards.splice(specialIndex, 1)[0];

            boosterCards = [...selectedAnecdotes, selectedSpecialCard];
            currentCardIndex = 0;

            // Masquer le bouton et le badge pendant l'ouverture
            btnOpen.style.display = 'none';

            // Réinitialiser le récapitulatif des cartes obtenues
            boosterSummary.innerHTML = '';

            setTimeout(() => {
                booster.classList.add('zoom'); 
                tearLine.style.display = 'block'; 
            }, 500); 
        });

        function getRandomAnecdotes(n, usedAnecdotes = new Set()) {
    const availableAnecdotes = anecdotes.filter(anecdote => !usedAnecdotes.has(anecdote.info));

    if (availableAnecdotes.length < n) {
        console.warn('Pas assez d\'anecdotes disponibles pour générer un booster sans doublon.');
        return [];
    }

    // Mélange les anecdotes disponibles
    const shuffled = [...availableAnecdotes].sort(() => 0.5 - Math.random());
    const selectedAnecdotes = shuffled.slice(0, n);

    // Met à jour la liste des anecdotes utilisées
    selectedAnecdotes.forEach(anecdote => usedAnecdotes.add(anecdote.info));

    // Ajoute des images aléatoires pour chaque anecdote
    const imagePaths = [
        'img/anec/anec1.png',
        'img/anec/anec2.png',
        'img/anec/anec3.png',
        'img/anec/anec4.png',
        'img/anec/anec5.png'
    ];

    return selectedAnecdotes.map(anecdote => {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        return {
            ...anecdote,
            img: imagePaths[randomIndex]
        };
    });
}


        // Jouer le son de déchirement lorsque l'utilisateur commence à déchirer
        tearLine.addEventListener('mousedown', (e) => {
            isTearing = true;
            startX = e.clientX; 
            tearProgress.style.width = '0'; 
            soundPaper.currentTime = 0;
            soundPaper.play().catch(e => console.log('Cannot play paper sound'));
        });

        tearLine.addEventListener('mousemove', (e) => {
            if (!isTearing) return;
            const rect = tearLine.getBoundingClientRect();
            const progress = Math.min(
                Math.max(0, e.clientX - rect.left),
                rect.width
            ); 
            tearProgress.style.width = `${progress}px`;
        });

        tearLine.addEventListener('mouseup', checkTearCompletion);
        tearLine.addEventListener('mouseleave', () => {
            if (isTearing) {
                isTearing = false;
                tearProgress.style.width = '0'; 
            }
        });

        document.addEventListener('mouseup', () => {
            if (isTearing) {
                checkTearCompletion();
            }
        });

        function checkTearCompletion() {
            if (!isTearing) return;
            const rect = tearLine.getBoundingClientRect();
            const progress = parseInt(tearProgress.style.width);
            if (progress >= rect.width) {
                isTearing = false;
                tearLine.style.display = 'none'; 
                booster.classList.add('fade-out');
                setTimeout(() => {
                    booster.style.display = 'none'; 
                    showCurrentCard();

                    // Décrémenter les ouvertures restantes **après** l'ouverture réussie
                    remainingOpens--;
                    updateCounter();

                }, 500);
            } else {
                tearProgress.style.width = '0';
            }
            isTearing = false;
        }

        function showCurrentCard() {
            const currentCard = boosterCards[currentCardIndex];
            loadCardData(currentCard);
            card.classList.remove('slide-left');
            card.classList.remove('show');
            void card.offsetWidth; 
            requestAnimationFrame(() => {
                card.classList.add('show');
            });
            card.onclick = handleCardClick;


            // Si c'est le dernier booster, préparer le récapitulatif
            if (currentCardIndex === boosterCards.length - 1) {
                // Stocker les cartes obtenues dans lastBoosterCards
                lastBoosterCards = boosterCards.slice(); // Copie de boosterCards

                // Peupler le récapitulatif des cartes obtenues
                boosterSummary.innerHTML = ''; // Effacer le récapitulatif précédent
                lastBoosterCards.forEach(card => {
                    const img = document.createElement('img');
                    img.src = card.img || 'https://via.placeholder.com/50?text=Carte';
                    img.alt = card.name || 'Carte';
                    boosterSummary.appendChild(img);
                });
            }
        }

        function loadCardData(currentCard) {
            // Réinitialiser le contenu et les classes
            cardContent.innerHTML = `
                <img id="avatar" class="avatar" src="" alt="Avatar">
                <h3 id="username"></h3>
                <p id="info"></p>
                <a id="profileLink" href="#" target="_blank">Voir le profil</a>
            `;
            const newAvatar = cardContent.querySelector('#avatar');
            const newUsername = cardContent.querySelector('#username');
            const newInfo = cardContent.querySelector('#info');
            const newProfileLink = cardContent.querySelector('#profileLink');

            // Réinitialiser les styles et classes
            cardContent.style.color = '#00796b';
            cardContent.style.textShadow = 'none';
            cardContent.classList.remove('special', 'anecdote-overlay');
            card.classList.remove('special-card');

            if (currentCard.type === 'anecdote') {
                // Appliquer l'image de fond pour les anecdotes
                card.style.backgroundImage = `url('img/anec.png')`;
                card.style.backgroundColor = 'transparent';

                // Remplir le contenu
                newAvatar.src = currentCard.img || 'https://via.placeholder.com/150';
                newUsername.textContent = 'Anecdote';
                newInfo.textContent = currentCard.info;
                newProfileLink.href = '#';
                newProfileLink.style.display = 'none'; // Masquer le lien

                // Ajuster le style pour la lisibilité
                cardContent.style.color = '#ffffff';
                cardContent.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';
                // Retirer la superposition de fond
                cardContent.classList.remove('anecdote-overlay');
            } else if (currentCard.type === 'credit') {
                // Remplir le contenu pour les crédits (si applicable)
                newAvatar.src = currentCard.avatar_url || 'https://via.placeholder.com/150';
                newUsername.textContent = currentCard.login || 'Utilisateur';
                newInfo.textContent = 'Crédits : ' + (collectedCards.length + 1);
                newProfileLink.href = currentCard.html_url || '#';
                newProfileLink.textContent = currentCard.html_url ? 'Voir le profil' : '';
                newProfileLink.style.display = 'block'; // Afficher le lien si nécessaire
            } else if (currentCard.type === 'special') {
                // Remplir le contenu pour les cartes spéciales
                cardContent.classList.add('special');
                card.classList.add('special-card'); 
                cardContent.innerHTML = `<img class="special-img" src="${currentCard.img}" alt="${currentCard.name}">`;
                card.style.backgroundImage = ''; // Réinitialiser l'image de fond
            }
        }

        function handleCardClick() {
            // Jouer le son de flipping avant de procéder
            soundFlipping.currentTime = 0;
            soundFlipping.play().catch(e => console.log('Cannot play flipping sound'));

            // Vérifier si c'est la 4ème carte (index 3)
            if (currentCardIndex === 3) { // index 3 correspond à la 4ème carte
                setTimeout(() => {
                    soundWin.currentTime = 0;
                    soundWin.play().catch(e => console.log('Cannot play win sound'));
                }, 1000); // Délai de 1 seconde
            }

            card.classList.add('slide-left');
            card.addEventListener('transitionend', onCardTransitionEnd, {once:true});
        }

        function onCardTransitionEnd() {
            currentCardIndex++;
            if (currentCardIndex < boosterCards.length) {
                showCurrentCard();
            } else {
                card.onclick = null;
                card.classList.remove('show'); // Masquer la carte en retirant la classe 'show'
                const lastCard = boosterCards[boosterCards.length - 1];
                if (lastCard.type === 'special') { 
                    addToDeck(lastCard);
                }
                boosterCards = [];
                // Afficher le récapitulatif des cartes obtenues
                // Déjà fait dans showCurrentCard()

                // Attendre 1 seconde avant d'afficher le bouton "Prochain booster"
                setTimeout(() => {
                    btnNext.style.display = 'block';
                }, 1000);
            }
        }

        function addToDeck(cardData) {
            const entry = document.createElement('div');
            entry.classList.add('card-entry');

            // Si la carte est spéciale, ajouter la classe 'special'
            if (cardData.type === 'special') {
                entry.classList.add('special');
            }

            const img = document.createElement('img');
            img.src = cardData.img || cardData.avatar_url || 'https://via.placeholder.com/150?text=Carte';
            img.alt = cardData.name || cardData.login || 'Carte';

            const link = document.createElement('a');
            link.href = cardData.html_url || '#';
            link.target = '_blank';

            if (cardData.type === 'special') {
                link.textContent = cardData.name || 'Special';
            } else if (cardData.type === 'anecdote') {
                link.textContent = 'Anecdote'; // Nom générique pour les anecdotes
            } else {
                link.textContent = 'Carte'; // Autre type de carte
            }

            entry.appendChild(img);
            entry.appendChild(link);
            deck.appendChild(entry);
        }

        btnNext.addEventListener('click', () => {
            // Jouer le son de clic
            soundClick.currentTime = 0;
            soundClick.play().catch(e => console.log('Cannot play click sound'));

            card.classList.remove('show', 'slide-left', 'special-card');
            booster.classList.remove('zoom', 'fade-out');
            booster.style.display = 'block';
            booster.style.opacity = '1';
            rotation = { x: 0, y: 0 };
            booster.style.transform = 'rotateX(0deg) rotateY(0deg)';
            tearProgress.style.width = '0';
            btnNext.style.display = 'none';

            // Réinitialiser le récapitulatif des cartes obtenues
            boosterSummary.innerHTML = '';

            if (remainingOpens > 0 && specialCards.length > 0) {
                btnOpen.style.display = 'block';
            } else {
                btnOpen.style.display = 'none';
                if (remainingOpens <=0) {
                    alert('Vous avez utilisé toutes vos ouvertures !');
                }
                if (specialCards.length ===0) {
                    alert('Vous avez collecté toutes les cartes spéciales disponibles !');
                }
            }

            // Réinitialiser le contenu de la carte
            cardContent.innerHTML = `
                <img id="avatar" class="avatar" src="" alt="Avatar">
                <h3 id="username"></h3>
                <p id="info"></p>
                <a id="profileLink" href="#" target="_blank">Voir le profil</a>
            `;
            cardContent.classList.remove('special');
            // Réinitialiser les styles de la carte
            card.style.backgroundImage = '';
            card.style.backgroundColor = '#ffffff';
        });

        // Fonction pour mettre à jour le compteur de tirages
        function updateCounter() {
            console.log(`Remaining Opens: ${remainingOpens}`);
            console.log(`Special Cards Remaining: ${specialCards.length}`);
            openCounter.textContent = remainingOpens;
            if (remainingOpens <= 0) {
                btnOpen.disabled = true;
                btnOpen.style.opacity = '0.6';
                btnOpen.style.cursor = 'not-allowed';
                alert('Vous avez utilisé toutes vos ouvertures !');
            }
        }