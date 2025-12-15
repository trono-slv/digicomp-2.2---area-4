// =====================================================================================
// 1. IL PANIERE COMPLETO (50 DOMANDE - ne verranno estratte 30)
// Nota: Ho ridotto a 50 il paniere per chiarezza, inserisci le tue 100 domande qui.
// =====================================================================================

const fullQuizData = [
    {
        question: "1. Quale protocollo di sicurezza garantisce che una connessione web tra browser e server sia crittografata, indicato dall'URL che inizia con `https://`?",
        options: ["HTTP", "FTP", "SMTP", "HTTPS"],
        answer: "HTTPS",
        hint: "La 'S' alla fine sta per 'Secure'."
    },
    {
        question: "2. Qual è la funzione principale di un software Antivirus?",
        options: ["Eseguire automaticamente i backup dei tuoi dati.", "Bloccare l'accesso al tuo computer da Internet.", "Identificare, prevenire e rimuovere i programmi dannosi (malware).", "Crittografare tutti i tuoi file."],
        answer: "Identificare, prevenire e rimuovere i programmi dannosi (malware).",
        hint: "Il nome stesso suggerisce l'opposizione ai programmi dannosi."
    },
    {
        question: "3. Quale tipo di attacco cripta i file dell'utente e chiede un pagamento per ripristinarli?",
        options: ["Spyware", "Phishing", "Worm", "Ransomware"],
        answer: "Ransomware",
        hint: "Il termine si riferisce al 'riscatto' richiesto (ransom)."
    },
    {
        question: "4. Cosa si intende per **Autenticazione a Due Fattori (2FA)**?",
        options: ["L'uso di due password identiche.", "La verifica dell'identità attraverso due elementi distinti (es. password + codice SMS).", "L'accesso da due dispositivi diversi contemporaneamente.", "L'uso di due indirizzi e-mail per il recupero."],
        answer: "La verifica dell'identità attraverso due elementi distinti (es. password + codice SMS).",
        hint: "Richiede 'qualcosa che sai' e 'qualcosa che hai'."
    },
    {
        question: "5. A cosa si riferisce il termine 'Phishing'?",
        options: ["Un protocollo di cifratura avanzato.", "L'invio di messaggi fraudolenti per rubare credenziali, fingendosi un'entità affidabile.", "Un tipo di attacco fisico a un server.", "La pratica di creare software illegale."],
        answer: "L'invio di messaggi fraudolenti per rubare credenziali, fingendosi un'entità affidabile.",
        hint: "È un attacco di Social Engineering via email/messaggio."
    },
    {
        question: "6. Qual è la funzione principale di un **Firewall** in una rete domestica?",
        options: ["Controllare e filtrare il traffico di rete in entrata e in uscita.", "Eseguire la scansione dei file alla ricerca di virus.", "Crittografare tutte le comunicazioni Wi-Fi.", "Gestire i permessi di accesso ai file."],
        answer: "Controllare e filtrare il traffico di rete in entrata e in uscita.",
        hint: "È il muro di confine tra la tua rete e l'esterno."
    },
    {
        question: "7. Perchè l'aggiornamento regolare del sistema operativo (OS) è fondamentale per la sicurezza?",
        options: ["Per aumentare la potenza di calcolo della CPU.", "Per correggere le vulnerabilità di sicurezza note (bug e falle).", "Per cambiare l'interfaccia grafica.", "Per rendere il backup obsoleto."],
        answer: "Per correggere le vulnerabilità di sicurezza note (bug e falle).",
        hint: "Gli aggiornamenti includono spesso 'patch' per chiudere le porte di attacco."
    },
    {
        question: "8. Quale elemento è considerato un 'dato personale' ai sensi del GDPR?",
        options: ["Il nome di una città.", "Il tuo indirizzo di posta elettronica personale.", "Il modello di un computer.", "La marca di un'automobile."],
        answer: "Il tuo indirizzo di posta elettronica personale.",
        hint: "Deve riferirsi a una persona fisica identificata o identificabile."
    },
    {
        question: "9. Cos'è un **Keylogger**?",
        options: ["Un tipo di antivirus.", "Un software o hardware che registra ogni tasto premuto dall'utente.", "Un programma che gestisce le chiavi crittografiche.", "Un sistema di blocco dell'accesso fisico al PC."],
        answer: "Un software o hardware che registra ogni tasto premuto dall'utente.",
        hint: "Il termine si traduce letteralmente in 'registratore di tasti'."
    },
    {
        question: "10. Quando si naviga in una rete Wi-Fi pubblica non protetta, quale strumento è consigliato utilizzare per crittografare la propria comunicazione?",
        options: ["Un server DNS sicuro.", "Il protocollo FTP.", "Un gestore di password.", "Una VPN (Virtual Private Network)."],
        answer: "Una VPN (Virtual Private Network).",
        hint: "La VPN crea un tunnel privato e cifrato sopra una rete pubblica."
    },
    {
        question: "11. Quale pratica rende la password meno sicura?",
        options: ["Usare simboli (`$`, `&`, `!`).", "Utilizzare la stessa password per tutti gli account online.", "Usare 12 o più caratteri.", "Evitare parole presenti nel dizionario."],
        answer: "Utilizzare la stessa password per tutti gli account online.",
        hint: "L'uso ripetuto crea un punto di fallimento unico per tutti gli account."
    },
    {
        question: "12. Quale tipo di Malware si maschera come un programma utile o desiderabile per ingannare l'utente e ottenere accesso al sistema?",
        options: ["Adware", "Worm", "Trojan Horse (Cavallo di Troia)", "Keylogger"],
        answer: "Trojan Horse (Cavallo di Troia)",
        hint: "Si nasconde, come l'episodio mitologico, in qualcosa di apparentemente innocuo."
    },
    {
        question: "13. Quale diritto del soggetto previsto dal GDPR consente di chiedere la cancellazione dei propri dati personali?",
        options: ["Diritto di Rettifica", "Diritto all'Oblio (Cancellazione)", "Diritto di Accesso", "Diritto di Portabilità"],
        answer: "Diritto all'Oblio (Cancellazione)",
        hint: "Si riferisce alla 'dimenticanza' dei dati da parte dell'azienda."
    },
    {
        question: "14. Un attacco **Zero-day** sfrutta una vulnerabilità:",
        options: ["Già nota e per la quale esiste una patch.", "Appena scoperta, per la quale non è ancora disponibile una patch di sicurezza.", "Che attacca esclusivamente i sistemi operativi Linux.", "Che non richiede l'uso di Internet."],
        answer: "Appena scoperta, per la quale non è ancora disponibile una patch di sicurezza.",
        hint: "Significa che il vendor ha 'zero giorni' per risolverla."
    },
    {
        question: "15. A cosa si riferiscono le misure di **Ergonomia digitale** (Area 4.3)?",
        options: ["La protezione del dispositivo da virus.", "La protezione della salute fisica (vista, postura) e del benessere psicologico durante l'uso delle tecnologie.", "La crittografia dei dati sensibili.", "L'uso di password complesse."],
        answer: "La protezione della salute fisica (vista, postura) e del benessere psicologico durante l'uso delle tecnologie.",
        hint: "L'Ergonomia si occupa dell'adattamento del lavoro all'uomo."
    },
    {
        question: "16. Quale meccanismo di sicurezza su una rete Wi-Fi è meno sicuro e viene oggi sconsigliato?",
        options: ["WPA3 (Wi-Fi Protected Access 3)", "WEP (Wired Equivalent Privacy)", "WPA2 (Wi-Fi Protected Access 2)", "TLS (Transport Layer Security)"],
        answer: "WEP (Wired Equivalent Privacy)",
        hint: "WEP è il protocollo più vecchio e facilmente violabile."
    },
    {
        question: "17. Cos'è un **Rootkit**?",
        options: ["Un software che effettua solo backup.", "Un programma di gestione delle password.", "Un software dannoso progettato per nascondere la sua presenza e quella di altri programmi maligni, mantenendo l'accesso al livello più profondo del sistema.", "Un tipo di cookie di tracciamento."],
        answer: "Un software dannoso progettato per nascondere la sua presenza e quella di altri programmi maligni, mantenendo l'accesso al livello più profondo del sistema.",
        hint: "Il nome indica il controllo totale (root) nascosto (kit)."
    },
    {
        question: "18. Quale attacco di Social Engineering usa messaggi di posta elettronica o SMS estremamente mirati e personalizzati, rivolti a figure di alto livello (es. CEO)?",
        options: ["Phishing di massa", "Vishing", "Spear Phishing", "Pharming"],
        answer: "Spear Phishing",
        hint: "'Spear' (lancia) indica che l'attacco è mirato e non casuale."
    },
    {
        question: "19. Il **Titolare del Trattamento** (Controller) è l'entità che:",
        options: ["È il responsabile della protezione dei dati (DPO).", "Stabilisce le pene per le violazioni del GDPR.", "Decide le finalità, le modalità e i mezzi del trattamento dei dati personali.", "È l'unica che può accedere ai dati."],
        answer: "Decide le finalità, le modalità e i mezzi del trattamento dei dati personali.",
        hint: "È il decisore principale riguardo al trattamento dei dati."
    },
    {
        question: "20. Il **Metodo 3-2-1** di backup richiede almeno una copia:",
        options: ["Su un disco ottico.", "Nel cloud.", "Off-site (fuori sede).", "Sullo stesso dispositivo in una partizione separata."],
        answer: "Off-site (fuori sede).",
        hint: "Off-site protegge dal rischio di distruzione totale del sito principale."
    },
    {
        question: "21. Qual è l'attacco in cui l'aggressore intercetta e ritrasmette in modo fraudolento un messaggio valido tra due parti che credono di comunicare direttamente tra loro?",
        options: ["Denial of Service (DoS)", "Ransomware", "Man-in-the-Middle (MITM)", "Phishing"],
        answer: "Man-in-the-Middle (MITM)",
        hint: "L'attaccante si pone letteralmente nel mezzo della comunicazione."
    },
    {
        question: "22. Qual è il principale rischio ambientale legato alla produzione e all'uso massivo di criptovalute che utilizzano il meccanismo di Proof-of-Work (PoW)?",
        options: ["Difficoltà nella gestione del backup.", "Alto rischio di Ransomware.", "Elevatissimo consumo energetico.", "Rischio di furto d'identità."],
        answer: "Elevatissimo consumo energetico.",
        hint: "L'algoritmo PoW richiede enormi quantità di calcolo e, quindi, energia."
    },
    {
        question: "23. L'uso improprio di strumenti digitali che può portare a problemi di vista, insonnia e isolamento sociale rientra nei rischi di:",
        options: ["Violazione del GDPR (4.2)", "Protezione della Salute e del Benessere (4.3)", "Furto d'Identità (4.1)", "Protezione dell'Ambiente (4.4)"],
        answer: "Protezione della Salute e del Benessere (4.3)",
        hint: "Riguarda l'impatto fisico e psicologico della tecnologia."
    },
    {
        question: "24. Cosa si intende per **Vishing**?",
        options: ["Phishing via SMS.", "Phishing tramite social media.", "Frode che utilizza chiamate telefoniche o vocali (Voice Phishing) per ottenere informazioni personali o finanziarie.", "Crittografia basata sul riconoscimento vocale."],
        answer: "Frode che utilizza chiamate telefoniche o vocali (Voice Phishing) per ottenere informazioni personali o finanziarie.",
        hint: "Contrazione di 'Voice Phishing'."
    },
    {
        question: "25. Una **firma digitale** è utilizzata principalmente per:",
        options: ["Crittografare il contenuto del messaggio (riservatezza).", "Velocizzare l'invio di un'e-mail.", "Garantire l'autenticità del mittente e l'integrità del documento (non ripudio).", "Comprimere un file di grandi dimensioni."],
        answer: "Garantire l'autenticità del mittente e l'integrità del documento (non ripudio).",
        hint: "Offre prova dell'origine e che il contenuto non è stato alterato."
    },
    {
        question: "26. Quale strumento digitale rientra nella competenza 4.4 per la **Sostenibilità Digitale**?",
        options: ["Un software di gestione di password.", "Un Keylogger.", "Sensori IoT per monitorare e ottimizzare l'uso delle risorse (es. energia, acqua) in un edificio.", "Un sistema di autenticazione biometrica."],
        answer: "Sensori IoT per monitorare e ottimizzare l'uso delle risorse (es. energia, acqua) in un edificio.",
        hint: "L'IoT può rendere l'uso delle risorse più efficiente e quindi più sostenibile."
    },
    {
        question: "27. L'utilizzo di uno scanner di vulnerabilità di rete rientra nella competenza di:",
        options: ["Protezione della salute (4.3).", "Protezione dei dispositivi e valutazione proattiva dei rischi (4.1).", "Protezione della privacy (4.2).", "Protezione dell'ambiente (4.4)."],
        answer: "Protezione dei dispositivi e valutazione proattiva dei rischi (4.1).",
        hint: "Serve a trovare e correggere proattivamente le debolezze tecniche."
    },
    {
        question: "28. Cosa si intende per **Clean Desk Policy**?",
        options: ["L'obbligo di disinfettare la scrivania.", "La politica aziendale che impone di non lasciare documenti sensibili, post-it con password o dispositivi sbloccati sulla scrivania quando si è assenti.", "La procedura per un backup incrementale.", "L'uso di un monitor antiriflesso."],
        answer: "La politica aziendale che impone di non lasciare documenti sensibili, post-it con password o dispositivi sbloccati sulla scrivania quando si è assenti.",
        hint: "Riguarda la sicurezza fisica e la prevenzione del 'Shoulder Surfing'."
    },
    {
        question: "29. Perchè la **cancellazione sicura** dei dati è cruciale prima di smaltire un vecchio dispositivo?",
        options: ["Per aumentare il valore di rivendita.", "Per prevenire che i dati personali o sensibili residui cadano in mani sbagliate.", "Per rendere il dispositivo più veloce.", "Per rendere la batteria più efficiente."],
        answer: "Per prevenire che i dati personali o sensibili residui cadano in mani sbagliate.",
        hint: "I dati cancellati normalmente possono essere recuperati senza una cancellazione a basso livello."
    },
    {
        question: "30. Qual è la minaccia che sfrutta la mancanza di validazione dell'input per iniettare script malevoli nel browser di un altro utente tramite un sito web legittimo?",
        options: ["SQL Injection", "Vishing", "Cross-Site Scripting (XSS)", "Man-in-the-Middle"],
        answer: "Cross-Site Scripting (XSS)",
        hint: "Inietta codice 'cross' (tra) i siti."
    },
    {
        question: "31. Qual è il vantaggio principale di utilizzare un **Gestore di Password** (Password Manager)?",
        options: ["Velocizzare l'inserimento delle password.", "Sostituire l'autenticazione a due fattori.", "Consentire all'utente di utilizzare password lunghe, uniche e complesse per ogni servizio, memorizzandole in modo crittografato.", "Eliminare la necessità di crittografare i dati."],
        answer: "Consentire all'utente di utilizzare password lunghe, uniche e complesse per ogni servizio, memorizzandole in modo crittografato.",
        hint: "Rimuove il carico mnemonico e aumenta la complessità delle credenziali."
    },
    {
        question: "32. Cosa definisce la **Crittografia a Chiave Pubblica** (Asimmetrica)?",
        options: ["L'uso della stessa chiave per cifrare e decifrare.", "La velocità di cifratura molto elevata.", "L'uso di due chiavi matematicamente correlate, una nota a tutti e l'altra mantenuta segreta.", "L'impossibilità di decifrare il messaggio."],
        answer: "L'uso di due chiavi matematicamente correlate, una nota a tutti e l'altra mantenuta segreta.",
        hint: "Il sistema si basa sulla coppia Pubblica-Privata."
    },
    {
        question: "33. La **minimizzazione dei dati** è un principio del GDPR che richiede che i dati personali siano:",
        options: ["Conservati per un periodo illimitato.", "Sempre criptati con chiave asimmetrica.", "Memorizzati solo su supporti fisici.", "Adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità del trattamento."],
        answer: "Adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità del trattamento.",
        hint: "Si raccolgono solo i dati strettamente indispensabili."
    },
    {
        question: "34. L'uso di un software di traduzione online con un documento che contiene segreti aziendali può violare il principio di:",
        options: ["Limitazione della conservazione.", "Integrità e Riservatezza.", "Minimizzazione dei dati.", "Diritto alla Portabilità."],
        answer: "Integrità e Riservatezza.",
        hint: "Espone i dati a un terzo (il fornitore del servizio) senza garanzie di riservatezza."
    },
    {
        question: "35. Il principio di **Accountability** (Responsabilità) nel GDPR implica che il Titolare del Trattamento deve:",
        options: ["Essere in grado di dimostrare l'osservanza di tutte le normative GDPR (dimostrazione proattiva).", "Cancellare tutti i dati ogni 6 mesi.", "Crittografare tutti i dati con chiave simmetrica.", "Assumere un DPO per ogni dipendente."],
        answer: "Essere in grado di dimostrare l'osservanza di tutte le normative GDPR (dimostrazione proattiva).",
        hint: "Richiede la tenuta di registri e la dimostrazione attiva della conformità."
    },
    // Aggiungi qui le restanti domande per completare il tuo paniere da 100
];

