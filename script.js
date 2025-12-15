// =====================================================================================
// 1. IL PANIERE COMPLETO (100 DOMANDE - ne verranno estratte 30)
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
    {
        question: "36. Qual è il vantaggio principale della cifratura **Simmetrica** rispetto all'Asimmetrica?",
        options: ["Maggiore sicurezza intrinseca.", "Maggiore velocità di elaborazione, rendendola ideale per grandi volumi di dati.", "Non richiede la gestione di una chiave privata.", "È più facile condividere la chiave."],
        answer: "Maggiore velocità di elaborazione, rendendola ideale per grandi volumi di dati.",
        hint: "La sua semplicità algoritmica la rende molto veloce."
    },
    {
        question: "37. La pratica di **Hardening** di un sistema operativo consiste nel:",
        options: ["Disabilitare servizi e funzionalità non essenziali, applicare patch e configurare rigorose politiche di sicurezza per ridurne la superficie di attacco.", "Aumentare la potenza di calcolo della CPU.", "Rimuovere solo l'antivirus.", "Installare tutti i software disponibili."],
        answer: "Disabilitare servizi e funzionalità non essenziali, applicare patch e configurare rigorose politiche di sicurezza per ridurne la superficie di attacco.",
        hint: "Rende il sistema più 'duro' (hard) da attaccare, rimuovendo le debolezze."
    },
    {
        question: "38. Nel contesto della sicurezza informatica, cosa significa la sigla **DDoS**?",
        options: ["Data Domain Operation System", "Distributed Denial of Service", "Digital Data Output System", "Data Decryption Only Service"],
        answer: "Distributed Denial of Service",
        hint: "È un attacco distribuito che sovraccarica un server per negare il servizio agli utenti legittimi."
    },
    {
        question: "39. Quale meccanismo viene utilizzato per garantire l'**integrità** di un messaggio o di un file?",
        options: ["Crittografia Simmetrica", "Hash (Funzione di Hash)", "Tunneling VPN", "Autenticazione a Due Fattori"],
        answer: "Hash (Funzione di Hash)",
        hint: "La funzione di hash genera un'impronta digitale univoca, sensibile a qualsiasi modifica."
    },
    {
        question: "40. Qual è il ruolo del **DPO (Data Protection Officer)** ai sensi del GDPR?",
        options: ["Fornire consulenza legale all'utente che ha subito una violazione.", "Sorvegliare sull'osservanza del regolamento, informare e fornire consulenza al titolare del trattamento.", "Gestire la sicurezza fisica dei server.", "Decidere le finalità del trattamento dei dati."],
        answer: "Sorvegliare sull'osservanza del regolamento, informare e fornire consulenza al titolare del trattamento.",
        hint: "È il punto di contatto per la sorveglianza interna e per l'autorità garante."
    },
    {
        question: "41. La **Cifratura End-to-End** garantisce che il messaggio venga decifrato:",
        options: ["Soltanto dal destinatario finale, rendendolo illeggibile a qualsiasi entità intermedia (incluso il fornitore di servizi).", "Solo dal mittente prima di essere inviato.", "Dal fornitore di servizi prima della consegna.", "Da qualsiasi nodo della rete."],
        answer: "Soltanto dal destinatario finale, rendendolo illeggibile a qualsiasi entità intermedia (incluso il fornitore di servizi).",
        hint: "La chiave di decifratura è posseduta solo dagli 'estremi' (end-to-end)."
    },
    {
        question: "42. La tecnica **'Need to know'** nella gestione dei permessi di accesso aziendali richiede che gli utenti abbiano accesso solo a:",
        options: ["Tutti i file dell'azienda.", "Le risorse (file, sistemi) strettamente necessarie per svolgere le loro mansioni lavorative.", "I file più vecchi.", "Solo i file crittografati."],
        answer: "Le risorse (file, sistemi) strettamente necessarie per svolgere le loro mansioni lavorative.",
        hint: "È un principio di sicurezza basato sulla minima autorizzazione necessaria."
    },
    {
        question: "43. Quale strumento digitale, secondo l'Area 4.4, può essere utilizzato per contribuire attivamente a iniziative sociali o ambientali?",
        options: ["Rootkit", "Piattaforme di e-learning e marketplace di prodotti sostenibili o piattaforme di volontariato online.", "Crittografia Asimmetrica.", "SQL Injection."],
        answer: "Piattaforme di e-learning e marketplace di prodotti sostenibili o piattaforme di volontariato online.",
        hint: "Sfrutta la tecnologia per l'impatto positivo e la sensibilizzazione."
    },
    {
        question: "44. Qual è la definizione di **Malware polimorfo**?",
        options: ["Un malware che infetta molti tipi di file.", "Un malware che cambia continuamente il suo codice per eludere il rilevamento da parte dei software antivirus.", "Un malware che si nasconde in più cartelle.", "Un malware che richiede un riscatto in molteplici valute."],
        answer: "Un malware che cambia continuamente il suo codice per eludere il rilevamento da parte dei software antivirus.",
        hint: "Il termine 'polimorfo' significa che cambia forma."
    },
    {
        question: "45. Cosa si intende per **Pharming**?",
        options: ["Un attacco che usa SMS fraudolenti.", "Reindirizzare un utente, senza il suo consenso, a un sito web fraudolento, anche se digita correttamente l'URL (spesso tramite compromissione del DNS).", "L'uso di chiavi crittografiche monouso.", "Una forma avanzata di Ransomware."],
        answer: "Reindirizzare un utente, senza il suo consenso, a un sito web fraudolento, anche se digita correttamente l'URL (spesso tramite compromissione del DNS).",
        hint: "L'attacco 'falsifica' il dominio, indipendentemente dall'URL digitato."
    },
    {
        question: "46. Quale tecnica usa la tecnologia digitale per manipolare registrazioni audio o video e far dire o fare cose che la persona non ha mai fatto?",
        options: ["Spear Phishing", "Deepfake", "Ransomware", "Crittografia Asimmetrica"],
        answer: "Deepfake",
        hint: "'Deep' si riferisce all'apprendimento profondo, 'Fake' alla falsificazione."
    },
    {
        question: "47. L'uso di un **sistema biometrico** per l'autenticazione è un esempio di fattore di autenticazione basato su:",
        options: ["Qualcosa che sai (password).", "Qualcosa che sei (impronta digitale, scansione dell'iride).", "Qualcosa che hai (token, telefono).", "Qualcosa che fai (firma)."],
        answer: "Qualcosa che sei (impronta digitale, scansione dell'iride).",
        hint: "Riguarda le caratteristiche fisiche intrinseche dell'utente."
    },
    {
        question: "48. Cosa si intende per **Data Loss Prevention (DLP)**?",
        options: ["Un software che gestisce i backup.", "Un insieme di strumenti e policy progettati per impedire che dati sensibili escano dai confini di un'organizzazione.", "La cancellazione forzata dei dati vecchi.", "Un sistema di rilevamento delle intrusioni."],
        answer: "Un insieme di strumenti e policy progettati per impedire che dati sensibili escano dai confini di un'organizzazione.",
        hint: "Il nome si traduce in 'Prevenzione della Perdita di Dati'."
    },
    {
        question: "49. Qual è la minaccia che sfrutta la manipolazione psicologica degli utenti per convincerli a rivelare informazioni riservate?",
        options: ["Cracking", "Hacking", "Spoofing", "Social Engineering"],
        answer: "Social Engineering",
        hint: "Sfrutta l'errore umano, non le vulnerabilità tecniche del software."
    },
    {
        question: "50. L'obbligo di fornire il consenso per il trattamento dei dati personali si basa sul principio di:",
        options: ["Minimizzazione dei dati.", "Liceità (Legalità) e Trasparenza.", "Limitazione della conservazione.", "Responsabilità (Accountability)."],
        answer: "Liceità (Legalità) e Trasparenza.",
        hint: "Il trattamento è lecito solo se l'utente è stato informato e ha acconsentito."
    },
    // =====================================================================================
    // 51. AGGIUNTE PER RAGGIUNGERE LE 100 DOMANDE (DA RIVEDERE E PERSONALIZZARE)
    // =====================================================================================
    {
        question: "51. Quale tipo di backup è il più veloce da eseguire ma il più lento da ripristinare?",
        options: ["Completo", "Incrementale", "Differenziale", "Mirroring"],
        answer: "Incrementale",
        hint: "Salva solo i dati modificati dall'ultimo backup (di qualsiasi tipo)."
    },
    {
        question: "52. Quale principio del GDPR impone che i dati non debbano essere conservati più a lungo del necessario?",
        options: ["Integrità e riservatezza", "Esattezza", "Limitazione della conservazione", "Minimizzazione"],
        answer: "Limitazione della conservazione",
        hint: "Si riferisce alla durata del periodo di conservazione."
    },
    {
        question: "53. Cosa si intende per 'Spoofing' in un attacco informatico?",
        options: ["L'attacco a un server DNS.", "La falsificazione dell'identità (indirizzo IP, email, ecc.) per mascherare la fonte dell'attacco.", "La crittografia di un file.", "Un attacco di tipo DoS."],
        answer: "La falsificazione dell'identità (indirizzo IP, email, ecc.) per mascherare la fonte dell'attacco.",
        hint: "Significa 'falsificare' o 'prendere in giro'."
    },
    {
        question: "54. Qual è il rischio maggiore derivante dall'uso di software pirata o non autentico?",
        options: ["Funzionalità ridotte.", "Mancanza di supporto tecnico.", "Presenza di malware nascosto o backdoor e mancanza di patch di sicurezza.", "Costante richiesta di aggiornamenti."],
        answer: "Presenza di malware nascosto o backdoor e mancanza di patch di sicurezza.",
        hint: "Il software scaricato illegalmente è spesso compromesso."
    },
    {
        question: "55. Un certificato SSL/TLS a cosa serve principalmente quando si naviga su un sito web?",
        options: ["Garantire la velocità di caricamento della pagina.", "Verificare l'identità del server e cifrare la comunicazione tra browser e server.", "Bloccare i popup pubblicitari.", "Eseguire la scansione antivirus del tuo dispositivo."],
        answer: "Verificare l'identità del server e cifrare la comunicazione tra browser e server.",
        hint: "È ciò che abilita il lucchetto verde e HTTPS."
    },
    {
        question: "56. Il **Cryptojacking** è un tipo di attacco che utilizza il dispositivo della vittima per:",
        options: ["Rubare le password.", "Miniere criptovalute all'insaputa dell'utente.", "Lanciare attacchi DDoS.", "Inviare spam."],
        answer: "Miniere criptovalute all'insaputa dell'utente.",
        hint: "Sfrutta la potenza di calcolo (CPU/GPU) per scopi illeciti."
    },
    {
        question: "57. Qual è l'obiettivo principale del **Patch Management**?",
        options: ["Installare nuovi software.", "Garantire che tutti i sistemi operativi e le applicazioni siano aggiornati con le ultime correzioni di sicurezza.", "Formattare periodicamente gli hard disk.", "Creare backup completi ogni giorno."],
        answer: "Garantire che tutti i sistemi operativi e le applicazioni siano aggiornati con le ultime correzioni di sicurezza.",
        hint: "Gestisce l'applicazione delle 'patch' (pezze) software."
    },
    {
        question: "58. Qual è il fattore di autenticazione che si basa su 'Qualcosa che hai'?",
        options: ["Password", "PIN", "Impronta digitale", "Token fisico o codice generato da un'app sul telefono"],
        answer: "Token fisico o codice generato da un'app sul telefono",
        hint: "È un oggetto che l'utente possiede fisicamente."
    },
    {
        question: "59. Le **Politiche di Blocco Automatico** (timeout di sessione) aiutano a prevenire i rischi di:",
        options: ["Phishing", "Keylogger", "Accesso non autorizzato a dispositivi incustoditi (Shoulder Surfing).", "Ransomware"],
        answer: "Accesso non autorizzato a dispositivi incustoditi (Shoulder Surfing).",
        hint: "Blocca lo schermo se l'utente si allontana."
    },
    {
        question: "60. Quale attacco consiste nel manipolare l'URL di un sito web per indurre l'utente a rivelare informazioni sensibili, in una tecnica chiamata 'URL **Typo-squatting**'?",
        options: ["Scambio di SIM", "Pharming", "Phishing", "Deepfake"],
        answer: "Phishing",
        hint: "Sfrutta errori di digitazione comuni per reindirizzare a siti fasulli."
    },
    {
        question: "61. Il termine **BYOD (Bring Your Own Device)** aumenta i rischi di sicurezza perchè:",
        options: ["I dispositivi personali non possono connettersi al Wi-Fi aziendale.", "L'azienda ha meno controllo sulla configurazione di sicurezza e sull'uso privato dei dispositivi.", "I dipendenti usano solo software open-source.", "È troppo costoso per l'azienda."],
        answer: "L'azienda ha meno controllo sulla configurazione di sicurezza e sull'uso privato dei dispositivi.",
        hint: "Mescola ambiente lavorativo e personale, introducendo potenziali vettori di attacco."
    },
    {
        question: "62. Qual è l'obiettivo principale di un **Intrusion Detection System (IDS)**?",
        options: ["Crittografare i file.", "Bloccare il traffico malevolo (come un firewall).", "Monitorare il traffico di rete o le attività di sistema alla ricerca di attività sospette o violazioni di policy.", "Eseguire backup notturni."],
        answer: "Monitorare il traffico di rete o le attività di sistema alla ricerca di attività sospette o violazioni di policy.",
        hint: "È un sistema che 'rileva' (detect) le intrusioni."
    },
    {
        question: "63. Qual è l'impatto ambientale dell'**obsolescenza programmata** dei dispositivi elettronici?",
        options: ["Riduzione del consumo energetico.", "Aumento della produzione di rifiuti elettronici (RAEE).", "Miglioramento della sicurezza dei dati.", "Maggiore efficienza della batteria."],
        answer: "Aumento della produzione di rifiuti elettronici (RAEE).",
        hint: "I dispositivi vengono progettati per guastarsi prematuramente."
    },
    {
        question: "64. Perchè è sconsigliato utilizzare un account con **privilegi di amministratore** per le attività quotidiane sul PC?",
        options: ["Rende il sistema operativo più lento.", "In caso di attacco malware, il virus avrebbe pieno controllo del sistema.", "Non è possibile navigare su Internet.", "Gli aggiornamenti software non funzionano."],
        answer: "In caso di attacco malware, il virus avrebbe pieno controllo del sistema.",
        hint: "Il malware eredita i permessi dell'utente che lo esegue."
    },
    {
        question: "65. Quale tecnica di attacco utilizza un **indirizzo email falsificato** per sembrare che provenga da una fonte attendibile (es. un capo o una banca)?",
        options: ["SQL Injection", "Worm", "Email Spoofing", "DoS"],
        answer: "Email Spoofing",
        hint: "La falsificazione dell'indirizzo di posta elettronica."
    },
    {
        question: "66. La regola base per la sicurezza del software è:",
        options: ["Non installare mai software.", "Installare solo software crittografato.", "Mantenere il software aggiornato e scaricarlo solo da fonti ufficiali/attendibili.", "Usare software open source."],
        answer: "Mantenere il software aggiornato e scaricarlo solo da fonti ufficiali/attendibili.",
        hint: "Copre sia la fase di installazione che la manutenzione."
    },
    {
        question: "67. Cosa si intende per **Data Breach** (Violazione dei dati)?",
        options: ["Un rallentamento del server.", "Un accesso, una distruzione, una perdita, una modifica, una divulgazione o un accesso non autorizzato o accidentale a dati personali.", "L'uso di una password debole.", "Un backup fallito."],
        answer: "Un accesso, una distruzione, una perdita, una modifica, una divulgazione o un accesso non autorizzato o accidentale a dati personali.",
        hint: "È la rottura (breach) della protezione dei dati."
    },
    {
        question: "68. Il **Social Engineering** sfrutta principalmente quale vulnerabilità?",
        options: ["Bug nel sistema operativo.", "La natura umana e la tendenza ad affidarsi (fiducia).", "La lentezza della connessione Internet.", "La mancanza di un firewall."],
        answer: "La natura umana e la tendenza ad affidarsi (fiducia).",
        hint: "Gli attacchi sono rivolti alle persone, non alle macchine."
    },
    {
        question: "69. Quale tipo di attacco è specificamente progettato per disabilitare un sistema sovraccaricandolo di richieste?",
        options: ["Pharming", "Ransomware", "Denial of Service (DoS)", "Man-in-the-Middle"],
        answer: "Denial of Service (DoS)",
        hint: "Nega il servizio (Denial of Service) rendendo le risorse inutilizzabili."
    },
    {
        question: "70. Quale misura di sicurezza è essenziale prima di vendere o donare un computer usato?",
        options: ["Aggiornare il sistema operativo.", "Effettuare la cancellazione sicura (Wipe) dell'hard disk per garantire l'irrecuperabilità dei dati residui.", "Cambiare la password.", "Disinstallare l'antivirus."],
        answer: "Effettuare la cancellazione sicura (Wipe) dell'hard disk per garantire l'irrecuperabilità dei dati residui.",
        hint: "Una semplice formattazione non basta a eliminare i dati in modo definitivo."
    },
    {
        question: "71. L'**Adware** è un tipo di malware che ha come principale obiettivo:",
        options: ["Rubare i dati bancari.", "Visualizzare pubblicità indesiderate e reindirizzare il traffico web.", "Crittografare i file.", "Registrare i tasti premuti."],
        answer: "Visualizzare pubblicità indesiderate e reindirizzare il traffico web.",
        hint: "È una contrazione di 'Advertising Software'."
    },
    {
        question: "72. Il diritto di **Portabilità** (GDPR) permette all'utente di:",
        options: ["Trasferire i propri dati personali da un titolare del trattamento a un altro in un formato strutturato e di uso comune.", "Chiedere la cancellazione dei dati.", "Correggere dati inesatti.", "Avere accesso ai dati in qualsiasi momento."],
        answer: "Trasferire i propri dati personali da un titolare del trattamento a un altro in un formato strutturato e di uso comune.",
        hint: "Riguarda la possibilità di 'spostare' i propri dati."
    },
    {
        question: "73. Quale pratica è fondamentale per prevenire il **Burnout digitale** (Area 4.3)?",
        options: ["Aumentare il tempo trascorso sui social media.", "Stabilire limiti di tempo per l'uso degli schermi e fare pause regolari.", "Usare sempre il computer al buio.", "Disabilitare l'antivirus."],
        answer: "Stabilire limiti di tempo per l'uso degli schermi e fare pause regolari.",
        hint: "Riguarda l'eccessivo stress e l'esaurimento dovuto alla tecnologia."
    },
    {
        question: "74. Quale delle seguenti è una misura di sicurezza **fisica**?",
        options: ["Installazione di un antivirus.", "Autenticazione a due fattori.", "Telecamere di sorveglianza e sistemi di controllo accessi a un server room.", "Crittografia del disco rigido."],
        answer: "Telecamere di sorveglianza e sistemi di controllo accessi a un server room.",
        hint: "Riguarda la protezione dell'ambiente reale."
    },
    {
        question: "75. Un **Web Application Firewall (WAF)** è progettato per proteggere:",
        options: ["La rete interna da attacchi esterni.", "Le applicazioni web (come i siti e-commerce) da attacchi comuni come XSS o SQL Injection.", "I database da accessi non autorizzati.", "I sistemi operativi da virus."],
        answer: "Le applicazioni web (come i siti e-commerce) da attacchi comuni come XSS o SQL Injection.",
        hint: "È un firewall specifico per le 'Web Application'."
    },
    {
        question: "76. Cosa si intende per **Whaling**?",
        options: ["Un attacco DoS molto esteso.", "Un attacco di spear phishing mirato a persone di altissimo livello (es. dirigenti senior o celebrità).", "Un tipo di Worm.", "La crittografia con chiave simmetrica."],
        answer: "Un attacco di spear phishing mirato a persone di altissimo livello (es. dirigenti senior o celebrità).",
        hint: "Il termine significa 'caccia alla balena', indicando un obiettivo di grandi dimensioni."
    },
    {
        question: "77. Qual è la caratteristica distintiva di un **Worm** rispetto a un Virus?",
        options: ["Non richiede un file ospite (si auto-propaga) e si diffonde autonomamente attraverso la rete.", "È sempre un file eseguibile.", "Non danneggia mai i file.", "Richiede l'intervento dell'utente per diffondersi."],
        answer: "Non richiede un file ospite (si auto-propaga) e si diffonde autonomamente attraverso la rete.",
        hint: "Il suo meccanismo di diffusione è autonomo, come un 'verme' che si muove da solo."
    },
    {
        question: "78. La **Netiquette** si riferisce a:",
        options: ["Le regole di sicurezza per il Wi-Fi.", "L'insieme delle regole di buon comportamento e di educazione da rispettare quando si interagisce online.", "La configurazione di rete.", "Le leggi sulla privacy."],
        answer: "L'insieme delle regole di buon comportamento e di educazione da rispettare quando si interagisce online.",
        hint: "Contrazione di 'Network Etiquette'."
    },
    {
        question: "79. Quale impatto ambientale positivo deriva dalla diffusione del **Telelavoro (Smart Working)**?",
        options: ["Aumento della produzione di hardware.", "Riduzione del consumo di carta e dei costi di trasporto (minori emissioni di CO2).", "Aumento del consumo energetico domestico.", "Aumento della velocità di Internet."],
        answer: "Riduzione del consumo di carta e dei costi di trasporto (minori emissioni di CO2).",
        hint: "Meno pendolarismo, meno inquinamento da trasporto."
    },
    {
        question: "80. L'uso di un account ospite (Guest) su un dispositivo personale è una misura di sicurezza per:",
        options: ["Consentire a un utente temporaneo di accedere al PC senza accedere ai file personali o installare software non autorizzato.", "Aumentare le prestazioni del PC.", "Eseguire backup nel cloud.", "Crittografare i file personali."],
        answer: "Consentire a un utente temporaneo di accedere al PC senza accedere ai file personali o installare software non autorizzato.",
        hint: "Limita i danni potenziali di un utente non fidato o occasionale."
    },
    {
        question: "81. Quale pratica di sicurezza è legata al concetto di 'Privacy by Design' nel GDPR?",
        options: ["Implementare misure di protezione dei dati fin dalla progettazione di sistemi e prodotti.", "Crittografare i dati solo alla fine del processo.", "Nominare un DPO.", "Eseguire un backup completo ogni mese."],
        answer: "Implementare misure di protezione dei dati fin dalla progettazione di sistemi e prodotti.",
        hint: "La privacy è un elemento costitutivo ('by design')."
    },
    {
        question: "82. Cosa si intende per **Two-factor authentication (2FA)**?",
        options: ["L'uso di due password identiche.", "La verifica dell'identità con due diversi fattori, come 'qualcosa che sai' (password) e 'qualcosa che hai' (codice OTP).", "L'accesso da due browser diversi.", "L'uso di due indirizzi email."],
        answer: "La verifica dell'identità con due diversi fattori, come 'qualcosa che sai' (password) e 'qualcosa che hai' (codice OTP).",
        hint: "Come quando si usa password e SMS code."
    },
    {
        question: "83. Qual è l'attacco in cui i dati vengono iniettati in un database tramite campi di input non protetti di un'applicazione web?",
        options: ["XSS (Cross-Site Scripting)", "DDoS", "SQL Injection", "Man-in-the-Middle"],
        answer: "SQL Injection",
        hint: "Sfrutta il linguaggio di query dei database (SQL)."
    },
    {
        question: "84. Per la prevenzione dei danni fisici da uso prolungato, è importante che la parte superiore dello schermo del monitor sia:",
        options: ["Posizionata all'altezza degli occhi o leggermente sotto.", "Posizionata molto più in alto del livello degli occhi.", "Posizionata molto più in basso del livello degli occhi.", "Inclinata verso l'alto."],
        answer: "Posizionata all'altezza degli occhi o leggermente sotto.",
        hint: "Aiuta a mantenere una postura corretta della cervicale e degli occhi (Ergonomia 4.3)."
    },
    {
        question: "85. Qual è il principale rischio della connessione a una rete Wi-Fi pubblica senza VPN?",
        options: ["Il tuo PC rallenta.", "Il rischio di intercettazione dei dati (sniffing) o attacchi Man-in-the-Middle è elevato.", "La batteria si scarica velocemente.", "Non è possibile fare il login ai social media."],
        answer: "Il rischio di intercettazione dei dati (sniffing) o attacchi Man-in-the-Middle è elevato.",
        hint: "Il traffico non cifrato sulla rete pubblica è esposto."
    },
    {
        question: "86. Un attacco di **Brute Force** ha come obiettivo:",
        options: ["Bloccare il traffico di rete.", "Indovinare password o chiavi crittografiche provando sistematicamente ogni combinazione possibile.", "Crittografare i file.", "Nascondersi nel sistema."],
        answer: "Indovinare password o chiavi crittografiche provando sistematicamente ogni combinazione possibile.",
        hint: "È un attacco che usa la 'forza bruta'."
    },
    {
        question: "87. Il concetto di **E-waste** (rifiuti elettronici) si collega all'area DIGCOMP 2.2 di:",
        options: ["Protezione dei dispositivi (4.1).", "Protezione della privacy (4.2).", "Protezione della salute (4.3).", "Protezione dell'ambiente (4.4)."],
        answer: "Protezione dell'ambiente (4.4).",
        hint: "Riguarda l'impatto ecologico dei dispositivi dismessi."
    },
    {
        question: "88. Cosa si intende per **Data Masking** (Mascheramento dei dati)?",
        options: ["Crittografia completa dei dati.", "La sostituzione di dati sensibili con dati fittizi, pur mantenendo la struttura per i test o l'analisi.", "La cancellazione permanente dei dati.", "La creazione di un backup anonimo."],
        answer: "La sostituzione di dati sensibili con dati fittizi, pur mantenendo la struttura per i test o l'analisi.",
        hint: "I dati sono 'mascherati' per non rivelare le informazioni reali."
    },
    {
        question: "89. Quale misura previene meglio un attacco di **Spear Phishing** mirato?",
        options: ["Avere un monitor grande.", "Formazione del personale per riconoscere i tentativi di Social Engineering e verifica incrociata delle richieste insolite.", "Avere una password molto lunga.", "Usare software open source."],
        answer: "Formazione del personale per riconoscere i tentativi di Social Engineering e verifica incrociata delle richieste insolite.",
        hint: "Poiché l'attacco è mirato, l'attenzione e la formazione umana sono la difesa principale."
    },
    {
        question: "90. La **Biometria comportamentale** è un sistema di autenticazione basato su:",
        options: ["L'impronta digitale.", "L'analisi delle abitudini di digitazione, del modo di usare il mouse o della cadenza di camminata.", "Il riconoscimento facciale.", "Il PIN segreto."],
        answer: "L'analisi delle abitudini di digitazione, del modo di usare il mouse o della cadenza di camminata.",
        hint: "Si basa su 'Qualcosa che fai'."
    },
    {
        question: "91. Quale tipo di attacco sfrutta la debolezza nel software di un router o di un modem per reindirizzare il traffico DNS?",
        options: ["Ransomware", "DDoS", "Pharming (tramite compromissione DNS)", "Cross-Site Scripting"],
        answer: "Pharming (tramite compromissione DNS)",
        hint: "Attacca l'infrastruttura di risoluzione dei nomi di dominio."
    },
    {
        question: "92. Qual è l'uso più comune della crittografia **simmetrica**?",
        options: ["Scambio di chiavi segrete tra due parti.", "Crittografia del traffico HTTPS.", "Crittografia di grandi volumi di dati (es. un intero hard disk o un backup).", "Firma digitale."],
        answer: "Crittografia di grandi volumi di dati (es. un intero hard disk o un backup).",
        hint: "È più veloce, ideale per carichi pesanti."
    },
    {
        question: "93. Le **Public Key Infrastructure (PKI)** sono essenziali per:",
        options: ["La gestione dei backup.", "La gestione e la distribuzione sicura dei certificati digitali e delle chiavi asimmetriche (pubbliche e private).", "La creazione di reti LAN.", "La prevenzione del phishing."],
        answer: "La gestione e la distribuzione sicura dei certificati digitali e delle chiavi asimmetriche (pubbliche e private).",
        hint: "Forniscono l'infrastruttura per la cifratura asimmetrica e le firme digitali."
    },
    {
        question: "94. Qual è un rischio specifico della **navigazione in incognito** (modalità privata)?",
        options: ["Non crittografa la connessione.", "Non protegge dalle attività del tuo ISP o del gestore di rete aziendale; nasconde solo la cronologia e i cookie locali.", "Aumenta la velocità di Internet.", "Disabilita il firewall."],
        answer: "Non protegge dalle attività del tuo ISP o del gestore di rete aziendale; nasconde solo la cronologia e i cookie locali.",
        hint: "Non garantisce l'anonimato totale, ma solo locale."
    },
    {
        question: "95. Quale tecnologia supporta meglio la **circolarità** dei prodotti elettronici (riparazione e riuso)?",
        options: ["Crittografia End-to-End.", "Politiche aziendali e piattaforme di 'Right to Repair' (Diritto alla Riparazione).", "Blockchain per la tracciabilità.", "L'uso di password complesse."],
        answer: "Politiche aziendali e piattaforme di 'Right to Repair' (Diritto alla Riparazione).",
        hint: "Promuove la riparabilità e allunga il ciclo di vita."
    },
    {
        question: "96. Il **Whitelisting delle applicazioni** è una misura di sicurezza che consiste nel:",
        options: ["Consentire l'esecuzione solo delle applicazioni esplicitamente approvate dall'amministratore.", "Bloccare tutte le applicazioni non essenziali.", "Consentire l'accesso a tutti i siti web.", "Disabilitare l'account amministratore."],
        answer: "Consentire l'esecuzione solo delle applicazioni esplicitamente approvate dall'amministratore.",
        hint: "Crea una 'lista bianca' di ciò che è permesso, bloccando tutto il resto."
    },
    {
        question: "97. L'uso di caratteri maiuscoli, minuscoli, numeri e simboli in una password aumenta:",
        options: ["La velocità di digitazione.", "La complessità e l'entropia della password, rendendola più resistente agli attacchi Brute Force.", "La memoria richiesta dal sistema.", "Il rischio di phishing."],
        answer: "La complessità e l'entropia della password, rendendola più resistente agli attacchi Brute Force.",
        hint: "Aumenta lo spazio di ricerca per l'attaccante."
    },
    {
        question: "98. Cosa misura principalmente la **Valutazione d'Impatto sulla Protezione dei Dati (DPIA)** del GDPR?",
        options: ["Il costo del trattamento dei dati.", "I rischi del trattamento dei dati personali per i diritti e le libertà degli interessati, in particolare per i trattamenti ad alto rischio.", "La velocità del server.", "Il numero di dipendenti di un'azienda."],
        answer: "I rischi del trattamento dei dati personali per i diritti e le libertà degli interessati, in particolare per i trattamenti ad alto rischio.",
        hint: "È una valutazione preventiva dell'impatto sulla privacy."
    },
    {
        question: "99. Quale rischio per la salute (Area 4.3) è associato all'uso di dispositivi mobili prima di dormire?",
        options: ["Rischio di furto d'identità.", "Interferenza con il ritmo circadiano e la produzione di melatonina a causa della luce blu, causando insonnia.", "Rischio di infezione da virus.", "Rischio di phishing."],
        answer: "Interferenza con il ritmo circadiano e la produzione di melatonina a causa della luce blu, causando insonnia.",
        hint: "Riguarda l'impatto della luce degli schermi sul sonno."
    },
    {
        question: "100. Cosa si intende per **Cyber Hygiene**?",
        options: ["La pulizia fisica dei dispositivi.", "Un insieme di pratiche di sicurezza informatica di base e regolari (come aggiornamenti, backup, password forti) mantenute per garantire la salute del sistema.", "L'uso di una VPN.", "La firma digitale di tutti i documenti."],
        answer: "Un insieme di pratiche di sicurezza informatica di base e regolari (come aggiornamenti, backup, password forti) mantenute per garantire la salute del sistema.",
        hint: "È l'analogia con l'igiene personale, applicata alla sicurezza digitale."
    }
];

