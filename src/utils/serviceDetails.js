export const SERVICE_DETAILS = {
  'medecine-generale': {
    details: 'Notre service de médecine générale assure le premier niveau de soins pour toute la famille. Consultations, bilans de santé, suivi des maladies chroniques et orientation vers les spécialistes si nécessaire.',
    benefits: ['Consultations pour adultes et enfants', 'Suivi médical personnalisé', 'Vaccinations et prévention', 'Certificats médicaux'],
  },
  'gynecologie-obstetrique': {
    details: 'Le service de gynécologie et obstétrique accompagne les femmes à chaque étape de leur vie reproductive, de la consultation gynécologique au suivi de grossesse et à l\'accouchement.',
    benefits: ['Suivi prénatal complet', '2 salles d\'accouchement équipées', 'Échographies obstétricales', 'Planification familiale'],
  },
  pathologie: {
    details: 'Notre laboratoire de pathologie réalise des analyses médicales précises pour un diagnostic fiable et rapide, essentiel à une prise en charge efficace.',
    benefits: ['Analyses sanguines et urinaires', 'Biopsies et cytologies', 'Résultats fiables', 'Suivi des paramètres biologiques'],
  },
  pediatrie: {
    details: 'Le service de pédiatrie est dédié à la santé des enfants, de la naissance à l\'adolescence, avec une approche bienveillante adaptée aux plus jeunes patients.',
    benefits: ['Consultations pédiatriques', '4 lits pédiatriques', 'Suivi de croissance', 'Vaccinations infantiles'],
  },
  neonatologie: {
    details: 'L\'unité de néonatologie du CHIK dispose de 4 lits néonataux et offre une prise en charge spécialisée des nouveau-nés, y compris les cas nécessitant une surveillance rapprochée.',
    benefits: ['4 lits néonataux', 'Surveillance continue', 'Soins intensifs néonataux', 'Accompagnement des parents'],
  },
  physiotherapie: {
    details: 'La physiothérapie au CHIK propose des programmes de rééducation sur mesure pour restaurer la mobilité, soulager la douleur et améliorer la qualité de vie.',
    benefits: ['Rééducation post-traumatique', 'Kinésithérapie respiratoire', 'Rééducation neurologique', 'Thérapies manuelles'],
  },
  orl: {
    details: 'Le service ORL traite les affections de l\'oreille, du nez et de la gorge, du simple rhume chronique aux pathologies plus complexes nécessitant un suivi spécialisé.',
    benefits: ['Consultations ORL', 'Audiométrie', 'Traitement des sinusites', 'Suivi des amygdales'],
  },
  dermatologie: {
    details: 'Notre dermatologue diagnostique et traite l\'ensemble des maladies de la peau, des cheveux et des ongles, pour les patients de tous âges.',
    benefits: ['Diagnostic dermatologique', 'Traitement de l\'acné et eczéma', 'Dépistage des lésions cutanées', 'Soins esthétiques médicaux'],
  },
  ophtalmologie: {
    details: 'Le service d\'ophtalmologie assure le dépistage, le traitement et le suivi des pathologies oculaires pour préserver votre vision.',
    benefits: ['Examens de la vue', 'Traitement du glaucome', 'Suivi post-opératoire', 'Prescription de lunettes'],
  },
  cardiologie: {
    details: 'La cardiologie au CHIK se consacre à la prévention, au diagnostic et au traitement des maladies du cœur et des vaisseaux sanguins.',
    benefits: ['Consultations cardiologiques', 'Suivi de l\'hypertension', 'ECG et monitoring', 'Prévention cardiovasculaire'],
  },
  orthopedie: {
    details: 'Le service d\'orthopédie prend en charge les traumatismes, fractures et pathologies musculo-squelettiques avec une approche médicale et chirurgicale.',
    benefits: ['Traitement des fractures', 'Pathologies articulaires', 'Rééducation post-opératoire', 'Consultations traumatologiques'],
  },
  diabetologie: {
    details: 'La diabétologie propose un suivi complet des patients diabétiques pour un contrôle optimal de la glycémie et la prévention des complications.',
    benefits: ['Suivi du diabète type 1 et 2', 'Éducation thérapeutique', 'Dépistage précoce', 'Adaptation du traitement'],
  },
  dentisterie: {
    details: 'Le service dentaire du CHIK couvre l\'ensemble des soins bucco-dentaires, de la prévention aux soins curatifs et esthétiques.',
    benefits: ['Consultations dentaires', 'Détartrage et prévention', 'Soins conservateurs', 'Extractions dentaires'],
  },
  neurologie: {
    details: 'La neurologie diagnostique et traite les maladies du système nerveux central et périphérique, incluant migraines, épilepsie et pathologies neurodégénératives.',
    benefits: ['Consultations neurologiques', 'Prise en charge des migraines', 'Suivi post-AVC', 'Explorations neurologiques'],
  },
  urologie: {
    details: 'Le service d\'urologie s\'occupe des pathologies de l\'appareil urinaire et génital masculin, avec des soins adaptés à chaque patient.',
    benefits: ['Consultations urologiques', 'Traitement des infections urinaires', 'Suivi prostatique', 'Lithiase urinaire'],
  },
  'medecine-interne': {
    details: 'La médecine interne assure une prise en charge globale et coordonnée des maladies complexes touchant plusieurs organes ou systèmes.',
    benefits: ['Diagnostic multidisciplinaire', 'Suivi des maladies chroniques', 'Coordination des soins', 'Bilans de santé complets'],
  },
}

export function enrichServices(services) {
  return services.map((s) => ({
    ...s,
    ...SERVICE_DETAILS[s.id],
    benefits: SERVICE_DETAILS[s.id]?.benefits ?? [],
    details: SERVICE_DETAILS[s.id]?.details ?? s.description,
  }))
}