// =====================================================================================
// 2. LOGICA DEL QUIZ E GESTIONE
// =====================================================================================

// Configurazione
const TIME_LIMIT = 45 * 60; // 45 minuti in secondi
const TOTAL_QUESTIONS = 30;
const PASS_THRESHOLD = 0.8; // 80%

// Variabili globali
let questionsForQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let timeLeft = TIME_LIMIT;
let timerInterval;
let quizLog = []; // Per il riepilogo finale

// Riferimenti agli elementi HTML
const questionEl = document.getElementById('question');
const optionsForm = document.getElementById('options-form');
const submitBtn = document.getElementById('submit-btn');
const hintBtn = document.getElementById('hint-btn');
const currentNumEl = document.getElementById('current-num');
const totalNumEl = document.getElementById('total-num');
const scoreEl = document.getElementById('score');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMessageEl = document.getElementById('feedback-message');
const hintMessageEl = document.getElementById('hint-message');
const timerDisplayEl = document.getElementById('timer-display');
const optionLabels = optionsForm.querySelectorAll('.option-label');

/**
 * Funzione di utilità per rimescolare un array (algoritmo Fisher-Yates).
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Seleziona un sottoinsieme casuale di 30 domande dal paniere completo.
 */
function selectRandomQuestions() {
    shuffleArray(fullQuizData);
    questionsForQuiz = fullQuizData.slice(0, TOTAL_QUESTIONS);
    totalNumEl.textContent = TOTAL_QUESTIONS;
}

