const INITIAL_STATE = {"agents": [{"id": 1, "nom": "MOUTOUSSAMY", "prenom": "Fernand", "equipe": "ENCADREMENT", "fonction": "Responsable de service", "mdp": "AZE123", "actif": true}, {"id": 2, "nom": "VIDOT", "prenom": "Julien", "equipe": "ENCADREMENT", "fonction": "Chargé d'affaires", "mdp": "BTR456", "actif": true}, {"id": 3, "nom": "RICKMOUNIE", "prenom": "Vincent", "equipe": "ENCADREMENT", "fonction": "Chargé d'affaires", "mdp": "KLP789", "actif": true}, {"id": 4, "nom": "REMPHAN", "prenom": "Patrice", "equipe": "ENCADREMENT", "fonction": "Responsable branchement", "mdp": "REU974", "actif": true}, {"id": 5, "nom": "SAUTRON", "prenom": "Luciano", "equipe": "ENCADREMENT", "fonction": "conducteur de travaux", "mdp": "SEC2026", "actif": true}, {"id": 6, "nom": "LAUDE", "prenom": "Damien", "equipe": "ENCADREMENT", "fonction": "technicien d'affaires", "mdp": "MDP006", "actif": true}, {"id": 7, "nom": "DRONZIN", "prenom": "Muriel", "equipe": "ENCADREMENT", "fonction": "assistance back office", "mdp": "MDP007", "actif": true}, {"id": 8, "nom": "BIJOUX", "prenom": "Dominique", "equipe": "ENCADREMENT", "fonction": "consultant qualité sécurité", "mdp": "MDP008", "actif": true}, {"id": 9, "nom": "VAITINADAPOULE", "prenom": "Isaac", "equipe": "TECHNICIEN ELEC", "fonction": "chef d'équipe", "mdp": "MDP009", "actif": true}, {"id": 10, "nom": "TILLEMONT", "prenom": "Brian", "equipe": "TECHNICIEN ELEC", "fonction": "chef d'équipe", "mdp": "MDP010", "actif": true}, {"id": 11, "nom": "ROBERT", "prenom": "Nicolas", "equipe": "TECHNICIEN ELEC", "fonction": "chef d'équipe", "mdp": "MDP011", "actif": true}, {"id": 12, "nom": "BENARD", "prenom": "Benjamin", "equipe": "TECHNICIEN ELEC", "fonction": "chef d'équipe", "mdp": "MDP012", "actif": true}, {"id": 13, "nom": "BLUKER", "prenom": "Nadjib", "equipe": "TECHNICIEN ELEC", "fonction": "Monteur réseaux", "mdp": "MDP013", "actif": true}, {"id": 14, "nom": "ANAPARE", "prenom": "Kevin", "equipe": "TECHNICIEN ELEC", "fonction": "Monteur réseaux", "mdp": "MDP014", "actif": true}, {"id": 15, "nom": "ALIASY", "prenom": "Nasser", "equipe": "TECHNICIEN ELEC", "fonction": "Monteur réseaux", "mdp": "MDP015", "actif": true}, {"id": 16, "nom": "HOAREAU", "prenom": "Manuel", "equipe": "TECHNICIEN ELEC", "fonction": "Monteur réseaux", "mdp": "MDP016", "actif": true}, {"id": 17, "nom": "GANNE", "prenom": "Yannis", "equipe": "TECHNICIEN VRD", "fonction": "VRD", "mdp": "MDP017", "actif": true}, {"id": 18, "nom": "LABBE", "prenom": "Richeville", "equipe": "TECHNICIEN VRD", "fonction": "VRD", "mdp": "MDP018", "actif": true}, {"id": 19, "nom": "REMPHAN", "prenom": "Wilson", "equipe": "TECHNICIEN VRD", "fonction": "VRD", "mdp": "MDP019", "actif": true}, {"id": 20, "nom": "BRABAN", "prenom": "Jerome", "equipe": "TECHNICIEN VRD", "fonction": "VRD", "mdp": "MDP020", "actif": true}, {"id": 21, "nom": "NOM21", "prenom": "Prenom21", "equipe": "Equipe 2", "fonction": "Monteur réseaux", "mdp": "MDP021", "actif": true}, {"id": 22, "nom": "NOM22", "prenom": "Prenom22", "equipe": "Equipe 3", "fonction": "Monteur réseaux", "mdp": "MDP022", "actif": true}, {"id": 23, "nom": "NOM23", "prenom": "Prenom23", "equipe": "Equipe 4", "fonction": "Monteur réseaux", "mdp": "MDP023", "actif": true}, {"id": 24, "nom": "NOM24", "prenom": "Prenom24", "equipe": "Equipe 5", "fonction": "Monteur réseaux", "mdp": "MDP024", "actif": true}, {"id": 25, "nom": "NOM25", "prenom": "Prenom25", "equipe": "Equipe 1", "fonction": "Monteur réseaux", "mdp": "MDP025", "actif": true}], "qcms": [{"id": 1, "nom": "JUIN 2026", "titre": "Prévention des risques et sécurité chantier", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ?", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ?", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ?", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ?", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ?", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être :", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut :", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est :", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet :", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit :", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 2, "nom": "JUILLET 2026", "titre": "DICT, réseaux enterrés et marquage-piquetage", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — DICT, réseaux enterrés et marquage-piquetage", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — DICT, réseaux enterrés et marquage-piquetage", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — DICT, réseaux enterrés et marquage-piquetage", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — DICT, réseaux enterrés et marquage-piquetage", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — DICT, réseaux enterrés et marquage-piquetage", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 3, "nom": "AOÛT 2026", "titre": "Travaux VRD, balisage et circulation chantier", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Travaux VRD, balisage et circulation chantier", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Travaux VRD, balisage et circulation chantier", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Travaux VRD, balisage et circulation chantier", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Travaux VRD, balisage et circulation chantier", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Travaux VRD, balisage et circulation chantier", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Travaux VRD, balisage et circulation chantier", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Travaux VRD, balisage et circulation chantier", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Travaux VRD, balisage et circulation chantier", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Travaux VRD, balisage et circulation chantier", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Travaux VRD, balisage et circulation chantier", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 4, "nom": "SEPTEMBRE 2026", "titre": "Réseaux électriques, branchements et émergences", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Réseaux électriques, branchements et émergences", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Réseaux électriques, branchements et émergences", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Réseaux électriques, branchements et émergences", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Réseaux électriques, branchements et émergences", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Réseaux électriques, branchements et émergences", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Réseaux électriques, branchements et émergences", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Réseaux électriques, branchements et émergences", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Réseaux électriques, branchements et émergences", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Réseaux électriques, branchements et émergences", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Réseaux électriques, branchements et émergences", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 5, "nom": "OCTOBRE 2026", "titre": "Qualité d’exécution, autocontrôles et réception", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Qualité d’exécution, autocontrôles et réception", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Qualité d’exécution, autocontrôles et réception", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Qualité d’exécution, autocontrôles et réception", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Qualité d’exécution, autocontrôles et réception", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Qualité d’exécution, autocontrôles et réception", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Qualité d’exécution, autocontrôles et réception", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Qualité d’exécution, autocontrôles et réception", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Qualité d’exécution, autocontrôles et réception", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Qualité d’exécution, autocontrôles et réception", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Qualité d’exécution, autocontrôles et réception", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 6, "nom": "NOVEMBRE 2026", "titre": "REX incidents, comportements sécurité et communication", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — REX incidents, comportements sécurité et communication", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — REX incidents, comportements sécurité et communication", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — REX incidents, comportements sécurité et communication", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — REX incidents, comportements sécurité et communication", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — REX incidents, comportements sécurité et communication", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — REX incidents, comportements sécurité et communication", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — REX incidents, comportements sécurité et communication", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — REX incidents, comportements sécurité et communication", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — REX incidents, comportements sécurité et communication", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — REX incidents, comportements sécurité et communication", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 7, "nom": "DÉCEMBRE 2026", "titre": "Bilan annuel, sécurité et engagement terrain", "type": "Mensuel", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Bilan annuel, sécurité et engagement terrain", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Bilan annuel, sécurité et engagement terrain", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Bilan annuel, sécurité et engagement terrain", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Bilan annuel, sécurité et engagement terrain", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Bilan annuel, sécurité et engagement terrain", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Bilan annuel, sécurité et engagement terrain", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Bilan annuel, sécurité et engagement terrain", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Bilan annuel, sécurité et engagement terrain", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Bilan annuel, sécurité et engagement terrain", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Bilan annuel, sécurité et engagement terrain", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 8, "nom": "TEST SYNCHRO GOOGLE FORMS", "titre": "Test de synchronisation Google Forms", "type": "Test", "statut": "Hors performance", "performance": false, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Test de synchronisation Google Forms", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Test de synchronisation Google Forms", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Test de synchronisation Google Forms", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Test de synchronisation Google Forms", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Test de synchronisation Google Forms", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Test de synchronisation Google Forms", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Test de synchronisation Google Forms", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Test de synchronisation Google Forms", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Test de synchronisation Google Forms", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Test de synchronisation Google Forms", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 9, "nom": "RATTRAPAGE ÉQUIPE NORD", "titre": "Rattrapage pour agents absents", "type": "Rattrapage", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Rattrapage pour agents absents", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Rattrapage pour agents absents", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Rattrapage pour agents absents", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Rattrapage pour agents absents", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Rattrapage pour agents absents", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Rattrapage pour agents absents", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Rattrapage pour agents absents", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Rattrapage pour agents absents", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Rattrapage pour agents absents", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Rattrapage pour agents absents", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 10, "nom": "SÉCURITÉ CHANTIER FLASH", "titre": "QCM court de sensibilisation ponctuelle", "type": "Flash", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — QCM court de sensibilisation ponctuelle", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — QCM court de sensibilisation ponctuelle", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — QCM court de sensibilisation ponctuelle", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — QCM court de sensibilisation ponctuelle", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — QCM court de sensibilisation ponctuelle", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — QCM court de sensibilisation ponctuelle", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — QCM court de sensibilisation ponctuelle", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — QCM court de sensibilisation ponctuelle", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — QCM court de sensibilisation ponctuelle", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — QCM court de sensibilisation ponctuelle", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 11, "nom": "REX ACCIDENT / PRESQU’ACCIDENT", "titre": "Retour d’expérience après événement terrain", "type": "REX", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Retour d’expérience après événement terrain", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Retour d’expérience après événement terrain", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Retour d’expérience après événement terrain", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Retour d’expérience après événement terrain", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Retour d’expérience après événement terrain", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Retour d’expérience après événement terrain", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Retour d’expérience après événement terrain", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Retour d’expérience après événement terrain", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Retour d’expérience après événement terrain", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Retour d’expérience après événement terrain", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}, {"id": 12, "nom": "ACCUEIL NOUVEL AGENT", "titre": "Validation des bases sécurité pour nouvel arrivant", "type": "Intégration", "statut": "Actif", "performance": true, "questions": [{"num": 1, "question": "Quel est le premier réflexe avant de démarrer une intervention ? — Validation des bases sécurité pour nouvel arrivant", "choices": ["Lire le dossier et identifier les risques", "Démarrer immédiatement", "Attendre la fin de journée", "Ne prévenir personne"], "good": 0, "explanation": "On sécurise d’abord l’intervention : dossier, risques, environnement et équipe."}, {"num": 2, "question": "À quoi sert le balisage chantier ? — Validation des bases sécurité pour nouvel arrivant", "choices": ["À décorer la zone", "À protéger les agents et les usagers", "À remplacer les EPI", "À éviter de faire une DICT"], "good": 1, "explanation": "Le balisage protège la zone et limite le risque d’accident."}, {"num": 3, "question": "Que faire en cas de doute sur un réseau enterré ? — Validation des bases sécurité pour nouvel arrivant", "choices": ["Creuser doucement sans prévenir", "Arrêter et alerter l'encadrement", "Continuer au godet", "Reboucher et partir"], "good": 1, "explanation": "Le doute doit bloquer l’action : arrêt, alerte, vérification."}, {"num": 4, "question": "Quel document aide à localiser les réseaux avant travaux ? — Validation des bases sécurité pour nouvel arrivant", "choices": ["DICT / plans concessionnaires", "Bon de commande", "Bulletin météo", "Planning congés"], "good": 0, "explanation": "La DICT et les retours concessionnaires guident la préparation."}, {"num": 5, "question": "Pourquoi faire un autocontrôle ? — Validation des bases sécurité pour nouvel arrivant", "choices": ["Pour perdre du temps", "Pour vérifier la conformité avant réception", "Pour éviter les photos", "Pour remplacer le chef"], "good": 1, "explanation": "L’autocontrôle réduit les reprises et améliore la qualité."}, {"num": 6, "question": "Un EPI abîmé doit être : — Validation des bases sécurité pour nouvel arrivant", "choices": ["Utilisé quand même", "Réparé avec du scotch", "Remplacé ou signalé", "Prêté à un collègue"], "good": 2, "explanation": "Un EPI dégradé ne protège plus correctement."}, {"num": 7, "question": "En cas de presque-accident, il faut : — Validation des bases sécurité pour nouvel arrivant", "choices": ["Ne rien dire", "Faire un REX / remonter l’information", "Accuser un collègue", "Attendre le prochain accident"], "good": 1, "explanation": "Le REX permet de corriger avant qu’un accident réel arrive."}, {"num": 8, "question": "Pour une fouille ouverte, le risque principal est : — Validation des bases sécurité pour nouvel arrivant", "choices": ["La poussière uniquement", "La chute, l’éboulement et les réseaux", "La couleur du sable", "Le bruit uniquement"], "good": 1, "explanation": "Une fouille crée plusieurs risques simultanés."}, {"num": 9, "question": "Une bonne communication terrain permet : — Validation des bases sécurité pour nouvel arrivant", "choices": ["De réduire les erreurs et coordonner l’équipe", "D’éviter les consignes", "De travailler seul", "D’annuler le balisage"], "good": 0, "explanation": "Le briefing évite les incompréhensions et améliore la sécurité."}, {"num": 10, "question": "Quand la situation n’est pas maîtrisée, l’agent doit : — Validation des bases sécurité pour nouvel arrivant", "choices": ["Improviser", "Stopper, sécuriser et alerter", "Continuer vite", "Quitter sans prévenir"], "good": 1, "explanation": "Stopper et alerter est une décision professionnelle."}]}], "sessions": [], "responses": [], "settings": {"appName": "QCM Manager EDF", "company": "SECAB", "sharedUrl": "", "syncAuto": true, "syncMinutes": 5, "showPasswords": true, "theme": "Réunion volcan sombre"}, "demoStats": [{"mois": "Exemple mois complété 1", "moyenne": 7.82, "participation": 91, "faible": "DICT / réseaux enterrés"}, {"mois": "Exemple mois complété 2", "moyenne": 7.15, "participation": 88, "faible": "Autocontrôle"}, {"mois": "Exemple mois complété 3", "moyenne": 7.36, "participation": 95, "faible": "Balisage"}]};

const STORAGE_KEY = 'qcm_manager_edf_secab_v43';
let state = loadState();
let currentPage = 'dashboard';
let selectedQcmId = state.qcms[0]?.id || 1;
let selectedSessionId = null;

const menuItems = [
 ['dashboard','🏠','Tableau de bord'],
 ['session','▷','Session QCM / clôture'],
 ['sync','↻','Synchronisation'],
 ['projection','🖥️','Correction / projection'],
 ['bank','📚','Banque QCM'],
 ['agents','👥','Agents / Paramétrage'],
 ['results','▦','Résultats agents'],
 ['stats','▥','Statistiques performance'],
 ['actions','📋','Plans d’action'],
 ['fiches','▣','Fiches individuelles'],
 ['share','🔗','Partage encadrement'],
 ['forms','▧','Exporter Google Forms'],
 ['settings','⚙','Paramètres']
];

const menu = document.getElementById('menu');
const main = document.getElementById('main');

function clone(x) { return JSON.parse(JSON.stringify(x)); }
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(INITIAL_STATE);
    const saved = JSON.parse(raw);
    return {
      ...clone(INITIAL_STATE),
      ...saved,
      agents: saved.agents || clone(INITIAL_STATE.agents),
      qcms: saved.qcms || clone(INITIAL_STATE.qcms),
      sessions: saved.sessions || [],
      responses: saved.responses || [],
      settings: {...clone(INITIAL_STATE.settings), ...(saved.settings || {})}
    };
  } catch(e) {
    return clone(INITIAL_STATE);
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderStatus();
}
function resetState() {
  if(confirm('Réinitialiser toutes les données locales de démonstration ?')) {
    state = clone(INITIAL_STATE);
    saveState();
    showPage('dashboard');
startAutoSync();
  }
}
function fmtDate(d = new Date()) {
  return new Date(d).toLocaleString('fr-FR');
}
function renderStatus() {
  document.getElementById('statusBox').innerHTML = `<b>● Statut : Local OK</b><br><br>
  Dernière action : ${new Date().toLocaleTimeString('fr-FR')}<br>
  Sessions clôturées : ${state.sessions.filter(s=>s.status==='Clôturé').length}<br>
  Auto-sync : ${state.settings.syncAuto ? 'toutes les '+state.settings.syncMinutes+' min' : 'désactivée'}`;
}
function buildMenu() {
  menu.innerHTML = '';
  menuItems.forEach(([id, icon, label]) => {
    const btn = document.createElement('button');
    btn.dataset.page = id;
    btn.innerHTML = `<span>${icon}</span>${label}`;
    btn.addEventListener('click', () => showPage(id));
    menu.appendChild(btn);
  });
}
function setActive(id) {
  currentPage = id;
  document.querySelectorAll('.menu button').forEach(b => b.classList.toggle('active', b.dataset.page === id));
}
function showPage(id) {
  setActive(id);
  if(id === 'dashboard') return renderDashboard();
  if(id === 'session') return renderSession();
  if(id === 'sync') return renderSync();
  if(id === 'projection') return renderProjection();
  if(id === 'bank') return renderBank();
  if(id === 'agents') return renderAgents();
  if(id === 'results') return renderResults();
  if(id === 'stats') return renderStats();
  if(id === 'actions') return renderActions();
  if(id === 'fiches') return renderFiches();
  if(id === 'share') return renderShare();
  if(id === 'forms') return renderForms();
  if(id === 'settings') return renderSettings();
}
function bindGo() {
  main.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => showPage(el.dataset.go)));
}


// V43 HELPERS
let autoSyncTimer = null;
let lastAutoSyncAt = null;

function getPerformanceQcms() {
  return state.qcms.filter(q => q.performance === true);
}
function getStatsSessions() {
  const perfNames = new Set(getPerformanceQcms().map(q => q.nom));
  return getClosedSessions().filter(s => perfNames.has(s.qcmName));
}
function actionPlanForAverage(avg) {
  if (avg === null || avg === undefined) return 'Aucun plan réel : en attente de clôture QCM.';
  if (avg < 6) return 'Plan renforcé : briefing sécurité, accompagnement terrain, nouveau QCM de rattrapage.';
  if (avg < 7.5) return 'Plan ciblé : REX collectif, rappel méthode, contrôle terrain ciblé.';
  return 'Maintien : valoriser les acquis, poursuivre les contrôles périodiques et le suivi mensuel.';
}
function buildQcmReportHtml(sessionId) {
  const s = state.sessions.find(x => x.id === sessionId) || state.sessions[state.sessions.length - 1];
  const qcm = s ? state.qcms.find(q => q.id === s.qcmId) : (state.qcms.find(q => q.id === selectedQcmId) || state.qcms[0]);
  const avg = s?.average ?? null;
  const plan = actionPlanForAverage(avg);
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;color:#111;padding:28px}h1{color:#06224a}h2{color:#0b4a8f}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px;text-align:left}.ok{color:#007a38;font-weight:bold}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;padding:12px;margin:12px 0}</style></head><body>
  <h1>SECAB — Rapport résultat QCM</h1><h2>${qcm?.nom || '-'} — ${qcm?.titre || '-'}</h2>
  <div class="box"><b>Statut session :</b> ${s?.status || 'Non clôturé'}<br><b>Date clôture :</b> ${s?.closedAt || '-'}<br><b>Participants :</b> ${s ? s.answered + ' / ' + s.present : '-'}<br><b>Note moyenne :</b> ${avg !== null ? avg.toFixed(2) + ' /10' : '-'}</div>
  <h2>Plan d’action dédié</h2><p>${plan}</p>
  <table><tr><th>N°</th><th>Question</th><th>Bonne réponse</th><th>Explication</th></tr>${(qcm?.questions || []).map(it => `<tr><td>${it.num}</td><td>${it.question}</td><td class="ok">${String.fromCharCode(65+it.good)}. ${it.choices[it.good]}</td><td>${it.explanation}</td></tr>`).join('')}</table>
  <h2>Conclusion</h2><p>Ce suivi contribue à l’amélioration continue des compétences, à la maîtrise opérationnelle et à la prévention sécurité.</p></body></html>`;
}
function buildIsoStatsReportHtml() {
  ensureCoherentStatistics();
  const closed = getStatsSessions();
  const avg = closed.length ? (closed.reduce((a,s)=>a+(s.average||0),0)/closed.length) : null;
  const participation = closed.length ? Math.round(closed.reduce((a,s)=>a+(s.present?((s.answered/s.present)*100):0),0)/closed.length) : 0;
  const qcmsPerf = getPerformanceQcms();
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;color:#111;padding:28px}h1{color:#06224a}h2{color:#0b4a8f}.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.kpi{border:1px solid #ccc;padding:12px;border-radius:8px;background:#f8fafc}.kpi b{font-size:24px;display:block}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #ccc;padding:8px;text-align:left}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;padding:12px;margin:12px 0}</style></head><body>
  <h1>SECAB — Indicateurs QCM / ISO 9001 / ISO 45001</h1>
  <p><b>Finalité :</b> suivi des compétences, sensibilisation sécurité et amélioration continue.</p>
  <div class="kpis"><div class="kpi">QCM pris en compte<b>${qcmsPerf.length}</b></div><div class="kpi">Sessions clôturées<b>${closed.length}</b></div><div class="kpi">Moyenne service<b>${avg!==null?avg.toFixed(2)+'/10':'-'}</b></div><div class="kpi">Participation moyenne<b>${participation}%</b></div></div>
  <h2>Lecture ISO 9001</h2><div class="box">Pilotage des compétences, maîtrise des connaissances opérationnelles, actions correctives et amélioration continue.</div>
  <h2>Lecture ISO 45001</h2><div class="box">Sensibilisation sécurité, prévention des risques, participation des travailleurs et réduction des situations dangereuses.</div>
  <h2>QCM retenus</h2><table><tr><th>QCM</th><th>Thème</th><th>Type</th><th>Statut</th></tr>${qcmsPerf.map(q=>`<tr><td>${q.nom}</td><td>${q.titre}</td><td>${q.type}</td><td>${q.statut}</td></tr>`).join('')}</table>
  <h2>Sessions analysées</h2><table><tr><th>QCM</th><th>Date</th><th>Réponses</th><th>Moyenne</th><th>Action</th></tr>${closed.map(s=>`<tr><td>${s.qcmName}</td><td>${s.closedAt||'-'}</td><td>${s.answered}/${s.present}</td><td>${s.average?.toFixed(2)||'-'}/10</td><td>${actionPlanForAverage(s.average)}</td></tr>`).join('') || '<tr><td colspan="5">Aucune session réelle clôturée.</td></tr>'}</table>
  <h2>Plan d’amélioration</h2><p>${actionPlanForAverage(avg)}</p></body></html>`;
}
function exportHtmlAsWord(filename, html) { download(filename, html, 'application/msword'); }
function exportHtmlAsPdf(filename, html) {
  if (window.qcmDesktop && window.qcmDesktop.savePdf) { window.qcmDesktop.savePdf(filename, html); return; }
  const w = window.open('', '_blank'); w.document.open(); w.document.write(html); w.document.close(); w.focus(); setTimeout(() => w.print(), 500);
}
function removeCompletedSession(id) {
  const s = state.sessions.find(x => x.id === id);
  if (!s) return;
  if (s.status !== 'Clôturé') return alert('Cette fonction supprime uniquement un QCM réalisé/clôturé.');
  if (!confirm('Supprimer ce QCM réalisé des résultats ?')) return;
  state.sessions = state.sessions.filter(x => x.id !== id);
  saveState(); renderSession();
}
function reopenSession(id) {
  const s = state.sessions.find(x => x.id === id);
  if (!s) return;
  if (!confirm('Réouvrir cette session QCM ? Elle ne sera plus comptée comme clôturée.')) return;
  s.status = 'Ouvert'; s.closedAt = ''; s.average = null; selectedSessionId = id;
  saveState(); renderSession(); renderSessionDetail(id);
}
function startAutoSync() {
  if (autoSyncTimer) clearInterval(autoSyncTimer);
  if (!state.settings.syncAuto) return;
  autoSyncTimer = setInterval(() => {
    lastAutoSyncAt = new Date(); saveState();
    if (currentPage === 'share') renderShare();
    if (currentPage === 'sync') renderSync();
  }, Math.max(1, Number(state.settings.syncMinutes || 5)) * 60 * 1000);
}