// =====================================================================================
// 2. LOGICA DEL QUIZ E GESTIONE (RIMANE INVARIATA)
// =====================================================================================

// Configurazione
const TIME_LIMIT = 45 * 60; // 45 minuti in secondi
const TOTAL_QUESTIONS = 30; // Numero di domande da estrarre (rimane 30)
const PASS_THRESHOLD = 0.8; // 80% per il superamento (24/30)

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
 * Seleziona un sottoinsieme casuale di 30 domande dal paniere completo (100).
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
 * Aggiorna la visualizzazione del timer e gestisce i colori di avviso.
 */
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timerDisplayEl) timerDisplayEl.textContent = display;
    
    // Cambia colore quando il tempo è critico
    if (timeLeft < 300 && timeLeft >= 60) { // Tra 5 minuti e 1 minuto
        timerDisplayEl.style.color = 'orange';
    } else if (timeLeft < 60) { // Ultimo minuto
        timerDisplayEl.style.color = 'red';
    } else {
        timerDisplayEl.style.color = '#333';
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
    questionEl.textContent = `Domanda ${currentQuestionIndex + 1}: ${currentQ.question}`;
    currentNumEl.textContent = currentQuestionIndex + 1;
    scoreEl.textContent = score;

    optionsForm.reset();
    submitBtn.textContent = 'Verifica Risposta';
    submitBtn.disabled = true;
    if (hintBtn) hintBtn.disabled = false; // Riabilita suggerimento
    feedbackArea.style.display = 'none';
    answered = false;

    // Inietta le opzioni nella form e resetta lo stile
    optionsWithAnswer.forEach((opt, index) => {
        const input = optionsForm.querySelector(`input[value="${index}"]`);
        const textSpan = document.getElementById(`opt-${index}`);
        const label = optionLabels[index]; // Usa il riferimento diretto all'etichetta
        
        textSpan.textContent = opt.text;
        input.value = opt.text; // Imposta il valore dell'input con il testo dell'opzione
        
        // Resetta lo stile
        label.classList.remove('correct', 'incorrect');
        input.disabled = false;
        label.style.backgroundColor = ''; // Rimuove eventuali colori di feedback
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
    if (!hintBtn || hintBtn.disabled) return;
    
    const hintText = questionsForQuiz[currentQuestionIndex].hint;
    hintMessageEl.textContent = hintText;
    
    // Aggiorna lo stile per il suggerimento
    feedbackArea.style.display = 'block';
    feedbackMessageEl.textContent = "Ecco un piccolo indizio per aiutarti:";
    feedbackArea.style.borderLeftColor = '#ffc107'; // Giallo
    feedbackArea.style.backgroundColor = '#fff3cd';
    
    hintBtn.disabled = true; // Suggerimento disponibile una sola volta per domanda
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
    if (hintBtn) hintBtn.disabled = true;

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
        const correctInfo = logItem.isCorrect ? '' : `<br> <span style="color: green; font-weight: bold;">Risposta Corretta: ${logItem.correctAnswer}</span>`;
        
        return `<p style="margin-bottom: 5px; border-bottom: 1px dashed #ccc; padding-bottom: 5px; text-align: left;">
                    <strong style="color: ${color};">${icon} Domanda ${index + 1}:</strong> ${logItem.questionText.replace(/Domanda \d+: /g, '')}
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
    if (hintBtn) hintBtn.style.display = 'none';
    if (document.getElementById('status-bar')) document.getElementById('status-bar').style.display = 'none';
    
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
    if (hintBtn) hintBtn.onclick = showHint;
    
    // Inizializza l'interfaccia
    totalNumEl.textContent = TOTAL_QUESTIONS;
    scoreEl.textContent = score;

    loadQuestion();
});