/**
 * Avvia il timer.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults(true); // Tempo esaurito
        }
    }, 1000);
}

/**
 * Aggiorna la visualizzazione del timer.
 */
function updateTimerDisplay(returnString = true) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timerDisplayEl) timerDisplayEl.textContent = display;
    
    if (returnString) return display;
    
    // Cambia colore quando il tempo è critico
    if (timeLeft < 300) { // 5 minuti
        timerDisplayEl.style.color = 'orange';
    }
    if (timeLeft < 60) { // 1 minuto
        timerDisplayEl.style.color = 'red';
    }
}

/**
 * Carica e visualizza la domanda e le opzioni correnti.
 */
function loadQuestion() {
    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        showResults();
        return;
    }

    const currentQ = questionsForQuiz[currentQuestionIndex];
    
    // Prepara e rimescola le opzioni
    const optionsWithAnswer = currentQ.options.map(opt => ({ text: opt, isCorrect: opt === currentQ.answer }));
    shuffleArray(optionsWithAnswer); // Rimescola le opzioni

    // Aggiorna l'interfaccia utente
    questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;
    currentNumEl.textContent = currentQuestionIndex + 1;
    scoreEl.textContent = score;

    optionsForm.reset();
    submitBtn.textContent = 'Verifica Risposta';
    submitBtn.disabled = true;
    hintBtn.disabled = false; // Riabilita suggerimento
    feedbackArea.style.display = 'none';
    answered = false;

    // Inietta le opzioni nella form e resetta lo stile
    optionsWithAnswer.forEach((opt, index) => {
        const input = optionsForm.querySelector(`input[value="${index}"]`);
        const textSpan = document.getElementById(`opt-${index}`);
        
        textSpan.textContent = opt.text;
        input.value = opt.text; // Imposta il valore dell'input con il testo dell'opzione
        
        // Resetta lo stile
        optionLabels[index].classList.remove('correct', 'incorrect');
        input.disabled = false;
        label.style.backgroundColor = 'transparent';
    });

    // Aggiunge un listener temporaneo per abilitare il pulsante 'Verifica'
    optionsForm.addEventListener('change', enableSubmitButton, { once: true });
}