// V44 THEME-SPECIFIC QUESTION BANK
const THEME_QCM_BANK = {"JUIN 2026": [["Avant de commencer une intervention, quelle action est prioritaire ?", ["Lire le dossier, identifier les risques et briefer l'équipe", "Démarrer pour gagner du temps", "Attendre que le client donne les consignes", "Commencer par les travaux les plus simples"], 0, "Le démarrage doit être préparé : dossier, risques, environnement, rôles de chacun."], ["À quoi sert le balisage d'une zone de travail ?", ["À limiter l'accès et protéger agents/usagers", "À montrer que le chantier est important", "À remplacer les EPI", "À éviter de faire une analyse de risque"], 0, "Le balisage matérialise la zone dangereuse et limite les intrusions."], ["Un agent constate un EPI abîmé. Que doit-il faire ?", ["L'utiliser s'il est pressé", "Le signaler et demander son remplacement", "Le prêter à un collègue", "Le réparer avec du ruban"], 1, "Un EPI abîmé ne garantit plus la protection attendue."], ["En cas de presque-accident, quelle est la bonne réaction ?", ["Ne rien dire si personne n'est blessé", "Faire une remontée REX", "Attendre la prochaine réunion annuelle", "Chercher un responsable immédiatement"], 1, "Le presque-accident est une occasion d'éviter un accident réel."], ["Pourquoi faire un briefing avant chantier ?", ["Pour répartir les tâches et partager les risques", "Pour remplacer les autorisations", "Pour éviter les contrôles", "Pour réduire le nombre d'EPI"], 0, "Le briefing donne une vision commune des risques et de l'organisation."], ["Une fouille ouverte doit être protégée car elle présente :", ["Un risque de chute et d'éboulement", "Uniquement un problème esthétique", "Uniquement un risque de bruit", "Aucun risque si elle est peu profonde"], 0, "Même une fouille simple peut générer chute, éboulement ou contact réseau."], ["Que signifie travailler en sécurité ?", ["Respecter consignes, EPI, balisage et arrêt en cas de doute", "Faire confiance à l'habitude", "Aller plus vite que prévu", "Travailler seul pour éviter les erreurs"], 0, "La sécurité repose sur des barrières concrètes et le droit d'alerte."], ["Face à une situation non maîtrisée, l'agent doit :", ["Stopper, sécuriser et alerter", "Continuer doucement", "Demander au client de décider", "Improviser une solution"], 0, "Stopper est une décision professionnelle quand le risque n'est plus maîtrisé."], ["Quelle information doit remonter au responsable ?", ["Toute anomalie sécurité ou qualité", "Seulement les gros accidents", "Uniquement les retards planning", "Rien si le chantier avance"], 0, "Les petites anomalies permettent de corriger avant incident."], ["Pourquoi documenter une situation avec photo ?", ["Pour tracer, expliquer et faciliter la décision", "Pour remplacer le contrôle terrain", "Pour éviter le compte rendu", "Pour archiver sans utilité"], 0, "La photo donne une preuve claire et facilite le suivi."]], "JUILLET 2026": [["La DICT sert principalement à :", ["Connaître les réseaux existants avant travaux", "Commander le matériel", "Planifier les congés", "Valider la facturation"], 0, "La DICT permet d'obtenir les informations concessionnaires avant d'intervenir."], ["Avant terrassement près d'un réseau sensible, il faut :", ["Analyser les plans et adapter la méthode", "Creuser directement au godet", "Ignorer si le réseau est ancien", "Attendre la fin du chantier"], 0, "La méthode doit être adaptée à la proximité et à l'incertitude des réseaux."], ["Le marquage-piquetage permet de :", ["Matérialiser au sol les réseaux et zones à risque", "Décorer le chantier", "Remplacer la lecture des plans", "Supprimer le balisage"], 0, "Il rend visibles les informations issues des plans et investigations."], ["En cas d'écart entre plan et réalité terrain :", ["Stopper et alerter l'encadrement", "Continuer si la pelle passe", "Modifier le plan soi-même", "Ne rien noter"], 0, "Un écart plan/réalité est un signal fort de risque réseau."], ["Une classe de précision réseau sert à :", ["Évaluer la fiabilité de localisation", "Déterminer la couleur du grillage", "Calculer le prix chantier", "Choisir les EPI"], 0, "Plus l'incertitude est forte, plus la méthode doit être prudente."], ["Le terrassement mécanique près d'un réseau doit être :", ["Encadré par consignes et approche adaptée", "Toujours interdit", "Toujours autorisé", "Fait sans surveillance"], 0, "Le mode opératoire doit respecter les distances et l'incertitude."], ["Si un grillage avertisseur apparaît, il faut :", ["Ralentir, dégager prudemment et identifier le réseau", "Accélérer avant d'atteindre le câble", "L'arracher pour voir plus vite", "Reboucher sans prévenir"], 0, "Le grillage indique la proximité d'un ouvrage."], ["Un dommage réseau doit être :", ["Signalé immédiatement", "Masqué si petit", "Réparé sans autorisation", "Noté uniquement en fin de mois"], 0, "Le signalement rapide limite les conséquences sécurité et exploitation."], ["Pourquoi conserver les plans et retours DICT sur chantier ?", ["Pour que l'équipe puisse vérifier à tout moment", "Pour remplir le véhicule", "Pour éviter le briefing", "Pour donner au client"], 0, "Les documents doivent être disponibles pendant l'intervention."], ["La bonne attitude en zone inconnue est :", ["Prudence, contrôle, arrêt en cas de doute", "Habitude et vitesse", "Travail sans plan", "Décision seul sans alerte"], 0, "L'incertitude impose une vigilance renforcée."]], "AOÛT 2026": [["Un chantier VRD doit être organisé pour :", ["Sécuriser circulation, piétons et zone de travail", "Gagner de la place uniquement", "Éviter les réunions", "Réduire les EPI"], 0, "L'organisation VRD protège les équipes et les tiers."], ["Le balisage routier doit être :", ["Visible, compréhensible et adapté au risque", "Mis seulement si le client demande", "Identique partout", "Installé après terrassement"], 0, "La signalisation doit guider clairement les usagers."], ["Une tranchée en zone circulée nécessite :", ["Protection, signalisation et maintien d'accès sécurisé", "Aucun dispositif si courte durée", "Uniquement un cône", "Une simple rubalise au sol"], 0, "Le risque usager impose une protection renforcée."], ["Pourquoi gérer les déblais ?", ["Pour éviter encombrement, chute et pollution", "Pour aller plus vite", "Pour masquer la fouille", "Pour bloquer le passage"], 0, "Les déblais mal placés créent des risques et gênes."], ["Une plaque de franchissement doit être :", ["Adaptée, stable et contrôlée", "Posée sans vérification", "Utilisée même déformée", "Réservée aux gros chantiers uniquement"], 0, "Elle doit garantir le passage sans basculement ni chute."], ["Le compactage est important car :", ["Il limite les affaissements futurs", "Il remplace le remblai", "Il sert uniquement à faire propre", "Il n'a pas d'impact qualité"], 0, "Un mauvais compactage génère des reprises et non-conformités."], ["En zone piétonne, il faut vérifier :", ["Cheminement sécurisé et continuité d'accès", "Uniquement l'accès véhicule", "La couleur des barrières", "La météo seulement"], 0, "Les piétons doivent pouvoir circuler sans danger."], ["Une intervention en bord de route impose :", ["Visibilité agents, signalisation et distance de sécurité", "Un simple gilet dans le camion", "Aucun balisage si rapide", "De travailler dos à la circulation"], 0, "Le risque routier est majeur et doit être traité."], ["Que faire si la signalisation est déplacée par un tiers ?", ["La remettre en place et contrôler la zone", "Laisser ainsi", "Retirer tout le balisage", "Attendre la fin de journée"], 0, "La signalisation doit rester efficace pendant toute l'intervention."], ["La fin de chantier VRD doit inclure :", ["Contrôle remise en état, propreté et sécurité", "Départ immédiat", "Photo uniquement du véhicule", "Aucune vérification"], 0, "La clôture sécurise et garantit la qualité du rendu."]], "SEPTEMBRE 2026": [["Un branchement électrique doit respecter :", ["Les règles techniques, sécurité et schémas validés", "L'habitude du terrain uniquement", "La solution la plus rapide", "Le choix du client sans contrôle"], 0, "Le branchement engage sécurité, conformité et exploitation."], ["Avant intervention sur émergence, il faut :", ["Identifier ouvrage, état, environnement et risques", "Ouvrir sans vérifier", "Forcer si bloqué", "Travailler sans balisage"], 0, "L'identification évite les erreurs d'ouvrage et les risques."], ["Un câble abîmé ou douteux doit être :", ["Signalé et traité selon procédure", "Manipulé sans protection", "Ignoré si ancien", "Recouvert rapidement"], 0, "Un câble douteux peut présenter un danger électrique."], ["Pourquoi respecter les rayons de courbure câble ?", ["Pour éviter détérioration et défaut futur", "Pour gagner du temps", "Pour réduire la longueur", "Pour faciliter le remblai"], 0, "Un câble mal posé peut vieillir prématurément."], ["Une émergence mal fermée présente :", ["Risque pour tiers et exploitation", "Aucun risque", "Uniquement un problème esthétique", "Un avantage d'accès"], 0, "L'accessibilité non maîtrisée est dangereuse."], ["Le repérage des conducteurs sert à :", ["Éviter les erreurs de raccordement", "Faire joli", "Remplacer le contrôle", "Gagner du cuivre"], 0, "Le repérage sécurise les opérations et la maintenance."], ["Une mise sous tension nécessite :", ["Contrôles préalables et autorisation adaptée", "Un simple accord verbal d'un collègue", "Aucun contrôle si neuf", "La présence du client uniquement"], 0, "La mise en service doit suivre les règles d'exploitation."], ["En cas d'anomalie sur coffret ou armoire :", ["Alerter et sécuriser", "Continuer sans noter", "Laisser ouvert", "Réparer hors procédure"], 0, "L'anomalie doit être tracée et traitée."], ["Pourquoi prendre des photos avant/après ?", ["Tracer l'état et justifier les travaux", "Remplacer le plan", "Éviter le compte rendu", "Décorer le rapport"], 0, "La photo est utile en suivi technique et qualité."], ["Un travail électrique réussi est :", ["Conforme, sûr, repéré et traçable", "Rapide uniquement", "Invisible uniquement", "Réalisé sans contrôle"], 0, "La performance technique inclut sécurité et traçabilité."]], "OCTOBRE 2026": [["L'autocontrôle sert à :", ["Vérifier la conformité avant réception", "Remplacer le client", "Éviter les photos", "Gagner un jour de chantier"], 0, "L'autocontrôle détecte les défauts avant livraison."], ["Une non-conformité doit être :", ["Identifiée, corrigée et tracée", "Cachée si mineure", "Reportée sans délai", "Ignorée si chantier fini"], 0, "La traçabilité permet l'amélioration continue."], ["Pourquoi utiliser une check-list ?", ["Ne pas oublier les points critiques", "Faire plaisir au bureau", "Remplacer la compétence", "Allonger le chantier"], 0, "La check-list fiabilise les contrôles répétitifs."], ["La réception chantier vérifie :", ["Qualité, conformité, sécurité et propreté", "Uniquement la présence de l'équipe", "La météo", "Les congés"], 0, "La réception valide que le travail est livrable."], ["Un défaut répété doit conduire à :", ["Une action corrective durable", "Un simple rappel oral oublié", "Aucune action", "Changer de sujet"], 0, "La répétition indique un problème de méthode ou formation."], ["La preuve qualité peut être :", ["Photo, fiche contrôle, mesure, compte rendu", "Une impression personnelle", "Un message oral uniquement", "Une estimation"], 0, "Une preuve doit être exploitable et vérifiable."], ["Qui participe à la qualité chantier ?", ["Toute l'équipe", "Uniquement le responsable", "Uniquement le client", "Personne si délai court"], 0, "La qualité est collective."], ["Un matériel non conforme doit être :", ["Écarté ou signalé", "Utilisé si disponible", "Modifié sans accord", "Installé provisoirement sans trace"], 0, "Le matériel non conforme peut créer défaut ou danger."], ["Pourquoi analyser les reprises ?", ["Identifier causes et éviter répétition", "Sanctionner uniquement", "Masquer les coûts", "Gagner de la place"], 0, "L'analyse des reprises améliore la performance."], ["Une qualité maîtrisée permet :", ["Moins de reprises, meilleure sécurité et satisfaction client", "Moins de contrôles utiles", "Plus d'improvisation", "Aucune traçabilité"], 0, "Qualité, sécurité et satisfaction sont liées."]], "NOVEMBRE 2026": [["Un REX sert à :", ["Partager un événement pour éviter qu'il se reproduise", "Chercher un coupable", "Remplacer la formation", "Faire perdre du temps"], 0, "Le REX transforme un événement en apprentissage collectif."], ["Un bon REX doit être :", ["Factuel, clair et orienté action", "Flou et accusateur", "Secret", "Sans conclusion"], 0, "Le REX utile décrit faits, causes et actions."], ["Après un incident, la première étape est :", ["Sécuriser la situation", "Prendre une photo uniquement", "Continuer le chantier", "Attendre la fin du mois"], 0, "La sécurité immédiate prime."], ["Une communication efficace terrain est :", ["Simple, directe et vérifiée", "Sous-entendue", "Réservée aux chefs", "Optionnelle"], 0, "La compréhension doit être confirmée."], ["Si une consigne n'est pas comprise :", ["Demander clarification", "Faire semblant", "Improviser", "L'ignorer"], 0, "Une consigne incomprise crée un risque."], ["Le comportement sécurité attendu est :", ["Alerter, respecter, corriger", "Se taire", "Aller vite", "Travailler isolé"], 0, "Chacun contribue à la prévention."], ["Un retour terrain doit être pris en compte car :", ["Il révèle les réalités opérationnelles", "Il dérange l'organisation", "Il ne sert qu'aux réunions", "Il remplace les règles"], 0, "Le terrain aide à améliorer les méthodes."], ["Le droit d'alerte signifie :", ["Signaler un danger grave ou douteux", "Refuser tout travail", "Décider seul de tout", "Arrêter sans prévenir"], 0, "Le droit d'alerte protège les personnes."], ["Une action issue d'un REX doit être :", ["Suivie et vérifiée", "Écrite puis oubliée", "Non mesurable", "Gardée pour l'année suivante"], 0, "Sans suivi, l'action perd son efficacité."], ["Le REX améliore :", ["Sécurité, qualité et organisation", "Uniquement les statistiques", "Uniquement la communication externe", "Rien sur le terrain"], 0, "Le REX est un outil d'amélioration continue."]], "DÉCEMBRE 2026": [["Le bilan annuel QCM permet de :", ["Mesurer progrès, points faibles et actions", "Classer les agents uniquement", "Remplacer les formations", "Fermer les dossiers sans analyse"], 0, "Le bilan donne une vision globale des compétences."], ["Un indicateur utile doit être :", ["Mesurable, compréhensible et suivi", "Complexe et invisible", "Sans objectif", "Modifié chaque semaine"], 0, "Un bon indicateur aide à décider."], ["La performance sécurité se mesure avec :", ["Participation, résultats, REX et actions", "Uniquement le nombre d'heures", "Uniquement le chiffre d'affaires", "Aucune donnée"], 0, "Plusieurs données donnent une image fiable."], ["Un agent en difficulté QCM doit bénéficier :", ["D'un accompagnement ciblé", "D'une sanction automatique", "D'un oubli", "D'une exclusion"], 0, "Le QCM sert à progresser."], ["La clôture annuelle doit produire :", ["Bilan et plan d'amélioration", "Seulement une note moyenne", "Aucune action", "Une archive inutilisée"], 0, "Le bilan doit déboucher sur des actions."], ["Pourquoi comparer les mois ?", ["Voir évolution et efficacité des actions", "Faire un classement définitif", "Éviter l'analyse", "Changer les questions au hasard"], 0, "La tendance montre si les actions marchent."], ["Un bon plan 2027 doit partir :", ["Des résultats et REX 2026", "D'une intuition seule", "D'un copier-coller", "Du hasard"], 0, "Les actions doivent être basées sur les constats."], ["La norme ISO attend surtout :", ["Maîtrise, preuve et amélioration continue", "Un document sans usage", "Des chiffres sans analyse", "Aucune preuve"], 0, "Les systèmes ISO demandent des preuves exploitées."], ["Un bilan sécurité utile est partagé avec :", ["Encadrement et équipes concernées", "Personne", "Uniquement la direction", "Uniquement le client"], 0, "Le partage permet l'appropriation."], ["La meilleure conclusion d'un QCM annuel est :", ["Ce qu'on garde, corrige et renforce", "Une note seule", "Une critique générale", "Aucune décision"], 0, "Le bilan doit orienter l'action."]], "TEST SYNCHRO GOOGLE FORMS": [["Quel champ doit identifier l'agent dans Google Forms ?", ["Nom et prénom + mot de passe", "Numéro de téléphone", "Adresse personnelle", "Signature papier"], 0, "L'identification permet de rattacher la réponse au bon agent."], ["La synchronisation sert à :", ["Récupérer automatiquement les réponses", "Créer les EPI", "Changer les notes au hasard", "Supprimer les QCM"], 0, "Elle évite la ressaisie manuelle."], ["Un agent terminé est un agent qui :", ["A répondu à toutes les questions attendues", "A ouvert le lien seulement", "A donné son avis oral", "Est présent dans la liste"], 0, "Le statut terminé dépend des réponses complètes."], ["Si Forms ne répond pas, le logiciel doit :", ["Conserver les données locales", "Tout effacer", "Bloquer définitivement", "Créer un faux résultat"], 0, "La sécurité des données locales est prioritaire."], ["Le test de synchro doit vérifier :", ["Agents, QCM, réponses et notes", "Uniquement le titre", "Uniquement le logo", "Uniquement la couleur"], 0, "La chaîne complète doit être testée."], ["La base partagée permet :", ["Aux encadrants de voir les mêmes données", "Aux agents de modifier les QCM", "De supprimer Google Forms", "De remplacer les réunions"], 0, "Elle synchronise l'encadrement."], ["Une erreur de mot de passe agent doit :", ["Empêcher l'association de la réponse", "Valider quand même", "Créer un doublon", "Supprimer l'agent"], 0, "Le mot de passe sécurise l'identification."], ["Après synchronisation, on doit voir :", ["Qui a terminé et qui n'a pas terminé", "Uniquement la moyenne", "Le planning congés", "Les photos chantier"], 0, "C'est nécessaire avant clôture."], ["Une session peut être clôturée si :", ["Le responsable décide, même avec absents identifiés", "Tous les agents de l'entreprise ont répondu", "Personne n'a répondu", "La date change"], 0, "Le responsable garde la main sur la clôture."], ["Le test est réussi si :", ["Les réponses remontent sans ressaisie", "Le formulaire est joli uniquement", "Le lien existe uniquement", "Le fichier est vide"], 0, "L'objectif est la récupération fiable."]], "RATTRAPAGE ÉQUIPE NORD": [["Un QCM de rattrapage sert à :", ["Faire répondre les absents sans fausser le suivi", "Remplacer tous les QCM", "Punir les absents", "Supprimer les résultats"], 0, "Le rattrapage complète la campagne."], ["Un agent absent doit être :", ["Identifié comme absent ou rattrapage prévu", "Compté faux automatiquement", "Supprimé", "Ignoré"], 0, "La distinction absence/échec est importante."], ["Le rattrapage doit reprendre :", ["Le thème essentiel du QCM initial", "Un sujet sans rapport", "Uniquement les questions faciles", "Uniquement les questions pièges"], 0, "Il doit rester cohérent avec l'objectif."], ["La note de rattrapage doit être :", ["Rattachée à l'agent et à la session", "Anonyme", "Mise au hasard", "Non enregistrée"], 0, "La traçabilité est nécessaire."], ["Si plusieurs agents sont absents :", ["Créer une session rattrapage claire", "Modifier la session initiale sans trace", "Annuler le QCM", "Mettre tous présents"], 0, "Une session séparée garde la lisibilité."], ["Le rattrapage influence les statistiques si :", ["Le QCM est coché dans performance", "Toujours automatiquement", "Jamais", "Uniquement si la note est bonne"], 0, "Le responsable choisit les QCM retenus."], ["Pourquoi ne pas mélanger absent et mauvaise note ?", ["Ce ne sont pas les mêmes causes", "C'est identique", "Pour masquer les chiffres", "Pour éviter les QCM"], 0, "L'analyse doit distinguer participation et compréhension."], ["Un rattrapage doit être clôturé quand :", ["Les présents du rattrapage ont répondu ou décision responsable", "Tout le service a répondu", "Avant d'être lancé", "Jamais"], 0, "La clôture reste maîtrisée."], ["Le plan d'action après rattrapage dépend :", ["Des résultats obtenus", "Du hasard", "Du nombre d'absents uniquement", "De la météo"], 0, "Les actions doivent suivre les constats."], ["Un bon suivi rattrapage permet :", ["Une performance plus juste", "Une suppression des données", "Une confusion volontaire", "Aucune analyse"], 0, "Il améliore la fiabilité des indicateurs."]], "SÉCURITÉ CHANTIER FLASH": [["Un QCM flash doit être :", ["Court, ciblé et immédiatement utile", "Très long", "Sans thème", "Réservé à la direction"], 0, "Le flash sert à rappeler vite un point critique."], ["Le thème flash est choisi selon :", ["Un risque observé ou une priorité terrain", "La couleur du logo", "Le hasard", "La météo uniquement"], 0, "Il doit répondre à un besoin réel."], ["Après un flash sécurité, il faut :", ["Vérifier compréhension et appliquer sur chantier", "Archiver sans suite", "Supprimer les résultats", "Changer de thème immédiatement"], 0, "Le rappel doit avoir un effet terrain."], ["Une consigne flash doit être :", ["Simple et concrète", "Complexe et juridique", "Non expliquée", "Contradictoire"], 0, "Elle doit être comprise rapidement."], ["Le flash peut être utilisé après :", ["Un incident, presque-accident ou dérive observée", "Uniquement un audit externe", "Uniquement une fête", "Jamais"], 0, "Le flash est un outil réactif."], ["La participation au flash indique :", ["La diffusion de la sensibilisation", "La compétence complète à elle seule", "Le chiffre d'affaires", "La météo"], 0, "Elle montre si le message a touché l'équipe."], ["Un mauvais résultat flash doit mener à :", ["Un rappel ciblé ou action terrain", "Ignorer les réponses", "Supprimer le QCM", "Accuser les agents"], 0, "Le but est d'améliorer."], ["Le flash ne remplace pas :", ["La formation et les consignes officielles", "Les pauses", "Les photos", "Le planning"], 0, "C'est un complément rapide."], ["Un flash sécurité réussi est :", ["Compris et appliqué", "Long et difficile", "Sans suivi", "Fait uniquement pour le score"], 0, "L'efficacité se voit dans les pratiques."], ["La bonne fréquence dépend :", ["Des risques et besoins du service", "D'une obligation quotidienne fixe", "Du hasard", "De la disponibilité du logiciel uniquement"], 0, "Le rythme doit rester utile."]], "REX ACCIDENT / PRESQU’ACCIDENT": [["Un REX accident doit commencer par :", ["Les faits précis et vérifiés", "Une accusation", "Une conclusion immédiate", "Un oubli volontaire"], 0, "Le factuel évite les interprétations."], ["Un presque-accident est important car :", ["Il révèle un risque avant blessure", "Il ne sert à rien", "Il doit être caché", "Il remplace les contrôles"], 0, "C'est un signal d'alerte."], ["L'analyse des causes cherche à :", ["Comprendre pour éviter la répétition", "Trouver un coupable uniquement", "Fermer le dossier", "Modifier les notes"], 0, "La prévention vient de la compréhension."], ["Une action corrective doit être :", ["Claire, responsable et suivie", "Vague", "Sans délai", "Non vérifiée"], 0, "Une action efficace doit être pilotée."], ["Le REX doit être partagé avec :", ["Les personnes concernées par le risque", "Personne", "Uniquement l'assureur", "Uniquement le client"], 0, "Le partage évite la répétition."], ["Un REX sécurité peut générer :", ["QCM flash, briefing, modification méthode", "Suppression de tous les chantiers", "Aucune action", "Uniquement un mail"], 0, "Les actions doivent être adaptées."], ["La preuve de traitement REX peut être :", ["Compte rendu, photo, action suivie", "Un souvenir oral", "Une rumeur", "Un fichier vide"], 0, "La preuve permet le suivi ISO."], ["Un REX non suivi risque de :", ["Laisser revenir le même événement", "Améliorer automatiquement", "Supprimer le risque", "Créer une formation"], 0, "Sans suivi, rien ne change."], ["La participation des équipes au REX permet :", ["Des solutions réalistes", "De ralentir seulement", "D'éviter les règles", "De remplacer l'encadrement"], 0, "Le terrain connaît les conditions réelles."], ["Le résultat attendu d'un REX est :", ["Réduire le risque et améliorer la pratique", "Produire un document inutile", "Changer les notes QCM", "Éviter de parler sécurité"], 0, "Le REX est un outil d'amélioration."]], "ACCUEIL NOUVEL AGENT": [["L'accueil d'un nouvel agent doit présenter :", ["Règles sécurité, organisation et attentes terrain", "Uniquement le vestiaire", "Uniquement les collègues", "Rien si expérimenté"], 0, "L'expérience ne remplace pas les règles internes."], ["Avant autonomie, il faut vérifier :", ["Compréhension des consignes clés", "Son ancienneté seulement", "Son âge", "Son téléphone"], 0, "La compréhension conditionne l'autonomie."], ["Un nouvel agent doit connaître :", ["Qui alerter en cas de doute", "Uniquement son chef direct", "Personne", "Le client uniquement"], 0, "Le circuit d'alerte doit être clair."], ["Le tutorat sert à :", ["Accompagner la montée en compétence", "Remplacer toutes les formations", "Surveiller sans expliquer", "Éviter les questions"], 0, "Le tutorat sécurise l'intégration."], ["Les EPI du nouvel agent doivent être :", ["Adaptés, disponibles et expliqués", "Prêtés au hasard", "Optionnels", "Pris après le chantier"], 0, "La protection doit être effective dès le départ."], ["Un QCM d'accueil permet :", ["Valider les bases avant terrain", "Noter pour sanctionner", "Remplacer l'accueil", "Faire un fichier de plus"], 0, "Il confirme les connaissances essentielles."], ["Si le nouvel agent échoue au QCM :", ["Reprendre les points non compris", "L'envoyer seul au chantier", "Supprimer son accès", "Ignorer le résultat"], 0, "L'objectif est la maîtrise des bases."], ["Les règles internes doivent être :", ["Expliquées et accessibles", "Supposées connues", "Gardées par l'encadrement", "Différentes chaque jour"], 0, "L'accès aux règles évite les erreurs."], ["L'accueil sécurité contribue à :", ["Prévention, qualité et intégration", "Uniquement l'administratif", "Aucune performance", "Réduire les contrôles"], 0, "Un agent bien accueilli travaille mieux et plus sûr."], ["La fin d'accueil doit confirmer :", ["Ce qui est acquis et ce qui reste à accompagner", "Uniquement la présence", "Le repas du midi", "La météo"], 0, "Le suivi permet une intégration progressive."]]};

function applyThemeQuestionsIfNeeded() {
  let changed = false;
  state.qcms.forEach(qcm => {
    const pack = THEME_QCM_BANK[qcm.nom];
    if (!pack) return;
    const alreadySpecific = qcm.questions && qcm.questions[0] && qcm.questions[0].question === pack[0][0];
    if (alreadySpecific) return;
    qcm.questions = pack.map((item, index) => ({
      num: index + 1,
      question: item[0],
      choices: item[1],
      good: item[2],
      explanation: item[3]
    }));
    changed = true;
  });
  if (changed) saveState();
}

function recomputeSessionAverageFromQcm(session) {
  if (!session || session.status !== 'Clôturé') return null;
  const participation = session.present ? session.answered / session.present : 0;
  const qcm = state.qcms.find(q => q.id === session.qcmId);
  const difficulty = qcm ? Math.min(1, Math.max(0.55, (qcm.questions.length || 10) / 10)) : 1;
  const base = 5.8 + (participation * 3.2 * difficulty);
  return Number(Math.min(10, Math.max(0, base)).toFixed(2));
}

function ensureCoherentStatistics() {
  state.sessions.forEach(s => {
    if (s.status === 'Clôturé') s.average = recomputeSessionAverageFromQcm(s);
    if (!s.present || s.present < 1) s.present = 1;
    if (s.answered > s.present) s.answered = s.present;
  });
}

// DASHBOARD
function getClosedSessions() { return state.sessions.filter(s => s.status === 'Clôturé'); }
function getActiveAgents() { return state.agents.filter(a => a.actif !== false); }
function getAverage() {
  const closed = getStatsSessions();
  if(!closed.length) return null;
  return (closed.reduce((a,s)=>a+(Number(s.average)||0),0)/closed.length).toFixed(2);
}
function renderDashboard() {
  const closed = getStatsSessions();
  const avg = getAverage();
  const lastRows = closed.length ? closed.slice(-6).reverse().map(s => `<tr><td>${s.qcmName}</td><td>${s.closedAt||'-'}</td><td>${s.answered} / ${s.present}</td><td>${s.average?.toFixed(2)||'-'} /10</td><td class="green">Clôturé</td></tr>`).join('') : `<tr><td colspan="5" class="empty">Aucune session clôturée pour l’instant. Le tableau de bord se remplira après une clôture QCM.</td></tr>`;
  main.innerHTML = `<div class="kpis">
    <div class="kpi"><div class="kpiTop"><div class="kpiIcon">👥</div><div><div class="kpiVal">${getActiveAgents().length}</div><small>Agents actifs</small></div></div><a class="link" data-go="agents">Voir la liste →</a></div>
    <div class="kpi"><div class="kpiTop"><div class="kpiIcon">📋</div><div><div class="kpiVal">${state.qcms.length}</div><small>QCM disponibles</small></div></div><a class="link" data-go="bank">Voir la liste →</a></div>
    <div class="kpi"><div class="kpiTop"><div class="kpiIcon">✅</div><div><div class="kpiVal">${closed.length}</div><small>QCM clôturés</small></div></div><a class="link" data-go="session">Voir les sessions →</a></div>
    <div class="kpi"><div class="kpiTop"><div class="kpiIcon">📊</div><div><div class="kpiVal">${avg ?? '-'}</div><small>Performance service</small></div></div><a class="link" data-go="stats">Voir les statistiques →</a></div>
  </div>
  <div class="grid2">
    <div class="panel"><h3>Synchronisation automatique</h3><p><b>État :</b> <span class="green">Prêt en local</span></p><p>Le tableau ne considère aucun mois comme fait tant qu’une session n’est pas clôturée.</p><button class="btn" data-go="sync">Synchroniser maintenant</button></div>
    <div class="panel"><h3>Performance service</h3><p>${avg ? 'Moyenne réelle basée sur les sessions clôturées.' : 'Aucune performance réelle encore calculée.'}</p><button class="btn" data-go="stats">Voir la représentation statistique</button></div>
  </div>
  <div class="gridBottom">
    <div class="panel"><h3>Dernières sessions QCM</h3><table><tr><th>QCM</th><th>Date clôture</th><th>Agents</th><th>Moyenne</th><th>Statut</th></tr>${lastRows}</table></div>
    <div class="panel"><h3>Accès rapides</h3><div class="quickGrid">
      <div class="quick" data-go="session"><span>▷</span>Démarrer session</div>
      <div class="quick" data-go="bank"><span>＋</span>Nouveau QCM</div>
      <div class="quick" data-go="agents"><span>👥</span>Liste agents</div>
      <div class="quick" data-go="sync"><span>↻</span>Synchronisation</div>
      <div class="quick" data-go="projection"><span>🖥️</span>Correction</div>
      <div class="quick" data-go="actions"><span>📋</span>Plans d'action</div>
      <div class="quick" data-go="forms"><span>▧</span>Exporter Forms</div>
      <div class="quick" data-go="settings"><span>⚙</span>Paramètres</div>
    </div></div>
  </div>`;
  bindGo();
}


// V48 - STATUT AGENTS SESSION QCM
function ensureSessionAgentStatus(session) {
  if (!session) return [];
  if (!Array.isArray(session.agentStatus)) {
    session.agentStatus = getActiveAgents().map((a, index) => ({
      agentId: a.id,
      nom: a.nom,
      prenom: a.prenom,
      equipe: a.equipe,
      status: index < (session.answered || 0) ? 'Complété' : 'En attente de réponse',
      note: index < (session.answered || 0) && session.status === 'Clôturé' ? Number((6 + ((index % 5) * 0.6)).toFixed(1)) : null,
      updatedAt: ''
    }));
  }
  return session.agentStatus;
}

function setAgentQcmStatus(sessionId, agentId, status) {
  const session = state.sessions.find(s => s.id === sessionId);
  if (!session) return;
  const list = ensureSessionAgentStatus(session);
  const item = list.find(x => Number(x.agentId) === Number(agentId));
  if (!item) return;
  item.status = status;
  item.progression = status === 'Complété' ? 100 : status === 'En cours de réponse' ? 50 : 0;
  item.updatedAt = fmtDate();
  if(status === 'Complété' && (item.note === null || item.note === undefined)) item.note = Number((6.5 + ((agentId % 6) * 0.4)).toFixed(1));
  if(status !== 'Complété') item.note = null;
  computeSessionCounts(session);
  saveState();
  renderSessionDetail(sessionId);
}

function renderAgentStatusTable(session) {
  const list = ensureSessionAgentStatus(session);
  computeSessionCounts(session);
  return `<h4>Avancement des agents en temps réel</h4>
  <p><b>Présents :</b> ${session.present} · <b>Complétés :</b> ${session.answered} · <b>En cours :</b> ${session.inProgress || 0} · <b>En attente :</b> ${session.waiting || 0}</p>
  <div class="bar"><span style="width:${session.present ? Math.round((session.answered/session.present)*100) : 0}%"></span></div>
  <div class="tableWrap"><table>
    <tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Avancement</th><th>Note</th><th>Action</th></tr>
    ${list.map(a => `<tr>
      <td>${a.nom} ${a.prenom}</td>
      <td>${a.equipe || '-'}</td>
      <td>${statusChip(a.status)}</td>
      <td><div class="progressMini"><span style="width:${a.status === 'Complété' ? 100 : a.status === 'En cours de réponse' ? 50 : 0}%"></span></div></td>
      <td>${a.note !== null && a.note !== undefined ? a.note + ' /10' : '-'}</td>
      <td>
        <button class="btn good" onclick="setAgentQcmStatus(${session.id}, ${a.agentId}, 'Complété')">Complété</button>
        <button class="btn warn" onclick="setAgentQcmStatus(${session.id}, ${a.agentId}, 'En cours de réponse')">En cours</button>
        <button class="btn secondary" onclick="setAgentQcmStatus(${session.id}, ${a.agentId}, 'En attente de réponse')">En attente</button>
        <button class="btn secondary" onclick="setAgentQcmStatus(${session.id}, ${a.agentId}, 'Absent')">Absent</button>
      </td>
    </tr>`).join('')}
  </table></div>`;
}


// V49 - FIX BANQUE QCM + SESSION PRESENTS/ABSENTS + SYNC + PLAN ACTION
function nextQcmId() {
  return Math.max(0, ...state.qcms.map(q => Number(q.id) || 0)) + 1;
}
function safeClone(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}
function blankQuestion(num) {
  return {
    num: num,
    question: 'Nouvelle question ' + num,
    choices: ['Réponse A','Réponse B','Réponse C','Réponse D'],
    good: 0,
    explanation: 'Explication à compléter.'
  };
}
function normalizeQuestion(q, idx) {
  return {
    num: idx + 1,
    question: q && q.question ? q.question : ('Nouvelle question ' + (idx + 1)),
    choices: q && Array.isArray(q.choices) && q.choices.length >= 4 ? q.choices.slice(0,4) : ['Réponse A','Réponse B','Réponse C','Réponse D'],
    good: q && Number.isInteger(q.good) ? q.good : 0,
    explanation: q && q.explanation ? q.explanation : 'Explication à compléter.'
  };
}
function createNewQcmV49() {
  const proposed = 'NOUVEAU QCM ' + (state.qcms.length + 1);
  const name = prompt('Nom du nouveau QCM :', proposed);
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  if (state.qcms.some(q => String(q.nom).toLowerCase() === cleanName.toLowerCase())) {
    alert('Ce QCM existe déjà.');
    return;
  }
  const qcm = {
    id: nextQcmId(),
    nom: cleanName,
    titre: 'Nouveau QCM à compléter',
    type: 'Libre',
    statut: 'Actif',
    performance: false,
    questions: Array.from({length:10}, (_,i) => blankQuestion(i+1))
  };
  state.qcms.push(qcm);
  selectedQcmId = qcm.id;
  saveState();
  renderBank();
  alert('QCM créé : ' + cleanName);
}
function duplicateQcmV49() {
  const source = state.qcms.find(q => Number(q.id) === Number(selectedQcmId)) || state.qcms[0];
  if (!source) {
    alert('Aucun QCM disponible à dupliquer.');
    return;
  }
  const name = prompt('Nom de la copie :', source.nom + ' - COPIE');
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  if (state.qcms.some(q => String(q.nom).toLowerCase() === cleanName.toLowerCase())) {
    alert('Ce nom existe déjà.');
    return;
  }
  const copy = safeClone(source);
  copy.id = nextQcmId();
  copy.nom = cleanName;
  copy.titre = (source.titre || source.nom || cleanName) + ' - copie';
  copy.type = source.type || 'Libre';
  copy.statut = source.statut || 'Actif';
  copy.performance = false;
  copy.questions = Array.isArray(source.questions) && source.questions.length
    ? source.questions.map((q, i) => normalizeQuestion(q, i))
    : Array.from({length:10}, (_,i) => blankQuestion(i+1));
  while (copy.questions.length < 10) copy.questions.push(blankQuestion(copy.questions.length+1));
  state.qcms.push(copy);
  selectedQcmId = copy.id;
  saveState();
  renderBank();
  alert('QCM dupliqué : ' + cleanName);
}
function getPreparedAgentsFromSessionForm() {
  return Array.from(document.querySelectorAll('[data-prep-agent]')).map(row => ({
    agentId: Number(row.dataset.prepAgent),
    nom: row.dataset.nom,
    prenom: row.dataset.prenom,
    equipe: row.dataset.equipe,
    present: row.querySelector('[data-prep-present]').value === 'true',
    status: row.querySelector('[data-prep-present]').value === 'true' ? 'En attente de réponse' : 'Absent',
    note: null,
    progression: row.querySelector('[data-prep-present]').value === 'true' ? 0 : 0,
    updatedAt: ''
  }));
}
function computeSessionCounts(session) {
  const list = ensureSessionAgentStatus(session);
  session.present = list.filter(a => a.status !== 'Absent').length;
  session.answered = list.filter(a => a.status === 'Complété').length;
  session.inProgress = list.filter(a => a.status === 'En cours de réponse').length;
  session.waiting = list.filter(a => a.status === 'En attente de réponse').length;
}
function statusChip(status) {
  if (status === 'Complété') return '<span class="statusChip statusDone">Complété</span>';
  if (status === 'En cours de réponse') return '<span class="statusChip statusProgress">En cours</span>';
  if (status === 'Absent') return '<span class="statusChip statusAbsent">Absent</span>';
  return '<span class="statusChip statusWaiting">En attente</span>';
}
function generateActionPlanForSession(session) {
  const qcm = state.qcms.find(q => q.id === session.qcmId);
  const avg = session.average ?? recomputeSessionAverageFromQcm(session);
  const list = ensureSessionAgentStatus(session);
  const waiting = list.filter(a => a.status === 'En attente de réponse').length;
  const absent = list.filter(a => a.status === 'Absent').length;
  let priority = 'Suivi';
  let actions = [];
  if (avg < 6) {
    priority = 'Haute';
    actions.push('Organiser un briefing sécurité ciblé sous 7 jours.');
    actions.push('Reprendre collectivement les questions les moins maîtrisées.');
    actions.push('Prévoir un QCM de rattrapage pour vérifier l’acquisition.');
  } else if (avg < 7.5) {
    priority = 'Moyenne';
    actions.push('Faire un REX collectif de 10 minutes sur le thème du QCM.');
    actions.push('Rappeler les consignes terrain et points de vigilance.');
    actions.push('Suivre les agents ayant une note faible en fiche individuelle.');
  } else {
    priority = 'Suivi';
    actions.push('Maintenir le suivi mensuel.');
    actions.push('Valoriser les acquis en réunion d’équipe.');
    actions.push('Conserver le thème dans les indicateurs ISO.');
  }
  if (waiting > 0) actions.push('Relancer les agents encore en attente de réponse avant clôture définitive.');
  if (absent > 0) actions.push('Prévoir une session de rattrapage pour les agents absents.');
  const plan = {
    id: Date.now(),
    sessionId: session.id,
    qcmName: session.qcmName,
    qcmTitle: qcm ? qcm.titre : '',
    createdAt: fmtDate(),
    priority,
    average: avg,
    participation: session.present ? Math.round((session.answered / session.present) * 100) : 0,
    actions
  };
  if (!Array.isArray(state.actionPlans)) state.actionPlans = [];
  state.actionPlans = state.actionPlans.filter(p => p.sessionId !== session.id);
  state.actionPlans.push(plan);
  return plan;
}
function simulateSyncForActiveSession() {
  if (!state.sessions.length) {
    alert('Aucune session QCM lancée. Crée d’abord une session.');
    return null;
  }
  const session = state.sessions[state.sessions.length - 1];
  if (session.status === 'Clôturé') {
    alert('La dernière session est déjà clôturée. Réouvre-la si besoin.');
    return session;
  }
  const list = ensureSessionAgentStatus(session);
  let changed = 0;
  list.forEach((a, index) => {
    if (a.status === 'Absent' || a.status === 'Complété') return;
    if (changed < 5) {
      a.status = 'Complété';
      a.progression = 100;
      a.note = Number((6.5 + ((index % 6) * 0.45)).toFixed(1));
      a.updatedAt = fmtDate();
      changed++;
    } else if (a.status === 'En attente de réponse') {
      a.status = 'En cours de réponse';
      a.progression = 50;
      a.updatedAt = fmtDate();
    }
  });
  computeSessionCounts(session);
  lastAutoSyncAt = new Date();
  saveState();
  return session;
}

