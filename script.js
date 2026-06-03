document.addEventListener('DOMContentLoaded', () => {
    // Embedded questions from JSON files, statically included.
    const QUIZ_GAMES = {
        1: {
            "questions": [
                {
                    "métier": "Boucherie",
                    "question": "À quel moment de la journée faut-il retirer les produits à DLC courte du rayon ?",
                    "réponses": ["Dès la réception", "Dès le matin", "En fin de journée", "Lors du remplissage suivant"],
                    "bonne réponse": "En fin de journée"
                },
                {
                    "métier": "Général",
                    "question": "Un client vous informe d’une allergie aux fruits à coque. Quelle est la meilleure approche ?",
                    "réponses": [
                        "Lui dire de lire l’étiquette",
                        "Vérifier la fiche technique du produit ou lire l’étiquette des ingrédients et informer des traces potentielles",
                        "Lui proposer d’acheter les produits emballés après l’avoir rassuré",
                        "Lui dire que, par précaution, il ne devrait prendre que du BIO"
                    ],
                    "bonne réponse": "Vérifier la fiche technique du produit ou lire l’étiquette des ingrédients et informer des traces potentielles"
                },
                {
                    "métier": "poissonnerie",
                    "question": "Dans le rayon marée, pourquoi est-il essentiel de conserver les étiquettes sanitaires après l’agréage et en réserve ?",
                    "réponses": [
                        "Pour le nettoyage du poste",
                        "Pour la traçabilité du produit de l’arrivée à la vente",
                        "Pour le calcul du prix de vente",
                        "Pour contrôler la quantité"
                    ],
                    "bonne réponse": "Pour la traçabilité du produit de l’arrivée à la vente"
                },
                {
                    "métier": "Charcuterie - fromagerie",
                    "question": "Quel est l’objectif principal de la cuisson du jambon cuit à 65°C ?",
                    "réponses": [
                        "Assurer la conservation par pasteurisation et la coagulation des protéines",
                        "Accélérer le processus de séchage",
                        "Obtenir une couleur grise naturelle",
                        "Faire fondre le gras pour un produit plus maigre"
                    ],
                    "bonne réponse": "Assurer la conservation par pasteurisation et la coagulation des protéines"
                },
                {
                    "métier": "Fruits et légume",
                    "question": "Quelle est la règle de merchandising prioritaire pour l’implantation des fruits secs (Marque De Distributeur - MDD) ?",
                    "réponses": [
                        "Au niveau inférieur (pied du rayon)",
                        "À hauteur des yeux et des mains",
                        "En tête de gondole uniquement",
                        "Mêlangés avec les produits en vrac"
                    ],
                    "bonne réponse": "À hauteur des yeux et des mains"
                },
                {
                    "métier": "boulangerie",
                    "question": "Que signifie la mention PIPV sur vos affichages en magasin ?",
                    "réponses": [
                        "Pain Industriel pour la Vente",
                        "Préparé Ici Pour Vous",
                        "Production Interne Pain de Ville",
                        "Produit Issu de Pâtes Variables"
                    ],
                    "bonne réponse": "Préparé Ici Pour Vous"
                }
            ]
        },
        2: {
            "questions": [
                {
                    "métier": "Général",
                    "question": "Le calcul du chiffre d’affaires au mètre carré développé sert à prendre des décisions concernant :",
                    "réponses": [
                        "La réduction ou l’augmentation de l’espace alloué à une famille de produits",
                        "L’identification des familles de produits les plus rentables par unité d’espace",
                        "La couleur des étagères du rayon",
                        "La détermination du nombre d’employés nécessaires en caisse"
                    ],
                    "bonnes réponses": [
                        "L’identification des familles de produits les plus rentables par unité d’espace",
                        "La réduction ou l’augmentation de l’espace alloué à une famille de produits"
                    ]
                },
                {
                    "métier": "pâtisserie",
                    "question": "Pourquoi est-il déconseillé de mettre le sel en contact direct avec la levure fraîche ?",
                    "réponses": [
                        "Pour éviter une surchauffe",
                        "Pour rendre la pâte plus molle",
                        "Le sel peut déshydrater la levure et stopper la fermentation",
                        "Pour améliorer le goût"
                    ],
                    "bonne réponse": "Le sel peut déshydrater la levure et stopper la fermentation"
                },
                {
                    "métier": "poissonnerie",
                    "question": "Quel est l’élément qui doit déclencher en priorité une alerte sur la qualité du produit auprès du client ?",
                    "réponses": [
                        "Le prix du produit est trop bas",
                        "Le poisson ne possède pas de logo MSC/ASC",
                        "Les yeux du poisson sont vitreux et les ouïes grisâtres",
                        "La couleur du balisage est incorrecte"
                    ],
                    "bonne réponse": "Les yeux du poisson sont vitreux et les ouïes grisâtres"
                },
                {
                    "métier": "Général",
                    "question": "Vous constatez une différence entre le stock théorique affiché sur votre outil informatique (PDA) et le stock physique en réserve. Quelle est la première action à mener ?",
                    "réponses": [
                        "Corriger l’outil informatique immédiatement",
                        "Attendre le signalement d’une rupture de stock",
                        "Laisser la différence jusqu’à l’inventaire",
                        "Identifier la source de l’anomalie et alerter votre responsable"
                    ],
                    "bonne réponse": "Identifier la source de l’anomalie et alerter votre responsable"
                },
                {
                    "métier": "fruits et légume",
                    "question": "Quelle est la plage de température optimale à respecter absolument pour les produits de 4e (coupés) et de 5e gamme (cuits, prêts à l’emploi) ?",
                    "réponses": [
                        "De 0 à +2 °C",
                        "De +1 à +4 °C",
                        "De +2 a +8 °C"
                    ],
                    "bonne réponse": "De +1 à +4 °C"
                },
                {
                    "métier": "boulangerie",
                    "question": "Quels comportements favorisent la fidélisation des clients en Boulangerie ?",
                    "réponses": [
                        "La régularité de la cuisson",
                        "Parler fort avec ses collègues",
                        "La propreté de la tenue professionnelle",
                        "Le conseil personnalisé sur les pains"
                    ],
                    "bonnes réponses": [
                        "La régularité de la cuisson",
                        "La propreté de la tenue professionnelle",
                        "Le conseil personnalisé sur les pains"
                    ]
                }
            ]
        },
        3: {
            "questions": [
                {
                    "métier": "boucherie",
                    "question": "Quelles sont les bonnes pratiques essentielles pour valoriser l’offre ou organiser la présentation d’un rayon boucherie traditionnel et libre-service ?",
                    "réponses": [
                        "Mettre en avant clairement les produits de saison (ex : agneau de Pâques) et les pièces phares",
                        "Entasser les barquettes de viande sans distinction de famille",
                        "Assurer la propreté irréprochable et l’entretien régulier du rayon, des vitrines et des balances",
                        "Jouer sur les textures, les couleurs et une segmentation claire des familles de produits"
                    ],
                    "bonnes réponses": [
                        "Mettre en avant clairement les produits de saison (ex : agneau de Pâques) et les pièces phares",
                        "Assurer la propreté irréprochable et l’entretien régulier du rayon, des vitrines et des balances",
                        "Jouer sur les textures, les couleurs et une segmentation claire des familles de produits"
                    ]
                },
                {
                    "métier": "général",
                    "question": "Qu’est-ce qu’un 'stock dormant' ?",
                    "réponses": [
                        "Un stock non commandé",
                        "Un produit mal rangé",
                        "Un produit qui n’a pas été vendu depuis longtemps",
                        "Un stock en attente de livraison"
                    ],
                    "bonne réponse": "Un produit qui n’a pas été vendu depuis longtemps"
                },
                {
                    "métier": "poissonnerie",
                    "question": "Pourquoi est-il important de parler de la pêche durable (MSC/ASC) au client ?",
                    "réponses": [
                        "C’est une obligation légale",
                        "Pour justifier un prix plus élevé",
                        "Pour valoriser l’engagement de l’enseigne et développer la consommation responsable",
                        "Pour mettre en avant une offre diversifiée"
                    ],
                    "bonne réponse": [
                        "Pour valoriser l’engagement de l’enseigne et développer la consommation responsable",
                        "Pour mettre en avant une offre diversifiée"
                    ]
                },
                {
                    "métier": "Général",
                    "question": "Comment passe-t-on du CA TTC au CA HT ?",
                    "réponses": [
                        "On divise le CA TTC par le coefficient de TVA",
                        "On soustrait au CA TTC, les charges d’exploitation",
                        "On soustrait au CA TTC, le coût d’achat de la marchandise vendue"
                    ],
                    "bonne réponse": "On divise le CA TTC par le coefficient de TVA"
                },
                {
                    "métier": "Fruits et légume",
                    "question": "Face à des anomalies fréquentes de livraison (produits endommagés, retards répétés), quelles actions une équipe de gestion des stocks F&L doit-elle mener ?",
                    "réponses": [
                        "Documenter systématiquement chaque incident (photos, rapports) et notifier formellement les fournisseurs",
                        "Évaluer l’opportunité de changer de fournisseur ou de renégocier les contrats de service (SLA) avec le management",
                        "Renforcer les contrôles à la réception pour ces fournisseurs spécifiques",
                        "Collaborer avec la logistique centrale pour identifier les causes racines des dysfonctionnements"
                    ],
                    "bonne réponse": [
                        "Documenter systématiquement chaque incident (photos, rapports) et notifier formellement les fournisseurs",
                        "Évaluer l’opportunité de changer de fournisseur ou de renégocier les contrats de service (SLA) avec le management",
                        "Renforcer les contrôles à la réception pour ces fournisseurs spécifiques",
                        "Collaborer avec la logistique centrale pour identifier les causes racines des dysfonctionnements"
                    ]
                },
                {
                    "métier": "boulangerie",
                    "question": "Au rayon Boulangerie, il est interdit d’utiliser des œufs :",
                    "réponses": [
                        "Vrai",
                        "Faux"
                    ],
                    "bonne réponse": "Vrai"
                }
            ]
        },
        4: {
            "questions": [
                {
                    "métier": "boucherie",
                    "question": "Quel est l’ordre correct d’un protocole de nettoyage et de désinfection des outils (couteaux, planches) dans la laboratoire de boucherie ?",
                    "réponses": [
                        "Désinfection - Rinçage - Nettoyage",
                        "Rinçage - Désinfection - Nettoyage",
                        "Nettoyage - Rinçage - Désinfection",
                        "Nettoyage - Désinfection - Rinçage"
                    ],
                    "bonne réponse": "Nettoyage - Rinçage - Désinfection"
                },
                {
                    "métier": "Général",
                    "question": "La Marge Brute est l’indicateur fondamental de la performance d’un rayon. Quel(s) élément(s) sont / est essentiel(s) pour son calcul précis dans un rayon frais ?",
                    "réponses": [
                        "Le Prix de Vente Hors Taxes (PV HT)",
                        "Le Coût d’Achat Hors Taxes (CA HT) du produit",
                        "Le montant de la Démarque Connue (casse, vols)",
                        "Les Frais de Personnel et les charges fixes du magasin"
                    ],
                    "bonne réponse": ["Le Prix de Vente Hors Taxes (PV HT)", "Le Coût d’Achat Hors Taxes (CA HT) du produit","Le montant de la Démarque Connue (casse, vols)"]
                },
                {
                    "métier": "poissonnerie",
                    "question": "Quelle est la conséquence principale d’un mauvais rendement de découpe sur le coût de revient du produit ?",
                    "réponses": [
                        "Le coût de revient diminue",
                        "Le coût de revient augmente",
                        "Le prix de vente diminue",
                        "Le prix de vente reste stable"
                    ],
                    "bonne réponse": "Le coût de revient augmente"
                },
                {
                    "métier": "Charcuterie - Fromagerie",
                    "question": "Quelles sont les températures réglementaires de stockage des produits frais (charcuterie, fromage, traiteur) / MCQ ?",
                    "réponses": [
                        "Entre 0°C et +4°C pour les produits ultra-frais (charcuterie, traiteur)",
                        "Entre +8°C et +12°C pour tous les produits",
                        "Entre +2°C et +6°C pour les fromages à pâte molle",
                        "Pas de température spécifique, tant que c’est frais"
                    ],
                    "bonne réponse": [
                        "Entre 0°C et +4°C pour les produits ultra-frais (charcuterie, traiteur)",
                        "Entre +2°C et +6°C pour les fromages à pâte molle"
                    ]
                },
                {
                    "métier": "Fruits et légume",
                    "question": "Comment faire mûrir un avocat ?",
                    "réponses": [
                        "Le conserver à température ambiante",
                        "Le conserver au frigo",
                        "L’emballer dans du papier journal",
                        "Le mettre au contact de pommes ou de bananes"
                    ],
                    "bonne réponse": [
                        "Le conserver à température ambiante",
                        "L’emballer dans du papier journal"
                    ]
                },
                {
                    "métier": "boulangerie",
                    "question": "Au stand boulangerie, comment appelle-t-on la zone du meuble située à hauteur des yeux et des mains ?",
                    "réponses": [
                        "La zone froide",
                        "La zone chaude",
                        "La zone de stockage",
                        "La zone de sécurité"
                    ],
                    "bonne réponse": "La zone chaude"
                }
            ]
        },
        5: {
            "questions": [
                {
                    "métier": "boucherie",
                    "question": "Pourquoi est-il essentiel de stocker la volaille sur les niveaux inférieurs des étagères de la chambre froide, même si elle est dans des caisses fermées ?",
                    "réponses": [
                        "Pour respecter le poids maximal sur les étagères",
                        "Pour prévenir la contamination croisée par égouttement potentiel vers les autres viandes (bœuf/porc), car la volaille est la plus sensible",
                        "Pour garantir une température plus basse"
                    ],
                    "bonne réponse": "Pour prévenir la contamination croisée par égouttement potentiel vers les autres viandes (bœuf/porc), car la volaille est la plus sensible"
                },
                {
                    "métier": "Général",
                    "question": "Qu’est-ce que le 'facing' ?",
                    "réponses": [
                        "L’action de faire un inventaire",
                        "La vérification des dates de péremption",
                        "L’alignement de ses produits en façade pour donner l’impression de plein et de neuf",
                        "L’installation des affiches promotionnelles"
                    ],
                    "bonne réponse": "L’alignement de ses produits en façade pour donner l’impression de plein et de neuf"
                },
                {
                    "métier": "poissonnerie",
                    "question": "Quelle est la hauteur minimale recommandée pour le lit de glace sur la banc du rayon traditionnel, avant l’installation des produits ?",
                    "réponses": [
                        "5 cm",
                        "10 cm",
                        "15 cm",
                        "20 cm"
                    ],
                    "bonne réponse": "15 cm"
                },
                {
                    "métier": "Charcuterie - fromagerie",
                    "question": "Un client se présente à votre stand Charcuterie. Il est très mécontent car le jambon blanc à la coupe qu’il a acheté hier était facturé à 15,90 €/kg, mais sur son ticket de caisse, il a été facturé à un prix du système informatique, soit 19,90 €/kg. Que devez-vous faire ?",
                    "réponses": [
                        "Lui dire de se rendre directement à l’Accueil du magasin avec son ticket pour se faire rembourser la différence",
                        "Vous excuser, reprendre le jambon, le peser à nouveau et lui refaire une étiquette manuelle au bon prix pour qu’il repasse en caisse",
                        "Appliquer immédiatement le prix affiché en rayon (le plus avantageux pour le client), calculer la différence sur la quantité achetée, et lui rembourser la différence en bon d’achat"
                    ],
                    "bonne réponse": "Appliquer immédiatement le prix affiché en rayon (le plus avantageux pour le client), calculer la différence sur la quantité achetée, et lui rembourser la différence en bon d’achat"
                },
                {
                    "métier": "Fruits et légume",
                    "question": "Le choix des F&L de saison est un pilier d’Act for Food. Quels en sont les bénéfices en termes d’impact environnemental et de coût ?",
                    "réponses": [
                        "Ils sont plus faciles à stocker à long terme",
                        "Ils réduisent l’empreinte carbone liée au transport et au stockage (moins d’énergie)",
                        "Ils sont plus résistants aux maladies",
                        "Ils permettent de proposer un produit de meilleure qualité à un prix plus juste"
                    ],
                    "bonne réponse": [
                        "Ils réduisent l’empreinte carbone liée au transport et au stockage (moins d’énergie)",
                        "Ils permettent de proposer un produit de meilleure qualité à un prix plus juste"
                    ]
                },
                {
                    "métier": "boulangerie",
                    "question": "Quelles sont les règles de sécurité pour le nettoyage du four ?",
                    "réponses": [
                        "Attendre le refroidissement complet du four",
                        "Utiliser de l’eau froide sur les briques chaudes",
                        "Utiliser des brosses à long manche adaptées",
                        "Porter des équipements de protection individuelle (EPI)"
                    ],
                    "bonne réponse": [
                        "Attendre le refroidissement complet du four",
                        "Utiliser des brosses à long manche adaptées",
                        "Porter des équipements de protection individuelle (EPI)"
                    ]
                }
            ]
        }
    };

    // DOM Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const startBtn = document.getElementById('start-btn');

    const quizProgressText = document.getElementById('quiz-progress-text');
    const quizProgressBarFill = document.getElementById('quiz-progress-bar-fill');
    const quizMetier = document.getElementById('quiz-metier');
    const quizQuestion = document.getElementById('quiz-question');
    const quizAnswersContainer = document.getElementById('quiz-answers');

    const quizActionBtn = document.getElementById('quiz-action-btn');
    const quizQuitBtn = document.getElementById('quiz-quit-btn');

    // Quiz State
    let quizData = {
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswers: [],
        revealed: false,
        gameIndex: 1
    };

    // Helper: Escape HTML to prevent injection
    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Function to switch screens with a smooth transition
    function showScreen(screenToShow) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
            setTimeout(() => {
                if (!screen.classList.contains('active')) {
                    screen.style.display = 'none';
                }
            }, 400); // Wait for transition
        });

        // Show target screen
        setTimeout(() => {
            screenToShow.style.display = 'block';
            // Force reflow
            screenToShow.offsetHeight;
            screenToShow.classList.add('active');
        }, 400);
    }

    // Normalize correct answers into an array of trimmed strings
    function getCorrectAnswers(question) {
        const answers = question["bonne réponse"] || question["bonnes réponses"] || question["bonne reponse"] || question["bonnes reponses"];
        if (!answers) return [];
        if (Array.isArray(answers)) {
            return answers.map(a => String(a).trim());
        }
        return [String(answers).trim()];
    }

    // Dynamic Profession/Métier Tag Styling
    function updateMetierTag(metierName) {
        quizMetier.textContent = metierName;
        quizMetier.className = 'metier-tag-large'; // Reset class

        const nameNormalized = String(metierName).toLowerCase();
        if (nameNormalized.includes('boucherie')) {
            quizMetier.classList.add('metier-boucherie');
        } else if (nameNormalized.includes('poisson')) {
            quizMetier.classList.add('metier-poissonnerie');
        } else if (nameNormalized.includes('fruit') || nameNormalized.includes('légumes') || nameNormalized.includes('legume')) {
            quizMetier.classList.add('metier-fruits-legumes');
        } else if (nameNormalized.includes('pâtisserie') || nameNormalized.includes('patisserie') || nameNormalized.includes('boulangerie') || nameNormalized.includes('pain')) {
            quizMetier.classList.add('metier-patisserie');
        } else if (nameNormalized.includes('charcuterie') || nameNormalized.includes('fromage')) {
            quizMetier.classList.add('metier-charcuterie');
        } else {
            quizMetier.classList.add('metier-general');
        }
    }

    // Load Quiz Questions from Embedded Object
    function startQuiz() {
        try {
            // Reset state
            quizData.currentQuestionIndex = 0;
            quizData.selectedAnswers = [];
            quizData.revealed = false;

            // Load data directly from local embedded QUIZ_GAMES object to bypass CORS file:// issues
            const data = QUIZ_GAMES[quizData.gameIndex];
            if (!data || !data.questions || data.questions.length === 0) {
                throw new Error(`Aucune question trouvée pour le Jeu ${quizData.gameIndex}.`);
            }

            quizData.questions = data.questions;
            displayQuestion();
            showScreen(quizScreen);
        } catch (error) {
            console.error(error);
            alert("Erreur lors du chargement de la partie : " + error.message);
        }
    }

    // Display Current Question
    function displayQuestion() {
        const questionObj = quizData.questions[quizData.currentQuestionIndex];
        quizData.selectedAnswers = [];
        quizData.revealed = false;

        // Progress Text and Bar
        const totalQuestions = quizData.questions.length;
        const currentNum = quizData.currentQuestionIndex + 1;
        quizProgressText.textContent = `Jeu ${quizData.gameIndex} • Question ${currentNum} sur ${totalQuestions}`;

        const progressPercent = ((currentNum - 1) / totalQuestions) * 100;
        quizProgressBarFill.style.width = `${progressPercent}%`;

        // Métier Tag
        updateMetierTag(questionObj.métier || "Général");

        // Question text
        quizQuestion.textContent = questionObj.question;

        // Answers
        quizAnswersContainer.innerHTML = '';
        quizActionBtn.textContent = "Voir les réponses";
        quizActionBtn.className = "btn-primary";

        questionObj.réponses.forEach((reponse, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            const card = document.createElement('div');
            card.className = 'answer-card';
            card.dataset.index = index;
            card.innerHTML = `
                <span class="answer-letter">${letter}</span>
                <span class="answer-text">${escapeHtml(reponse)}</span>
            `;

            card.addEventListener('click', () => {
                if (quizData.revealed) return; // Prevent selection after clicking "Voir les réponses"
                toggleAnswerSelection(index, card);
            });

            quizAnswersContainer.appendChild(card);
        });
    }

    // Handle Selection (supporting multiple selections for MCQs)
    function toggleAnswerSelection(index, cardElement) {
        const selectedIndex = quizData.selectedAnswers.indexOf(index);

        // Let's check if the current question supports multiple answers
        const questionObj = quizData.questions[quizData.currentQuestionIndex];
        const correctAnswers = getCorrectAnswers(questionObj);
        const isMultipleChoice = correctAnswers.length > 1;

        if (isMultipleChoice) {
            // For multiple answers, toggle the clicked card
            if (selectedIndex > -1) {
                quizData.selectedAnswers.splice(selectedIndex, 1);
                cardElement.classList.remove('selected');
            } else {
                quizData.selectedAnswers.push(index);
                cardElement.classList.add('selected');
            }
        } else {
            // For single answer, select only the clicked card
            quizData.selectedAnswers = [index];
            document.querySelectorAll('.answer-card').forEach(card => {
                card.classList.remove('selected');
            });
            cardElement.classList.add('selected');
        }
    }

    // Reveal Correct/Incorrect Answers
    function revealAnswers() {
        quizData.revealed = true;
        const questionObj = quizData.questions[quizData.currentQuestionIndex];
        const correctAnswers = getCorrectAnswers(questionObj);

        // Highlight cards
        document.querySelectorAll('.answer-card').forEach(card => {
            const index = parseInt(card.dataset.index, 10);
            const answerText = questionObj.réponses[index].trim();

            // Check if this card's answer text matches any correct answer
            const isCorrect = correctAnswers.some(ans => ans.toLowerCase() === answerText.toLowerCase());
            const isSelected = quizData.selectedAnswers.includes(index);

            if (isCorrect) {
                card.classList.remove('selected');
                card.classList.add('correct');
            } else if (isSelected) {
                card.classList.remove('selected');
                card.classList.add('incorrect');
            } else {
                card.classList.add('revealed-faded');
            }
        });

        // Update action button
        const isLastQuestion = quizData.currentQuestionIndex === quizData.questions.length - 1;
        if (isLastQuestion) {
            quizActionBtn.textContent = "Terminer le quiz";
        } else {
            quizActionBtn.textContent = "Question suivante";
        }
    }

    // Proceed to next question or end the quiz
    function handleNextAction() {
        if (!quizData.revealed) {
            revealAnswers();
        } else {
            const isLastQuestion = quizData.currentQuestionIndex === quizData.questions.length - 1;
            if (isLastQuestion) {
                finishQuiz();
            } else {
                quizData.currentQuestionIndex++;
                displayQuestion();
            }
        }
    }

    // Finish current quiz and progress to the next one
    function finishQuiz() {
        // Complete progress bar fill animation
        quizProgressBarFill.style.width = "100%";

        // Smoothly transition back to welcome screen
        setTimeout(() => {
            showScreen(welcomeScreen);

            // Update strictly and explicitly to next game index
            let nextIndex = quizData.gameIndex + 1;
            if (nextIndex > 5) {
                nextIndex = 1;
            }
            quizData.gameIndex = nextIndex;
        }, 500);
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        startQuiz();
    });

    quizActionBtn.addEventListener('click', () => {
        handleNextAction();
    });

    quizQuitBtn.addEventListener('click', () => {
        // Smoothly quit game
        showScreen(welcomeScreen);
    });

    // The site remains responsive without any parallax movement on mouse move.
});