/**
 * Abilita il pulsante di verifica quando un'opzione è selezionata.
 */
function enableSubmitButton() {
    submitBtn.disabled = false;
}

/**
 * Mostra il suggerimento per la domanda corrente.
 */
function showHint() {
    const hintText = questionsForQuiz[currentQuestionIndex].hint;
    hintMessageEl.textContent = hintText;
    
    // Aggiorna lo stile per il suggerimento
    feedbackArea.style.display = 'block';
    feedbackMessageEl.textContent = "Ecco un piccolo indizio per aiutarti:";
    feedbackArea.style.borderLeftColor = '#ffc107'; // Giallo
    feedbackArea.style.backgroundColor = '#fff3cd';
    
    hintBtn.disabled = true; // Suggerimento disponibile una sola volta
}

/**
 * Gestisce la risposta dell'utente, la verifica e mostra il feedback.
 */
function checkAnswer() {
    if (answered) {
        // Se si è già risposto, passa alla successiva
        currentQuestionIndex++;
        loadQuestion();
        return;
    }

    const selectedInput = optionsForm.querySelector('input[name="answer"]:checked');
    const currentQ = questionsForQuiz[currentQuestionIndex];

    if (!selectedInput) {
        alert("Seleziona una risposta prima di continuare.");
        return;
    }

    const userAnswer = selectedInput.value;
    const correctA = currentQ.answer;
    const hintText = currentQ.hint;
    
    // Disabilita tutte le opzioni e il suggerimento
    optionsForm.querySelectorAll('input').forEach(input => input.disabled = true);
    hintBtn.disabled = true;

    let isCorrect = (userAnswer === correctA);

    // Aggiorna lo score e il feedback
    if (isCorrect) {
        score++;
        feedbackMessageEl.textContent = "Corretto! Ottimo lavoro.";
        feedbackArea.style.borderLeftColor = '#28a745'; // Verde
        feedbackArea.style.backgroundColor = '#d4edda';
    } else {
        feedbackMessageEl.textContent = "Sbagliato. La risposta corretta è:";
        feedbackArea.style.borderLeftColor = '#dc3545'; // Rosso
        feedbackArea.style.backgroundColor = '#f8d7da';
    }
    
    // Log della risposta per il riepilogo finale
    quizLog.push({
        questionText: currentQ.question,
        userAnswer: userAnswer,
        correctAnswer: correctA,
        isCorrect: isCorrect
    });

    // Trova e colora la risposta corretta
    optionLabels.forEach(label => {
        const text = label.querySelector('.option-text').textContent;
        const input = label.querySelector('input');

        if (text === correctA) {
            label.classList.add('correct'); // La classe 'correct' colora la risposta giusta
        } else if (input.checked && !isCorrect) {
            label.classList.add('incorrect'); // La classe 'incorrect' colora la risposta sbagliata dell'utente
        }
    });

    hintMessageEl.textContent = hintText; // Mostra il suggerimento come spiegazione
    feedbackArea.style.display = 'block';
    scoreEl.textContent = score;

    answered = true;
    submitBtn.textContent = (currentQuestionIndex < TOTAL_QUESTIONS - 1) ? 'Domanda Successiva' : 'Termina Quiz';
}