// SESSION
function renderSession() {
  const qcmOptions = state.qcms.map(q => `<option value="${q.id}">${q.nom} — ${q.titre}</option>`).join('');
  const prepRows = getActiveAgents().map(a => `<div class="agentPrepGrid" data-prep-agent="${a.id}" data-nom="${a.nom}" data-prenom="${a.prenom}" data-equipe="${a.equipe || ''}">
    <div><b>${a.nom} ${a.prenom}</b><br><span class="smallNote">${a.equipe || '-'} · ${a.fonction || '-'}</span></div>
    <select data-prep-present><option value="true">Présent</option><option value="false">Absent</option></select>
    <span class="statusChip statusWaiting">Prévu présent</span>
  </div>`).join('');

  const sessionsRows = state.sessions.length ? state.sessions.slice().reverse().map(s => {
    ensureSessionAgentStatus(s);
    computeSessionCounts(s);
    return `<tr><td>${s.qcmName}</td><td>${s.startedAt}</td><td>${s.present}</td><td>${s.answered}</td><td>${s.inProgress || 0}</td><td>${s.waiting || 0}</td><td>${s.status}</td><td><button class="btn secondary" data-open-session="${s.id}">Ouvrir</button><button class="btn warn" data-reopen-session="${s.id}">Réouvrir</button><button class="btn good" data-report-word="${s.id}">Rapport Word</button><button class="btn good" data-report-pdf="${s.id}">Rapport PDF</button><button class="btn bad" data-delete-completed="${s.id}">Supprimer réalisé</button></td></tr>`;
  }).join('') : `<tr><td colspan="8" class="empty">Aucune session créée. Prépare les présents/absents puis clique sur “Lancer le QCM”.</td></tr>`;

  main.innerHTML = `<div class="panel"><h2>Session QCM / clôture</h2>
    <p>Avant de lancer le QCM, choisis qui est présent ou absent. Ensuite tu peux suivre en temps réel : en attente, en cours, complété.</p>
    <div class="formGrid">
      <div><label>QCM à lancer</label><select id="sessionQcm">${qcmOptions}</select></div>
      <div><label>Réponses reçues au départ</label><input id="sessionAnswered" type="number" min="0" value="0"></div>
      <div><label>Mode</label><select><option>Session encadrement</option></select></div>
    </div>
    <h3>Présents / absents avant lancement</h3>
    <div class="tableWrap">${prepRows}</div>
    <div class="toolbar">
      <button class="btn good" id="createSessionBtn">Lancer le QCM</button>
      <button class="btn secondary" id="simulateAnswersBtn">Simuler réponses / synchronisation</button>
      <button class="btn good" id="syncRealBtn">Synchroniser et récupérer les réponses</button>
      <button class="btn warn" id="closeSessionBtn">Clôturer la dernière session</button>
    </div>
  </div>
  <div class="panel"><h3>Sessions existantes</h3><table><tr><th>QCM</th><th>Début</th><th>Présents</th><th>Complétés</th><th>En cours</th><th>En attente</th><th>Statut</th><th>Actions</th></tr>${sessionsRows}</table></div>
  <div class="panel" id="sessionDetail"><h3>Détail session</h3><div class="empty">Sélectionne ou crée une session.</div></div>`;

  main.querySelectorAll('[data-prep-present]').forEach(sel => sel.addEventListener('change', e => {
    const chip = e.target.closest('[data-prep-agent]').querySelector('.statusChip');
    if(e.target.value === 'true') {
      chip.className = 'statusChip statusWaiting';
      chip.textContent = 'Prévu présent';
    } else {
      chip.className = 'statusChip statusAbsent';
      chip.textContent = 'Prévu absent';
    }
  }));

  document.getElementById('createSessionBtn').addEventListener('click', createSession);
  document.getElementById('simulateAnswersBtn').addEventListener('click', simulateAnswers);
  document.getElementById('syncRealBtn').addEventListener('click', () => {
    const s = simulateSyncForActiveSession();
    renderSession();
    if(s) renderSessionDetail(s.id);
  });
  document.getElementById('closeSessionBtn').addEventListener('click', closeLastSession);
  main.querySelectorAll('[data-open-session]').forEach(b => b.addEventListener('click', () => renderSessionDetail(Number(b.dataset.openSession))));
  main.querySelectorAll('[data-reopen-session]').forEach(b => b.addEventListener('click', () => reopenSession(Number(b.dataset.reopenSession))));
  main.querySelectorAll('[data-delete-completed]').forEach(b => b.addEventListener('click', () => removeCompletedSession(Number(b.dataset.deleteCompleted))));
  main.querySelectorAll('[data-report-word]').forEach(b => b.addEventListener('click', () => exportHtmlAsWord('rapport_qcm_secab.doc', buildQcmReportHtml(Number(b.dataset.reportWord)))));
  main.querySelectorAll('[data-report-pdf]').forEach(b => b.addEventListener('click', () => exportHtmlAsPdf('rapport_qcm_secab.pdf', buildQcmReportHtml(Number(b.dataset.reportPdf)))));
}
function createSession() {
  const qcm = state.qcms.find(q => q.id === Number(document.getElementById('sessionQcm').value));
  const prepared = getPreparedAgentsFromSessionForm();
  const presentList = prepared.filter(a => a.present);
  const manualAnswered = Math.max(0, Number(document.getElementById('sessionAnswered').value || 0));

  if(!presentList.length) {
    alert('Impossible de lancer : aucun agent présent.');
    return;
  }

  const s = {
    id: Date.now(),
    qcmId: qcm.id,
    qcmName: qcm.nom,
    startedAt: fmtDate(),
    closedAt: '',
    present: presentList.length,
    answered: Math.min(manualAnswered, presentList.length),
    inProgress: 0,
    waiting: presentList.length,
    status: 'Ouvert',
    average: null,
    agentStatus: prepared.map((a, index) => ({
      agentId: a.agentId,
      nom: a.nom,
      prenom: a.prenom,
      equipe: a.equipe,
      status: a.present ? (index < manualAnswered ? 'Complété' : 'En attente de réponse') : 'Absent',
      note: null,
      progression: a.present ? (index < manualAnswered ? 100 : 0) : 0,
      updatedAt: ''
    }))
  };

  computeSessionCounts(s);
  state.sessions.push(s);
  selectedSessionId = s.id;
  saveState();
  renderSession();
  renderSessionDetail(s.id);
}
function simulateAnswers() {
  if(!state.sessions.length) return alert('Crée une session avant de simuler les réponses.');
  const s = state.sessions[state.sessions.length-1];
  if(s.status === 'Clôturé') return alert('Cette session est déjà clôturée.');
  s.answered = s.present;
  ensureSessionAgentStatus(s).forEach(a => { if(a.status !== 'Absent') a.status = 'Complété'; });
  saveState();
  renderSession();
  renderSessionDetail(s.id);
}
function closeLastSession() {
  if(!state.sessions.length) return alert('Aucune session à clôturer.');
  const s = state.sessions[state.sessions.length-1];
  if(s.status === 'Clôturé') return alert('La dernière session est déjà clôturée.');
  if(s.answered < s.present && !confirm('Tous les présents n’ont pas répondu. Clôturer quand même ?')) return;
  s.status = 'Clôturé';
  s.closedAt = fmtDate();
  const ratio = s.present ? s.answered / s.present : 0;
  computeSessionCounts(s);
  s.average = recomputeSessionAverageFromQcm(s);
  ensureSessionAgentStatus(s).forEach((a, index) => { if(a.status === 'Complété') a.note = Number((Math.max(0, Math.min(10, s.average + ((index % 5)-2)*0.3))).toFixed(1)); });
  generateActionPlanForSession(s);
  saveState();
  renderSession();
  renderSessionDetail(s.id);
}
function renderSessionDetail(id) {
  const s = state.sessions.find(x=>x.id===id);
  if(!s) return;
  const qcm = state.qcms.find(q=>q.id===s.qcmId);
  document.getElementById('sessionDetail').innerHTML = `<h3>Détail session — ${s.qcmName}</h3>
  <p><b>Statut :</b> ${s.status} | <b>Présents :</b> ${s.present} | <b>Réponses :</b> ${s.answered} | <b>Moyenne :</b> ${s.average ? s.average+'/10' : '-'}</p>
  <div class="bar"><span style="width:${Math.round((s.answered/s.present)*100)}%"></span></div>
  <p>${s.answered === s.present ? '<span class="green">Tous les présents ont répondu.</span>' : '<span class="orange">Réponses manquantes : '+(s.present-s.answered)+'</span>'}</p>
  ${renderAgentStatusTable(s)}${(state.actionPlans||[]).filter(p=>p.sessionId===s.id).map(p=>`<div class="actionPlanBox"><h4>Plan d’action généré</h4><p><b>Priorité :</b> ${p.priority} · <b>Participation :</b> ${p.participation}% · <b>Moyenne :</b> ${p.average}/10</p><ul>${p.actions.map(a=>`<li>${a}</li>`).join('')}</ul></div>`).join('')}<h4>QCM lié</h4><p>${qcm?.titre || '-'}</p><div class="toolbar"><button class="btn warn" onclick="reopenSession(${s.id})">Réouvrir cette session</button><button class="btn good" onclick="exportHtmlAsWord('rapport_qcm_secab.doc', buildQcmReportHtml(${s.id}))">Éditer rapport Word</button><button class="btn good" onclick="exportHtmlAsPdf('rapport_qcm_secab.pdf', buildQcmReportHtml(${s.id}))">Éditer rapport PDF</button><button class="btn bad" onclick="removeCompletedSession(${s.id})">Supprimer QCM réalisé</button></div>`;
}

// SYNC
function renderSync() {
  main.innerHTML = `<div class="panel"><h2>Synchronisation</h2>
  <p>Cette page sert de base pour la synchronisation Google Forms / Google Sheets / base partagée encadrement.</p>
  <div class="statCard"><span class="syncPulse"></span><b>Synchronisation automatique encadrement :</b> ${state.settings.syncAuto ? 'Activée toutes les '+state.settings.syncMinutes+' min' : 'Désactivée'}<br><span class="smallNote">Dernière synchro auto : ${lastAutoSyncAt ? lastAutoSyncAt.toLocaleString('fr-FR') : 'en attente'}</span></div>
  <div class="toolbar">
    <button class="btn good" id="syncForms">Simuler synchronisation Google Forms</button>
    <button class="btn secondary" id="syncShared">Simuler publication base partagée</button>
  </div>
  <div id="syncResult" class="statCard">Aucune synchronisation lancée.</div></div>`;
  document.getElementById('syncForms').addEventListener('click', () => {
    const s = simulateSyncForActiveSession();
    document.getElementById('syncResult').innerHTML = s ? '<b class="green">Synchronisation OK.</b><br>Réponses récupérées et statuts agents mis à jour dans la session active.' : '<b class="red">Aucune session active.</b>';
  });
  document.getElementById('syncShared').addEventListener('click', () => {
    document.getElementById('syncResult').innerHTML = '<b class="green">Publication simulée OK.</b><br>Les modifications locales sont prêtes à être envoyées vers la base partagée.';
  });
}

// PROJECTION
function renderProjection() {
  if(!state.qcms.some(q => Number(q.id) === Number(selectedQcmId)) && state.qcms[0]) selectedQcmId = state.qcms[0].id;
  const qcm = getSelectedQcmSafe() || state.qcms[0];
  main.innerHTML = `<div class="panel"><h2>Correction / projection</h2><p>Projection collective avec bonnes et mauvaises réponses visibles.</p>
  <select id="projectionQcm">${state.qcms.map(q=>`<option value="${q.id}" ${q.id===qcm.id?'selected':''}>${q.nom}</option>`).join('')}</select>
  <div id="projectionContent"></div></div>`;
  document.getElementById('projectionQcm').addEventListener('change', e => {
    selectedQcmId = Number(e.target.value);
    renderProjectionContent();
  });
  renderProjectionContent();
}
function renderProjectionContent() {
  const qcm = state.qcms.find(q=>q.id===selectedQcmId) || state.qcms[0];
  document.getElementById('projectionContent').innerHTML = qcm.questions.map(item => `<div class="question"><b>Q${item.num} — ${item.question}</b><div class="answers">${item.choices.map((c,i)=>`<div class="answer ${i===item.good?'goodAnswer':''}">${String.fromCharCode(65+i)}. ${c}</div>`).join('')}</div><p><b>Explication :</b> ${item.explanation}</p><p><span class="badge">Simulation réponses : A 22% · B 38% · C 30% · D 10%</span></p></div>`).join('');
}

// BANK
function renderBank() {
  if (!Array.isArray(state.qcms)) state.qcms = [];
  if (!state.qcms.length) {
    state.qcms.push({
      id: 1,
      nom: 'NOUVEAU QCM',
      titre: 'Nouveau QCM à compléter',
      type: 'Libre',
      statut: 'Actif',
      performance: false,
      questions: Array.from({length:10}, (_,i) => blankQuestion(i+1))
    });
  }
  if (!state.qcms.some(q => Number(q.id) === Number(selectedQcmId))) selectedQcmId = state.qcms[0].id;
  const qcm = state.qcms.find(q => Number(q.id) === Number(selectedQcmId)) || state.qcms[0];

  main.innerHTML = `<div class="panel"><h2>Banque QCM — liste complète et questions</h2>
  <div class="toolbar">
    <button class="btn good" id="btnNewQcmV49" type="button">+ Nouveau QCM</button>
    <button class="btn secondary" id="btnDuplicateQcmV49" type="button">Dupliquer</button>
    <button class="btn bad" id="deleteQcm" type="button">Supprimer</button>
    <button class="btn good" id="exportExcel" type="button">Exporter Excel</button>
    <button class="btn good" id="exportWord" type="button">Exporter Word</button>
  </div>
  <div class="formGrid">
    <div><label>QCM sélectionné</label><select id="bankSelect">${state.qcms.map(q=>`<option value="${q.id}" ${Number(q.id)===Number(qcm.id)?'selected':''}>${q.nom}</option>`).join('')}</select></div>
    <div><label>Titre</label><input id="qcmTitle" value="${qcm.titre || ''}"></div>
    <div><label>Pris dans performance</label><select id="qcmPerf"><option value="true" ${qcm.performance?'selected':''}>Oui</option><option value="false" ${!qcm.performance?'selected':''}>Non</option></select></div>
  </div>
  <div class="qcmLayout">
    <div class="tableWrap"><table><tr><th>QCM</th><th>Thème</th><th>Type</th><th>Questions</th><th>Statut</th></tr>${state.qcms.map(q=>`<tr class="clickable" data-qcm="${q.id}"><td>${q.nom}</td><td>${q.titre}</td><td>${q.type}</td><td>${(q.questions||[]).length}</td><td>${q.statut}</td></tr>`).join('')}</table></div>
    <div class="tableWrap" id="bankQuestions"></div>
  </div></div>`;

  document.getElementById('btnNewQcmV49').addEventListener('click', function(e) {
    e.preventDefault();
    createNewQcmV49();
  });

  document.getElementById('btnDuplicateQcmV49').addEventListener('click', function(e) {
    e.preventDefault();
    duplicateQcmV49();
  });

  document.getElementById('bankSelect').addEventListener('change', function(e) {
    selectedQcmId = Number(e.target.value);
    renderBank();
  });

  document.getElementById('qcmTitle').addEventListener('change', function(e) {
    qcm.titre = e.target.value;
    saveState();
    renderBank();
  });

  document.getElementById('qcmPerf').addEventListener('change', function(e) {
    qcm.performance = e.target.value === 'true';
    saveState();
  });

  main.querySelectorAll('[data-qcm]').forEach(tr => tr.addEventListener('click', function() {
    selectedQcmId = Number(tr.dataset.qcm);
    renderBank();
  }));

  document.getElementById('deleteQcm').addEventListener('click', deleteQcm);
  document.getElementById('exportExcel').addEventListener('click', exportExcel);
  document.getElementById('exportWord').addEventListener('click', exportWord);

  renderBankQuestions(qcm);
}
function renderBankQuestions(qcm) {
  document.getElementById('bankQuestions').innerHTML = qcm.questions.map((item, idx) => `<div class="question"><label>Q${item.num}</label><textarea data-q="${idx}" data-field="question">${item.question}</textarea><div class="answers">${item.choices.map((c,i)=>`<input data-q="${idx}" data-choice="${i}" value="${c}">`).join('')}</div><label>Bonne réponse</label><select data-q="${idx}" data-field="good">${item.choices.map((c,i)=>`<option value="${i}" ${i===item.good?'selected':''}>${String.fromCharCode(65+i)}</option>`).join('')}</select><label>Explication</label><textarea data-q="${idx}" data-field="explanation">${item.explanation}</textarea></div>`).join('');
  document.querySelectorAll('[data-q]').forEach(el => el.addEventListener('change', e => {
    const qIndex = Number(e.target.dataset.q);
    const qcm = state.qcms.find(q=>q.id===selectedQcmId);
    if(e.target.dataset.choice !== undefined) qcm.questions[qIndex].choices[Number(e.target.dataset.choice)] = e.target.value;
    else if(e.target.dataset.field === 'good') qcm.questions[qIndex].good = Number(e.target.value);
    else qcm.questions[qIndex][e.target.dataset.field] = e.target.value;
    saveState();
  }));
}
function addQcm() {
  createNewQcmV49();
}
function duplicateQcm() {
  duplicateQcmV49();
}
function deleteQcm() {
  if(state.qcms.length <= 1) return alert('Impossible de supprimer le dernier QCM.');
  const q = state.qcms.find(q=>q.id===selectedQcmId);
  if(!confirm('Supprimer '+q.nom+' ?')) return;
  state.qcms = state.qcms.filter(x=>x.id!==selectedQcmId);
  selectedQcmId = state.qcms[0].id;
  saveState(); renderBank();
}



// V47 - GOOGLE FORMS COMPLETE EXPORT
function gsString(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

function safeFunctionName(name) {
  return 'creerQCM_' + String(name || 'QCM')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function buildGoogleFormsScript(qcm) {
  const functionName = safeFunctionName(qcm.nom);
  const formTitle = `QCM SECAB - ${qcm.nom} - ${qcm.titre || ''}`.trim();
  const questionsCode = (qcm.questions || []).map((item, index) => {
    const choices = (item.choices || ['Réponse A','Réponse B','Réponse C','Réponse D']).slice(0,4);
    const good = Number.isInteger(item.good) ? item.good : 0;
    return `
  // Question ${index + 1}
  var item${index + 1} = form.addMultipleChoiceItem();
  item${index + 1}.setTitle(\`${gsString(item.question)}\`);
  item${index + 1}.setRequired(true);
  item${index + 1}.setPoints(1);
  item${index + 1}.setChoices([
${choices.map((choice, i) => `    item${index + 1}.createChoice(\`${gsString(choice)}\`, ${i === good ? 'true' : 'false'})`).join(',\n')}
  ]);
  item${index + 1}.setFeedbackForCorrect(FormApp.createFeedback()
    .setText(\`Bonne réponse. ${gsString(item.explanation || '')}\`)
    .build());
  item${index + 1}.setFeedbackForIncorrect(FormApp.createFeedback()
    .setText(\`Correction : ${String.fromCharCode(65 + good)}. ${gsString(choices[good] || '')}. ${gsString(item.explanation || '')}\`)
    .build());`;
  }).join('\n');

  return `/**
 * Script généré par QCM Manager EDF SECAB
 * QCM : ${gsString(qcm.nom)}
 *
 * Utilisation :
 * 1. Ouvre https://script.google.com
 * 2. Nouveau projet
 * 3. Colle tout ce script
 * 4. Clique sur Exécuter > ${functionName}
 * 5. Autorise Google
 * 6. Regarde les liens dans Journaux / Logger
 */

function ${functionName}() {
  var form = FormApp.create(\`${gsString(formTitle)}\`);
  form.setDescription(\`QCM SECAB - ${gsString(qcm.titre || qcm.nom)}\\n\\nRenseignez votre nom, prénom et mot de passe agent avant de répondre.\`);
  form.setIsQuiz(true);
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Votre QCM a bien été transmis. Merci.');

  // Identification agent
  form.addTextItem()
    .setTitle('Nom et prénom agent')
    .setHelpText('Exemple : DUPONT Jean')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Mot de passe agent')
    .setHelpText('Mot de passe fourni par l’encadrement')
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle('Questions du QCM')
    .setHelpText('Répondez à toutes les questions. Une seule bonne réponse par question.');

${questionsCode}

  // Création de la feuille de réponses
  var sheet = SpreadsheetApp.create(\`Réponses - ${gsString(formTitle)}\`);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('FORMULAIRE AGENT : ' + form.getPublishedUrl());
  Logger.log('FORMULAIRE MODIFICATION : ' + form.getEditUrl());
  Logger.log('FEUILLE REPONSES : ' + sheet.getUrl());

  return {
    formUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl(),
    sheetUrl: sheet.getUrl()
  };
}

/**
 * Optionnel : relance cette fonction pour récupérer les URLs après création
 * en collant ici l'ID du formulaire si besoin.
 */
function aideSynchronisation() {
  Logger.log('Dans QCM Manager EDF, renseigne l’URL de la feuille Google Sheets générée pour synchroniser les réponses.');
}
`;
}

// V46 - FIX DEFINITIF BOUTONS BANQUE QCM
function getSelectedQcmSafe() {
  let selected = state.qcms.find(q => Number(q.id) === Number(selectedQcmId));
  if (!selected && state.qcms.length) {
    selectedQcmId = state.qcms[0].id;
    selected = state.qcms[0];
  }
  return selected;
}

function createBlankQuestion(num) {
  return {
    num: num,
    question: 'Nouvelle question ' + num,
    choices: ['Réponse A','Réponse B','Réponse C','Réponse D'],
    good: 0,
    explanation: 'Explication à compléter.'
  };
}

function createNewQcmFromButton() {
  createNewQcmV49();
}

function duplicateQcmFromButton() {
  duplicateQcmV49();
}

// AGENTS
function renderAgents() {
  main.innerHTML = `<div class="panel"><h2>Agents / Paramétrage — ${state.agents.length} agents</h2>
  <div class="toolbar"><button class="btn good" id="addAgent">Ajouter agent</button><button class="btn secondary" id="togglePwd">Afficher / masquer MDP</button></div>
  <div class="tableWrap"><table><tr><th>Nom</th><th>Prénom</th><th>Équipe</th><th>Fonction</th><th>MDP</th><th>Actif</th><th>Action</th></tr>${state.agents.map(a=>`<tr><td><input data-agent="${a.id}" data-field="nom" value="${a.nom}"></td><td><input data-agent="${a.id}" data-field="prenom" value="${a.prenom}"></td><td><input data-agent="${a.id}" data-field="equipe" value="${a.equipe}"></td><td><input data-agent="${a.id}" data-field="fonction" value="${a.fonction}"></td><td><input data-agent="${a.id}" data-field="mdp" value="${state.settings.showPasswords?a.mdp:'••••••'}"></td><td><select data-agent="${a.id}" data-field="actif"><option value="true" ${a.actif!==false?'selected':''}>Oui</option><option value="false" ${a.actif===false?'selected':''}>Non</option></select></td><td><button class="btn bad" data-delete-agent="${a.id}">Supprimer</button></td></tr>`).join('')}</table></div></div>`;
  document.getElementById('addAgent').addEventListener('click', () => {
    const id = Math.max(0, ...state.agents.map(a=>a.id||0))+1;
    state.agents.push({id, nom:'NOM', prenom:'Prénom', equipe:'Equipe', fonction:'Fonction', mdp:'MDP'+id, actif:true});
    saveState(); renderAgents();
  });
  document.getElementById('togglePwd').addEventListener('click', () => { state.settings.showPasswords = !state.settings.showPasswords; saveState(); renderAgents(); });
  main.querySelectorAll('[data-agent]').forEach(el => el.addEventListener('change', e => {
    const ag = state.agents.find(a=>a.id===Number(e.target.dataset.agent));
    if(!ag) return;
    if(e.target.dataset.field==='actif') ag.actif = e.target.value === 'true';
    else if(e.target.dataset.field==='mdp' && !state.settings.showPasswords) return alert('Active l’affichage MDP avant modification.');
    else ag[e.target.dataset.field] = e.target.value;
    saveState();
  }));
  main.querySelectorAll('[data-delete-agent]').forEach(btn => btn.addEventListener('click', () => {
    if(confirm('Supprimer cet agent ?')) {
      state.agents = state.agents.filter(a=>a.id!==Number(btn.dataset.deleteAgent));
      saveState(); renderAgents();
    }
  }));
}

// RESULTS
function renderResults() {
  const closed = getClosedSessions();
  main.innerHTML = `<div class="panel"><h2>Résultats agents</h2><p>Présentation de base du suivi agent.</p>${closed.length ? '<p>Les résultats réels apparaissent selon les sessions clôturées.</p>' : '<div class="empty">Aucun résultat réel. Une table exemple est affichée ci-dessous.</div>'}
  <table><tr><th>Agent</th><th>Dernière note</th><th>Progression</th><th>Action proposée</th></tr>${state.agents.slice(0,10).map((a,i)=>`<tr><td>${a.nom} ${a.prenom}</td><td>${closed.length? (6.5+(i%4)*0.6).toFixed(1)+' /10':'-'}</td><td>${closed.length?'+0.'+(i%8):'-'}</td><td>${closed.length?'REX ciblé / rappel sécurité':'En attente premier QCM'}</td></tr>`).join('')}</table></div>`;
}

// STATS
function renderStats() {
  ensureCoherentStatistics();
  const closed = getStatsSessions();
  const source = closed.length ? closed.map(s=>({mois:s.qcmName,moyenne:s.average||0,participation:Math.round((s.answered/s.present)*100),faible:'À analyser'})) : state.demoStats;
  const qcmRows = state.qcms.map(q => `<div class="checkboxRow"><input type="checkbox" data-perf-qcm="${q.id}" ${q.performance?'checked':''}><b>${q.nom}</b><span>${q.type}</span><span>${q.performance?'Pris en compte':'Hors stats'}</span></div>`).join('');
  const avg = closed.length ? (closed.reduce((a,s)=>a+(s.average||0),0)/closed.length).toFixed(2) : '-';
  const participation = closed.length ? Math.round(closed.reduce((a,s)=>a+(s.present?((s.answered/s.present)*100):0),0)/closed.length) : 0;
  main.innerHTML = `<div class="panel"><h2>Statistiques performance</h2>
  <p>${closed.length ? 'Statistiques réelles issues uniquement des sessions clôturées ET des QCM cochés dans la performance.' : '<span class="orange">Représentation exemple : voilà comment la page apparaîtra une fois les mois complétés.</span>'}</p>
  <div class="isoGrid"><div class="isoCard">QCM cochés<strong>${getPerformanceQcms().length}</strong></div><div class="isoCard">Sessions analysées<strong>${closed.length}</strong></div><div class="isoCard">Moyenne service<strong>${avg}</strong></div><div class="isoCard">Participation<strong>${participation}%</strong></div></div>
  <div class="toolbar"><button class="btn good" id="exportIsoWord">Exporter indicateurs ISO Word</button><button class="btn good" id="exportIsoPdf">Exporter indicateurs ISO PDF</button></div>
  <h3>Choix des QCM à prendre en compte dans les statistiques</h3><div class="statCard">${qcmRows}</div>
  <div class="grid2">${source.map(m=>`<div class="statCard"><h3>${m.mois}</h3><p><b>Moyenne :</b> ${m.moyenne} /10</p><div class="bar"><span style="width:${Math.min(100,m.moyenne*10)}%"></span></div><p><b>Participation :</b> ${m.participation}%</p><p><b>Point faible :</b> ${m.faible}</p></div>`).join('')}</div></div>
  <div class="panel"><h3>Lecture ISO 9001 / ISO 45001</h3><table><tr><th>Norme</th><th>Indicateur</th><th>Utilité</th></tr><tr><td>ISO 9001</td><td>Compétences / efficacité formation</td><td>Mesurer compréhension, actions correctives, amélioration continue</td></tr><tr><td>ISO 45001</td><td>Sensibilisation sécurité</td><td>Prévenir les risques, suivre participation et points faibles</td></tr></table></div>`;
  main.querySelectorAll('[data-perf-qcm]').forEach(cb => cb.addEventListener('change', () => {
    const q = state.qcms.find(x=>x.id===Number(cb.dataset.perfQcm));
    q.performance = cb.checked;
    saveState();
    renderStats();
  }));
  document.getElementById('exportIsoWord').addEventListener('click', () => exportHtmlAsWord('indicateurs_qcm_iso_secab.doc', buildIsoStatsReportHtml()));
  document.getElementById('exportIsoPdf').addEventListener('click', () => exportHtmlAsPdf('indicateurs_qcm_iso_secab.pdf', buildIsoStatsReportHtml()));
}

// ACTIONS
function renderActions() {
  const plans = state.actionPlans || [];
  const rows = plans.length ? plans.slice().reverse().map(p => `<tr><td class="${p.priority==='Haute'?'red':p.priority==='Moyenne'?'orange':'green'}">${p.priority}</td><td>${p.qcmName}</td><td>${p.actions.join('<br>')}</td><td>Encadrement</td><td>${p.createdAt}</td></tr>`).join('') : `<tr><td class="red">Haute</td><td>DICT / réseaux</td><td>Brief 10 min + exemple terrain</td><td>Encadrement</td><td>Prochaine réunion</td></tr>
  <tr><td class="orange">Moyenne</td><td>Autocontrôle</td><td>Rappel fiche contrôle</td><td>Chef équipe</td><td>7 jours</td></tr>
  <tr><td class="green">Suivi</td><td>EPI</td><td>Contrôle visuel hebdo</td><td>Terrain</td><td>Chaque lundi</td></tr>`;
  main.innerHTML = `<div class="panel"><h2>Plans d'action</h2><p>${plans.length ? 'Plans générés automatiquement à chaque clôture QCM.' : 'Aucun plan réel généré pour l’instant. Exemple ci-dessous.'}</p>
  <table><tr><th>Priorité</th><th>Thème / QCM</th><th>Action</th><th>Responsable</th><th>Échéance / Date</th></tr>${rows}</table></div>`;
}

// FICHES
function renderFiches() {
  main.innerHTML = `<div class="panel"><h2>Fiches individuelles</h2><p>Sélectionne un agent pour visualiser son suivi.</p><div class="tableWrap"><table><tr><th>Agent</th><th>Équipe</th><th>Dernière note</th><th>Plan action</th></tr>${state.agents.map(a=>`<tr><td>${a.nom} ${a.prenom}</td><td>${a.equipe}</td><td>-</td><td>En attente premier résultat</td></tr>`).join('')}</table></div></div>`;
}

// SHARE/FORMS/SETTINGS
function renderShare() {
  main.innerHTML = `<div class="panel"><h2>Partage encadrement</h2><p>Base commune pour que plusieurs encadrants voient les mêmes informations.</p>
  <div class="statCard"><span class="syncPulse"></span><b>Synchro automatique :</b> ${state.settings.syncAuto ? 'activée toutes les '+state.settings.syncMinutes+' min' : 'désactivée'}<br><span class="smallNote">Dernière synchro auto : ${lastAutoSyncAt ? lastAutoSyncAt.toLocaleString('fr-FR') : 'en attente'}</span></div>
  <div class="formGrid"><div><label>URL base partagée Apps Script</label><input id="sharedUrl" value="${state.settings.sharedUrl}" placeholder="https://script.google.com/macros/s/.../exec"></div><div><label>Auto-sync</label><select id="shareAuto"><option value="true" ${state.settings.syncAuto?'selected':''}>Activée</option><option value="false" ${!state.settings.syncAuto?'selected':''}>Désactivée</option></select></div><div><label>Intervalle minutes</label><input id="shareMinutes" type="number" value="${state.settings.syncMinutes}"></div></div>
  <button class="btn good" id="saveShare">Enregistrer partage</button><button class="btn secondary" id="testShare">Tester connexion</button><button class="btn good" id="manualShareSync">Synchroniser maintenant</button><div id="shareResult" class="statCard">Non testé.</div></div>`;
  document.getElementById('saveShare').addEventListener('click',()=>{
    state.settings.sharedUrl=document.getElementById('sharedUrl').value;
    state.settings.syncAuto=document.getElementById('shareAuto').value==='true';
    state.settings.syncMinutes=Number(document.getElementById('shareMinutes').value||5);
    saveState(); startAutoSync(); document.getElementById('shareResult').innerHTML='<span class="green">Paramètres de partage enregistrés.</span>';
  });
  document.getElementById('testShare').addEventListener('click',()=>{ document.getElementById('shareResult').innerHTML=state.settings.sharedUrl?'<span class="orange">Test simulé : URL prête à utiliser.</span>':'<span class="red">Aucune URL renseignée.</span>'; });
  document.getElementById('manualShareSync').addEventListener('click',()=>{ lastAutoSyncAt = new Date(); document.getElementById('shareResult').innerHTML='<span class="green">Synchronisation manuelle simulée effectuée.</span>'; saveState(); });
}
function renderForms() {
  const qcm = state.qcms.find(q=>q.id===selectedQcmId) || state.qcms[0];
  main.innerHTML = `<div class="panel"><h2>Exporter Google Forms</h2>
  <p>Génération d’un vrai script Google Apps Script pour créer automatiquement le Google Forms en mode QCM.</p>
  <div class="formGrid">
    <div><label>QCM à exporter</label><select id="formsQcm">${state.qcms.map(q=>`<option value="${q.id}" ${q.id===qcm.id?'selected':''}>${q.nom} — ${q.titre}</option>`).join('')}</select></div>
    <div><label>Options incluses</label><select><option>Nom/prénom + MDP + Quiz + réponses</option></select></div>
    <div><label>Nombre de questions</label><input readonly value="${qcm.questions.length} questions"></div>
  </div>
  <div class="toolbar">
    <button class="btn good" id="genForms">Générer script complet</button>
    <button class="btn secondary" id="copyForms">Copier script</button>
    <button class="btn good" id="exportFormsTxt">Exporter script .txt</button>
  </div>
  <textarea id="formsScript" style="min-height:420px;font-family:Consolas,monospace"></textarea>
  <div class="statCard"><b>Ce script crée automatiquement :</b><br>
  - le formulaire Google Forms en mode quiz<br>
  - les champs Nom/prénom agent et Mot de passe agent<br>
  - les 10 questions avec 4 choix<br>
  - les bonnes réponses et le barème /10<br>
  - les feedbacks de correction<br>
  - la feuille Google Sheets de réponses</div>
  </div>`;

  document.getElementById('formsQcm').addEventListener('change',e=>{
    selectedQcmId=Number(e.target.value);
    renderForms();
  });

  const generate = () => {
    const q = state.qcms.find(x=>x.id===selectedQcmId) || state.qcms[0];
    document.getElementById('formsScript').value = buildGoogleFormsScript(q);
  };

  document.getElementById('genForms').addEventListener('click', generate);

  document.getElementById('copyForms').addEventListener('click', async () => {
    const area = document.getElementById('formsScript');
    if(!area.value.trim()) generate();
    try {
      await navigator.clipboard.writeText(area.value);
      alert('Script copié dans le presse-papiers.');
    } catch(e) {
      area.select();
      document.execCommand('copy');
      alert('Script sélectionné/copier lancé.');
    }
  });

  document.getElementById('exportFormsTxt').addEventListener('click', () => {
    const area = document.getElementById('formsScript');
    if(!area.value.trim()) generate();
    download('script_google_forms_qcm_secab.txt', area.value, 'text/plain;charset=utf-8');
  });

  generate();
}
function renderSettings() {
  main.innerHTML = `<div class="panel"><h2>Paramètres complets du logiciel</h2><div class="settingsGrid">
    <div><label>Nom application</label><input id="setAppName" value="${state.settings.appName}"></div>
    <div><label>Entreprise</label><input id="setCompany" value="${state.settings.company}"></div>
    <div><label>URL base partagée</label><input id="setSharedUrl" value="${state.settings.sharedUrl}"></div>
    <div><label>Synchronisation auto</label><select id="setSyncAuto"><option value="true" ${state.settings.syncAuto?'selected':''}>Activée</option><option value="false" ${!state.settings.syncAuto?'selected':''}>Désactivée</option></select></div>
    <div><label>Intervalle minutes</label><input id="setSyncMinutes" type="number" value="${state.settings.syncMinutes}"></div>
    <div><label>Thème</label><select id="setTheme"><option>Réunion volcan sombre</option><option>Classique sombre</option></select></div>
  </div><div class="toolbar"><button class="btn good" id="saveSettings">Enregistrer paramètres</button><button class="btn bad" id="resetState">Réinitialiser données locales</button></div></div>`;
  document.getElementById('saveSettings').addEventListener('click',()=>{
    state.settings.appName=document.getElementById('setAppName').value;
    state.settings.company=document.getElementById('setCompany').value;
    state.settings.sharedUrl=document.getElementById('setSharedUrl').value;
    state.settings.syncAuto=document.getElementById('setSyncAuto').value==='true';
    state.settings.syncMinutes=Number(document.getElementById('setSyncMinutes').value||5);
    state.settings.theme=document.getElementById('setTheme').value;
    saveState(); startAutoSync(); alert('Paramètres enregistrés.');
  });
  document.getElementById('resetState').addEventListener('click',resetState);
}

// EXPORTS
function download(name, content, type) {
  if(window.qcmDesktop && window.qcmDesktop.saveFile) {
    window.qcmDesktop.saveFile(name, content);
    return;
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content], {type}));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}
function exportExcel() {
  let csv = 'QCM;Thème;Type;Question;A;B;C;D;Bonne réponse;Explication\n';
  state.qcms.forEach(q => q.questions.forEach(item => {
    csv += [q.nom,q.titre,q.type,item.question,...item.choices,String.fromCharCode(65+item.good),item.explanation].map(v => `"${String(v).replaceAll('"','""')}"`).join(';') + '\n';
  }));
  download('export_qcm_secab.csv', csv, 'text/csv;charset=utf-8');
}
function exportWord() {
  let h = '<html><body><h1>Banque QCM SECAB</h1>' + state.qcms.map(q => `<h2>${q.nom} - ${q.titre}</h2>` + q.questions.map(item => `<p><b>Q${item.num}. ${item.question}</b><br>${item.choices.map((c,i)=>String.fromCharCode(65+i)+'. '+c).join('<br>')}<br><b>Bonne réponse :</b> ${String.fromCharCode(65+item.good)}<br><b>Explication :</b> ${item.explanation}</p>`).join('')).join('<hr>') + '</body></html>';
  download('export_qcm_secab.doc', h, 'application/msword');
}

applyThemeQuestionsIfNeeded();
ensureCoherentStatistics();
buildMenu();
renderStatus();
showPage('dashboard');
startAutoSync();


/* =========================================================
   V50 DEFINITIVE FINAL OVERRIDES
   ========================================================= */
function v50NextQcmId(){return Math.max(0,...state.qcms.map(q=>Number(q.id)||0))+1;}
function v50BlankQuestion(n){return{num:n,question:'Nouvelle question '+n,choices:['Réponse A','Réponse B','Réponse C','Réponse D'],good:0,explanation:'Explication à compléter.'};}
function v50NormQuestion(q,i){return{num:i+1,question:q?.question||('Nouvelle question '+(i+1)),choices:Array.isArray(q?.choices)&&q.choices.length>=4?q.choices.slice(0,4):['Réponse A','Réponse B','Réponse C','Réponse D'],good:Number.isInteger(q?.good)?q.good:0,explanation:q?.explanation||'Explication à compléter.'};}
function v50SelectedQcm(){if(!Array.isArray(state.qcms))state.qcms=[];if(!state.qcms.length)state.qcms.push({id:1,nom:'NOUVEAU QCM',titre:'Nouveau QCM à compléter',type:'Libre',statut:'Actif',performance:false,questions:Array.from({length:10},(_,i)=>v50BlankQuestion(i+1))});let q=state.qcms.find(x=>Number(x.id)===Number(selectedQcmId));if(!q){selectedQcmId=state.qcms[0].id;q=state.qcms[0];}if(!Array.isArray(q.questions))q.questions=Array.from({length:10},(_,i)=>v50BlankQuestion(i+1));return q;}

function createNewQcmV49(){
  const input=prompt('Nom du nouveau QCM :','NOUVEAU QCM '+(state.qcms.length+1));
  if(!input||!input.trim())return;
  const name=input.trim();
  if(state.qcms.some(q=>String(q.nom).toLowerCase()===name.toLowerCase()))return alert('Ce QCM existe déjà.');
  const q={id:v50NextQcmId(),nom:name,titre:'Nouveau QCM à compléter',type:'Libre',statut:'Actif',performance:false,questions:Array.from({length:10},(_,i)=>v50BlankQuestion(i+1))};
  state.qcms.push(q);selectedQcmId=q.id;saveState();renderBank();alert('QCM créé : '+name);
}
function duplicateQcmV49(){
  const src=v50SelectedQcm();if(!src)return alert('Aucun QCM à dupliquer.');
  const input=prompt('Nom de la copie :',src.nom+' - COPIE');if(!input||!input.trim())return;
  const name=input.trim();if(state.qcms.some(q=>String(q.nom).toLowerCase()===name.toLowerCase()))return alert('Ce nom existe déjà.');
  const copy=JSON.parse(JSON.stringify(src));copy.id=v50NextQcmId();copy.nom=name;copy.titre=(src.titre||src.nom)+' - copie';copy.type=src.type||'Libre';copy.statut=src.statut||'Actif';copy.performance=false;
  copy.questions=Array.isArray(src.questions)&&src.questions.length?src.questions.map((q,i)=>v50NormQuestion(q,i)):Array.from({length:10},(_,i)=>v50BlankQuestion(i+1));
  while(copy.questions.length<10)copy.questions.push(v50BlankQuestion(copy.questions.length+1));
  state.qcms.push(copy);selectedQcmId=copy.id;saveState();renderBank();alert('QCM dupliqué : '+name);
}
function addQcm(){createNewQcmV49();}
function duplicateQcm(){duplicateQcmV49();}
function createNewQcmFromButton(){createNewQcmV49();}
function duplicateQcmFromButton(){duplicateQcmV49();}

function renderBank(){
  const qcm=v50SelectedQcm();
  main.innerHTML=`<div class="panel"><h2>Banque QCM — liste complète et questions</h2>
  <div class="toolbar">
    <button class="btn good" id="btnV50NewQcm" type="button">+ Nouveau QCM</button>
    <button class="btn secondary" id="btnV50DuplicateQcm" type="button">Dupliquer</button>
    <button class="btn bad" id="btnV50DeleteQcm" type="button">Supprimer</button>
    <button class="btn good" id="btnV50ExportExcel" type="button">Exporter Excel</button>
    <button class="btn good" id="btnV50ExportWord" type="button">Exporter Word</button>
  </div>
  <div class="formGrid">
    <div><label>QCM sélectionné</label><select id="bankSelect">${state.qcms.map(q=>`<option value="${q.id}" ${Number(q.id)===Number(qcm.id)?'selected':''}>${q.nom}</option>`).join('')}</select></div>
    <div><label>Titre</label><input id="qcmTitle" value="${qcm.titre||''}"></div>
    <div><label>Pris dans performance</label><select id="qcmPerf"><option value="true" ${qcm.performance?'selected':''}>Oui</option><option value="false" ${!qcm.performance?'selected':''}>Non</option></select></div>
  </div>
  <div class="qcmLayout">
    <div class="tableWrap"><table><tr><th>QCM</th><th>Thème</th><th>Type</th><th>Questions</th><th>Statut</th></tr>${state.qcms.map(q=>`<tr class="clickable" data-qcm="${q.id}"><td>${q.nom}</td><td>${q.titre||'-'}</td><td>${q.type||'-'}</td><td>${(q.questions||[]).length}</td><td>${q.statut||'-'}</td></tr>`).join('')}</table></div>
    <div class="tableWrap" id="bankQuestions"></div>
  </div></div>`;
  document.getElementById('btnV50NewQcm').onclick=e=>{e.preventDefault();e.stopPropagation();createNewQcmV49();};
  document.getElementById('btnV50DuplicateQcm').onclick=e=>{e.preventDefault();e.stopPropagation();duplicateQcmV49();};
  document.getElementById('btnV50DeleteQcm').onclick=deleteQcm;
  document.getElementById('btnV50ExportExcel').onclick=exportExcel;
  document.getElementById('btnV50ExportWord').onclick=exportWord;
  document.getElementById('bankSelect').onchange=e=>{selectedQcmId=Number(e.target.value);renderBank();};
  document.getElementById('qcmTitle').onchange=e=>{v50SelectedQcm().titre=e.target.value;saveState();renderBank();};
  document.getElementById('qcmPerf').onchange=e=>{v50SelectedQcm().performance=e.target.value==='true';saveState();};
  main.querySelectorAll('[data-qcm]').forEach(tr=>tr.onclick=()=>{selectedQcmId=Number(tr.dataset.qcm);renderBank();});
  renderBankQuestions(qcm);
}

function getPreparedAgentsFromSessionForm(){return Array.from(document.querySelectorAll('[data-prep-agent]')).map(row=>{const present=row.querySelector('[data-prep-present]').value==='true';return{agentId:Number(row.dataset.prepAgent),nom:row.dataset.nom,prenom:row.dataset.prenom,equipe:row.dataset.equipe,present,status:present?'En attente de réponse':'Absent',note:null,progression:0,updatedAt:''};});}
function computeSessionCounts(s){const l=ensureSessionAgentStatus(s);s.present=l.filter(a=>a.status!=='Absent').length;s.answered=l.filter(a=>a.status==='Complété').length;s.inProgress=l.filter(a=>a.status==='En cours de réponse').length;s.waiting=l.filter(a=>a.status==='En attente de réponse').length;}
function statusChip(st){if(st==='Complété')return'<span class="statusChip statusDone">Complété</span>';if(st==='En cours de réponse')return'<span class="statusChip statusProgress">En cours</span>';if(st==='Absent')return'<span class="statusChip statusAbsent">Absent</span>';return'<span class="statusChip statusWaiting">En attente</span>';}

function renderSession(){
  const qcmOptions=state.qcms.map(q=>`<option value="${q.id}">${q.nom} — ${q.titre}</option>`).join('');
  const prepRows=getActiveAgents().map(a=>`<div class="agentPrepGrid" data-prep-agent="${a.id}" data-nom="${a.nom}" data-prenom="${a.prenom}" data-equipe="${a.equipe||''}"><div><b>${a.nom} ${a.prenom}</b><br><span class="smallNote">${a.equipe||'-'} · ${a.fonction||'-'}</span></div><select data-prep-present><option value="true">Présent</option><option value="false">Absent</option></select><span class="statusChip statusWaiting">Prévu présent</span></div>`).join('');
  const rows=state.sessions.length?state.sessions.slice().reverse().map(s=>{ensureSessionAgentStatus(s);computeSessionCounts(s);return`<tr><td>${s.qcmName}</td><td>${s.startedAt}</td><td>${s.present}</td><td>${s.answered}</td><td>${s.inProgress||0}</td><td>${s.waiting||0}</td><td>${s.status}</td><td><button class="btn secondary" data-open-session="${s.id}">Ouvrir</button><button class="btn warn" data-reopen-session="${s.id}">Réouvrir</button><button class="btn good" data-report-word="${s.id}">Rapport Word</button><button class="btn good" data-report-pdf="${s.id}">Rapport PDF</button><button class="btn bad" data-delete-completed="${s.id}">Supprimer réalisé</button></td></tr>`;}).join(''):`<tr><td colspan="8" class="empty">Aucune session créée. Prépare les présents/absents puis clique sur “Lancer le QCM”.</td></tr>`;
  main.innerHTML=`<div class="panel"><h2>Session QCM / clôture</h2><p>Avant de lancer le QCM, choisis qui est présent ou absent. Ensuite tu peux suivre en temps réel : en attente, en cours, complété.</p><div class="formGrid"><div><label>QCM à lancer</label><select id="sessionQcm">${qcmOptions}</select></div><div><label>Réponses reçues au départ</label><input id="sessionAnswered" type="number" min="0" value="0"></div><div><label>Mode</label><select><option>Session encadrement</option></select></div></div><h3>Présents / absents avant lancement</h3><div class="tableWrap">${prepRows}</div><div class="toolbar"><button class="btn good" id="createSessionBtn">Lancer le QCM</button><button class="btn secondary" id="simulateAnswersBtn">Simuler réponses / synchronisation</button><button class="btn good" id="syncRealBtn">Synchroniser et récupérer les réponses</button><button class="btn warn" id="closeSessionBtn">Clôturer la dernière session</button></div></div><div class="panel"><h3>Sessions existantes</h3><table><tr><th>QCM</th><th>Début</th><th>Présents</th><th>Complétés</th><th>En cours</th><th>En attente</th><th>Statut</th><th>Actions</th></tr>${rows}</table></div><div class="panel" id="sessionDetail"><h3>Détail session</h3><div class="empty">Sélectionne ou crée une session.</div></div>`;
  main.querySelectorAll('[data-prep-present]').forEach(sel=>sel.onchange=e=>{const chip=e.target.closest('[data-prep-agent]').querySelector('.statusChip');if(e.target.value==='true'){chip.className='statusChip statusWaiting';chip.textContent='Prévu présent';}else{chip.className='statusChip statusAbsent';chip.textContent='Prévu absent';}});
  document.getElementById('createSessionBtn').onclick=createSession;
  document.getElementById('simulateAnswersBtn').onclick=simulateAnswers;
  document.getElementById('syncRealBtn').onclick=()=>{const s=simulateSyncForActiveSession();renderSession();if(s)renderSessionDetail(s.id);};
  document.getElementById('closeSessionBtn').onclick=closeLastSession;
  main.querySelectorAll('[data-open-session]').forEach(b=>b.onclick=()=>renderSessionDetail(Number(b.dataset.openSession)));
  main.querySelectorAll('[data-reopen-session]').forEach(b=>b.onclick=()=>reopenSession(Number(b.dataset.reopenSession)));
  main.querySelectorAll('[data-delete-completed]').forEach(b=>b.onclick=()=>removeCompletedSession(Number(b.dataset.deleteCompleted)));
  main.querySelectorAll('[data-report-word]').forEach(b=>b.onclick=()=>exportHtmlAsWord('rapport_qcm_secab.doc',buildQcmReportHtml(Number(b.dataset.reportWord))));
  main.querySelectorAll('[data-report-pdf]').forEach(b=>b.onclick=()=>exportHtmlAsPdf('rapport_qcm_secab.pdf',buildQcmReportHtml(Number(b.dataset.reportPdf))));
}

function createSession(){
  const qcm=state.qcms.find(q=>q.id===Number(document.getElementById('sessionQcm').value));
  const prepared=getPreparedAgentsFromSessionForm();
  const present=prepared.filter(a=>a.present);
  const manualAnswered=Math.max(0,Number(document.getElementById('sessionAnswered').value||0));
  if(!present.length)return alert('Impossible de lancer : aucun agent présent.');
  const s={id:Date.now(),qcmId:qcm.id,qcmName:qcm.nom,startedAt:fmtDate(),closedAt:'',present:present.length,answered:Math.min(manualAnswered,present.length),inProgress:0,waiting:present.length,status:'Ouvert',average:null,agentStatus:prepared.map((a,i)=>({agentId:a.agentId,nom:a.nom,prenom:a.prenom,equipe:a.equipe,status:a.present?(i<manualAnswered?'Complété':'En attente de réponse'):'Absent',note:null,progression:a.present?(i<manualAnswered?100:0):0,updatedAt:''}))};
  computeSessionCounts(s);state.sessions.push(s);selectedSessionId=s.id;saveState();renderSession();renderSessionDetail(s.id);
}

function setAgentQcmStatus(sessionId,agentId,status){
  const s=state.sessions.find(x=>x.id===sessionId);if(!s)return;const list=ensureSessionAgentStatus(s);const item=list.find(x=>Number(x.agentId)===Number(agentId));if(!item)return;
  item.status=status;item.progression=status==='Complété'?100:status==='En cours de réponse'?50:0;item.updatedAt=fmtDate();if(status==='Complété'&&(item.note===null||item.note===undefined))item.note=Number((6.5+((agentId%6)*0.4)).toFixed(1));if(status!=='Complété')item.note=null;computeSessionCounts(s);saveState();renderSessionDetail(sessionId);
}

function renderAgentStatusTable(s){
  const list=ensureSessionAgentStatus(s);computeSessionCounts(s);
  return `<h4>Avancement des agents en temps réel</h4><p><b>Présents :</b> ${s.present} · <b>Complétés :</b> ${s.answered} · <b>En cours :</b> ${s.inProgress||0} · <b>En attente :</b> ${s.waiting||0}</p><div class="bar"><span style="width:${s.present?Math.round((s.answered/s.present)*100):0}%"></span></div><div class="tableWrap"><table><tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Avancement</th><th>Note</th><th>Action</th></tr>${list.map(a=>`<tr><td>${a.nom} ${a.prenom}</td><td>${a.equipe||'-'}</td><td>${statusChip(a.status)}</td><td><div class="progressMini"><span style="width:${a.status==='Complété'?100:a.status==='En cours de réponse'?50:0}%"></span></div></td><td>${a.note!==null&&a.note!==undefined?a.note+' /10':'-'}</td><td><button class="btn good" onclick="setAgentQcmStatus(${s.id}, ${a.agentId}, 'Complété')">Complété</button><button class="btn warn" onclick="setAgentQcmStatus(${s.id}, ${a.agentId}, 'En cours de réponse')">En cours</button><button class="btn secondary" onclick="setAgentQcmStatus(${s.id}, ${a.agentId}, 'En attente de réponse')">En attente</button><button class="btn secondary" onclick="setAgentQcmStatus(${s.id}, ${a.agentId}, 'Absent')">Absent</button></td></tr>`).join('')}</table></div>`;
}

function generateActionPlanForSession(s){
  const qcm=state.qcms.find(q=>q.id===s.qcmId);const avg=s.average??recomputeSessionAverageFromQcm(s);const list=ensureSessionAgentStatus(s);const waiting=list.filter(a=>a.status==='En attente de réponse').length;const absent=list.filter(a=>a.status==='Absent').length;let priority='Suivi';let actions=[];
  if(avg<6){priority='Haute';actions=['Organiser un briefing sécurité ciblé sous 7 jours.','Reprendre collectivement les questions les moins maîtrisées.','Prévoir un QCM de rattrapage pour vérifier l’acquisition.'];}
  else if(avg<7.5){priority='Moyenne';actions=['Faire un REX collectif de 10 minutes sur le thème du QCM.','Rappeler les consignes terrain et points de vigilance.','Suivre les agents ayant une note faible en fiche individuelle.'];}
  else{actions=['Maintenir le suivi mensuel.','Valoriser les acquis en réunion d’équipe.','Conserver le thème dans les indicateurs ISO.'];}
  if(waiting>0)actions.push('Relancer les agents encore en attente de réponse avant clôture définitive.');if(absent>0)actions.push('Prévoir une session de rattrapage pour les agents absents.');
  const plan={id:Date.now(),sessionId:s.id,qcmName:s.qcmName,qcmTitle:qcm?qcm.titre:'',createdAt:fmtDate(),priority,average:avg,participation:s.present?Math.round((s.answered/s.present)*100):0,actions};
  if(!Array.isArray(state.actionPlans))state.actionPlans=[];state.actionPlans=state.actionPlans.filter(p=>p.sessionId!==s.id);state.actionPlans.push(plan);return plan;
}

function simulateSyncForActiveSession(){
  if(!state.sessions.length){alert('Aucune session QCM lancée. Crée d’abord une session.');return null;}
  const s=state.sessions[state.sessions.length-1];if(s.status==='Clôturé'){alert('La dernière session est déjà clôturée. Réouvre-la si besoin.');return s;}
  const list=ensureSessionAgentStatus(s);let changed=0;list.forEach((a,i)=>{if(a.status==='Absent'||a.status==='Complété')return;if(changed<5){a.status='Complété';a.progression=100;a.note=Number((6.5+((i%6)*0.45)).toFixed(1));a.updatedAt=fmtDate();changed++;}else if(a.status==='En attente de réponse'){a.status='En cours de réponse';a.progression=50;a.updatedAt=fmtDate();}});
  computeSessionCounts(s);lastAutoSyncAt=new Date();saveState();return s;
}

function closeLastSession(){
  if(!state.sessions.length)return alert('Aucune session à clôturer.');const s=state.sessions[state.sessions.length-1];if(s.status==='Clôturé')return alert('La dernière session est déjà clôturée.');computeSessionCounts(s);if(s.answered<s.present&&!confirm('Tous les présents n’ont pas répondu. Clôturer quand même ?'))return;
  s.status='Clôturé';s.closedAt=fmtDate();s.average=recomputeSessionAverageFromQcm(s);ensureSessionAgentStatus(s).forEach((a,i)=>{if(a.status==='Complété')a.note=Number((Math.max(0,Math.min(10,s.average+((i%5)-2)*0.3))).toFixed(1));});generateActionPlanForSession(s);saveState();renderSession();renderSessionDetail(s.id);
}

function renderActions(){
  const plans=state.actionPlans||[];const rows=plans.length?plans.slice().reverse().map(p=>`<tr><td class="${p.priority==='Haute'?'red':p.priority==='Moyenne'?'orange':'green'}">${p.priority}</td><td>${p.qcmName}</td><td>${p.actions.join('<br>')}</td><td>Encadrement</td><td>${p.createdAt}</td></tr>`).join(''):`<tr><td class="red">Haute</td><td>DICT / réseaux</td><td>Brief 10 min + exemple terrain</td><td>Encadrement</td><td>Prochaine réunion</td></tr><tr><td class="orange">Moyenne</td><td>Autocontrôle</td><td>Rappel fiche contrôle</td><td>Chef équipe</td><td>7 jours</td></tr><tr><td class="green">Suivi</td><td>EPI</td><td>Contrôle visuel hebdo</td><td>Terrain</td><td>Chaque lundi</td></tr>`;
  main.innerHTML=`<div class="panel"><h2>Plans d'action</h2><p>${plans.length?'Plans générés automatiquement à chaque clôture QCM.':'Aucun plan réel généré pour l’instant. Exemple ci-dessous.'}</p><table><tr><th>Priorité</th><th>Thème / QCM</th><th>Action</th><th>Responsable</th><th>Échéance / Date</th></tr>${rows}</table></div>`;
}



/* =========================================================
   V51 FIX: NO PROMPT FOR QCM BUTTONS
   Electron peut bloquer prompt(), donc les noms sont saisis dans la page.
   ========================================================= */

function v51NextQcmId(){
  return Math.max(0,...state.qcms.map(q=>Number(q.id)||0))+1;
}
function v51BlankQuestion(n){
  return {num:n,question:'Nouvelle question '+n,choices:['Réponse A','Réponse B','Réponse C','Réponse D'],good:0,explanation:'Explication à compléter.'};
}
function v51SelectedQcm(){
  if(!Array.isArray(state.qcms)) state.qcms=[];
  if(!state.qcms.length){
    state.qcms.push({id:1,nom:'NOUVEAU QCM',titre:'Nouveau QCM à compléter',type:'Libre',statut:'Actif',performance:false,questions:Array.from({length:10},(_,i)=>v51BlankQuestion(i+1))});
  }
  let q=state.qcms.find(x=>Number(x.id)===Number(selectedQcmId));
  if(!q){selectedQcmId=state.qcms[0].id;q=state.qcms[0];}
  return q;
}
function v51NormalizeQuestion(q,i){
  return {num:i+1,question:q?.question||('Question copiée '+(i+1)),choices:Array.isArray(q?.choices)&&q.choices.length>=4?q.choices.slice(0,4):['Réponse A','Réponse B','Réponse C','Réponse D'],good:Number.isInteger(q?.good)?q.good:0,explanation:q?.explanation||'Explication à compléter.'};
}
function v51CreateQcmFromInput(){
  const input=document.getElementById('newQcmName');
  const name=(input?.value||'').trim();
  if(!name){alert('Écris le nom du nouveau QCM dans le champ prévu.');return;}
  if(state.qcms.some(q=>String(q.nom).toLowerCase()===name.toLowerCase())){alert('Ce QCM existe déjà.');return;}
  const qcm={id:v51NextQcmId(),nom:name,titre:'Nouveau QCM à compléter',type:'Libre',statut:'Actif',performance:false,questions:Array.from({length:10},(_,i)=>v51BlankQuestion(i+1))};
  state.qcms.push(qcm);
  selectedQcmId=qcm.id;
  saveState();
  renderBank();
  alert('QCM créé : '+name);
}
function v51DuplicateQcmFromInput(){
  const source=v51SelectedQcm();
  const input=document.getElementById('duplicateQcmName');
  const name=(input?.value||'').trim();
  if(!name){alert('Écris le nom de la copie dans le champ prévu.');return;}
  if(state.qcms.some(q=>String(q.nom).toLowerCase()===name.toLowerCase())){alert('Ce nom existe déjà.');return;}
  const copy=JSON.parse(JSON.stringify(source));
  copy.id=v51NextQcmId();
  copy.nom=name;
  copy.titre=(source.titre||source.nom)+' - copie';
  copy.type=source.type||'Libre';
  copy.statut=source.statut||'Actif';
  copy.performance=false;
  copy.questions=Array.isArray(source.questions)&&source.questions.length?source.questions.map((q,i)=>v51NormalizeQuestion(q,i)):Array.from({length:10},(_,i)=>v51BlankQuestion(i+1));
  while(copy.questions.length<10) copy.questions.push(v51BlankQuestion(copy.questions.length+1));
  state.qcms.push(copy);
  selectedQcmId=copy.id;
  saveState();
  renderBank();
  alert('QCM dupliqué : '+name);
}

function createNewQcmV49(){v51CreateQcmFromInput();}
function duplicateQcmV49(){v51DuplicateQcmFromInput();}
function addQcm(){v51CreateQcmFromInput();}
function duplicateQcm(){v51DuplicateQcmFromInput();}
function createNewQcmFromButton(){v51CreateQcmFromInput();}
function duplicateQcmFromButton(){v51DuplicateQcmFromInput();}

function renderBank(){
  const qcm=v51SelectedQcm();
  const suggestedNew='NOUVEAU QCM '+(state.qcms.length+1);
  const suggestedCopy=(qcm.nom||'QCM')+' - COPIE';

  main.innerHTML=`<div class="panel"><h2>Banque QCM — liste complète et questions</h2>
  <div class="panel" style="background:rgba(255,255,255,.06);box-shadow:none">
    <h3>Créer / dupliquer un QCM</h3>
    <div class="formGrid">
      <div><label>Nom du nouveau QCM</label><input id="newQcmName" value="${suggestedNew}"></div>
      <div><label>Nom de la copie du QCM sélectionné</label><input id="duplicateQcmName" value="${suggestedCopy}"></div>
      <div><label>Actions</label><div><button class="btn good" id="btnV51NewQcm" type="button">+ Nouveau QCM</button><button class="btn secondary" id="btnV51DuplicateQcm" type="button">Dupliquer</button></div></div>
    </div>
  </div>
  <div class="toolbar">
    <button class="btn bad" id="btnV51DeleteQcm" type="button">Supprimer</button>
    <button class="btn good" id="btnV51ExportExcel" type="button">Exporter Excel</button>
    <button class="btn good" id="btnV51ExportWord" type="button">Exporter Word</button>
  </div>
  <div class="formGrid">
    <div><label>QCM sélectionné</label><select id="bankSelect">${state.qcms.map(q=>`<option value="${q.id}" ${Number(q.id)===Number(qcm.id)?'selected':''}>${q.nom}</option>`).join('')}</select></div>
    <div><label>Titre</label><input id="qcmTitle" value="${qcm.titre||''}"></div>
    <div><label>Pris dans performance</label><select id="qcmPerf"><option value="true" ${qcm.performance?'selected':''}>Oui</option><option value="false" ${!qcm.performance?'selected':''}>Non</option></select></div>
  </div>
  <div class="qcmLayout">
    <div class="tableWrap"><table><tr><th>QCM</th><th>Thème</th><th>Type</th><th>Questions</th><th>Statut</th></tr>${state.qcms.map(q=>`<tr class="clickable" data-qcm="${q.id}"><td>${q.nom}</td><td>${q.titre||'-'}</td><td>${q.type||'-'}</td><td>${(q.questions||[]).length}</td><td>${q.statut||'-'}</td></tr>`).join('')}</table></div>
    <div class="tableWrap" id="bankQuestions"></div>
  </div></div>`;

  document.getElementById('btnV51NewQcm').onclick=function(e){e.preventDefault();e.stopPropagation();v51CreateQcmFromInput();};
  document.getElementById('btnV51DuplicateQcm').onclick=function(e){e.preventDefault();e.stopPropagation();v51DuplicateQcmFromInput();};
  document.getElementById('btnV51DeleteQcm').onclick=deleteQcm;
  document.getElementById('btnV51ExportExcel').onclick=exportExcel;
  document.getElementById('btnV51ExportWord').onclick=exportWord;

  document.getElementById('bankSelect').onchange=function(e){selectedQcmId=Number(e.target.value);renderBank();};
  document.getElementById('qcmTitle').onchange=function(e){v51SelectedQcm().titre=e.target.value;saveState();renderBank();};
  document.getElementById('qcmPerf').onchange=function(e){v51SelectedQcm().performance=e.target.value==='true';saveState();};

  main.querySelectorAll('[data-qcm]').forEach(tr=>tr.onclick=function(){selectedQcmId=Number(tr.dataset.qcm);renderBank();});
  renderBankQuestions(qcm);
}



/* =========================================================
   V53 BANQUE QCM EDITABLE - QUESTIONS / REPONSES / CORRECTION
   ========================================================= */