/**
 * Mostra la schermata finale dei risultati dettagliati.
 */
function showResults(timeExpired = false) {
    clearInterval(timerInterval);
    
    const percentage = (score / TOTAL_QUESTIONS);
    const isPassed = percentage >= PASS_THRESHOLD;
    const statusText = isPassed ? "SUPERATO!" : "NON SUPERATO.";
    const statusColor = isPassed ? 'green' : 'red';

    // === 1. Genera il riepilogo HTML dettagliato ===
    let summaryHtml = quizLog.map((logItem, index) => {
        const color = logItem.isCorrect ? 'green' : 'red';
        const icon = logItem.isCorrect ? '✅' : '❌';
        const userAnswerDisplay = logItem.userAnswer || 'Nessuna Risposta';
        
        // Se sbagliato, mostra anche la risposta corretta
        const correctInfo = logItem.isCorrect ? '' : `<span style="color: green;"> | Corretta: ${logItem.correctAnswer}</span>`;
        
        return `<p style="margin-bottom: 5px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; text-align: left;">
                    <strong style="color: ${color};">${icon} Domanda ${index + 1}:</strong> ${logItem.questionText}
                    <br><span style="color: ${color}; font-weight: bold;">Tua Risposta: ${userAnswerDisplay}</span>
                    ${correctInfo}
                </p>`;
    }).join('');

    // === 2. Aggiorna l'interfaccia ===
    questionEl.textContent = "Simulazione Terminata!";
    
    let timerMessage = timeExpired ? `<p style="color: red; font-weight: bold;">Tempo esaurito (45:00) ⏳</p>` : `<p>Tempo totale impiegato: ${TIME_LIMIT - timeLeft} secondi.</p>`;

    optionsForm.innerHTML = `${timerMessage}
                             <h2 style="color: ${statusColor}; border-bottom: 2px solid ${statusColor}; padding-bottom: 10px;">${statusText}</h2>
                             <h3>Risultato Finale: ${score} / ${TOTAL_QUESTIONS}</h3>
                             <p>Percentuale di risposte corrette: <strong>${(percentage * 100).toFixed(1)}%</strong> (Soglia superamento: ${(PASS_THRESHOLD * 100)}%)</p>
                             <hr style="margin: 20px 0;">
                             <h4>Riepilogo Dettagliato delle Risposte:</h4>
                             <div style="text-align: center; max-height: 400px; overflow-y: auto; padding: 10px; border: 1px solid #eee; border-radius: 5px; background-color: #fafafa;">
                                ${summaryHtml}
                             </div>`;
    
    feedbackArea.style.display = 'none';
    hintBtn.style.display = 'none';
    
    submitBtn.textContent = 'Riprova';
    submitBtn.disabled = false;
    submitBtn.onclick = () => window.location.reload(); // Ricarica la pagina per ricominciare
    
    currentNumEl.textContent = TOTAL_QUESTIONS;
}

// =====================================================================================
// 3. AVVIO DEL QUIZ
// =====================================================================================

document.addEventListener('DOMContentLoaded', () => {
    selectRandomQuestions();
    startTimer();
    updateTimerDisplay(); // Mostra subito 45:00

    // Collega gli eventi ai pulsanti
    submitBtn.onclick = checkAnswer;
    hintBtn.onclick = showHint;
    
    // Inizializza l'interfaccia
    totalNumEl.textContent = TOTAL_QUESTIONS;
    scoreEl.textContent = score;

    loadQuestion();
});