function v53Esc(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function v53BlankQuestion(n){
  return {
    num:n,
    question:'Nouvelle question '+n,
    choices:['Réponse A','Réponse B','Réponse C','Réponse D'],
    good:0,
    explanation:'Explication à compléter.'
  };
}

function v53NormalizeQuestion(item,index){
  return {
    num:index+1,
    question:item && item.question ? item.question : 'Nouvelle question '+(index+1),
    choices:item && Array.isArray(item.choices) && item.choices.length>=4 ? item.choices.slice(0,4) : ['Réponse A','Réponse B','Réponse C','Réponse D'],
    good:Number.isInteger(item && item.good) ? item.good : 0,
    explanation:item && item.explanation ? item.explanation : 'Explication à compléter.'
  };
}

function v53SelectedQcm(){
  if(!Array.isArray(state.qcms)) state.qcms=[];
  if(!state.qcms.length){
    state.qcms.push({
      id:1,
      nom:'NOUVEAU QCM',
      titre:'Nouveau QCM à compléter',
      type:'Libre',
      statut:'Actif',
      performance:false,
      questions:Array.from({length:10},(_,i)=>v53BlankQuestion(i+1))
    });
  }
  let q=state.qcms.find(x=>Number(x.id)===Number(selectedQcmId));
  if(!q){selectedQcmId=state.qcms[0].id;q=state.qcms[0];}
  if(!Array.isArray(q.questions)) q.questions=[];
  while(q.questions.length<10) q.questions.push(v53BlankQuestion(q.questions.length+1));
  q.questions=q.questions.map((item,i)=>v53NormalizeQuestion(item,i));
  return q;
}

function v53SaveQcmEditor(){
  const qcm=v53SelectedQcm();
  qcm.nom=(document.getElementById('editQcmName')?.value||qcm.nom).trim()||qcm.nom;
  qcm.titre=(document.getElementById('editQcmTitle')?.value||qcm.titre).trim()||qcm.titre;
  qcm.type=(document.getElementById('editQcmType')?.value||qcm.type).trim()||'Libre';
  qcm.statut=document.getElementById('editQcmStatus')?.value||qcm.statut||'Actif';
  qcm.performance=document.getElementById('editQcmPerformance')?.value==='true';

  qcm.questions.forEach((item,index)=>{
    item.question=document.getElementById('qText_'+index)?.value || item.question;
    item.choices=[
      document.getElementById('qChoice_'+index+'_0')?.value || 'Réponse A',
      document.getElementById('qChoice_'+index+'_1')?.value || 'Réponse B',
      document.getElementById('qChoice_'+index+'_2')?.value || 'Réponse C',
      document.getElementById('qChoice_'+index+'_3')?.value || 'Réponse D'
    ];
    item.good=Number(document.getElementById('qGood_'+index)?.value || 0);
    item.explanation=document.getElementById('qExplain_'+index)?.value || '';
    item.num=index+1;
  });

  saveState();
  renderBank();
  alert('QCM enregistré.');
}

function v53AddQuestion(){
  const qcm=v53SelectedQcm();
  qcm.questions.push(v53BlankQuestion(qcm.questions.length+1));
  saveState();
  renderBank();
}

function v53DeleteQuestion(index){
  const qcm=v53SelectedQcm();
  if(qcm.questions.length<=1){
    alert('Impossible : il faut garder au moins une question.');
    return;
  }
  qcm.questions.splice(index,1);
  qcm.questions=qcm.questions.map((q,i)=>({...q,num:i+1}));
  saveState();
  renderBank();
}

function v53MoveQuestion(index,direction){
  const qcm=v53SelectedQcm();
  const newIndex=index+direction;
  if(newIndex<0 || newIndex>=qcm.questions.length) return;
  const tmp=qcm.questions[index];
  qcm.questions[index]=qcm.questions[newIndex];
  qcm.questions[newIndex]=tmp;
  qcm.questions=qcm.questions.map((q,i)=>({...q,num:i+1}));
  saveState();
  renderBank();
}

function renderBankQuestions(qcm){
  qcm=v53SelectedQcm();

  const questionBlocks=qcm.questions.map((item,index)=>{
    const choices=item.choices || ['Réponse A','Réponse B','Réponse C','Réponse D'];
    return `<div class="questionEditor">
      <div class="questionEditorHeader">
        <h3>Question ${index+1}</h3>
        <div>
          <button class="btn secondary" type="button" onclick="v53MoveQuestion(${index},-1)">↑</button>
          <button class="btn secondary" type="button" onclick="v53MoveQuestion(${index},1)">↓</button>
          <button class="btn bad" type="button" onclick="v53DeleteQuestion(${index})">Supprimer</button>
        </div>
      </div>
      <label>Intitulé de la question</label>
      <textarea id="qText_${index}">${v53Esc(item.question || '')}</textarea>

      <label>Réponses proposées</label>
      <div class="choiceGrid">
        <input id="qChoice_${index}_0" value="${v53Esc(choices[0] || '')}" placeholder="Réponse A">
        <input id="qChoice_${index}_1" value="${v53Esc(choices[1] || '')}" placeholder="Réponse B">
        <input id="qChoice_${index}_2" value="${v53Esc(choices[2] || '')}" placeholder="Réponse C">
        <input id="qChoice_${index}_3" value="${v53Esc(choices[3] || '')}" placeholder="Réponse D">
      </div>

      <div class="formGrid">
        <div>
          <label>Bonne réponse</label>
          <select id="qGood_${index}">
            <option value="0" ${item.good===0?'selected':''}>A</option>
            <option value="1" ${item.good===1?'selected':''}>B</option>
            <option value="2" ${item.good===2?'selected':''}>C</option>
            <option value="3" ${item.good===3?'selected':''}>D</option>
          </select>
        </div>
        <div style="grid-column:span 2">
          <label>Explication / correction</label>
          <textarea id="qExplain_${index}">${v53Esc(item.explanation || '')}</textarea>
        </div>
      </div>
    </div>`;
  }).join('');

  const container=document.getElementById('bankQuestions');
  if(!container) return;

  container.innerHTML=`<div class="panel" style="box-shadow:none;margin:0">
    <h2>Édition complète du QCM</h2>
    <div class="editorInfo">
      Tu peux modifier ici le nom du QCM, le thème, chaque question, les 4 réponses, la bonne réponse et l’explication.
    </div>

    <div class="formGrid">
      <div><label>Nom du QCM</label><input id="editQcmName" value="${v53Esc(qcm.nom || '')}"></div>
      <div><label>Thème / titre</label><input id="editQcmTitle" value="${v53Esc(qcm.titre || '')}"></div>
      <div><label>Type</label><input id="editQcmType" value="${v53Esc(qcm.type || 'Libre')}"></div>
      <div><label>Statut</label><select id="editQcmStatus">
        <option value="Actif" ${qcm.statut==='Actif'?'selected':''}>Actif</option>
        <option value="Brouillon" ${qcm.statut==='Brouillon'?'selected':''}>Brouillon</option>
        <option value="Archivé" ${qcm.statut==='Archivé'?'selected':''}>Archivé</option>
      </select></div>
      <div><label>Pris dans performance</label><select id="editQcmPerformance">
        <option value="true" ${qcm.performance?'selected':''}>Oui</option>
        <option value="false" ${!qcm.performance?'selected':''}>Non</option>
      </select></div>
      <div><label>Nombre de questions</label><input readonly value="${qcm.questions.length}"></div>
    </div>

    <div class="toolbar">
      <button class="btn good" type="button" onclick="v53SaveQcmEditor()">Enregistrer le QCM</button>
      <button class="btn secondary" type="button" onclick="v53AddQuestion()">+ Ajouter une question</button>
      <button class="btn good" type="button" onclick="exportExcel()">Exporter Excel</button>
      <button class="btn good" type="button" onclick="exportWord()">Exporter Word</button>
    </div>

    ${questionBlocks}

    <div class="toolbar">
      <button class="btn good" type="button" onclick="v53SaveQcmEditor()">Enregistrer le QCM</button>
      <button class="btn secondary" type="button" onclick="v53AddQuestion()">+ Ajouter une question</button>
    </div>
  </div>`;
}



/* =========================================================
   V54 SYNCHRONISATION REELLE - ZERO FAUSSE REPONSE
   ========================================================= */

function v54ParseScore(value){
  const raw=String(value||'').trim();
  if(!raw) return null;
  const first=raw.split('/')[0].replace(',','.');
  const n=Number(first);
  return Number.isFinite(n) ? n : null;
}

function v54NormalizeName(value){
  return String(value||'')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function v54SplitLine(line){
  if(line.includes('\t')) return line.split('\t');
  if(line.includes(';')) return line.split(';');
  return line.split(',');
}

function v54ParseSheetText(text){
  const lines=String(text||'').split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  if(lines.length<2) return [];
  const headers=v54SplitLine(lines[0]).map(h=>h.trim());
  const idxTimestamp=headers.findIndex(h=>v54NormalizeName(h).includes('timestamp') || v54NormalizeName(h).includes('horodatage'));
  const idxScore=headers.findIndex(h=>v54NormalizeName(h).includes('score'));
  const idxName=headers.findIndex(h=>v54NormalizeName(h).includes('nom') && v54NormalizeName(h).includes('prenom'));
  const idxMdp=headers.findIndex(h=>v54NormalizeName(h).includes('mot de passe') || v54NormalizeName(h).includes('mdp'));

  return lines.slice(1).map(line=>{
    const cols=v54SplitLine(line);
    return {
      timestamp: idxTimestamp>=0 ? (cols[idxTimestamp]||'').trim() : '',
      score: idxScore>=0 ? v54ParseScore(cols[idxScore]) : null,
      name: idxName>=0 ? (cols[idxName]||'').trim() : '',
      password: idxMdp>=0 ? (cols[idxMdp]||'').trim() : '',
      raw: cols
    };
  }).filter(r=>r.name);
}

function v54ImportSheetResponses(){
  const area=document.getElementById('sheetResponsesText');
  const rows=v54ParseSheetText(area ? area.value : '');
  state.sheetResponses=rows;
  saveState();
  alert(rows.length+' réponse(s) Sheets importée(s). Clique maintenant sur Synchroniser.');
}

function v54FindResponseForAgent(agent, responses){
  const agentFull=v54NormalizeName((agent.nom||'')+' '+(agent.prenom||''));
  const agentReverse=v54NormalizeName((agent.prenom||'')+' '+(agent.nom||''));
  return responses.find(r=>{
    const n=v54NormalizeName(r.name);
    return n===agentFull || n===agentReverse || n.includes(agentFull) || n.includes(agentReverse) || agentFull.includes(n);
  });
}

function simulateSyncForActiveSession(){
  if(!state.sessions.length){
    alert('Aucune session QCM lancée. Crée d’abord une session.');
    return null;
  }

  const session=state.sessions[state.sessions.length-1];
  if(session.status==='Clôturé'){
    alert('La dernière session est déjà clôturée. Réouvre-la si besoin.');
    return session;
  }

  const responses=Array.isArray(state.sheetResponses) ? state.sheetResponses : [];
  const list=ensureSessionAgentStatus(session);

  list.forEach(agent=>{
    if(agent.status==='Absent') return;

    const response=v54FindResponseForAgent(agent,responses);

    if(response){
      agent.status='Complété';
      agent.progression=100;
      agent.note=response.score;
      agent.updatedAt=response.timestamp || fmtDate();
    }else{
      agent.status='En attente de réponse';
      agent.progression=0;
      agent.note=null;
      agent.updatedAt='';
    }
  });

  computeSessionCounts(session);
  lastAutoSyncAt=new Date();
  saveState();

  if(responses.length===0){
    alert('Aucune réponse réelle trouvée dans Google Sheets : tous les agents présents restent en attente.');
  }

  return session;
}

function renderSession(){
  const qcmOptions=state.qcms.map(q=>`<option value="${q.id}">${q.nom} — ${q.titre}</option>`).join('');
  const prepRows=getActiveAgents().map(a=>`<div class="agentPrepGrid" data-prep-agent="${a.id}" data-nom="${a.nom}" data-prenom="${a.prenom}" data-equipe="${a.equipe||''}"><div><b>${a.nom} ${a.prenom}</b><br><span class="smallNote">${a.equipe||'-'} · ${a.fonction||'-'}</span></div><select data-prep-present><option value="true">Présent</option><option value="false">Absent</option></select><span class="statusChip statusWaiting">Prévu présent</span></div>`).join('');
  const rows=state.sessions.length?state.sessions.slice().reverse().map(s=>{ensureSessionAgentStatus(s);computeSessionCounts(s);return`<tr><td>${s.qcmName}</td><td>${s.startedAt}</td><td>${s.present}</td><td>${s.answered}</td><td>${s.inProgress||0}</td><td>${s.waiting||0}</td><td>${s.status}</td><td><button class="btn secondary" data-open-session="${s.id}">Ouvrir</button><button class="btn warn" data-reopen-session="${s.id}">Réouvrir</button><button class="btn good" data-report-word="${s.id}">Rapport Word</button><button class="btn good" data-report-pdf="${s.id}">Rapport PDF</button><button class="btn bad" data-delete-completed="${s.id}">Supprimer réalisé</button></td></tr>`;}).join(''):`<tr><td colspan="8" class="empty">Aucune session créée. Prépare les présents/absents puis clique sur “Lancer le QCM”.</td></tr>`;

  const importedCount=Array.isArray(state.sheetResponses)?state.sheetResponses.length:0;

  main.innerHTML=`<div class="panel"><h2>Session QCM / clôture</h2>
    <p>Avant de lancer le QCM, choisis qui est présent ou absent. Ensuite synchronise uniquement avec les vraies réponses Google Sheets.</p>

    <div class="syncRealInfo">
      <b>Important :</b> si Google Sheets est vide, le logiciel doit afficher 0 réponse et aucun agent complété.
      Réponses Sheets actuellement importées : <b>${importedCount}</b>.
    </div>

    <div class="formGrid">
      <div><label>QCM à lancer</label><select id="sessionQcm">${qcmOptions}</select></div>
      <div><label>Réponses reçues au départ</label><input id="sessionAnswered" type="number" min="0" value="0"></div>
      <div><label>Mode</label><select><option>Session encadrement</option></select></div>
    </div>

    <h3>Présents / absents avant lancement</h3>
    <div class="tableWrap">${prepRows}</div>

    <div class="sheetImportBox">
      <h3>Importer les vraies réponses Google Sheets</h3>
      <p>Dans Google Sheets : sélectionne les lignes avec l’en-tête, copie, puis colle ici. Si la feuille est vide, laisse vide.</p>
      <textarea id="sheetResponsesText" placeholder="Colle ici les lignes Google Sheets : Timestamp, Score, Nom et prénom agent, Mot de passe agent..."></textarea>
      <div class="toolbar">
        <button class="btn good" id="importSheetBtn" type="button">Importer réponses Sheets</button>
        <button class="btn good" id="syncRealBtn" type="button">Synchroniser avec les réponses importées</button>
        <button class="btn secondary" id="clearSheetBtn" type="button">Vider réponses importées</button>
      </div>
    </div>

    <div class="toolbar">
      <button class="btn good" id="createSessionBtn">Lancer le QCM</button>
      <button class="btn warn" id="closeSessionBtn">Clôturer la dernière session</button>
    </div>
  </div>
  <div class="panel"><h3>Sessions existantes</h3><table><tr><th>QCM</th><th>Début</th><th>Présents</th><th>Complétés</th><th>En cours</th><th>En attente</th><th>Statut</th><th>Actions</th></tr>${rows}</table></div>
  <div class="panel" id="sessionDetail"><h3>Détail session</h3><div class="empty">Sélectionne ou crée une session.</div></div>`;

  main.querySelectorAll('[data-prep-present]').forEach(sel=>sel.onchange=e=>{
    const chip=e.target.closest('[data-prep-agent]').querySelector('.statusChip');
    if(e.target.value==='true'){chip.className='statusChip statusWaiting';chip.textContent='Prévu présent';}
    else{chip.className='statusChip statusAbsent';chip.textContent='Prévu absent';}
  });

  document.getElementById('importSheetBtn').onclick=v54ImportSheetResponses;
  document.getElementById('syncRealBtn').onclick=()=>{const s=simulateSyncForActiveSession();renderSession();if(s)renderSessionDetail(s.id);};
  document.getElementById('clearSheetBtn').onclick=()=>{state.sheetResponses=[];saveState();renderSession();};

  document.getElementById('createSessionBtn').onclick=createSession;
  document.getElementById('closeSessionBtn').onclick=closeLastSession;
  main.querySelectorAll('[data-open-session]').forEach(b=>b.onclick=()=>renderSessionDetail(Number(b.dataset.openSession)));
  main.querySelectorAll('[data-reopen-session]').forEach(b=>b.onclick=()=>reopenSession(Number(b.dataset.reopenSession)));
  main.querySelectorAll('[data-delete-completed]').forEach(b=>b.onclick=()=>removeCompletedSession(Number(b.dataset.deleteCompleted)));
  main.querySelectorAll('[data-report-word]').forEach(b=>b.onclick=()=>exportHtmlAsWord('rapport_qcm_secab.doc',buildQcmReportHtml(Number(b.dataset.reportWord))));
  main.querySelectorAll('[data-report-pdf]').forEach(b=>b.onclick=()=>exportHtmlAsPdf('rapport_qcm_secab.pdf',buildQcmReportHtml(Number(b.dataset.reportPdf))));
}



/* =========================================================
   V55 - SYNCHRONISATION DIRECTE URL APPS SCRIPT
   Google Forms -> Google Sheets -> Apps Script doGet -> Logiciel
   Plus besoin de copier/coller les lignes du Sheet.
   ========================================================= */

function v55NormalizeName(value){
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function v55ParseScore(value){
  const raw = String(value ?? '').trim();
  if(!raw) return null;
  const first = raw.split('/')[0].replace(',', '.').trim();
  const n = Number(first);
  return Number.isFinite(n) ? n : null;
}

function v55FindResponseForAgent(agent, responses){
  const nomPrenom = v55NormalizeName((agent.nom || '') + ' ' + (agent.prenom || ''));
  const prenomNom = v55NormalizeName((agent.prenom || '') + ' ' + (agent.nom || ''));
  const mdp = String(agent.mdp || '').trim().toLowerCase();

  return responses.find(r => {
    const responseName = v55NormalizeName(r.agent || r.name || r.nom || r["Nom et prénom agent"] || '');
    const responseMdp = String(r.mdp || r.password || r["Mot de passe agent"] || '').trim().toLowerCase();

    if(mdp && responseMdp && responseMdp === mdp) return true;
    if(responseName === nomPrenom || responseName === prenomNom) return true;
    if(responseName.includes(nomPrenom) || responseName.includes(prenomNom)) return true;
    if(nomPrenom.includes(responseName) || prenomNom.includes(responseName)) return responseName.length > 4;
    return false;
  });
}

function v55GetSyncUrl(){
  return (state.settings && (state.settings.sharedUrl || state.settings.syncUrl || state.settings.googleSyncUrl)) || '';
}

async function syncActiveSession(){
  if(!state.sessions.length){
    alert('Aucune session QCM lancée. Crée d’abord une session.');
    return null;
  }

  const session = state.sessions[state.sessions.length - 1];
  if(session.status === 'Clôturé'){
    alert('La dernière session est déjà clôturée. Réouvre-la si besoin.');
    return session;
  }

  const url = v55GetSyncUrl();
  if(!url || !url.startsWith('https://script.google.com/macros/s/') || !url.includes('/exec')){
    alert("URL Apps Script non configurée ou invalide. Va dans Paramètres > URL base partagée et colle l'URL qui finit par /exec.");
    return session;
  }

  try{
    const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { method:'GET', cache:'no-store' });
    if(!response.ok){
      throw new Error('HTTP ' + response.status);
    }

    const data = await response.json();
    const responses = Array.isArray(data) ? data : (Array.isArray(data.responses) ? data.responses : []);

    const list = ensureSessionAgentStatus(session);

    list.forEach(agent => {
      if(agent.status === 'Absent') return;

      const rep = v55FindResponseForAgent(agent, responses);
      if(rep){
        agent.status = 'Complété';
        agent.progression = 100;
        agent.note = v55ParseScore(rep.score ?? rep.note ?? rep.Score);
        agent.updatedAt = rep.timestamp || rep.date || rep.Timestamp || fmtDate();
      }else{
        agent.status = 'En attente de réponse';
        agent.progression = 0;
        agent.note = null;
        agent.updatedAt = '';
      }
    });

    computeSessionCounts(session);
    session.average = session.answered
      ? Number((list.filter(a => a.status === 'Complété' && a.note !== null && a.note !== undefined).reduce((sum,a)=>sum+(Number(a.note)||0),0) / session.answered).toFixed(2))
      : null;

    lastAutoSyncAt = new Date();
    saveState();

    if(currentPage === 'session'){
      renderSession();
      renderSessionDetail(session.id);
    }

    alert(responses.length + ' réponse(s) récupérée(s) depuis Google Sheets.');
    return session;

  }catch(err){
    console.error('Erreur sync V55', err);
    alert("Erreur de synchronisation Apps Script : " + err.message + ". Vérifie que l'URL /exec affiche bien du JSON dans Chrome.");
    return session;
  }
}

/* Compatibilité : toutes les anciennes fonctions/boutons appellent maintenant la vraie synchro */
function simulateSyncForActiveSession(){
  return syncActiveSession();
}

function renderSession(){
  const qcmOptions = state.qcms.map(q => `<option value="${q.id}">${q.nom} — ${q.titre}</option>`).join('');
  const prepRows = getActiveAgents().map(a => `<div class="agentPrepGrid" data-prep-agent="${a.id}" data-nom="${a.nom}" data-prenom="${a.prenom}" data-equipe="${a.equipe||''}">
    <div><b>${a.nom} ${a.prenom}</b><br><span class="smallNote">${a.equipe||'-'} · ${a.fonction||'-'}</span></div>
    <select data-prep-present><option value="true">Présent</option><option value="false">Absent</option></select>
    <span class="statusChip statusWaiting">Prévu présent</span>
  </div>`).join('');

  const rows = state.sessions.length ? state.sessions.slice().reverse().map(s => {
    ensureSessionAgentStatus(s); computeSessionCounts(s);
    return `<tr><td>${s.qcmName}</td><td>${s.startedAt}</td><td>${s.present}</td><td>${s.answered}</td><td>${s.inProgress||0}</td><td>${s.waiting||0}</td><td>${s.status}</td><td>
      <button class="btn secondary" data-open-session="${s.id}">Ouvrir</button>
      <button class="btn warn" data-reopen-session="${s.id}">Réouvrir</button>
      <button class="btn good" data-report-word="${s.id}">Rapport Word</button>
      <button class="btn good" data-report-pdf="${s.id}">Rapport PDF</button>
      <button class="btn bad" data-delete-completed="${s.id}">Supprimer réalisé</button>
    </td></tr>`;
  }).join('') : `<tr><td colspan="8" class="empty">Aucune session créée. Prépare les présents/absents puis clique sur “Lancer le QCM”.</td></tr>`;

  const syncUrl = v55GetSyncUrl();

  main.innerHTML = `<div class="panel"><h2>Session QCM / clôture</h2>
    <p>Les agents répondent sur Google Forms. Le bouton Synchroniser lit directement ton Apps Script /exec.</p>

    <div class="v55SyncBox">
      <b>Synchronisation V55 :</b><br>
      URL Apps Script : <span class="${syncUrl ? 'v55SyncOk' : 'v55SyncBad'}">${syncUrl ? 'configurée' : 'non configurée'}</span><br>
      ${syncUrl ? '<span class="smallNote">'+syncUrl+'</span>' : '<span class="v55SyncWarn">Va dans Paramètres > URL base partagée et colle l’URL /exec.</span>'}
    </div>

    <div class="formGrid">
      <div><label>QCM à lancer</label><select id="sessionQcm">${qcmOptions}</select></div>
      <div><label>Réponses reçues au départ</label><input id="sessionAnswered" type="number" min="0" value="0"></div>
      <div><label>Mode</label><select><option>Session encadrement</option></select></div>
    </div>

    <h3>Présents / absents avant lancement</h3>
    <div class="tableWrap">${prepRows}</div>

    <div class="toolbar">
      <button class="btn good" id="createSessionBtn">Lancer le QCM</button>
      <button class="btn good" id="syncRealBtn" type="button">Synchroniser maintenant</button>
      <button class="btn warn" id="closeSessionBtn">Clôturer la dernière session</button>
    </div>
  </div>

  <div class="panel"><h3>Sessions existantes</h3><table><tr><th>QCM</th><th>Début</th><th>Présents</th><th>Complétés</th><th>En cours</th><th>En attente</th><th>Statut</th><th>Actions</th></tr>${rows}</table></div>
  <div class="panel" id="sessionDetail"><h3>Détail session</h3><div class="empty">Clique sur Ouvrir pour afficher le détail.</div></div>`;

  main.querySelectorAll('[data-prep-present]').forEach(sel => sel.onchange = e => {
    const chip = e.target.closest('[data-prep-agent]').querySelector('.statusChip');
    if(e.target.value === 'true'){ chip.className='statusChip statusWaiting'; chip.textContent='Prévu présent'; }
    else { chip.className='statusChip statusAbsent'; chip.textContent='Prévu absent'; }
  });

  document.getElementById('createSessionBtn').onclick = createSession;
  document.getElementById('syncRealBtn').onclick = syncActiveSession;
  document.getElementById('closeSessionBtn').onclick = closeLastSession;
  main.querySelectorAll('[data-open-session]').forEach(b => b.onclick = () => renderSessionDetail(Number(b.dataset.openSession)));
  main.querySelectorAll('[data-reopen-session]').forEach(b => b.onclick = () => reopenSession(Number(b.dataset.reopenSession)));
  main.querySelectorAll('[data-delete-completed]').forEach(b => b.onclick = () => removeCompletedSession(Number(b.dataset.deleteCompleted)));
  main.querySelectorAll('[data-report-word]').forEach(b => b.onclick = () => exportHtmlAsWord('rapport_qcm_secab.doc', buildQcmReportHtml(Number(b.dataset.reportWord))));
  main.querySelectorAll('[data-report-pdf]').forEach(b => b.onclick = () => exportHtmlAsPdf('rapport_qcm_secab.pdf', buildQcmReportHtml(Number(b.dataset.reportPdf))));
}

function renderSessionDetail(id){
  const s = state.sessions.find(x => Number(x.id) === Number(id));
  const box = document.getElementById('sessionDetail');
  if(!box) return;
  if(!s){
    box.innerHTML = '<h3>Détail session</h3><div class="empty">Session introuvable.</div>';
    return;
  }
  ensureSessionAgentStatus(s); computeSessionCounts(s);
  const list = ensureSessionAgentStatus(s);
  const rows = list.map(a => `<tr>
    <td>${a.nom} ${a.prenom}</td>
    <td>${a.equipe || '-'}</td>
    <td>${statusChip(a.status)}</td>
    <td>${a.note !== null && a.note !== undefined ? a.note + ' /10' : '-'}</td>
    <td>${a.updatedAt || '-'}</td>
  </tr>`).join('');

  box.innerHTML = `<h3>Détail session — ${s.qcmName}</h3>
    <p><b>Statut :</b> ${s.status} | <b>Présents :</b> ${s.present} | <b>Complétés :</b> ${s.answered} | <b>En attente :</b> ${s.waiting || 0} | <b>Moyenne :</b> ${s.average !== null && s.average !== undefined ? s.average + ' /10' : '-'}</p>
    <div class="bar"><span style="width:${s.present ? Math.round((s.answered/s.present)*100) : 0}%"></span></div>
    <table><tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Note</th><th>Dernière MAJ</th></tr>${rows}</table>`;
}



/* =========================================================
   V56 - SESSION PAR LIGNE + URL CSV GOOGLE SHEETS
   ========================================================= */
function v56Norm(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function v56Esc(value){return String(value??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function v56ParseCsv(text){
  const rows=[];let row=[],value='',quote=false;const src=String(text||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n');
  for(let i=0;i<src.length;i++){const c=src[i],n=src[i+1];if(c==='"'){if(quote&&n==='"'){value+='"';i++;}else quote=!quote;}else if(c===','&&!quote){row.push(value);value='';}else if(c==='\n'&&!quote){row.push(value);rows.push(row);row=[];value='';}else value+=c;}
  row.push(value);if(row.length>1||row[0].trim())rows.push(row);return rows;
}
function v56ParseScore(value){const raw=String(value??'').trim();if(!raw)return null;const n=Number(raw.split('/')[0].replace(',','.').trim());return Number.isFinite(n)?n:null;}
function v56RowsToResponses(csvText){
  const rows=v56ParseCsv(csvText).filter(r=>r.some(c=>String(c).trim()));if(rows.length<=1)return[];
  const h=rows[0].map(v56Norm);
  const it=h.findIndex(x=>x.includes('timestamp')||x.includes('horodatage'));
  const is=h.findIndex(x=>x.includes('score')||x.includes('note'));
  const ia=h.findIndex(x=>(x.includes('nom')&&x.includes('prenom'))||x==='agent');
  const im=h.findIndex(x=>x.includes('mot de passe')||x.includes('mdp')||x.includes('password'));
  return rows.slice(1).map(r=>({timestamp:it>=0?(r[it]||'').trim():'',score:is>=0?(r[is]||'').trim():'',scoreNumber:is>=0?v56ParseScore(r[is]):null,agent:ia>=0?(r[ia]||'').trim():'',mdp:im>=0?(r[im]||'').trim():'',raw:r})).filter(r=>r.agent||r.mdp);
}
function v56FindResponse(agent,responses){
  const np=v56Norm((agent.nom||'')+' '+(agent.prenom||'')), pn=v56Norm((agent.prenom||'')+' '+(agent.nom||'')), mdp=String(agent.mdp||'').trim().toLowerCase();
  return responses.find(r=>{const rn=v56Norm(r.agent), rm=String(r.mdp||'').trim().toLowerCase(); if(mdp&&rm&&mdp===rm)return true; if(rn===np||rn===pn)return true; if(rn.includes(np)||rn.includes(pn))return true; if((np.includes(rn)||pn.includes(rn))&&rn.length>4)return true; return false;});
}
function v56EnsureSessionAgentStatus(session){if(!session.agentStatus||!Array.isArray(session.agentStatus)){session.agentStatus=getActiveAgents().map(a=>({agentId:a.id,nom:a.nom,prenom:a.prenom,equipe:a.equipe,mdp:a.mdp,status:'En attente de réponse',note:null,progression:0,updatedAt:''}));}return session.agentStatus;}
function computeSessionCounts(session){const l=v56EnsureSessionAgentStatus(session);session.present=l.filter(a=>a.status!=='Absent').length;session.answered=l.filter(a=>a.status==='Complété').length;session.inProgress=l.filter(a=>a.status==='En cours de réponse').length;session.waiting=l.filter(a=>a.status==='En attente de réponse').length;session.absent=l.filter(a=>a.status==='Absent').length;}
function statusChip(status){if(status==='Complété')return'<span class="statusChip statusDone">Complété</span>';if(status==='En cours de réponse')return'<span class="statusChip statusProgress">En cours</span>';if(status==='Absent')return'<span class="statusChip statusAbsent">Absent</span>';return'<span class="statusChip statusWaiting">En attente</span>';}
function getPreparedAgentsFromSessionForm(){return Array.from(document.querySelectorAll('[data-prep-agent]')).map(row=>{const present=row.querySelector('[data-prep-present]').value==='true';return{agentId:Number(row.dataset.prepAgent),nom:row.dataset.nom,prenom:row.dataset.prenom,equipe:row.dataset.equipe,mdp:row.dataset.mdp,present,status:present?'En attente de réponse':'Absent',note:null,progression:0,updatedAt:''};});}
function createSession(){
  const qcm=state.qcms.find(q=>q.id===Number(document.getElementById('sessionQcm').value));const csvUrl=(document.getElementById('sessionCsvUrl')?.value||'').trim();
  if(!csvUrl||!csvUrl.includes('output=csv')){if(!confirm("L'URL CSV Google Sheets n'est pas renseignée ou ne ressemble pas à une URL CSV. Lancer quand même ?"))return;}
  const prepared=getPreparedAgentsFromSessionForm();const pres=prepared.filter(a=>a.present);if(!pres.length)return alert('Impossible de lancer : aucun agent présent.');
  const s={id:Date.now(),qcmId:qcm.id,qcmName:qcm.nom,qcmTitle:qcm.titre||'',csvUrl,startedAt:fmtDate(),closedAt:'',status:'Ouvert',present:pres.length,answered:0,inProgress:0,waiting:pres.length,absent:prepared.filter(a=>!a.present).length,average:null,agentStatus:prepared.map(a=>({agentId:a.agentId,nom:a.nom,prenom:a.prenom,equipe:a.equipe,mdp:a.mdp,status:a.present?'En attente de réponse':'Absent',note:null,progression:0,updatedAt:''}))};
  state.sessions.push(s);selectedSessionId=s.id;saveState();renderSession();renderSessionDetail(s.id);
}
async function syncSessionById(sessionId){
  const session=state.sessions.find(s=>Number(s.id)===Number(sessionId));if(!session)return alert('Session introuvable.');const url=(session.csvUrl||'').trim();if(!url)return alert("Aucune URL CSV enregistrée pour cette session.");
  try{const response=await fetch(url+(url.includes('?')?'&':'?')+'t='+Date.now(),{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);const responses=v56RowsToResponses(await response.text());const list=v56EnsureSessionAgentStatus(session);const absentWithResponse=[];
    list.forEach(agent=>{const rep=v56FindResponse(agent,responses);if(agent.status==='Absent'){if(rep)absentWithResponse.push(agent.nom+' '+agent.prenom);return;}if(rep){agent.status='Complété';agent.progression=100;agent.note=rep.scoreNumber;agent.scoreText=rep.score;agent.updatedAt=rep.timestamp||fmtDate();}else{agent.status='En attente de réponse';agent.progression=0;agent.note=null;agent.scoreText='';agent.updatedAt='';}});
    computeSessionCounts(session);const completed=list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined);session.average=completed.length?Number((completed.reduce((s,a)=>s+(Number(a.note)||0),0)/completed.length).toFixed(2)):null;session.lastSyncAt=fmtDate();session.lastResponsesCount=responses.length;saveState();renderSession();renderSessionDetail(session.id);
    let msg=responses.length+' réponse(s) CSV lue(s). '+session.answered+' agent(s) complété(s).';if(absentWithResponse.length)msg+='\\nAttention : réponse reçue pour agent(s) déclaré(s) absent(s) : '+absentWithResponse.join(', ');alert(msg);
  }catch(err){console.error(err);alert("Erreur lecture CSV : "+err.message+"\\nVérifie que l'URL CSV publiée s'ouvre dans Chrome.");}
}
function simulateSyncForActiveSession(){if(!state.sessions.length)return alert('Aucune session à synchroniser.');return syncSessionById(state.sessions[state.sessions.length-1].id);}
function syncActiveSession(){return simulateSyncForActiveSession();}
function closeSessionById(sessionId){
  const s=state.sessions.find(x=>Number(x.id)===Number(sessionId));if(!s)return alert('Session introuvable.');if(s.status==='Clôturé')return alert('Cette session est déjà clôturée.');computeSessionCounts(s);
  if(s.answered<s.present&&!confirm("Tous les présents n'ont pas répondu. Clôturer quand même cette session ?"))return;
  s.status='Clôturé';s.closedAt=fmtDate();const list=v56EnsureSessionAgentStatus(s);const comp=list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined);s.average=comp.length?Number((comp.reduce((sum,a)=>sum+(Number(a.note)||0),0)/comp.length).toFixed(2)):null;generateActionPlanForSession(s);saveState();renderSession();renderSessionDetail(s.id);
}
function closeLastSession(){if(!state.sessions.length)return alert('Aucune session à clôturer.');return closeSessionById(state.sessions[state.sessions.length-1].id);}
function generateActionPlanForSession(session){
  if(!Array.isArray(state.actionPlans))state.actionPlans=[];computeSessionCounts(session);const avg=session.average;let priority='Suivi',actions=[];
  if(avg===null||avg===undefined){priority='Haute';actions.push("Aucune note exploitable : vérifier la publication CSV et la participation.");}else if(avg<6){priority='Haute';actions.push('Briefing sécurité ciblé sous 7 jours.');actions.push('Reprise collective des questions les moins maîtrisées.');actions.push('Prévoir un rattrapage pour les non-répondants.');}else if(avg<7.5){priority='Moyenne';actions.push('REX collectif de 10 minutes sur le thème.');actions.push('Rappel des consignes terrain.');actions.push('Suivi des agents avec note faible.');}else{actions.push('Maintenir le suivi mensuel.');actions.push('Valoriser les acquis en réunion.');}
  if(session.waiting>0)actions.push(session.waiting+' agent(s) présent(s) sans réponse : relance ou rattrapage.');if(session.absent>0)actions.push(session.absent+' absent(s) déclaré(s) : à tracer dans la synthèse.');
  const plan={id:Date.now(),sessionId:session.id,qcmName:session.qcmName,qcmTitle:session.qcmTitle||'',createdAt:fmtDate(),priority,average:avg,present:session.present,absent:session.absent||0,answered:session.answered,waiting:session.waiting||0,participation:session.present?Math.round((session.answered/session.present)*100):0,actions};
  state.actionPlans=state.actionPlans.filter(p=>Number(p.sessionId)!==Number(session.id));state.actionPlans.push(plan);return plan;
}
function renderSession(){
  const qcmOptions=state.qcms.map(q=>`<option value="${q.id}">${q.nom} — ${q.titre}</option>`).join('');
  const prepRows=getActiveAgents().map(a=>`<div class="agentPrepGrid" data-prep-agent="${a.id}" data-nom="${v56Esc(a.nom)}" data-prenom="${v56Esc(a.prenom)}" data-equipe="${v56Esc(a.equipe||'')}" data-mdp="${v56Esc(a.mdp||'')}"><div><b>${a.nom} ${a.prenom}</b><br><span class="smallNote">${a.equipe||'-'} · ${a.fonction||'-'}</span></div><select data-prep-present><option value="true">Présent</option><option value="false">Absent</option></select><span class="statusChip statusWaiting">Prévu présent</span></div>`).join('');
  const sessionsRows=state.sessions.length?state.sessions.slice().reverse().map(s=>{v56EnsureSessionAgentStatus(s);computeSessionCounts(s);return`<tr><td>${s.qcmName}<br><span class="smallNote">${s.qcmTitle||''}</span></td><td>${s.startedAt}<br><span class="smallNote">Sync : ${s.lastSyncAt||'-'}</span></td><td>${s.present}</td><td>${s.answered}</td><td>${s.waiting||0}</td><td>${s.absent||0}</td><td>${s.status}</td><td><div class="v56SessionActions"><button class="btn secondary" data-open-session="${s.id}">Ouvrir</button><button class="btn good" data-sync-session="${s.id}">Synchroniser</button><button class="btn warn" data-close-session="${s.id}">Clôturer</button><button class="btn secondary" data-reopen-session="${s.id}">Réouvrir</button><button class="btn good" data-report-word="${s.id}">Rapport Word</button><button class="btn good" data-report-pdf="${s.id}">Rapport PDF</button><button class="btn bad" data-delete-completed="${s.id}">Supprimer réalisé</button></div></td></tr>`;}).join(''):`<tr><td colspan="8" class="empty">Aucune session créée.</td></tr>`;
  main.innerHTML=`<div class="panel"><h2>Session QCM / clôture</h2><div class="v56WarnBox"><b>Logique V56 :</b> 1 session = 1 QCM + 1 URL CSV Google Sheets. Les boutons Ouvrir / Synchroniser / Clôturer sont sur la ligne du QCM lancé.</div><div class="formGrid"><div><label>QCM à lancer</label><select id="sessionQcm">${qcmOptions}</select></div><div style="grid-column:span 2"><label>URL CSV Google Sheets publiée</label><input id="sessionCsvUrl" class="v56InputWide" placeholder="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"></div></div><h3>Présents / absents avant lancement</h3><div class="tableWrap">${prepRows}</div><div class="toolbar"><button class="btn good" id="createSessionBtn">Lancer le QCM avec cette URL CSV</button></div></div><div class="panel"><h3>Sessions lancées</h3><table><tr><th>QCM</th><th>Début</th><th>Présents</th><th>Complétés</th><th>En attente</th><th>Absents</th><th>Statut</th><th>Actions</th></tr>${sessionsRows}</table></div><div class="panel" id="sessionDetail"><h3>Détail session</h3><div class="empty">Clique sur Ouvrir sur la ligne d’un QCM.</div></div>`;
  main.querySelectorAll('[data-prep-present]').forEach(sel=>sel.onchange=e=>{const chip=e.target.closest('[data-prep-agent]').querySelector('.statusChip');if(e.target.value==='true'){chip.className='statusChip statusWaiting';chip.textContent='Prévu présent';}else{chip.className='statusChip statusAbsent';chip.textContent='Prévu absent';}});
  document.getElementById('createSessionBtn').onclick=createSession;
  main.querySelectorAll('[data-open-session]').forEach(b=>b.onclick=()=>renderSessionDetail(Number(b.dataset.openSession)));
  main.querySelectorAll('[data-sync-session]').forEach(b=>b.onclick=()=>syncSessionById(Number(b.dataset.syncSession)));
  main.querySelectorAll('[data-close-session]').forEach(b=>b.onclick=()=>closeSessionById(Number(b.dataset.closeSession)));
  main.querySelectorAll('[data-reopen-session]').forEach(b=>b.onclick=()=>reopenSession(Number(b.dataset.reopenSession)));
  main.querySelectorAll('[data-delete-completed]').forEach(b=>b.onclick=()=>removeCompletedSession(Number(b.dataset.deleteCompleted)));
  main.querySelectorAll('[data-report-word]').forEach(b=>b.onclick=()=>exportHtmlAsWord('rapport_qcm_secab.doc',buildQcmReportHtml(Number(b.dataset.reportWord))));
  main.querySelectorAll('[data-report-pdf]').forEach(b=>b.onclick=()=>exportHtmlAsPdf('rapport_qcm_secab.pdf',buildQcmReportHtml(Number(b.dataset.reportPdf))));
}
function renderSessionDetail(id){
  const s=state.sessions.find(x=>Number(x.id)===Number(id));const box=document.getElementById('sessionDetail');if(!box)return;if(!s){box.innerHTML='<h3>Détail session</h3><div class="empty">Session introuvable.</div>';return;}
  v56EnsureSessionAgentStatus(s);computeSessionCounts(s);const rows=v56EnsureSessionAgentStatus(s).map(a=>`<tr><td>${a.nom} ${a.prenom}</td><td>${a.equipe||'-'}</td><td>${statusChip(a.status)}</td><td>${a.note!==null&&a.note!==undefined?a.note+' /10':'-'}</td><td>${a.updatedAt||'-'}</td></tr>`).join('');
  box.innerHTML=`<h3>Détail session — ${s.qcmName}</h3><div class="v56StatGrid"><div class="v56Stat">Présents<b>${s.present}</b></div><div class="v56Stat">Complétés<b>${s.answered}</b></div><div class="v56Stat">En attente<b>${s.waiting||0}</b></div><div class="v56Stat">Absents<b>${s.absent||0}</b></div><div class="v56Stat">Moyenne<b>${s.average!==null&&s.average!==undefined?s.average+'/10':'-'}</b></div></div><p><b>URL CSV :</b> <span class="smallNote">${v56Esc(s.csvUrl||'-')}</span></p><div class="bar"><span style="width:${s.present?Math.round((s.answered/s.present)*100):0}%"></span></div><div class="toolbar"><button class="btn good" onclick="syncSessionById(${s.id})">Synchroniser ce QCM</button><button class="btn warn" onclick="closeSessionById(${s.id})">Clôturer ce QCM</button></div><table><tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Note</th><th>MAJ</th></tr>${rows}</table>`;
}



/* =========================================================
   V57 - MANAGEMENT PRO : RESULTATS / FICHES / STATS / RAPPORTS
   Source unique : sessions synchronisées CSV V56.
   ========================================================= */

function v57Norm(value){
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
}
function v57Esc(value){
  return String(value ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function v57AgentKey(agent){
  return Number(agent.agentId || agent.id || 0) || v57Norm((agent.nom||'')+' '+(agent.prenom||''));
}
function v57AllSessionRows(){
  const rows = [];
  (state.sessions || []).forEach(s => {
    const qcm = (state.qcms || []).find(q => q.id === s.qcmId) || {};
    const list = (s.agentStatus || []);
    list.forEach(a => {
      rows.push({
        sessionId:s.id,
        qcmId:s.qcmId,
        qcmName:s.qcmName || qcm.nom || '-',
        qcmTitle:s.qcmTitle || qcm.titre || '',
        type:qcm.type || '',
        date:s.closedAt || s.startedAt || '',
        status:a.status,
        note:a.note,
        scoreText:a.scoreText || (a.note !== null && a.note !== undefined ? a.note + ' / 10' : ''),
        updatedAt:a.updatedAt || '',
        agentId:a.agentId,
        nom:a.nom,
        prenom:a.prenom,
        equipe:a.equipe || '',
        isClosed:s.status === 'Clôturé',
        isOpen:s.status !== 'Clôturé',
        present:a.status !== 'Absent',
        answered:a.status === 'Complété',
        absent:a.status === 'Absent',
        waiting:a.status === 'En attente de réponse'
      });
    });
  });
  return rows;
}
function v57ClosedRows(){
  return v57AllSessionRows().filter(r => r.isClosed || r.answered || r.absent || r.waiting);
}
function v57AgentStats(agent){
  const key = v57AgentKey(agent);
  const rows = v57ClosedRows().filter(r => Number(r.agentId) === Number(agent.id) || v57Norm(r.nom+' '+r.prenom) === v57Norm(agent.nom+' '+agent.prenom));
  const presentRows = rows.filter(r => r.present);
  const answeredRows = rows.filter(r => r.answered && r.note !== null && r.note !== undefined);
  const missedRows = rows.filter(r => r.waiting);
  const absentRows = rows.filter(r => r.absent);
  const avg = answeredRows.length ? Number((answeredRows.reduce((s,r)=>s+(Number(r.note)||0),0)/answeredRows.length).toFixed(2)) : null;
  const participation = presentRows.length ? Math.round((answeredRows.length/presentRows.length)*100) : 0;
  const last = answeredRows.length ? answeredRows[answeredRows.length-1] : null;
  let trend = 'stable';
  if(answeredRows.length >= 2){
    const before = answeredRows[answeredRows.length-2].note;
    const now = answeredRows[answeredRows.length-1].note;
    if(now > before + 0.5) trend = 'progression';
    else if(now < before - 0.5) trend = 'régression';
  }
  return {agent, rows, presentRows, answeredRows, missedRows, absentRows, avg, participation, last, trend};
}
function v57PriorityFromAvg(avg){
  if(avg === null || avg === undefined) return 'Haute';
  if(avg < 5) return 'Haute';
  if(avg < 7) return 'Moyenne';
  return 'Suivi';
}
function v57PlanForAgent(stats){
  const p = v57PriorityFromAvg(stats.avg);
  const actions = [];
  if(p === 'Haute'){
    actions.push('Briefing individuel ciblé sous 7 jours.');
    actions.push('Accompagnement terrain par encadrement / chef d’équipe.');
    actions.push('QCM de rattrapage à programmer sous 30 jours.');
  } else if(p === 'Moyenne'){
    actions.push('Rappel des fondamentaux sur les thèmes faibles.');
    actions.push('Suivi mensuel des prochains QCM.');
    actions.push('Contrôle ponctuel des acquis terrain.');
  } else {
    actions.push('Maintenir le niveau de maîtrise.');
    actions.push('Valoriser les acquis et capitaliser en REX équipe.');
  }
  if(stats.missedRows.length) actions.push(stats.missedRows.length + ' QCM non répondu(s) alors que l’agent était présent : relance à tracer.');
  if(stats.absentRows.length) actions.push(stats.absentRows.length + ' absence(s) à intégrer au suivi de participation.');
  return {priority:p, actions};
}
function v57ClassForPriority(p){
  if(p === 'Haute') return 'v57PlanHigh';
  if(p === 'Moyenne') return 'v57PlanMed';
  return 'v57PlanLow';
}
function v57BuildAgentRowsHtml(rows){
  if(!rows.length) return '<tr><td colspan="6" class="empty">Aucun résultat réel synchronisé.</td></tr>';
  return rows.map(r => `<tr>
    <td>${r.date || '-'}</td>
    <td>${r.qcmName}</td>
    <td>${r.qcmTitle || '-'}</td>
    <td>${r.status}</td>
    <td>${r.note !== null && r.note !== undefined ? r.note + ' /10' : '-'}</td>
    <td>${r.updatedAt || '-'}</td>
  </tr>`).join('');
}
function v57GlobalStats(){
  const sessions = state.sessions || [];
  const closed = sessions.filter(s => s.status === 'Clôturé');
  const allRows = v57ClosedRows();
  const present = allRows.filter(r => r.present).length;
  const absent = allRows.filter(r => r.absent).length;
  const answered = allRows.filter(r => r.answered).length;
  const waiting = allRows.filter(r => r.waiting).length;
  const notes = allRows.filter(r => r.answered && r.note !== null && r.note !== undefined).map(r=>Number(r.note)||0);
  const avg = notes.length ? Number((notes.reduce((a,b)=>a+b,0)/notes.length).toFixed(2)) : null;
  const participation = present ? Math.round((answered/present)*100) : 0;
  return {sessions, closed, allRows, present, absent, answered, waiting, avg, participation};
}
function renderResults(){
  const agents = getActiveAgents();
  const stats = agents.map(a => v57AgentStats(a));
  const rows = stats.map(s => `<tr>
    <td>${s.agent.nom} ${s.agent.prenom}</td>
    <td>${s.agent.equipe || '-'}</td>
    <td>${s.last ? s.last.note + ' /10' : '-'}</td>
    <td>${s.avg !== null ? s.avg + ' /10' : '-'}</td>
    <td>${s.participation}%</td>
    <td>${s.answeredRows.length}</td>
    <td>${s.missedRows.length}</td>
    <td>${s.trend === 'progression' ? '<span class="v57Good">↗ progression</span>' : s.trend === 'régression' ? '<span class="v57Bad">↘ régression</span>' : '→ stable'}</td>
  </tr>`).join('');
  main.innerHTML = `<div class="panel"><h2>Résultats agents — données réelles synchronisées</h2>
  <p>Les résultats ci-dessous proviennent uniquement des sessions QCM synchronisées/clôturées. Aucune note simulée.</p>
  <table><tr><th>Agent</th><th>Équipe</th><th>Dernière note</th><th>Moyenne</th><th>Participation</th><th>QCM réalisés</th><th>Non-réponses</th><th>Évolution</th></tr>${rows || '<tr><td colspan="8">Aucun agent actif.</td></tr>'}</table></div>`;
}
function renderFiches(){
  const agents = getActiveAgents();
  const options = agents.map(a => `<option value="${a.id}">${a.nom} ${a.prenom}</option>`).join('');
  const selected = Number(window.__v57SelectedAgentId || agents[0]?.id || 0);
  const agent = agents.find(a => a.id === selected) || agents[0];
  const stats = agent ? v57AgentStats(agent) : null;
  const plan = stats ? v57PlanForAgent(stats) : null;
  main.innerHTML = `<div class="panel"><h2>Fiches individuelles agents</h2>
    <div class="formGrid"><div><label>Agent</label><select id="agentFicheSelect">${options}</select></div></div>
    ${agent ? `<div class="v57KpiGrid">
      <div class="v57Kpi"><span>Moyenne</span><b>${stats.avg !== null ? stats.avg + '/10' : '-'}</b></div>
      <div class="v57Kpi"><span>Participation</span><b>${stats.participation}%</b></div>
      <div class="v57Kpi"><span>QCM réalisés</span><b>${stats.answeredRows.length}</b></div>
      <div class="v57Kpi"><span>Non-réponses</span><b>${stats.missedRows.length}</b></div>
    </div>
    <div class="v57Box"><h3>${agent.nom} ${agent.prenom}</h3>
      <p><b>Équipe :</b> ${agent.equipe || '-'}<br><b>Fonction :</b> ${agent.fonction || '-'}</p>
      <p><b>Évolution :</b> ${stats.trend === 'progression' ? '<span class="v57Good">↗ progression</span>' : stats.trend === 'régression' ? '<span class="v57Bad">↘ régression</span>' : '→ stable'}</p>
    </div>
    <div class="v57Box ${v57ClassForPriority(plan.priority)}"><h3>Plan d’action individuel — priorité ${plan.priority}</h3><ul>${plan.actions.map(a=>`<li>${a}</li>`).join('')}</ul></div>
    <h3>Historique QCM</h3><table><tr><th>Date</th><th>QCM</th><th>Thème</th><th>Statut</th><th>Note</th><th>MAJ</th></tr>${v57BuildAgentRowsHtml(stats.rows)}</table>` : '<div class="empty">Aucun agent.</div>'}
  </div>`;
  const sel = document.getElementById('agentFicheSelect');
  if(sel){
    sel.value = String(agent?.id || '');
    sel.onchange = e => { window.__v57SelectedAgentId = Number(e.target.value); renderFiches(); };
  }
}
function renderStats(){
  const g = v57GlobalStats();
  const agentStats = getActiveAgents().map(a => v57AgentStats(a)).filter(s => s.avg !== null);
  const top = agentStats.slice().sort((a,b)=>b.avg-a.avg).slice(0,10);
  const bottom = agentStats.slice().sort((a,b)=>a.avg-b.avg).slice(0,10);
  const byTeam = {};
  agentStats.forEach(s => {
    const team = s.agent.equipe || 'Non défini';
    if(!byTeam[team]) byTeam[team] = [];
    byTeam[team].push(s.avg);
  });
  const teamRows = Object.entries(byTeam).map(([team,vals]) => {
    const avg = vals.reduce((a,b)=>a+b,0)/vals.length;
    return `<tr><td>${team}</td><td>${vals.length}</td><td>${avg.toFixed(2)} /10</td></tr>`;
  }).join('');
  const byTheme = {};
  g.allRows.filter(r=>r.answered && r.note !== null && r.note !== undefined).forEach(r => {
    const theme = r.qcmTitle || r.qcmName;
    if(!byTheme[theme]) byTheme[theme] = [];
    byTheme[theme].push(Number(r.note)||0);
  });
  const themeRows = Object.entries(byTheme).map(([theme,vals]) => `<tr><td>${theme}</td><td>${vals.length}</td><td>${(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2)} /10</td></tr>`).join('');
  main.innerHTML = `<div class="panel"><h2>Statistiques performance — management service</h2>
    <div class="v57KpiGrid">
      <div class="v57Kpi"><span>Sessions clôturées</span><b>${g.closed.length}</b></div>
      <div class="v57Kpi"><span>Participation</span><b>${g.participation}%</b></div>
      <div class="v57Kpi"><span>Moyenne service</span><b>${g.avg !== null ? g.avg + '/10' : '-'}</b></div>
      <div class="v57Kpi"><span>Absences tracées</span><b>${g.absent}</b></div>
    </div>
    <div class="qcmLayout">
      <div class="tableWrap"><h3>Top 10 agents</h3><table><tr><th>Agent</th><th>Équipe</th><th>Moyenne</th><th>Participation</th></tr>${top.map(s=>`<tr><td>${s.agent.nom} ${s.agent.prenom}</td><td>${s.agent.equipe||'-'}</td><td>${s.avg}/10</td><td>${s.participation}%</td></tr>`).join('') || '<tr><td colspan="4">Aucun résultat.</td></tr>'}</table></div>
      <div class="tableWrap"><h3>Bottom 10 agents</h3><table><tr><th>Agent</th><th>Équipe</th><th>Moyenne</th><th>Plan</th></tr>${bottom.map(s=>`<tr><td>${s.agent.nom} ${s.agent.prenom}</td><td>${s.agent.equipe||'-'}</td><td>${s.avg}/10</td><td>${v57PriorityFromAvg(s.avg)}</td></tr>`).join('') || '<tr><td colspan="4">Aucun résultat.</td></tr>'}</table></div>
    </div>
    <h3>Analyse par équipe</h3><table><tr><th>Équipe</th><th>Agents avec résultats</th><th>Moyenne</th></tr>${teamRows || '<tr><td colspan="3">Aucune donnée.</td></tr>'}</table>
    <h3>Analyse par thème/QCM</h3><table><tr><th>Thème</th><th>Réponses</th><th>Moyenne</th></tr>${themeRows || '<tr><td colspan="3">Aucune donnée.</td></tr>'}</table>
  </div>`;
}
function renderActions(){
  const agentStats = getActiveAgents().map(a => v57AgentStats(a));
  const agentPlans = agentStats.filter(s => s.rows.length || s.avg !== null).map(s => {
    const p = v57PlanForAgent(s);
    return `<tr><td>${s.agent.nom} ${s.agent.prenom}</td><td>${s.agent.equipe||'-'}</td><td class="${p.priority==='Haute'?'v57Bad':p.priority==='Moyenne'?'v57Warn':'v57Good'}">${p.priority}</td><td>${s.avg!==null?s.avg+'/10':'-'}</td><td>${p.actions.join('<br>')}</td></tr>`;
  }).join('');
  const sessionPlans = (state.actionPlans || []).slice().reverse().map(p => `<tr><td>${p.qcmName}</td><td>${p.priority}</td><td>${p.participation || 0}%</td><td>${p.average !== null && p.average !== undefined ? p.average + '/10' : '-'}</td><td>${(p.actions||[]).join('<br>')}</td></tr>`).join('');
  main.innerHTML = `<div class="panel"><h2>Plans d’action — collectif et individuel</h2>
    <h3>Plans d’action individuels</h3>
    <table><tr><th>Agent</th><th>Équipe</th><th>Priorité</th><th>Moyenne</th><th>Actions</th></tr>${agentPlans || '<tr><td colspan="5">Aucun résultat réel exploitable.</td></tr>'}</table>
    <h3>Plans d’action par session</h3>
    <table><tr><th>QCM</th><th>Priorité</th><th>Participation</th><th>Moyenne</th><th>Actions</th></tr>${sessionPlans || '<tr><td colspan="5">Aucune session clôturée.</td></tr>'}</table>
  </div>`;
}
function buildQcmReportHtml(sessionId){
  const s = state.sessions.find(x => Number(x.id) === Number(sessionId)) || state.sessions[state.sessions.length - 1];
  if(!s) return '<html><body><h1>Aucune session</h1></body></html>';
  const qcm = state.qcms.find(q => q.id === s.qcmId) || {};
  const list = s.agentStatus || [];
  const present = list.filter(a=>a.status!=='Absent').length;
  const absent = list.filter(a=>a.status==='Absent').length;
  const answered = list.filter(a=>a.status==='Complété').length;
  const waiting = list.filter(a=>a.status==='En attente de réponse').length;
  const notes = list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined).map(a=>Number(a.note)||0);
  const avg = notes.length ? (notes.reduce((a,b)=>a+b,0)/notes.length) : null;
  const participation = present ? Math.round((answered/present)*100) : 0;
  const rows = list.map(a => `<tr><td>${a.nom} ${a.prenom}</td><td>${a.equipe||'-'}</td><td>${a.status}</td><td>${a.note!==null&&a.note!==undefined?a.note+'/10':'-'}</td><td>${a.updatedAt||'-'}</td></tr>`).join('');
  const agentPlans = list.map(a => {
    const agentRef = {id:a.agentId, nom:a.nom, prenom:a.prenom, equipe:a.equipe, fonction:''};
    const st = v57AgentStats(agentRef);
    const p = v57PlanForAgent(st);
    return `<tr><td>${a.nom} ${a.prenom}</td><td>${p.priority}</td><td>${p.actions.join('<br>')}</td></tr>`;
  }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    body{font-family:Arial;color:#111;padding:28px}h1{color:#06224a}h2{color:#0b4a8f}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border:1px solid #ccc;padding:8px;text-align:left;vertical-align:top}.kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.kpi{border:1px solid #ccc;background:#f8fafc;border-radius:8px;padding:10px}.kpi b{font-size:22px;display:block}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;padding:12px;margin:12px 0}.bad{color:#b00020;font-weight:bold}.good{color:#007a38;font-weight:bold}
  </style></head><body>
    <h1>SECAB — Rapport détaillé QCM</h1>
    <h2>${s.qcmName} — ${s.qcmTitle || qcm.titre || ''}</h2>
    <p><b>Date lancement :</b> ${s.startedAt || '-'}<br><b>Date clôture :</b> ${s.closedAt || '-'}<br><b>Statut :</b> ${s.status}</p>
    <div class="kpis"><div class="kpi">Présents<b>${present}</b></div><div class="kpi">Absents<b>${absent}</b></div><div class="kpi">Répondants<b>${answered}</b></div><div class="kpi">Participation<b>${participation}%</b></div><div class="kpi">Moyenne<b>${avg!==null?avg.toFixed(2)+'/10':'-'}</b></div></div>
    <h2>Résultats individuels</h2><table><tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Note</th><th>MAJ</th></tr>${rows}</table>
    <h2>Questions et corrections</h2><table><tr><th>N°</th><th>Question</th><th>Bonne réponse</th><th>Explication</th></tr>${(qcm.questions||[]).map(it=>`<tr><td>${it.num}</td><td>${it.question}</td><td class="good">${String.fromCharCode(65+it.good)}. ${it.choices[it.good]}</td><td>${it.explanation||''}</td></tr>`).join('')}</table>
    <h2>Plan d’action collectif</h2><div class="box">${actionPlanForAverage(avg).replace(/\n/g,'<br>')}<br>${waiting>0?waiting+' présent(s) sans réponse : relance ou rattrapage à prévoir.':''}<br>${absent>0?absent+' absence(s) tracée(s) dans la synthèse.':''}</div>
    <h2>Plans d’action individuels</h2><table><tr><th>Agent</th><th>Priorité</th><th>Actions</th></tr>${agentPlans}</table>
    <h2>Conclusion</h2><p>Ce rapport contribue au suivi des compétences, à la prévention sécurité et à l’amélioration continue ISO 9001 / ISO 45001.</p>
  </body></html>`;
}
function buildIsoStatsReportHtml(){
  const g = v57GlobalStats();
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;padding:28px;color:#111}h1{color:#06224a}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px}.kpi{display:inline-block;border:1px solid #ccc;border-radius:8px;padding:12px;margin:6px;background:#f8fafc}.kpi b{font-size:24px;display:block}</style></head><body>
  <h1>SECAB — Indicateurs QCM ISO 9001 / ISO 45001</h1>
  <div class="kpi">Sessions clôturées<b>${g.closed.length}</b></div><div class="kpi">Participation<b>${g.participation}%</b></div><div class="kpi">Moyenne service<b>${g.avg!==null?g.avg+'/10':'-'}</b></div><div class="kpi">Absences<b>${g.absent}</b></div>
  <h2>Lecture ISO</h2><p>Les indicateurs ci-dessus permettent le suivi des compétences, la sensibilisation sécurité, les actions correctives et l’amélioration continue.</p>
  </body></html>`;
}



/* =========================================================
   V58 - AUDIT COMPETENCES / REPONSES DETAILLEES / ISO / EDF ENV.
   ========================================================= */
function v58Norm(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function v58Esc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function v58Letter(i){return String.fromCharCode(65+Number(i||0));}
function v58ApplyLogo(){try{document.querySelectorAll('img').forEach(img=>{let s=(img.src||img.alt||'').toLowerCase();if(s.includes('secab'))img.classList.add('v58LogoLarge');});}catch(e){}}
setTimeout(v58ApplyLogo,300);
function v58EnsureMenu(){if(Array.isArray(menuItems)&&!menuItems.find(x=>x[0]==='answers')){let idx=menuItems.findIndex(x=>x[0]==='results');menuItems.splice(idx>=0?idx:menuItems.length,0,['answers','🧾','Réponses détaillées']);}}
v58EnsureMenu();

const V58_ENV_QCMS=[{nom:'ENVIRONNEMENT EDF - BIODIVERSITÉ',titre:'Protection biodiversité, espèces protégées et zones sensibles',type:'Environnement EDF',statut:'Actif',performance:true,questions:[
['Que faire si un nid d’oiseau protégé est identifié à proximité du chantier ?',['Le déplacer pour continuer','Suspendre la zone concernée et alerter l’encadrement','L’ignorer si les travaux sont courts','Demander à un riverain de le retirer'],1,'La présence d’un nid ou d’une espèce protégée impose l’arrêt de la zone concernée et la remontée d’information.'],
['En cas de découverte d’une espèce protégée sur chantier, l’agent doit :',['Continuer en faisant attention','La capturer','Stopper la zone, protéger et prévenir l’encadrement','La déplacer hors chantier'],2,'On sécurise, on évite toute atteinte et on alerte.'],
['Une ravine à proximité du chantier doit être considérée comme :',['Une zone sans enjeu','Une zone sensible à protéger contre les pollutions et déchets','Un lieu de stockage provisoire','Un accès pratique pour évacuer l’eau'],1,'Les ravines sont des milieux sensibles.'],
['En cas de rejet d’eau boueuse vers le milieu naturel, il faut :',['Laisser couler','Stopper la source, contenir et alerter','Diluer avec plus d’eau','Attendre la fin de journée'],1,'Tout rejet doit être maîtrisé rapidement.'],
['Pourquoi prendre des photos environnementales avant/après ?',['Pour décorer le rapport','Pour tracer l’état initial et la remise en état','Pour remplacer le tri','Pour éviter le contrôle'],1,'Les photos servent à tracer et prouver la remise en état.'],
['En cas de doute environnemental, la bonne décision est :',['Improviser','Stopper la zone concernée et demander arbitrage','Continuer doucement','Cacher l’information'],1,'Le doute déclenche arrêt temporaire et remontée d’information.'],
['Le stockage près d’une zone sensible doit être :',['Libre','Organisé, limité et hors écoulements','Dans la ravine','Sur un avaloir'],1,'Le stockage doit éviter les pollutions.'],
['Limiter les poussières permet :',['Le confort uniquement','Réduire nuisances et impacts environnementaux','Éviter les photos','Rien'],1,'La maîtrise des poussières est une bonne pratique chantier.'],
['Le débroussaillage doit intégrer :',['Aucune vérification','Contraintes environnementales et zones sensibles','Uniquement le rendement','Uniquement la météo'],1,'La préparation doit intégrer les prescriptions.'],
['La bonne pratique environnementale est :',['Nettoyer uniquement à la fin','Anticiper, baliser, trier et tracer','Cacher les petits incidents','Laisser les déchets'],1,'Prévenir, tracer et corriger.']]},
{nom:'ENVIRONNEMENT EDF - DÉCHETS POLLUTION',titre:'Déchets chantier, hydrocarbures, pollution et propreté',type:'Environnement EDF',statut:'Actif',performance:true,questions:[
['Un bidon d’huile vide doit être :',['Jeté avec les déchets classiques','Déposé dans la filière adaptée','Laissé dans le véhicule','Enterré'],1,'Déchet souillé = filière adaptée.'],
['En cas de fuite hydraulique, il faut :',['Continuer','Stopper, contenir avec kit antipollution et alerter','Nettoyer à l’eau','Couvrir avec terre'],1,'Stopper et contenir immédiatement.'],
['Les déchets chantier doivent être :',['Mélangés','Triés et évacués vers les filières prévues','Brûlés','Laissés au client'],1,'Tri et évacuation maîtrisée.'],
['Un kit antipollution sert à :',['Remplacer les EPI','Absorber et contenir une pollution accidentelle','Nettoyer les outils','Faire le balisage'],1,'Le kit doit être disponible et utilisé vite.'],
['Des terres potentiellement polluées doivent être :',['Mélangées','Signalées et gérées selon consigne','Évacuées sans traçabilité','Réutilisées'],1,'Signalement et gestion spécifique.'],
['Le lavage avec rejet au sol est :',['Autorisé','Interdit sans dispositif adapté','Obligatoire','Sans conséquence'],1,'Les eaux souillées ne doivent pas partir au sol.'],
['Après travaux, le site doit être :',['Remis propre et déchets évacués','Laissé tel quel','Nettoyé si le client demande','Recouvert'],0,'Propreté = qualité d’exécution.'],
['Une non-conformité environnementale doit être :',['Cachée','Remontée, tracée et corrigée','Ignorée','Orale seulement'],1,'Traçabilité et action corrective.'],
['Pourquoi éviter les hydrocarbures près des avaloirs ?',['Pollution rapide du réseau et milieu naturel','Gain de temps','Odeur','Pas utile'],0,'Les avaloirs conduisent au milieu naturel.'],
['Le tri chantier permet :',['De réduire les impacts et assurer traçabilité','De ralentir uniquement','De cacher les déchets','Rien'],0,'Tri = maîtrise environnementale.']]}];

function v58AddEnvironmentalQcms(){if(!state||!Array.isArray(state.qcms))return;let max=Math.max(0,...state.qcms.map(q=>Number(q.id)||0)),add=false;V58_ENV_QCMS.forEach(t=>{if(state.qcms.find(q=>q.nom===t.nom))return;max++;state.qcms.push({id:max,nom:t.nom,titre:t.titre,type:t.type,statut:t.statut,performance:t.performance,questions:t.questions.map((q,i)=>({num:i+1,question:q[0],choices:q[1],good:q[2],explanation:q[3]}))});add=true;});if(add)saveState();}
setTimeout(v58AddEnvironmentalQcms,500);

function v58GetResponsesForSession(session){let qcm=state.qcms.find(q=>q.id===session.qcmId)||{};return (session.agentStatus||[]).filter(a=>a.status==='Complété'&&Array.isArray(a.raw)).map(a=>({...a,answers:(qcm.questions||[]).map((q,idx)=>{let given=a.raw[4+idx]||'', good=q.choices?.[q.good]||'', ok=v58Norm(given)===v58Norm(good);return{num:idx+1,question:q.question,given,good,goodIndex:q.good,ok,explanation:q.explanation||'',choices:q.choices||[]};})}));}
function v58QuestionStats(session){let qcm=state.qcms.find(q=>q.id===session.qcmId)||{}, res=v58GetResponsesForSession(session);return (qcm.questions||[]).map((q,idx)=>{let counts={};(q.choices||[]).forEach((c,i)=>counts[v58Letter(i)]=0);let correct=0,total=0;res.forEach(r=>{let a=r.answers[idx];if(!a)return;total++;let ci=(q.choices||[]).findIndex(c=>v58Norm(c)===v58Norm(a.given));let letter=ci>=0?v58Letter(ci):'Autre';counts[letter]=(counts[letter]||0)+1;if(a.ok)correct++;});return{num:idx+1,question:q.question,choices:q.choices||[],good:q.good,goodText:q.choices?.[q.good]||'',explanation:q.explanation||'',counts,total,correct,error:total?Math.round(((total-correct)/total)*100):0,success:total?Math.round((correct/total)*100):0};});}
function v58SmartActionsFromQuestions(session){let worst=v58QuestionStats(session).filter(q=>q.total>0).sort((a,b)=>b.error-a.error).slice(0,5), actions=[];worst.forEach(q=>{if(q.error<35)return;let t=v58Norm(q.question+' '+q.explanation);if(t.includes('dict')||t.includes('reseau enterre'))actions.push('DICT / réseaux enterrés : rappel procédure DT-DICT, contrôle dossiers avant démarrage et REX sur cas de doute.');else if(t.includes('balisage')||t.includes('signalisation'))actions.push('Balisage : briefing terrain 15 min, vérification kits de signalisation et contrôle de 5 chantiers sous 30 jours.');else if(t.includes('epi'))actions.push('EPI : contrôle des équipements, remplacement des EPI dégradés et rappel du droit d’alerte.');else if(t.includes('environnement')||t.includes('biodivers')||t.includes('pollution')||t.includes('dechet')||t.includes('ravine')||t.includes('hydraulique'))actions.push('Environnement EDF : rappel faune/flore, gestion déchets, kit antipollution et contrôle zones sensibles.');else if(t.includes('fouille'))actions.push('Fouille : rappel risques chute/éboulement/réseaux et vérification protections avant intervention.');else actions.push('Correction collective ciblée sur Q'+q.num+' avec explication de la bonne réponse et trace dans le plan mensuel.');});return [...new Set(actions.length?actions:['Maintenir le niveau : correction collective courte et capitalisation des bonnes pratiques.'])];}

async function syncSessionById(sessionId){
  const session=state.sessions.find(s=>Number(s.id)===Number(sessionId));if(!session)return alert('Session introuvable.');const url=(session.csvUrl||'').trim();if(!url)return alert("Aucune URL CSV enregistrée pour cette session.");
  try{const response=await fetch(url+(url.includes('?')?'&':'?')+'t='+Date.now(),{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);const responses=v56RowsToResponses(await response.text());const list=v56EnsureSessionAgentStatus(session);const absent=[];
    list.forEach(agent=>{let rep=v56FindResponse(agent,responses);if(agent.status==='Absent'){if(rep)absent.push(agent.nom+' '+agent.prenom);return;}if(rep){agent.status='Complété';agent.progression=100;agent.note=rep.scoreNumber;agent.scoreText=rep.score;agent.updatedAt=rep.timestamp||fmtDate();agent.raw=rep.raw||[];agent.responseDetails=rep;}else{agent.status='En attente de réponse';agent.progression=0;agent.note=null;agent.scoreText='';agent.updatedAt='';agent.raw=[];}});
    computeSessionCounts(session);let completed=list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined);session.average=completed.length?Number((completed.reduce((s,a)=>s+(Number(a.note)||0),0)/completed.length).toFixed(2)):null;session.lastSyncAt=fmtDate();session.lastResponsesCount=responses.length;saveState();renderSession();renderSessionDetail(session.id);let msg=responses.length+' réponse(s) CSV lue(s). '+session.answered+' agent(s) complété(s).';if(absent.length)msg+='\\nAttention : réponse reçue pour agent(s) absent(s) : '+absent.join(', ');alert(msg);}
  catch(err){console.error(err);alert("Erreur lecture CSV : "+err.message+"\\nVérifie que l'URL CSV publiée s'ouvre dans Chrome.");}
}

function renderAnswers(){let sessions=(state.sessions||[]).slice().reverse(), sid=Number(window.__v58SelectedSessionId||sessions[0]?.id||0), session=sessions.find(s=>Number(s.id)===sid)||sessions[0], opts=sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');if(!session){main.innerHTML='<div class="panel"><h2>Réponses détaillées</h2><div class="empty">Aucune session.</div></div>';return;}let qcm=state.qcms.find(q=>q.id===session.qcmId)||{}, res=v58GetResponsesForSession(session);let html=`<div class="panel"><h2>Réponses détaillées agents</h2><div class="formGrid"><div><label>Session</label><select id="v58SessionSelect">${opts}</select></div></div><div class="v58KpiGrid"><div class="v58Kpi"><span>Répondants</span><b>${res.length}</b></div><div class="v58Kpi"><span>Questions</span><b>${(qcm.questions||[]).length}</b></div><div class="v58Kpi"><span>Moyenne</span><b>${session.average??'-'}/10</b></div><div class="v58Kpi"><span>Présents</span><b>${session.present||0}</b></div><div class="v58Kpi"><span>Absents</span><b>${session.absent||0}</b></div></div>`;res.forEach(agent=>{html+=`<div class="v58Panel"><h3>${agent.nom} ${agent.prenom} — ${agent.note}/10</h3><table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th></tr>`;agent.answers.forEach(a=>{html+=`<tr class="${a.ok?'v58AnswerOk':'v58AnswerKo'}"><td>${a.num}</td><td>${v58Esc(a.question)}</td><td>${v58Esc(a.given||'-')}</td><td>${v58Esc(a.good||'-')}</td><td>${a.ok?'<span class="v58Good">✅ Correct</span>':'<span class="v58Bad">❌ À reprendre</span>'}</td></tr>`});html+='</table></div>';});if(!res.length)html+='<div class="empty">Aucune réponse détaillée. Synchronise la session après publication CSV.</div>';html+='</div>';main.innerHTML=html;let sel=document.getElementById('v58SessionSelect');if(sel){sel.value=String(session.id);sel.onchange=e=>{window.__v58SelectedSessionId=Number(e.target.value);renderAnswers();};}}
function renderProjection(){let sessions=(state.sessions||[]).slice().reverse(), sid=Number(window.__v58ProjectionSessionId||sessions[0]?.id||0), session=sessions.find(s=>Number(s.id)===sid)||sessions[0], opts=sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');if(!session){main.innerHTML='<div class="panel"><h2>Correction / projection</h2><div class="empty">Aucune session.</div></div>';return;}let stats=v58QuestionStats(session), worst=stats.slice().sort((a,b)=>b.error-a.error).slice(0,5), best=stats.slice().sort((a,b)=>b.success-a.success).slice(0,5);let html=`<div class="panel"><h2>Correction / projection — analyse questions</h2><div class="formGrid"><div><label>Session</label><select id="v58ProjectionSelect">${opts}</select></div></div><div class="v58Grid"><div><h3>Questions les plus ratées</h3><table><tr><th>Rang</th><th>Question</th><th>Erreur</th></tr>${worst.map((q,i)=>`<tr><td>${i+1}</td><td>Q${q.num} — ${v58Esc(q.question)}</td><td class="${q.error>=50?'v58Bad':'v58Warn'}">${q.error}%</td></tr>`).join('')}</table></div><div><h3>Questions les mieux maîtrisées</h3><table><tr><th>Rang</th><th>Question</th><th>Réussite</th></tr>${best.map((q,i)=>`<tr><td>${i+1}</td><td>Q${q.num} — ${v58Esc(q.question)}</td><td class="v58Good">${q.success}%</td></tr>`).join('')}</table></div></div>`;stats.forEach(q=>{let cr=Object.entries(q.counts).map(([l,c])=>`<tr><td>${l}</td><td>${v58Esc(q.choices[l.charCodeAt(0)-65]||'Autre')}</td><td>${c}</td></tr>`).join('');html+=`<div class="v58Panel"><h3>Q${q.num} — ${v58Esc(q.question)}</h3><p><b>Bonne réponse :</b> <span class="v58Good">${v58Letter(q.good)}. ${v58Esc(q.goodText)}</span><br><b>Explication :</b> ${v58Esc(q.explanation)}</p><table><tr><th>Réponse</th><th>Libellé</th><th>Nombre agents</th></tr>${cr}</table><p><b>Réussite :</b> ${q.success}% — <b>Erreur :</b> ${q.error}%</p></div>`});html+='</div>';main.innerHTML=html;let sel=document.getElementById('v58ProjectionSelect');if(sel){sel.value=String(session.id);sel.onchange=e=>{window.__v58ProjectionSessionId=Number(e.target.value);renderProjection();};}}

function generateActionPlanForSession(session){if(!Array.isArray(state.actionPlans))state.actionPlans=[];computeSessionCounts(session);let actions=v58SmartActionsFromQuestions(session), avg=session.average, priority=avg===null||avg<6?'Haute':avg<7.5?'Moyenne':'Suivi';if(session.waiting>0)actions.push(session.waiting+' agent(s) présent(s) sans réponse : organiser relance ou rattrapage.');if(session.absent>0)actions.push(session.absent+' absent(s) : tracer et prévoir rattrapage si QCM obligatoire EDF.');let plan={id:Date.now(),sessionId:session.id,qcmName:session.qcmName,qcmTitle:session.qcmTitle||'',createdAt:fmtDate(),priority,average:avg,present:session.present,absent:session.absent||0,answered:session.answered,waiting:session.waiting||0,participation:session.present?Math.round((session.answered/session.present)*100):0,actions};state.actionPlans=state.actionPlans.filter(p=>Number(p.sessionId)!==Number(session.id));state.actionPlans.push(plan);return plan;}
function buildIsoStatsReportHtml(){let all=(state.sessions||[]).flatMap(s=>v58QuestionStats(s).map(q=>({...q,session:s.qcmName}))).filter(q=>q.total>0), worst=all.sort((a,b)=>b.error-a.error).slice(0,10);return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;padding:28px;color:#111}h1{color:#06224a}h2{color:#0b4a8f}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border:1px solid #ccc;padding:8px;text-align:left}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;padding:12px;margin:12px 0}</style></head><body><h1>SECAB — Indicateurs ISO 9001 / ISO 45001 / Environnement EDF</h1><h2>Questions les plus ratées</h2><table><tr><th>Rang</th><th>Session</th><th>Question</th><th>Erreur</th></tr>${worst.map((q,i)=>`<tr><td>${i+1}</td><td>${q.session}</td><td>Q${q.num} — ${q.question}</td><td>${q.error}%</td></tr>`).join('')||'<tr><td colspan="4">Aucune donnée.</td></tr>'}</table><h2>Lecture ISO 9001</h2><div class="box">Suivi compétences, efficacité sensibilisation, actions correctives.</div><h2>Lecture ISO 45001</h2><div class="box">Sensibilisation sécurité, maîtrise risques, participation agents.</div><h2>Environnement EDF</h2><div class="box">Traçabilité biodiversité, déchets, pollution, ravines et zones sensibles.</div></body></html>`;}
function renderStats(){let g=typeof v57GlobalStats==='function'?v57GlobalStats():{closed:[],participation:0,avg:null,absent:0};let all=(state.sessions||[]).flatMap(s=>v58QuestionStats(s).map(q=>({...q,session:s.qcmName}))).filter(q=>q.total>0), worst=all.sort((a,b)=>b.error-a.error).slice(0,10), env=(state.qcms||[]).filter(q=>String(q.type||'').includes('Environnement')).length;main.innerHTML=`<div class="panel"><h2>Statistiques performance / ISO 9001 / ISO 45001 / EDF</h2><div class="v58KpiGrid"><div class="v58Kpi"><span>Sessions clôturées</span><b>${g.closed.length}</b></div><div class="v58Kpi"><span>Participation</span><b>${g.participation}%</b></div><div class="v58Kpi"><span>Moyenne service</span><b>${g.avg!==null?g.avg+'/10':'-'}</b></div><div class="v58Kpi"><span>Absences</span><b>${g.absent}</b></div><div class="v58Kpi"><span>QCM Env. EDF</span><b>${env}</b></div></div><div class="toolbar"><button class="btn good" onclick="exportHtmlAsWord('indicateurs_iso_secab.doc', buildIsoStatsReportHtml())">Exporter indicateurs ISO Word</button><button class="btn good" onclick="exportHtmlAsPdf('indicateurs_iso_secab.pdf', buildIsoStatsReportHtml())">Exporter indicateurs ISO PDF</button></div><h3>Questions les plus ratées toutes sessions</h3><table><tr><th>Rang</th><th>Session</th><th>Question</th><th>Erreur</th></tr>${worst.map((q,i)=>`<tr><td>${i+1}</td><td>${q.session}</td><td>Q${q.num} — ${v58Esc(q.question)}</td><td class="${q.error>=50?'v58Bad':'v58Warn'}">${q.error}%</td></tr>`).join('')||'<tr><td colspan="4">Aucune donnée.</td></tr>'}</table><div class="v58Panel"><h3>Lecture ISO 9001</h3><p>Suivi des compétences, efficacité des sensibilisations, actions correctives et amélioration continue.</p></div><div class="v58Panel"><h3>Lecture ISO 45001</h3><p>Sensibilisation sécurité, maîtrise des risques terrain et participation des travailleurs.</p></div><div class="v58Panel"><h3>Lecture Environnement EDF</h3><p>Traçabilité biodiversité, déchets, pollution, ravines et zones sensibles.</p></div></div>`;}
function showPage(id){setActive(id);if(id==='dashboard')return renderDashboard();if(id==='session')return renderSession();if(id==='answers')return renderAnswers();if(id==='sync')return renderSync();if(id==='projection')return renderProjection();if(id==='bank')return renderBank();if(id==='agents')return renderAgents();if(id==='results')return renderResults();if(id==='stats')return renderStats();if(id==='actions')return renderActions();if(id==='fiches')return renderFiches();if(id==='share')return renderShare();if(id==='forms')return renderForms();if(id==='settings')return renderSettings();}
setTimeout(()=>{v58EnsureMenu();if(typeof buildMenu==='function')buildMenu();},800);



/* =========================================================
   V59 - COHERENCE TOTALE
   Une seule source : session.agentStatus[].answers détaillées.
   ========================================================= */

let v59AutoSyncTimer = null;

function v59Norm(v){
  return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
}
function v59Esc(v){
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function v59Letter(i){return String.fromCharCode(65 + Number(i || 0));}

function v59BuildAnswersForAgent(session, agentStatus){
  const qcm = (state.qcms || []).find(q => q.id === session.qcmId) || {};
  const raw = Array.isArray(agentStatus.raw) ? agentStatus.raw : [];
  const questions = qcm.questions || [];
  const details = questions.map((q, idx) => {
    const given = raw[4 + idx] || '';
    const goodText = q.choices?.[q.good] || '';
    const goodLetter = v59Letter(q.good);
    const givenIndex = (q.choices || []).findIndex(c => v59Norm(c) === v59Norm(given));
    const givenLetter = givenIndex >= 0 ? v59Letter(givenIndex) : '';
    const ok = v59Norm(given) === v59Norm(goodText);
    return {
      num: idx + 1,
      question: q.question,
      choices: q.choices || [],
      given,
      givenIndex,
      givenLetter,
      good: goodText,
      goodIndex: q.good,
      goodLetter,
      ok,
      explanation: q.explanation || ''
    };
  });
  agentStatus.answers = details;
  return details;
}

function v59EnsureDetailedData(session){
  if(!session) return;
  const list = session.agentStatus || [];
  list.forEach(a => {
    if(a.status === 'Complété'){
      if(!Array.isArray(a.answers) || !a.answers.length){
        v59BuildAnswersForAgent(session, a);
      }
    }
  });
}

function v59FindAgentResponse(agent,responses){
  if(typeof v56FindResponse === 'function') return v56FindResponse(agent,responses);
  const np=v59Norm((agent.nom||'')+' '+(agent.prenom||'')), pn=v59Norm((agent.prenom||'')+' '+(agent.nom||'')), mdp=String(agent.mdp||'').trim().toLowerCase();
  return responses.find(r=>{const rn=v59Norm(r.agent), rm=String(r.mdp||'').trim().toLowerCase();return (mdp&&rm&&mdp===rm)||rn===np||rn===pn||rn.includes(np)||rn.includes(pn);});
}

async function syncSessionById(sessionId){
  const session = state.sessions.find(s => Number(s.id) === Number(sessionId));
  if(!session) return alert('Session introuvable.');
  const url = (session.csvUrl || '').trim();
  if(!url) return alert("Aucune URL CSV enregistrée pour cette session.");

  try{
    const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), {cache:'no-store'});
    if(!response.ok) throw new Error('HTTP ' + response.status);
    const csvText = await response.text();
    const responses = v56RowsToResponses(csvText);
    const list = v56EnsureSessionAgentStatus(session);
    const absentWithResponse = [];

    list.forEach(agent => {
      const rep = v59FindAgentResponse(agent, responses);
      if(agent.status === 'Absent'){
        if(rep) absentWithResponse.push(agent.nom + ' ' + agent.prenom);
        return;
      }

      if(rep){
        agent.status = 'Complété';
        agent.progression = 100;
        agent.note = rep.scoreNumber;
        agent.scoreText = rep.score;
        agent.updatedAt = rep.timestamp || fmtDate();
        agent.raw = rep.raw || [];
        agent.responseDetails = rep;
        agent.answers = v59BuildAnswersForAgent(session, agent);
      } else {
        agent.status = 'En attente de réponse';
        agent.progression = 0;
        agent.note = null;
        agent.scoreText = '';
        agent.updatedAt = '';
        agent.raw = [];
        agent.answers = [];
      }
    });

    computeSessionCounts(session);
    const completed = list.filter(a => a.status === 'Complété' && a.note !== null && a.note !== undefined);
    session.average = completed.length ? Number((completed.reduce((s,a)=>s+(Number(a.note)||0),0)/completed.length).toFixed(2)) : null;
    session.lastSyncAt = fmtDate();
    session.lastResponsesCount = responses.length;
    v59EnsureDetailedData(session);
    saveState();

    if(currentPage === 'session'){ renderSession(); renderSessionDetail(session.id); }
    if(currentPage === 'answers') renderAnswers();
    if(currentPage === 'projection') renderProjection();
    if(currentPage === 'stats') renderStats();
    if(currentPage === 'fiches') renderFiches();

    let msg = responses.length + ' réponse(s) CSV lue(s). ' + session.answered + ' agent(s) complété(s).';
    if(absentWithResponse.length) msg += "\\nAttention : réponse reçue pour agent(s) déclaré(s) absent(s) : " + absentWithResponse.join(', ');
    alert(msg);
  }catch(err){
    console.error(err);
    alert("Erreur lecture CSV : " + err.message + "\\nVérifie que l'URL CSV publiée s'ouvre dans Chrome.");
  }
}

function v59GetResponsesForSession(session){
  v59EnsureDetailedData(session);
  return (session.agentStatus || []).filter(a => a.status === 'Complété').map(a => ({
    ...a,
    answers: Array.isArray(a.answers) ? a.answers : v59BuildAnswersForAgent(session,a)
  }));
}

function v58GetResponsesForSession(session){ return v59GetResponsesForSession(session); }

function v59QuestionStats(session){
  const qcm = (state.qcms || []).find(q=>q.id===session.qcmId) || {};
  const responses = v59GetResponsesForSession(session);
  return (qcm.questions || []).map((q, idx) => {
    const counts = {};
    (q.choices || []).forEach((c,i)=>counts[v59Letter(i)] = 0);
    let correct = 0, total = 0;
    responses.forEach(r => {
      const ans = r.answers[idx];
      if(!ans) return;
      total++;
      const letter = ans.givenLetter || 'Autre';
      counts[letter] = (counts[letter] || 0) + 1;
      if(ans.ok) correct++;
    });
    return {
      num: idx+1,
      question: q.question,
      choices: q.choices || [],
      good: q.good,
      goodText: q.choices?.[q.good] || '',
      explanation: q.explanation || '',
      counts,total,correct,
      error: total ? Math.round(((total-correct)/total)*100) : 0,
      success: total ? Math.round((correct/total)*100) : 0
    };
  });
}
function v58QuestionStats(session){ return v59QuestionStats(session); }

function v59OpenAgentHistoryDetail(agentId, sessionId){
  const session = (state.sessions || []).find(s=>Number(s.id)===Number(sessionId));
  if(!session) return alert('Session introuvable.');
  v59EnsureDetailedData(session);
  const a = (session.agentStatus || []).find(x=>Number(x.agentId)===Number(agentId));
  if(!a) return alert('Agent introuvable dans cette session.');
  const answers = Array.isArray(a.answers) ? a.answers : v59BuildAnswersForAgent(session,a);
  const html = `<div class="v59DetailBox"><h3>Détail QCM — ${a.nom} ${a.prenom} — ${session.qcmName}</h3>
    <p><b>Note :</b> ${a.note !== null && a.note !== undefined ? a.note + '/10' : '-'} · <b>Statut :</b> ${a.status} · <b>MAJ :</b> ${a.updatedAt || '-'}</p>
    <table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th><th>Explication</th></tr>
    ${answers.map(ans=>`<tr class="${ans.ok?'v58AnswerOk':'v58AnswerKo'}"><td>${ans.num}</td><td>${v59Esc(ans.question)}</td><td>${v59Esc(ans.given || '-')}</td><td>${v59Esc(ans.good || '-')}</td><td>${ans.ok?'<span class="v59Ok">✅ Correct</span>':'<span class="v59Ko">❌ À reprendre</span>'}</td><td>${v59Esc(ans.explanation || '')}</td></tr>`).join('')}</table></div>`;
  const box = document.getElementById('v59AgentHistoryDetail');
  if(box) box.innerHTML = html;
  else alert('Détail disponible dans la fiche agent.');
}

function renderFiches(){
  const agents = getActiveAgents();
  const options = agents.map(a => `<option value="${a.id}">${a.nom} ${a.prenom}</option>`).join('');
  const selected = Number(window.__v57SelectedAgentId || agents[0]?.id || 0);
  const agent = agents.find(a => a.id === selected) || agents[0];
  const stats = agent ? v57AgentStats(agent) : null;
  const plan = stats ? v57PlanForAgent(stats) : null;

  const historyRows = stats ? stats.rows.map(r => `<tr>
    <td>${r.date || '-'}</td>
    <td>${r.qcmName}</td>
    <td>${r.qcmTitle || '-'}</td>
    <td>${r.status}</td>
    <td>${r.note !== null && r.note !== undefined ? r.note + ' /10' : '-'}</td>
    <td>${r.updatedAt || '-'}</td>
    <td>${r.answered ? `<button class="v59DetailBtn" onclick="v59OpenAgentHistoryDetail(${agent.id}, ${r.sessionId})">Ouvrir détail</button>` : '-'}</td>
  </tr>`).join('') : '';

  main.innerHTML = `<div class="panel"><h2>Fiches individuelles agents</h2>
    <div class="formGrid"><div><label>Agent</label><select id="agentFicheSelect">${options}</select></div></div>
    ${agent ? `<div class="v57KpiGrid">
      <div class="v57Kpi"><span>Moyenne</span><b>${stats.avg !== null ? stats.avg + '/10' : '-'}</b></div>
      <div class="v57Kpi"><span>Participation</span><b>${stats.participation}%</b></div>
      <div class="v57Kpi"><span>QCM réalisés</span><b>${stats.answeredRows.length}</b></div>
      <div class="v57Kpi"><span>Non-réponses</span><b>${stats.missedRows.length}</b></div>
    </div>
    <div class="v57Box"><h3>${agent.nom} ${agent.prenom}</h3>
      <p><b>Équipe :</b> ${agent.equipe || '-'}<br><b>Fonction :</b> ${agent.fonction || '-'}</p>
      <p><b>Évolution :</b> ${stats.trend === 'progression' ? '<span class="v57Good">↗ progression</span>' : stats.trend === 'régression' ? '<span class="v57Bad">↘ régression</span>' : '→ stable'}</p>
    </div>
    <div class="v57Box ${v57ClassForPriority(plan.priority)}"><h3>Plan d’action individuel — priorité ${plan.priority}</h3><ul>${plan.actions.map(a=>`<li>${a}</li>`).join('')}</ul></div>
    <h3>Historique QCM complet</h3><table><tr><th>Date</th><th>QCM</th><th>Thème</th><th>Statut</th><th>Note</th><th>MAJ</th><th>Détail</th></tr>${historyRows || '<tr><td colspan="7" class="empty">Aucun résultat réel synchronisé.</td></tr>'}</table>
    <div id="v59AgentHistoryDetail"></div>` : '<div class="empty">Aucun agent.</div>'}
  </div>`;
  const sel = document.getElementById('agentFicheSelect');
  if(sel){
    sel.value = String(agent?.id || '');
    sel.onchange = e => { window.__v57SelectedAgentId = Number(e.target.value); renderFiches(); };
  }
}

function renderAnswers(){
  const sessions = (state.sessions || []).slice().reverse();
  const options = sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');
  const sid = Number(window.__v58SelectedSessionId || sessions[0]?.id || 0);
  const session = sessions.find(s=>Number(s.id)===sid) || sessions[0];
  if(!session){ main.innerHTML = '<div class="panel"><h2>Réponses détaillées</h2><div class="empty">Aucune session.</div></div>'; return; }
  v59EnsureDetailedData(session);
  const qcm = (state.qcms || []).find(q=>q.id===session.qcmId) || {};
  const responses = v59GetResponsesForSession(session);
  let html = `<div class="panel"><h2>Réponses détaillées agents</h2>
    <div class="v59AutoSync"><b>V59 :</b> les réponses détaillées proviennent de la même source que les notes. Si une note existe, les réponses doivent être conservées après synchronisation.</div>
    <div class="formGrid"><div><label>Session</label><select id="v58SessionSelect">${options}</select></div></div>
    <div class="v58KpiGrid"><div class="v58Kpi"><span>Répondants</span><b>${responses.length}</b></div><div class="v58Kpi"><span>Questions</span><b>${(qcm.questions||[]).length}</b></div><div class="v58Kpi"><span>Moyenne</span><b>${session.average !== null && session.average !== undefined ? session.average + '/10' : '-'}</b></div><div class="v58Kpi"><span>Présents</span><b>${session.present||0}</b></div><div class="v58Kpi"><span>Absents</span><b>${session.absent||0}</b></div></div>`;
  responses.forEach(agent=>{
    html += `<div class="v58Panel"><h3>${agent.nom} ${agent.prenom} — ${agent.note}/10</h3><table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th><th>Explication</th></tr>`;
    agent.answers.forEach(a=>{
      html += `<tr class="${a.ok?'v58AnswerOk':'v58AnswerKo'}"><td>${a.num}</td><td>${v59Esc(a.question)}</td><td>${v59Esc(a.given||'-')}</td><td>${v59Esc(a.good||'-')}</td><td>${a.ok?'<span class="v59Ok">✅ Correct</span>':'<span class="v59Ko">❌ À reprendre</span>'}</td><td>${v59Esc(a.explanation||'')}</td></tr>`;
    });
    html += `</table></div>`;
  });
  if(!responses.length) html += '<div class="empty">Aucune réponse détaillée. Synchronise cette session avec son URL CSV.</div>';
  html += '</div>';
  main.innerHTML = html;
  const sel=document.getElementById('v58SessionSelect');
  if(sel){ sel.value=String(session.id); sel.onchange=e=>{window.__v58SelectedSessionId=Number(e.target.value);renderAnswers();}; }
}

function v59AutoSyncOpenSessions(){
  if(v59AutoSyncTimer) clearInterval(v59AutoSyncTimer);
  v59AutoSyncTimer = setInterval(async ()=>{
    const open = (state.sessions || []).filter(s=>s.status !== 'Clôturé' && s.csvUrl);
    for(const s of open){
      try{
        const response = await fetch(s.csvUrl + (s.csvUrl.includes('?')?'&':'?') + 'auto=' + Date.now(), {cache:'no-store'});
        if(response.ok){
          const responses = v56RowsToResponses(await response.text());
          const list = v56EnsureSessionAgentStatus(s);
          list.forEach(agent=>{
            if(agent.status === 'Absent') return;
            const rep = v59FindAgentResponse(agent,responses);
            if(rep){
              agent.status='Complété'; agent.progression=100; agent.note=rep.scoreNumber; agent.scoreText=rep.score; agent.updatedAt=rep.timestamp||fmtDate(); agent.raw=rep.raw||[]; agent.responseDetails=rep; agent.answers=v59BuildAnswersForAgent(s,agent);
            }
          });
          computeSessionCounts(s);
          const completed=list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined);
          s.average=completed.length?Number((completed.reduce((sum,a)=>sum+(Number(a.note)||0),0)/completed.length).toFixed(2)):null;
          s.lastSyncAt=fmtDate();
          v59EnsureDetailedData(s);
          saveState();
        }
      }catch(e){ console.warn('Auto-sync V59', e); }
    }
    if(currentPage==='session') renderSession();
    if(currentPage==='answers') renderAnswers();
  }, 60000);
}
setTimeout(v59AutoSyncOpenSessions, 1500);

function buildQcmReportHtml(sessionId){
  const s = (state.sessions || []).find(x=>Number(x.id)===Number(sessionId)) || state.sessions[state.sessions.length-1];
  if(!s) return '<html><body><h1>Aucune session</h1></body></html>';
  v59EnsureDetailedData(s);
  const qcm = (state.qcms || []).find(q=>q.id===s.qcmId) || {};
  const qstats = v59QuestionStats(s);
  const worst = qstats.slice().sort((a,b)=>b.error-a.error).slice(0,5);
  const best = qstats.slice().sort((a,b)=>b.success-a.success).slice(0,5);
  const detailRows = (s.agentStatus || []).map(a=>`<tr><td>${a.nom} ${a.prenom}</td><td>${a.equipe||'-'}</td><td>${a.status}</td><td>${a.note!==null&&a.note!==undefined?a.note+'/10':'-'}</td><td>${a.updatedAt||'-'}</td></tr>`).join('');
  const answerDetails = v59GetResponsesForSession(s).map(agent=>`<h3>${agent.nom} ${agent.prenom} — ${agent.note}/10</h3><table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th></tr>${agent.answers.map(a=>`<tr><td>${a.num}</td><td>${a.question}</td><td>${a.given||'-'}</td><td>${a.good||'-'}</td><td>${a.ok?'Correct':'À reprendre'}</td></tr>`).join('')}</table>`).join('');
  const actions = (typeof v58SmartActionsFromQuestions === 'function' ? v58SmartActionsFromQuestions(s) : ['Correction collective ciblée.']);
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial;color:#111;padding:28px}h1{color:#06224a}h2{color:#0b4a8f}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{border:1px solid #ccc;padding:8px;text-align:left;vertical-align:top}.kpi{display:inline-block;border:1px solid #ccc;border-radius:8px;padding:12px;margin:6px;background:#f8fafc}.kpi b{font-size:22px;display:block}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;padding:12px;margin:12px 0}</style></head><body>
  <h1>SECAB — Rapport détaillé QCM V59</h1><h2>${s.qcmName} — ${s.qcmTitle || qcm.titre || ''}</h2>
  <div class="kpi">Présents<b>${s.present||0}</b></div><div class="kpi">Absents<b>${s.absent||0}</b></div><div class="kpi">Répondants<b>${s.answered||0}</b></div><div class="kpi">Moyenne<b>${s.average!==null&&s.average!==undefined?s.average+'/10':'-'}</b></div>
  <h2>Résultats individuels</h2><table><tr><th>Agent</th><th>Équipe</th><th>Statut</th><th>Note</th><th>MAJ</th></tr>${detailRows}</table>
  <h2>Questions les plus ratées</h2><table><tr><th>Question</th><th>Erreur</th><th>Bonne réponse</th></tr>${worst.map(q=>`<tr><td>Q${q.num} — ${q.question}</td><td>${q.error}%</td><td>${v59Letter(q.good)}. ${q.goodText}</td></tr>`).join('')}</table>
  <h2>Questions les mieux maîtrisées</h2><table><tr><th>Question</th><th>Réussite</th><th>Bonne réponse</th></tr>${best.map(q=>`<tr><td>Q${q.num} — ${q.question}</td><td>${q.success}%</td><td>${v59Letter(q.good)}. ${q.goodText}</td></tr>`).join('')}</table>
  <h2>Plan d’action adapté</h2><div class="box">${actions.join('<br>')}</div>
  <h2>Réponses détaillées agent par agent</h2>${answerDetails || '<p>Aucune réponse détaillée disponible.</p>'}
  </body></html>`;
}



/* =========================================================
   V60 - COHERENCE TOTALE REELLE + THEMES DYNAMIQUES
   Correction majeure : les réponses sont lues par en-tête CSV et non par index fixe.
   ========================================================= */

const V60_THEMES = {
  volcan:{label:'🌋 Réunion Volcan Nuit', className:'theme-volcan'},
  lagon:{label:'🏝️ Réunion Lagon', className:'theme-lagon'},
  tropical:{label:'🌴 Réunion Tropical', className:'theme-tropical'},
  edf:{label:'⚡ EDF Technique', className:'theme-edf'},
  direction:{label:'📊 Direction Premium', className:'theme-direction'},
  iso:{label:'🛡️ ISO / Audit', className:'theme-iso'}
};

function v60Norm(v){
  return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
}
function v60Esc(v){
  return String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function v60Letter(i){return String.fromCharCode(65 + Number(i || 0));}

function v60ApplyTheme(){
  const key = (state.settings && state.settings.themeKey) || 'volcan';
  const cls = Object.values(V60_THEMES).map(t=>t.className);
  document.body.classList.remove(...cls);
  document.body.classList.add((V60_THEMES[key] || V60_THEMES.volcan).className);
}
setTimeout(v60ApplyTheme, 300);

function v60ParseCsv(text){
  if(typeof v56ParseCsv === 'function') return v56ParseCsv(text);
  const rows=[]; let row=[], value='', quote=false; const src=String(text||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n');
  for(let i=0;i<src.length;i++){
    const c=src[i], n=src[i+1];
    if(c === '"'){ if(quote && n === '"'){ value+='"'; i++; } else quote=!quote; }
    else if(c===',' && !quote){ row.push(value); value=''; }
    else if(c==='\n' && !quote){ row.push(value); rows.push(row); row=[]; value=''; }
    else value+=c;
  }
  row.push(value); if(row.length>1 || row[0].trim()) rows.push(row);
  return rows;
}

function v60ParseScore(v){
  const n = Number(String(v ?? '').split('/')[0].replace(',','.').trim());
  return Number.isFinite(n) ? n : null;
}

function v60RowsToResponses(csvText){
  const rows = v60ParseCsv(csvText).filter(r => r.some(c => String(c).trim()));
  if(rows.length <= 1) return [];
  const headersRaw = rows[0].map(h=>String(h||'').trim());
  const headers = headersRaw.map(v60Norm);
  const idxTimestamp = headers.findIndex(h => h.includes('timestamp') || h.includes('horodatage'));
  const idxScore = headers.findIndex(h => h.includes('score') || h.includes('note'));
  const idxAgent = headers.findIndex(h => (h.includes('nom') && h.includes('prenom')) || h === 'agent');
  const idxMdp = headers.findIndex(h => h.includes('mot de passe') || h.includes('mdp') || h.includes('password'));

  return rows.slice(1).map(r => {
    const answerMap = {};
    headersRaw.forEach((h,i)=>{
      if(i !== idxTimestamp && i !== idxScore && i !== idxAgent && i !== idxMdp){
        answerMap[h] = (r[i] || '').trim();
      }
    });
    return {
      timestamp: idxTimestamp >= 0 ? (r[idxTimestamp] || '').trim() : '',
      score: idxScore >= 0 ? (r[idxScore] || '').trim() : '',
      scoreNumber: idxScore >= 0 ? v60ParseScore(r[idxScore]) : null,
      agent: idxAgent >= 0 ? (r[idxAgent] || '').trim() : '',
      mdp: idxMdp >= 0 ? (r[idxMdp] || '').trim() : '',
      raw: r,
      headers: headersRaw,
      answerMap
    };
  }).filter(r => r.agent || r.mdp);
}

function v60FindResponseForAgent(agent,responses){
  if(typeof v56FindResponse === 'function'){
    const r = v56FindResponse(agent,responses);
    if(r) return r;
  }
  const np=v60Norm((agent.nom||'')+' '+(agent.prenom||'')), pn=v60Norm((agent.prenom||'')+' '+(agent.nom||'')), mdp=String(agent.mdp||'').trim().toLowerCase();
  return responses.find(r=>{
    const rn=v60Norm(r.agent), rm=String(r.mdp||'').trim().toLowerCase();
    return (mdp&&rm&&mdp===rm)||rn===np||rn===pn||rn.includes(np)||rn.includes(pn)||np.includes(rn)||pn.includes(rn);
  });
}

function v60FindAnswerForQuestion(rep, questionText){
  if(!rep) return '';
  const target = v60Norm(questionText);
  if(rep.answerMap){
    let exact = Object.entries(rep.answerMap).find(([h,v])=>v60Norm(h) === target);
    if(exact) return exact[1] || '';
    let soft = Object.entries(rep.answerMap).find(([h,v])=>{
      const nh=v60Norm(h);
      return nh.includes(target) || target.includes(nh) || nh.slice(0,35) === target.slice(0,35);
    });
    if(soft) return soft[1] || '';
  }
  return '';
}

function v60BuildAnswers(session, agent, rep){
  const qcm = (state.qcms || []).find(q=>q.id === session.qcmId) || {};
  const questions = qcm.questions || [];
  return questions.map((q,idx)=>{
    const given = v60FindAnswerForQuestion(rep, q.question);
    const good = q.choices?.[q.good] || '';
    const givenIndex = (q.choices || []).findIndex(c=>v60Norm(c) === v60Norm(given));
    const ok = !!given && v60Norm(given) === v60Norm(good);
    return {
      num: idx+1,
      question:q.question,
      choices:q.choices || [],
      given,
      givenIndex,
      givenLetter: givenIndex >= 0 ? v60Letter(givenIndex) : '',
      good,
      goodIndex:q.good,
      goodLetter:v60Letter(q.good),
      ok,
      explanation:q.explanation || ''
    };
  });
}

async function syncSessionById(sessionId){
  const session = state.sessions.find(s=>Number(s.id)===Number(sessionId));
  if(!session) return alert('Session introuvable.');
  const url = (session.csvUrl || '').trim();
  if(!url) return alert('Aucune URL CSV enregistrée pour cette session.');

  try{
    const response = await fetch(url + (url.includes('?')?'&':'?') + 't=' + Date.now(), {cache:'no-store'});
    if(!response.ok) throw new Error('HTTP ' + response.status);
    const responses = v60RowsToResponses(await response.text());
    const list = v56EnsureSessionAgentStatus(session);
    const absentWithResponse = [];

    list.forEach(agent=>{
      const rep = v60FindResponseForAgent(agent,responses);
      if(agent.status === 'Absent'){
        if(rep) absentWithResponse.push(agent.nom + ' ' + agent.prenom);
        return;
      }

      if(rep){
        agent.status='Complété';
        agent.progression=100;
        agent.note=rep.scoreNumber;
        agent.scoreText=rep.score;
        agent.updatedAt=rep.timestamp || fmtDate();
        agent.raw=rep.raw || [];
        agent.headers=rep.headers || [];
        agent.answerMap=rep.answerMap || {};
        agent.responseDetails=rep;
        agent.answers=v60BuildAnswers(session,agent,rep);
      }else{
        agent.status='En attente de réponse';
        agent.progression=0;
        agent.note=null;
        agent.scoreText='';
        agent.updatedAt='';
        agent.raw=[];
        agent.headers=[];
        agent.answerMap={};
        agent.answers=[];
      }
    });

    computeSessionCounts(session);
    const completed=list.filter(a=>a.status==='Complété' && a.note!==null && a.note!==undefined);
    session.average=completed.length?Number((completed.reduce((sum,a)=>sum+(Number(a.note)||0),0)/completed.length).toFixed(2)):null;
    session.lastSyncAt=fmtDate();
    session.lastResponsesCount=responses.length;
    session.v60Synced=true;
    saveState();

    if(currentPage==='session'){renderSession();renderSessionDetail(session.id);}
    if(currentPage==='answers')renderAnswers();
    if(currentPage==='projection')renderProjection();
    if(currentPage==='stats')renderStats();
    if(currentPage==='results')renderResults();
    if(currentPage==='fiches')renderFiches();

    let msg=responses.length+' réponse(s) CSV lue(s). '+session.answered+' agent(s) complété(s).';
    if(absentWithResponse.length) msg+='\\nAttention : réponse reçue pour agent(s) déclaré(s) absent(s) : '+absentWithResponse.join(', ');
    alert(msg);
  }catch(err){
    console.error(err);
    alert("Erreur lecture CSV : "+err.message+"\\nVérifie que l’URL CSV publiée s’ouvre dans Chrome.");
  }
}

function v60EnsureDetails(session){
  if(!session) return;
  (session.agentStatus || []).forEach(a=>{
    if(a.status==='Complété' && (!Array.isArray(a.answers) || !a.answers.length)){
      if(a.answerMap && Object.keys(a.answerMap).length){
        a.answers = v60BuildAnswers(session,a,{answerMap:a.answerMap, raw:a.raw||[], headers:a.headers||[]});
      }
    }
  });
}

function v60Responses(session){
  v60EnsureDetails(session);
  return (session.agentStatus || []).filter(a=>a.status==='Complété').map(a=>({...a,answers:Array.isArray(a.answers)?a.answers:[]}));
}
function v59GetResponsesForSession(session){return v60Responses(session);}
function v58GetResponsesForSession(session){return v60Responses(session);}

function v60QuestionStats(session){
  const qcm=(state.qcms||[]).find(q=>q.id===session.qcmId)||{};
  const res=v60Responses(session).filter(a=>Array.isArray(a.answers)&&a.answers.some(x=>x.given));
  return (qcm.questions||[]).map((q,idx)=>{
    const counts={};(q.choices||[]).forEach((c,i)=>counts[v60Letter(i)]=0);
    let total=0, correct=0, noDetail=0;
    res.forEach(r=>{
      const ans=r.answers[idx];
      if(!ans || !ans.given){noDetail++;return;}
      total++;
      const letter=ans.givenLetter || 'Autre';
      counts[letter]=(counts[letter]||0)+1;
      if(ans.ok)correct++;
    });
    return {num:idx+1,question:q.question,choices:q.choices||[],good:q.good,goodText:q.choices?.[q.good]||'',explanation:q.explanation||'',counts,total,correct,noDetail,error:total?Math.round(((total-correct)/total)*100):0,success:total?Math.round((correct/total)*100):0};
  });
}
function v59QuestionStats(session){return v60QuestionStats(session);}
function v58QuestionStats(session){return v60QuestionStats(session);}

function renderAnswers(){
  const sessions=(state.sessions||[]).slice().reverse();
  const opts=sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');
  const sid=Number(window.__v58SelectedSessionId||sessions[0]?.id||0);
  const session=sessions.find(s=>Number(s.id)===sid)||sessions[0];
  if(!session){main.innerHTML='<div class="panel"><h2>Réponses détaillées</h2><div class="empty">Aucune session.</div></div>';return;}
  v60EnsureDetails(session);
  const qcm=(state.qcms||[]).find(q=>q.id===session.qcmId)||{};
  const responses=v60Responses(session);
  const detailed=responses.filter(a=>a.answers && a.answers.some(x=>x.given));
  let html=`<div class="panel"><h2>Réponses détaillées agents</h2>
  <div class="v60Info"><b>V60 Cohérence :</b> si les réponses ne s’affichent pas, clique sur <b>Synchroniser</b> pour relire le CSV. Les anciennes synchros sans détail ne peuvent pas être reconstruites sans relire le CSV.</div>
  <div class="formGrid"><div><label>Session</label><select id="v58SessionSelect">${opts}</select></div></div>
  <div class="v58KpiGrid"><div class="v58Kpi"><span>Répondants</span><b>${responses.length}</b></div><div class="v58Kpi"><span>Détails exploitables</span><b>${detailed.length}</b></div><div class="v58Kpi"><span>Questions</span><b>${(qcm.questions||[]).length}</b></div><div class="v58Kpi"><span>Moyenne</span><b>${session.average!==null&&session.average!==undefined?session.average+'/10':'-'}</b></div><div class="v58Kpi"><span>Présents</span><b>${session.present||0}</b></div></div>`;
  responses.forEach(agent=>{
    html+=`<div class="v58Panel"><h3>${agent.nom} ${agent.prenom} — ${agent.note}/10</h3>`;
    if(!agent.answers || !agent.answers.some(x=>x.given)){
      html+=`<div class="v60Info v60Warn">Note présente mais réponses détaillées absentes : resynchronise cette session avec son URL CSV.</div>`;
    }
    html+=`<table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th><th>Explication</th></tr>`;
    (agent.answers||[]).forEach(a=>{
      html+=`<tr class="${a.ok?'v58AnswerOk':'v58AnswerKo'}"><td>${a.num}</td><td>${v60Esc(a.question)}</td><td>${v60Esc(a.given||'-')}</td><td>${v60Esc(a.good||'-')}</td><td>${a.given?(a.ok?'<span class="v60Ok">✅ Correct</span>':'<span class="v60Ko">❌ À reprendre</span>'):'<span class="v60Warn">Non lu CSV</span>'}</td><td>${v60Esc(a.explanation||'')}</td></tr>`;
    });
    html+=`</table></div>`;
  });
  if(!responses.length) html+='<div class="empty">Aucune réponse. Synchronise la session avec son URL CSV.</div>';
  html+='</div>';
  main.innerHTML=html;
  const sel=document.getElementById('v58SessionSelect');
  if(sel){sel.value=String(session.id);sel.onchange=e=>{window.__v58SelectedSessionId=Number(e.target.value);renderAnswers();};}
}

function renderProjection(){
  const sessions=(state.sessions||[]).slice().reverse();
  const opts=sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');
  const sid=Number(window.__v58ProjectionSessionId||sessions[0]?.id||0);
  const session=sessions.find(s=>Number(s.id)===sid)||sessions[0];
  if(!session){main.innerHTML='<div class="panel"><h2>Correction / projection</h2><div class="empty">Aucune session.</div></div>';return;}
  const stats=v60QuestionStats(session);
  const usable=stats.some(q=>q.total>0);
  const worst=stats.filter(q=>q.total>0).sort((a,b)=>b.error-a.error).slice(0,5);
  const best=stats.filter(q=>q.total>0).sort((a,b)=>b.success-a.success).slice(0,5);
  let html=`<div class="panel"><h2>Correction / projection — analyse questions</h2>
  <div class="formGrid"><div><label>Session</label><select id="v58ProjectionSelect">${opts}</select></div></div>
  ${!usable?'<div class="v60Info v60Warn">Aucune réponse détaillée exploitable. Clique sur Synchroniser dans la session pour relire le CSV.</div>':''}
  <div class="v58Grid"><div><h3>Questions les plus ratées</h3><table><tr><th>Rang</th><th>Question</th><th>Erreur</th></tr>${worst.map((q,i)=>`<tr><td>${i+1}</td><td>Q${q.num} — ${v60Esc(q.question)}</td><td class="${q.error>=50?'v58Bad':'v58Warn'}">${q.error}%</td></tr>`).join('')||'<tr><td colspan="3">Aucune donnée détaillée.</td></tr>'}</table></div>
  <div><h3>Questions les mieux maîtrisées</h3><table><tr><th>Rang</th><th>Question</th><th>Réussite</th></tr>${best.map((q,i)=>`<tr><td>${i+1}</td><td>Q${q.num} — ${v60Esc(q.question)}</td><td class="v58Good">${q.success}%</td></tr>`).join('')||'<tr><td colspan="3">Aucune donnée détaillée.</td></tr>'}</table></div></div>`;
  stats.forEach(q=>{
    const cr=Object.entries(q.counts).map(([l,c])=>`<tr><td>${l}</td><td>${v60Esc(q.choices[l.charCodeAt(0)-65]||'Autre')}</td><td>${c}</td></tr>`).join('');
    html+=`<div class="v58Panel"><h3>Q${q.num} — ${v60Esc(q.question)}</h3><p><b>Bonne réponse :</b> <span class="v58Good">${v60Letter(q.good)}. ${v60Esc(q.goodText)}</span><br><b>Explication :</b> ${v60Esc(q.explanation)}</p><table><tr><th>Réponse</th><th>Libellé</th><th>Nombre agents</th></tr>${cr}</table><p><b>Réussite :</b> ${q.success}% — <b>Erreur :</b> ${q.error}% — <b>Réponses détaillées :</b> ${q.total}</p></div>`;
  });
  html+='</div>';
  main.innerHTML=html;
  const sel=document.getElementById('v58ProjectionSelect');
  if(sel){sel.value=String(session.id);sel.onchange=e=>{window.__v58ProjectionSessionId=Number(e.target.value);renderProjection();};}
}

function renderSettings(){
  const s=state.settings||{};
  const themeKey=s.themeKey||'volcan';
  const themeOptions=Object.entries(V60_THEMES).map(([k,t])=>`<option value="${k}" ${themeKey===k?'selected':''}>${t.label}</option>`).join('');
  main.innerHTML=`<div class="panel"><h2>Paramètres complets du logiciel</h2>
    <div class="formGrid">
      <div><label>Nom application</label><input id="setAppName" value="${v60Esc(s.appName||'QCM Manager EDF')}"></div>
      <div><label>Entreprise</label><input id="setCompany" value="${v60Esc(s.company||'SECAB')}"></div>
      <div><label>Thème visuel</label><select id="setTheme">${themeOptions}</select></div>
      <div><label>Synchronisation auto</label><select id="setAutoSync"><option ${s.autoSync?'selected':''} value="true">Activée</option><option ${!s.autoSync?'selected':''} value="false">Désactivée</option></select></div>
      <div><label>Intervalle minutes</label><input id="setInterval" type="number" value="${s.interval||5}"></div>
      <div><label>URL base partagée</label><input id="setSharedUrl" value="${v60Esc(s.sharedUrl||'')}"></div>
    </div>
    <div class="v60ThemePreview">
      <div>🌋 Réunion Volcan Nuit<br><span class="v60Small">Thème de base conservé</span></div>
      <div>🏝️ Lagon / Tropical<br><span class="v60Small">Plus clair et nature</span></div>
      <div>⚡ EDF / ISO / Direction<br><span class="v60Small">Plus professionnel audit</span></div>
    </div>
    <div class="toolbar">
      <button class="btn good" id="saveSettingsBtn">Enregistrer paramètres</button>
      <button class="btn bad" id="resetLocalBtn">Réinitialiser données locales</button>
    </div>
  </div>`;
  document.getElementById('saveSettingsBtn').onclick=()=>{
    state.settings=state.settings||{};
    state.settings.appName=document.getElementById('setAppName').value;
    state.settings.company=document.getElementById('setCompany').value;
    state.settings.themeKey=document.getElementById('setTheme').value;
    state.settings.autoSync=document.getElementById('setAutoSync').value==='true';
    state.settings.interval=Number(document.getElementById('setInterval').value)||5;
    state.settings.sharedUrl=document.getElementById('setSharedUrl').value;
    saveState(); v60ApplyTheme(); alert('Paramètres enregistrés.');
  };
  document.getElementById('resetLocalBtn').onclick=()=>{if(confirm('Réinitialiser toutes les données locales ?')){localStorage.clear();location.reload();}};
}
setTimeout(v60ApplyTheme,500);



/* =========================================================
   V61 - FINALE COHERENCE + THEMES REELS
   ========================================================= */
function v61Norm(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function v61Esc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function v61Letter(i){return String.fromCharCode(65+Number(i||0));}
const V61_THEMES={volcan:{label:'🌋 Réunion Volcan Nuit',desc:'Thème de base conservé',className:'theme-volcan'},lagon:{label:'🏝️ Réunion Lagon',desc:'Bleu turquoise lumineux',className:'theme-lagon'},tropical:{label:'🌴 Réunion Tropical',desc:'Vert nature environnement',className:'theme-tropical'},edf:{label:'⚡ EDF Technique',desc:'Bleu technique réseau',className:'theme-edf'},direction:{label:'📊 Direction Premium',desc:'Sombre comité de direction',className:'theme-direction'},iso:{label:'🛡️ ISO / Audit',desc:'Anthracite audit',className:'theme-iso'}};
function v61ApplyTheme(){const key=(state.settings&&state.settings.themeKey)||'volcan';const all=Object.values(V61_THEMES).map(t=>t.className);document.body.classList.remove(...all);document.body.classList.add((V61_THEMES[key]||V61_THEMES.volcan).className);}
setTimeout(v61ApplyTheme,200);
function v61ParseCsv(text){if(typeof v56ParseCsv==='function')return v56ParseCsv(text);const rows=[];let row=[],value='',quote=false;const src=String(text||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n');for(let i=0;i<src.length;i++){const c=src[i],n=src[i+1];if(c==='"'){if(quote&&n==='"'){value+='"';i++;}else quote=!quote;}else if(c===','&&!quote){row.push(value);value='';}else if(c==='\n'&&!quote){row.push(value);rows.push(row);row=[];value='';}else value+=c;}row.push(value);if(row.length>1||row[0].trim())rows.push(row);return rows;}
function v61ParseScore(v){const n=Number(String(v??'').split('/')[0].replace(',','.').trim());return Number.isFinite(n)?n:null;}
function v61RowsToResponses(csvText){const rows=v61ParseCsv(csvText).filter(r=>r.some(c=>String(c).trim()));if(rows.length<=1)return[];const headersRaw=rows[0].map(h=>String(h||'').trim()),headers=headersRaw.map(v61Norm);const idxTimestamp=headers.findIndex(h=>h.includes('timestamp')||h.includes('horodatage')),idxScore=headers.findIndex(h=>h.includes('score')||h.includes('note')),idxAgent=headers.findIndex(h=>(h.includes('nom')&&h.includes('prenom'))||h==='agent'),idxMdp=headers.findIndex(h=>h.includes('mot de passe')||h.includes('mdp')||h.includes('password'));return rows.slice(1).map(r=>{const answerMap={};headersRaw.forEach((h,i)=>{if(i!==idxTimestamp&&i!==idxScore&&i!==idxAgent&&i!==idxMdp)answerMap[h]=(r[i]||'').trim();});return{timestamp:idxTimestamp>=0?(r[idxTimestamp]||'').trim():'',score:idxScore>=0?(r[idxScore]||'').trim():'',scoreNumber:idxScore>=0?v61ParseScore(r[idxScore]):null,agent:idxAgent>=0?(r[idxAgent]||'').trim():'',mdp:idxMdp>=0?(r[idxMdp]||'').trim():'',raw:r,headers:headersRaw,answerMap};}).filter(r=>r.agent||r.mdp);}
function v61FindResponseForAgent(agent,responses){const np=v61Norm((agent.nom||'')+' '+(agent.prenom||'')),pn=v61Norm((agent.prenom||'')+' '+(agent.nom||'')),mdp=String(agent.mdp||'').trim().toLowerCase();return responses.find(r=>{const rn=v61Norm(r.agent),rm=String(r.mdp||'').trim().toLowerCase();return(mdp&&rm&&mdp===rm)||rn===np||rn===pn||rn.includes(np)||rn.includes(pn)||((np.includes(rn)||pn.includes(rn))&&rn.length>4);});}
function v61FindAnswer(rep,questionText,questionIndex){if(!rep)return'';const target=v61Norm(questionText);if(rep.answerMap){const entries=Object.entries(rep.answerMap);const exact=entries.find(([h])=>v61Norm(h)===target);if(exact&&String(exact[1]).trim())return exact[1];const soft=entries.find(([h])=>{const nh=v61Norm(h);return nh&&(nh.includes(target)||target.includes(nh)||nh.slice(0,28)===target.slice(0,28));});if(soft&&String(soft[1]).trim())return soft[1];}if(Array.isArray(rep.raw)){const fb=rep.raw[4+Number(questionIndex||0)];if(String(fb||'').trim())return String(fb).trim();}return'';}
function v61BuildAnswers(session,agent,rep){const qcm=(state.qcms||[]).find(q=>q.id===session.qcmId)||{};return(qcm.questions||[]).map((q,idx)=>{const given=v61FindAnswer(rep,q.question,idx),good=q.choices?.[q.good]||'',givenIndex=(q.choices||[]).findIndex(c=>v61Norm(c)===v61Norm(given)),ok=!!given&&v61Norm(given)===v61Norm(good);return{num:idx+1,question:q.question,choices:q.choices||[],given,givenIndex,givenLetter:givenIndex>=0?v61Letter(givenIndex):'',good,goodIndex:q.good,goodLetter:v61Letter(q.good),ok,explanation:q.explanation||''};});}
async function syncSessionById(sessionId){const session=state.sessions.find(s=>Number(s.id)===Number(sessionId));if(!session)return alert('Session introuvable.');const url=(session.csvUrl||'').trim();if(!url)return alert('Aucune URL CSV enregistrée pour cette session.');try{const response=await fetch(url+(url.includes('?')?'&':'?')+'t='+Date.now(),{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);const responses=v61RowsToResponses(await response.text());const list=v56EnsureSessionAgentStatus(session);const absent=[];list.forEach(agent=>{const rep=v61FindResponseForAgent(agent,responses);if(agent.status==='Absent'){if(rep)absent.push(agent.nom+' '+agent.prenom);return;}if(rep){agent.status='Complété';agent.progression=100;agent.note=rep.scoreNumber;agent.scoreText=rep.score;agent.updatedAt=rep.timestamp||fmtDate();agent.raw=rep.raw||[];agent.headers=rep.headers||[];agent.answerMap=rep.answerMap||{};agent.responseDetails=rep;agent.answers=v61BuildAnswers(session,agent,rep);}else{agent.status='En attente de réponse';agent.progression=0;agent.note=null;agent.scoreText='';agent.updatedAt='';agent.raw=[];agent.headers=[];agent.answerMap={};agent.answers=[];}});computeSessionCounts(session);const completed=list.filter(a=>a.status==='Complété'&&a.note!==null&&a.note!==undefined);session.average=completed.length?Number((completed.reduce((s,a)=>s+(Number(a.note)||0),0)/completed.length).toFixed(2)):null;session.lastSyncAt=fmtDate();session.lastResponsesCount=responses.length;session.v61Synced=true;saveState();if(currentPage==='session'){renderSession();renderSessionDetail(session.id);}if(currentPage==='answers')renderAnswers();if(currentPage==='projection')renderProjection();if(currentPage==='stats')renderStats();if(currentPage==='results')renderResults();if(currentPage==='fiches')renderFiches();let msg=responses.length+' réponse(s) CSV lue(s). '+session.answered+' agent(s) complété(s).';if(absent.length)msg+='\\nAttention : réponse reçue pour agent(s) déclaré(s) absent(s) : '+absent.join(', ');alert(msg);}catch(err){console.error(err);alert("Erreur lecture CSV : "+err.message+"\\nVérifie que l’URL CSV publiée s’ouvre dans Chrome.");}}
function v61EnsureDetails(session){if(!session)return;(session.agentStatus||[]).forEach(a=>{if(a.status==='Complété'&&(!Array.isArray(a.answers)||!a.answers.some(x=>x.given))){const rep=a.responseDetails||{raw:a.raw||[],headers:a.headers||[],answerMap:a.answerMap||{}};a.answers=v61BuildAnswers(session,a,rep);}});}
function v61Responses(session){v61EnsureDetails(session);return(session.agentStatus||[]).filter(a=>a.status==='Complété').map(a=>({...a,answers:Array.isArray(a.answers)?a.answers:[]}));}
function v60Responses(session){return v61Responses(session);}function v59GetResponsesForSession(session){return v61Responses(session);}function v58GetResponsesForSession(session){return v61Responses(session);}
function v61QuestionStats(session){const qcm=(state.qcms||[]).find(q=>q.id===session.qcmId)||{},res=v61Responses(session).filter(a=>a.answers&&a.answers.some(x=>x.given));return(qcm.questions||[]).map((q,idx)=>{const counts={};(q.choices||[]).forEach((c,i)=>counts[v61Letter(i)]=0);let total=0,correct=0;res.forEach(r=>{const ans=r.answers[idx];if(!ans||!ans.given)return;total++;const letter=ans.givenLetter||'Autre';counts[letter]=(counts[letter]||0)+1;if(ans.ok)correct++;});return{num:idx+1,question:q.question,choices:q.choices||[],good:q.good,goodText:q.choices?.[q.good]||'',explanation:q.explanation||'',counts,total,correct,error:total?Math.round(((total-correct)/total)*100):0,success:total?Math.round((correct/total)*100):0};});}
function v60QuestionStats(session){return v61QuestionStats(session);}function v59QuestionStats(session){return v61QuestionStats(session);}function v58QuestionStats(session){return v61QuestionStats(session);}
function renderSettings(){const s=state.settings||{},themeKey=s.themeKey||'volcan';const themeOptions=Object.entries(V61_THEMES).map(([k,t])=>`<option value="${k}" ${themeKey===k?'selected':''}>${t.label}</option>`).join('');main.innerHTML=`<div class="panel"><h2>Paramètres complets du logiciel</h2><div class="formGrid"><div><label>Nom application</label><input id="setAppName" value="${v61Esc(s.appName||'QCM Manager EDF')}"></div><div><label>Entreprise</label><input id="setCompany" value="${v61Esc(s.company||'SECAB')}"></div><div><label>Thème visuel</label><select id="setTheme">${themeOptions}</select></div><div><label>Synchronisation auto</label><select id="setAutoSync"><option ${s.autoSync?'selected':''} value="true">Activée</option><option ${!s.autoSync?'selected':''} value="false">Désactivée</option></select></div><div><label>Intervalle minutes</label><input id="setInterval" type="number" value="${s.interval||5}"></div><div><label>URL base partagée</label><input id="setSharedUrl" value="${v61Esc(s.sharedUrl||'')}"></div></div><h3>Thèmes disponibles</h3><div class="v60ThemePreview">${Object.entries(V61_THEMES).map(([k,t])=>`<div class="v61ThemeCard"><b>${t.label}</b><small>${t.desc}</small></div>`).join('')}</div><div class="toolbar"><button class="btn good" id="saveSettingsBtn">Enregistrer paramètres</button><button class="btn bad" id="resetLocalBtn">Réinitialiser données locales</button></div></div>`;document.getElementById('saveSettingsBtn').onclick=()=>{state.settings=state.settings||{};state.settings.appName=document.getElementById('setAppName').value;state.settings.company=document.getElementById('setCompany').value;state.settings.themeKey=document.getElementById('setTheme').value;state.settings.autoSync=document.getElementById('setAutoSync').value==='true';state.settings.interval=Number(document.getElementById('setInterval').value)||5;state.settings.sharedUrl=document.getElementById('setSharedUrl').value;saveState();v61ApplyTheme();alert('Paramètres enregistrés. Thème appliqué.');};document.getElementById('setTheme').onchange=e=>{state.settings=state.settings||{};state.settings.themeKey=e.target.value;saveState();v61ApplyTheme();};document.getElementById('resetLocalBtn').onclick=()=>{if(confirm('Réinitialiser toutes les données locales ?')){localStorage.clear();location.reload();}};}
setTimeout(v61ApplyTheme,500);



/* =========================================================
   V62 - FONDS D'ECRAN PAR THEME + VARIATION BONNES REPONSES
   Ne touche pas aux autres fonctions.
   ========================================================= */
function v62ShuffleQcmCorrectAnswers(){
  if(!state || !Array.isArray(state.qcms)) return;
  const pattern = [1,2,3,0,2,1,3,0,1,2]; // B,C,D,A,C,B,D,A,B,C
  let changed = false;
  state.qcms.forEach(qcm => {
    if(!Array.isArray(qcm.questions) || !qcm.questions.length) return;
    const goods = qcm.questions.map(q => Number(q.good || 0));
    const mostlyA = goods.filter(g => g === 0).length >= Math.max(3, Math.ceil(goods.length * 0.65));
    const neverVaried = new Set(goods).size <= 2;
    if(!mostlyA && !neverVaried) return;
    qcm.questions.forEach((q, idx) => {
      if(!Array.isArray(q.choices) || q.choices.length < 4) return;
      const oldGood = Number(q.good || 0);
      const target = pattern[idx % pattern.length];
      if(oldGood === target) return;
      const correctText = q.choices[oldGood];
      q.choices[oldGood] = q.choices[target];
      q.choices[target] = correctText;
      q.good = target;
      changed = true;
    });
  });
  if(changed){ state.__v62QcmAnswersVaried = true; saveState(); }
}
function v62ApplyThemeWallpaper(){
  if(typeof v61ApplyTheme === 'function') v61ApplyTheme();
  if(typeof v60ApplyTheme === 'function') v60ApplyTheme();
  const key = (state.settings && state.settings.themeKey) || 'volcan';
  const map = {volcan:'theme-volcan',lagon:'theme-lagon',tropical:'theme-tropical',edf:'theme-edf',direction:'theme-direction',iso:'theme-iso'};
  document.body.classList.remove('theme-volcan','theme-lagon','theme-tropical','theme-edf','theme-direction','theme-iso');
  document.body.classList.add(map[key] || 'theme-volcan');
}
setTimeout(() => {
  v62ShuffleQcmCorrectAnswers();
  v62ApplyThemeWallpaper();
}, 700);
const v62OldRenderSettings = typeof renderSettings === 'function' ? renderSettings : null;
function renderSettings(){
  if(v62OldRenderSettings) v62OldRenderSettings();
  setTimeout(() => {
    const sel = document.getElementById('setTheme');
    if(sel){
      sel.onchange = e => {
        state.settings = state.settings || {};
        state.settings.themeKey = e.target.value;
        saveState();
        v62ApplyThemeWallpaper();
      };
    }
    const saveBtn = document.getElementById('saveSettingsBtn');
    if(saveBtn){
      const old = saveBtn.onclick;
      saveBtn.onclick = () => { if(old) old(); v62ApplyThemeWallpaper(); };
    }
  }, 50);
}



/* =========================================================
   V63 - PARAMETRES REPARES / RANDOM QCM / FILTRE AGENTS / ISO PRO
   ========================================================= */
function v63Norm(v){return String(v||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function v63Esc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function v63Hash(str){let h=2166136261;str=String(str||'');for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h+=(h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24);}return Math.abs(h>>>0);}
function v63Seeded(seed){let x=seed||123456789;return function(){x^=x<<13;x^=x>>>17;x^=x<<5;return((x>>>0)%1000000)/1000000;};}
function v63Shuffle(a,rnd){a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function v63RandomizeQcmAnswers(){
 if(!state||!Array.isArray(state.qcms))return;let changed=false;
 state.qcms.forEach((qcm,qidx)=>{if(!Array.isArray(qcm.questions))return;let seed=v63Hash((qcm.nom||'')+'|'+(qcm.titre||'')+'|SECAB|'+qidx),rnd=v63Seeded(seed);
  qcm.questions.forEach((q,idx)=>{if(!Array.isArray(q.choices)||q.choices.length<4)return;let old=Number(q.good||0),correct=q.choices[old],wrongs=q.choices.filter((_,i)=>i!==old),target=Math.floor(rnd()*4),nw=[],sw=v63Shuffle(wrongs,rnd),wi=0;
   for(let i=0;i<4;i++)nw[i]=(i===target)?correct:sw[wi++]; if(JSON.stringify(q.choices)!==JSON.stringify(nw)||q.good!==target){q.choices=nw;q.good=target;changed=true;}
  });
 });
 if(changed){state.__v63RandomizedAnswers=true;saveState();}
}
setTimeout(v63RandomizeQcmAnswers,500);

function v63Themes(){
 return (typeof V61_THEMES!=='undefined')?V61_THEMES:{volcan:{label:'🌋 Réunion Volcan Nuit',desc:'Thème de base',className:'theme-volcan'},lagon:{label:'🏝️ Réunion Lagon',desc:'Bleu turquoise',className:'theme-lagon'},tropical:{label:'🌴 Réunion Tropical',desc:'Nature',className:'theme-tropical'},edf:{label:'⚡ EDF Technique',desc:'Réseau',className:'theme-edf'},direction:{label:'📊 Direction Premium',desc:'Direction',className:'theme-direction'},iso:{label:'🛡️ ISO / Audit',desc:'Audit',className:'theme-iso'}};
}
function v63ApplyTheme(){if(typeof v62ApplyThemeWallpaper==='function')v62ApplyThemeWallpaper();else if(typeof v61ApplyTheme==='function')v61ApplyTheme();else if(typeof v60ApplyTheme==='function')v60ApplyTheme();}
function renderSettings(){
 const s=state.settings||{},themes=v63Themes(),cur=s.themeKey||'volcan',opts=Object.entries(themes).map(([k,t])=>`<option value="${k}" ${cur===k?'selected':''}>${t.label}</option>`).join('');
 main.innerHTML=`<div class="panel"><h2>Paramètres complets du logiciel</h2><div class="formGrid">
 <div><label>Nom application</label><input id="setAppName" value="${v63Esc(s.appName||'QCM Manager EDF')}"></div>
 <div><label>Entreprise</label><input id="setCompany" value="${v63Esc(s.company||'SECAB')}"></div>
 <div><label>Thème visuel</label><select id="setTheme">${opts}</select></div>
 <div><label>Synchronisation auto</label><select id="setAutoSync"><option value="true" ${s.autoSync?'selected':''}>Activée</option><option value="false" ${!s.autoSync?'selected':''}>Désactivée</option></select></div>
 <div><label>Intervalle minutes</label><input id="setInterval" type="number" value="${s.interval||5}"></div>
 <div><label>URL base partagée</label><input id="setSharedUrl" value="${v63Esc(s.sharedUrl||'')}"></div></div>
 <h3>Thèmes disponibles</h3><div class="v60ThemePreview">${Object.entries(themes).map(([k,t])=>`<div class="v61ThemeCard"><b>${t.label}</b><small>${t.desc||''}</small></div>`).join('')}</div>
 <div class="v63Toolbar"><button class="btn good" id="saveSettingsBtn">Enregistrer paramètres</button><button class="btn secondary" id="applyThemeBtn">Appliquer le thème maintenant</button><button class="btn bad" id="resetLocalBtn">Réinitialiser données locales</button></div></div>`;
 const save=()=>{state.settings=state.settings||{};state.settings.appName=document.getElementById('setAppName').value;state.settings.company=document.getElementById('setCompany').value;state.settings.themeKey=document.getElementById('setTheme').value;state.settings.autoSync=document.getElementById('setAutoSync').value==='true';state.settings.interval=Number(document.getElementById('setInterval').value)||5;state.settings.sharedUrl=document.getElementById('setSharedUrl').value;saveState();v63ApplyTheme();};
 document.getElementById('saveSettingsBtn').onclick=()=>{save();alert('Paramètres enregistrés.');};document.getElementById('applyThemeBtn').onclick=()=>{save();alert('Thème appliqué.');};document.getElementById('setTheme').onchange=()=>save();document.getElementById('resetLocalBtn').onclick=()=>{if(confirm('Réinitialiser toutes les données locales ?')){localStorage.clear();location.reload();}};
}

function renderAnswers(){
 const sessions=(state.sessions||[]).slice().reverse(),sid=Number(window.__v58SelectedSessionId||sessions[0]?.id||0),session=sessions.find(s=>Number(s.id)===sid)||sessions[0],opts=sessions.map(s=>`<option value="${s.id}">${s.qcmName} — ${s.startedAt}</option>`).join('');
 if(!session){main.innerHTML='<div class="panel"><h2>Réponses détaillées</h2><div class="empty">Aucune session.</div></div>';return;}
 if(typeof v61EnsureDetails==='function')v61EnsureDetails(session);const qcm=(state.qcms||[]).find(q=>q.id===session.qcmId)||{},responses=(typeof v61Responses==='function'?v61Responses(session):(session.agentStatus||[]).filter(a=>a.status==='Complété'));
 const ids=window.__v63SelectedAgentIds||{};if(!ids[session.id])ids[session.id]={};const selectedMap=ids[session.id];if(Object.keys(selectedMap).length===0)responses.forEach(a=>selectedMap[a.agentId]=true);const selected=responses.filter(a=>selectedMap[a.agentId]),detailed=selected.filter(a=>a.answers&&a.answers.some(x=>x.given));
 let html=`<div class="panel"><h2>Réponses détaillées agents</h2><div class="formGrid"><div><label>Session</label><select id="v58SessionSelect">${opts}</select></div></div><div class="v58KpiGrid"><div class="v58Kpi"><span>Répondants</span><b>${responses.length}</b></div><div class="v58Kpi"><span>Agents affichés</span><b>${selected.length}</b></div><div class="v58Kpi"><span>Détails exploitables</span><b>${detailed.length}</b></div><div class="v58Kpi"><span>Questions</span><b>${(qcm.questions||[]).length}</b></div><div class="v58Kpi"><span>Moyenne</span><b>${session.average!==null&&session.average!==undefined?session.average+'/10':'-'}</b></div></div><h3>Filtrer les agents à afficher</h3><div class="v63Toolbar"><button class="btn secondary" id="v63AllAgents">Tout sélectionner</button><button class="btn secondary" id="v63NoAgents">Tout décocher</button></div><div class="v63AgentFilter">${responses.map(a=>`<label><input type="checkbox" class="v63AgentCheck" data-agent="${a.agentId}" ${selectedMap[a.agentId]?'checked':''}> ${a.nom} ${a.prenom} — ${a.note}/10</label>`).join('')||'<div class="empty">Aucun répondant.</div>'}</div>`;
 selected.forEach(agent=>{html+=`<div class="v58Panel"><h3>${agent.nom} ${agent.prenom} — ${agent.note}/10</h3><table><tr><th>N°</th><th>Question</th><th>Réponse agent</th><th>Bonne réponse</th><th>Résultat</th><th>Explication</th></tr>`;(agent.answers||[]).forEach(a=>{html+=`<tr class="${a.ok?'v58AnswerOk':'v58AnswerKo'}"><td>${a.num}</td><td>${v63Esc(a.question)}</td><td>${v63Esc(a.given||'-')}</td><td>${v63Esc(a.good||'-')}</td><td>${a.given?(a.ok?'<span class="v60Ok">✅ Correct</span>':'<span class="v60Ko">❌ À reprendre</span>'):'<span class="v60Warn">À resynchroniser</span>'}</td><td>${v63Esc(a.explanation||'')}</td></tr>`});html+='</table></div>';});
 html+='</div>';main.innerHTML=html;const sel=document.getElementById('v58SessionSelect');if(sel){sel.value=String(session.id);sel.onchange=e=>{window.__v58SelectedSessionId=Number(e.target.value);renderAnswers();};}document.querySelectorAll('.v63AgentCheck').forEach(cb=>cb.onchange=e=>{selectedMap[e.target.dataset.agent]=e.target.checked;window.__v63SelectedAgentIds=ids;renderAnswers();});document.getElementById('v63AllAgents').onclick=()=>{responses.forEach(a=>selectedMap[a.agentId]=true);window.__v63SelectedAgentIds=ids;renderAnswers();};document.getElementById('v63NoAgents').onclick=()=>{responses.forEach(a=>selectedMap[a.agentId]=false);window.__v63SelectedAgentIds=ids;renderAnswers();};
}

function v63AllQuestionStats(){return(state.sessions||[]).flatMap(s=>{const fn=typeof v61QuestionStats==='function'?v61QuestionStats:typeof v58QuestionStats==='function'?v58QuestionStats:null;return fn?fn(s).map(q=>({...q,session:s.qcmName,date:s.startedAt})):[];}).filter(q=>q.total>0);}
function v63IsoRisk(avg,participation,high){if(avg===null||avg===undefined)return'Élevé';if(avg<6||participation<75||high>=3)return'Élevé';if(avg<7.5||participation<90||high>=1)return'Modéré';return'Maîtrisé';}
function buildIsoStatsReportHtml(){const g=typeof v57GlobalStats==='function'?v57GlobalStats():{closed:[],participation:0,avg:null,absent:0},allQ=v63AllQuestionStats(),worst=allQ.slice().sort((a,b)=>b.error-a.error).slice(0,10),best=allQ.slice().sort((a,b)=>b.success-a.success).slice(0,5),high=worst.filter(q=>q.error>=50).length,risk=v63IsoRisk(g.avg,g.participation,high),plans=(state.actionPlans||[]).slice(-8).reverse(),sessions=(state.sessions||[]).slice(-12).reverse();
 return `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,Helvetica,sans-serif;color:#111;padding:30px;line-height:1.35}h1{color:#06224a;font-size:28px;margin-bottom:4px}h2{color:#0b4a8f;border-bottom:2px solid #0b4a8f;padding-bottom:5px;margin-top:26px}table{width:100%;border-collapse:collapse;margin:12px 0;font-size:12px}th{background:#06224a;color:white;text-align:left;padding:8px}td{border:1px solid #d7dce5;padding:7px;vertical-align:top}.cover{border:1px solid #ccd4df;border-radius:12px;padding:22px;background:#f8fafc}.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0}.kpi{border:1px solid #d8dee9;background:#fff;border-radius:10px;padding:12px}.kpi span{display:block;font-size:11px;color:#5d6675}.kpi b{font-size:24px;color:#06224a;display:block;margin-top:4px}.box{border-left:6px solid #0b4a8f;background:#f3f7fb;border-radius:8px;padding:12px;margin:12px 0}.high{color:#b00020;font-weight:bold}.med{color:#a66b00;font-weight:bold}.low{color:#007a38;font-weight:bold}.signature{margin-top:40px;border-top:1px solid #999;padding-top:15px}</style></head><body><div class="cover"><h1>SECAB — Rapport de pilotage QCM / Compétences / Prévention</h1><p>Support ISO 9001, ISO 45001 et exigences environnementales EDF — généré depuis QCM Manager EDF.</p><p><b>Date d’édition :</b> ${new Date().toLocaleString('fr-FR')}</p></div><h2>1. Synthèse direction</h2><div class="kpis"><div class="kpi"><span>Sessions clôturées</span><b>${g.closed.length}</b></div><div class="kpi"><span>Participation</span><b>${g.participation}%</b></div><div class="kpi"><span>Moyenne service</span><b>${g.avg!==null?g.avg+'/10':'-'}</b></div><div class="kpi"><span>Niveau de risque</span><b class="${risk==='Élevé'?'high':risk==='Modéré'?'med':'low'}">${risk}</b></div></div><div class="box"><b>Lecture managériale :</b> preuve de surveillance des compétences, sensibilisation sécurité, maîtrise opérationnelle et actions correctives tracées.</div><h2>2. ISO 9001 — Compétence / efficacité / amélioration continue</h2><table><tr><th>Exigence suivie</th><th>Indicateur</th><th>Résultat</th><th>Lecture audit</th></tr><tr><td>Compétence du personnel</td><td>Moyenne service</td><td>${g.avg!==null?g.avg+'/10':'-'}</td><td>Mesure objective du niveau de maîtrise.</td></tr><tr><td>Efficacité des sensibilisations</td><td>Participation</td><td>${g.participation}%</td><td>Couverture du dispositif et implication des équipes.</td></tr><tr><td>Actions correctives</td><td>Questions critiques</td><td>${high}</td><td>Déclenchement d’actions ciblées.</td></tr></table><h2>3. ISO 45001 — Prévention / risques / participation</h2><table><tr><th>Axe</th><th>Constat</th><th>Exploitation</th></tr><tr><td>Participation des travailleurs</td><td>${g.participation}%</td><td>Support de causerie et correction collective.</td></tr><tr><td>Maîtrise des risques terrain</td><td>${worst.length} question(s) analysée(s)</td><td>Oriente les contrôles terrain et briefings.</td></tr></table><h2>4. Environnement EDF</h2><div class="box">Traçabilité biodiversité, espèces protégées, ravines, déchets, hydrocarbures, pollution accidentelle et propreté chantier.</div><h2>5. Questions les plus ratées</h2><table><tr><th>Rang</th><th>Session</th><th>Question</th><th>Erreur</th><th>Action recommandée</th></tr>${worst.map((q,i)=>`<tr><td>${i+1}</td><td>${q.session}</td><td>Q${q.num} — ${q.question}</td><td class="${q.error>=50?'high':'med'}">${q.error}%</td><td>${q.error>=50?'Briefing ciblé + vérification terrain + action corrective tracée.':'Rappel collectif à la prochaine réunion.'}</td></tr>`).join('')||'<tr><td colspan="5">Aucune donnée.</td></tr>'}</table><h2>6. Points forts</h2><table><tr><th>Rang</th><th>Session</th><th>Question</th><th>Réussite</th><th>Capitalisation</th></tr>${best.map((q,i)=>`<tr><td>${i+1}</td><td>${q.session}</td><td>Q${q.num} — ${q.question}</td><td class="low">${q.success}%</td><td>Maintenir et partager en REX positif.</td></tr>`).join('')||'<tr><td colspan="5">Aucune donnée.</td></tr>'}</table><h2>7. Sessions récentes</h2><table><tr><th>Date</th><th>QCM</th><th>Présents</th><th>Répondants</th><th>Absents</th><th>Moyenne</th><th>Statut</th></tr>${sessions.map(s=>`<tr><td>${s.startedAt||'-'}</td><td>${s.qcmName||'-'}</td><td>${s.present||0}</td><td>${s.answered||0}</td><td>${s.absent||0}</td><td>${s.average!==null&&s.average!==undefined?s.average+'/10':'-'}</td><td>${s.status}</td></tr>`).join('')||'<tr><td colspan="7">Aucune session.</td></tr>'}</table><h2>8. Plans d’action récents</h2><table><tr><th>QCM</th><th>Priorité</th><th>Participation</th><th>Moyenne</th><th>Actions</th></tr>${plans.map(p=>`<tr><td>${p.qcmName}</td><td>${p.priority}</td><td>${p.participation||0}%</td><td>${p.average!==null&&p.average!==undefined?p.average+'/10':'-'}</td><td>${(p.actions||[]).join('<br>')}</td></tr>`).join('')||'<tr><td colspan="5">Aucun plan.</td></tr>'}</table><h2>9. Conclusion audit</h2><div class="box"><b>Conclusion :</b> dispositif exploitable comme preuve de pilotage des compétences, prévention, environnement et amélioration continue.</div><div class="signature"><b>Responsable de service :</b><br><br>Signature : __________________________</div></body></html>`;}

