export const HOSPITAL = {
  name: 'Centre Hospitalier International de Kinshasa',
  shortName: 'CHIK',
  motto: 'Des mains qui soignent, des cœurs attentionnés.',
  vision: 'Ensemble, avec amour et passion, participons à une meilleure santé pour tous.',
  description:
    'Le Centre Hospitalier International de Kinshasa est un complexe médical moderne conçu pour répondre efficacement aux différents besoins de santé de la population grâce à une équipe expérimentée et des équipements adaptés.',
  address: '11 Avenue Basoko, Gombe, Kinshasa',
  addressDetail: 'Ex Hasson & Frère',
  phone: '+243 827 401 391',
  whatsapp: '+243 828 086 911',
  ambulance: '+243 900 001 214',
  emails: ['admin@chik.info', 'accounts@chik.info'],
  availability: '24h/24 - 7j/7',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.3848847!2d15.3168834!3d-4.3067439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a35c9f9bb448d%3A0xaf7622903090941b!2sCentre%20Hospitalier%20International%20de%20Kinshasa%20%2F%20CHIK!5e0!3m2!1sfr!2scd!4v1718745600000!5m2!1sfr!2scd',
  mapsLink:
    'https://www.google.com/maps/place/Centre+Hospitalier+International+de+Kinshasa+%2F+CHIK/@-4.3067439,15.3168834,17z/data=!3m1!4b1!4m6!3m5!1s0x1a6a35c9f9bb448d:0xaf7622903090941b!8m2!3d-4.3067493!4d15.3194583!16s%2Fg%2F11k30jnswc?hl=fr&entry=ttu',
}

export const STATS = [
  { value: '21', label: 'Lits Ordinaires', icon: 'bed' },
  { value: '4', label: 'Lits Néonataux', icon: 'baby' },
  { value: '4', label: 'Lits Pédiatriques', icon: 'child' },
  { value: '2', label: "Lits d'Urgence", icon: 'emergency' },
  { value: '2', label: "Salles d'Intervention", icon: 'surgery' },
  { value: '2', label: "Salles d'Accouchement", icon: 'birth' },
]

export const STRENGTHS = [
  'Plusieurs spécialités médicales',
  'Personnel qualifié',
  'Service disponible 24h/24',
  'Infrastructure moderne',
  'Soins de qualité',
]

export const SERVICES = [
  {
    id: 'medecine-generale',
    name: 'Médecine Générale',
    description: 'Consultations générales, suivi médical et prévention pour toute la famille.',
    icon: 'HeartIcon',
  },
  {
    id: 'gynecologie-obstetrique',
    name: 'Gynécologie & Obstétrique',
    description: 'Suivi de grossesse, accouchement et santé reproductive des femmes.',
    icon: 'UserGroupIcon',
  },
  {
    id: 'pathologie',
    name: 'Pathologie',
    description: 'Analyses médicales et diagnostics précis en laboratoire.',
    icon: 'BeakerIcon',
  },
  {
    id: 'pediatrie',
    name: 'Pédiatrie',
    description: 'Soins spécialisés pour la santé et le bien-être des enfants.',
    icon: 'FaceSmileIcon',
  },
  {
    id: 'neonatologie',
    name: 'Néonatologie',
    description: 'Prise en charge des nouveau-nés et soins intensifs néonataux.',
    icon: 'SparklesIcon',
  },
  {
    id: 'physiotherapie',
    name: 'Physiothérapie',
    description: 'Rééducation fonctionnelle et thérapies physiques personnalisées.',
    icon: 'BoltIcon',
  },
  {
    id: 'orl',
    name: 'ORL',
    description: 'Traitement des affections de l\'oreille, du nez et de la gorge.',
    icon: 'SpeakerWaveIcon',
  },
  {
    id: 'dermatologie',
    name: 'Dermatologie',
    description: 'Diagnostic et traitement des maladies de la peau.',
    icon: 'SunIcon',
  },
  {
    id: 'ophtalmologie',
    name: 'Ophtalmologie',
    description: 'Soins oculaires complets et chirurgie ophtalmologique.',
    icon: 'EyeIcon',
  },
  {
    id: 'cardiologie',
    name: 'Cardiologie',
    description: 'Prévention et traitement des maladies cardiovasculaires.',
    icon: 'HeartIcon',
  },
  {
    id: 'orthopedie',
    name: 'Orthopédie',
    description: 'Traitement des troubles musculo-squelettiques et traumatismes.',
    icon: 'WrenchScrewdriverIcon',
  },
  {
    id: 'diabetologie',
    name: 'Diabétologie',
    description: 'Prise en charge du diabète et suivi métabolique.',
    icon: 'ChartBarIcon',
  },
  {
    id: 'dentisterie',
    name: 'Dentisterie',
    description: 'Soins dentaires, prévention et esthétique bucco-dentaire.',
    icon: 'SparklesIcon',
  },
  {
    id: 'neurologie',
    name: 'Neurologie',
    description: 'Diagnostic et traitement des pathologies du système nerveux.',
    icon: 'CpuChipIcon',
  },
  {
    id: 'urologie',
    name: 'Urologie',
    description: 'Soins urologiques pour hommes et femmes.',
    icon: 'ShieldCheckIcon',
  },
  {
    id: 'medecine-interne',
    name: 'Médecine Interne',
    description: 'Prise en charge globale des maladies internes complexes.',
    icon: 'ClipboardDocumentCheckIcon',
  },
]

export const DOCTORS = [
  { id: 1, name: 'Dr. Amir Ali Diama', specialty: 'Médecine Générale' },
  { id: 2, name: 'Dr. Diama Ngapolo Diane', specialty: 'Médecine Générale' },
  { id: 3, name: 'Dr. Kazadi Lukusa Elisée', specialty: 'Médecine Générale' },
  { id: 4, name: 'Dr. Ntoni Madiadi Tony', specialty: 'Médecine Générale' },
  { id: 5, name: 'Dr. Mayala Ma Mayala', specialty: 'Médecine Générale' },
  { id: 6, name: 'Dr. Christelle Lusavu', specialty: 'Médecine Générale' },
  { id: 7, name: 'Dr. Ngwala Mbumba Gilda', specialty: 'Médecine Générale' },
  { id: 8, name: 'Dr. Boyeye Bonsomi Grey', specialty: 'Médecine Générale' },
  { id: 9, name: 'Dr. Bonzonza Kobele Therezia', specialty: 'Médecine Générale' },
  { id: 10, name: 'Dr. Sarah Hussein Atweh', specialty: 'Gynécologie & Obstétrique' },
  { id: 11, name: 'Dr. Nancy Kama Mvidisa', specialty: 'Gynécologie & Obstétrique' },
  { id: 12, name: 'Dr. Bienvenue Mukaba', specialty: 'Gynécologie & Obstétrique' },
  { id: 13, name: 'Dr. Jacqueline Bakisololo Miyuna', specialty: 'Gynécologie & Obstétrique' },
  { id: 14, name: 'Dr. Kabamba Numbi', specialty: 'Pathologie' },
  { id: 15, name: 'Dr. Bemba Nzuzi Joelle', specialty: 'Pédiatrie' },
  { id: 16, name: 'Dr. Kazadi Wa Kazadi Orly', specialty: 'Néonatologie' },
  { id: 17, name: 'Dr. Kato Kale Feza', specialty: 'Néonatologie' },
  { id: 18, name: 'Dr. Vanzila Mepay Junior', specialty: 'Physiothérapie' },
  { id: 19, name: 'Dr. Mbuinga Binda Dominique', specialty: 'ORL' },
  { id: 20, name: 'Dr. Lubaki Kumba Liliane', specialty: 'Dermatologie' },
  { id: 21, name: 'Dr. Kasongo Mweny Maxime', specialty: 'Ophtalmologie' },
  { id: 22, name: 'Dr. Ibanda Munongo Guy', specialty: 'Cardiologie' },
  { id: 23, name: 'Dr. Kapia Nsele Andre', specialty: 'Orthopédie' },
  { id: 24, name: 'Dr. Albini Lomami Hugues', specialty: 'Orthopédie' },
  { id: 25, name: 'Dr. Mikobi Minga Jeje Paul', specialty: 'Diabétologie' },
  { id: 26, name: 'Dr. Himanshu Saxena', specialty: 'Dentisterie' },
  { id: 27, name: 'Dr. Bumoko Guy', specialty: 'Neurologie' },
  { id: 28, name: 'Dr. Diabeno', specialty: 'Urologie' },
  { id: 29, name: 'Dr. Ndombele Jean Claude', specialty: 'Urologie' },
  { id: 30, name: 'Dr. Benoit Kabengele Obel', specialty: 'Médecine Interne' },
  { id: 31, name: 'Dr. Bumba Buanga Cedric', specialty: 'Médecine Interne' },
]

export const SPECIALTIES = [...new Set(DOCTORS.map((d) => d.specialty))]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marie K.',
    text: 'Une équipe médicale exceptionnelle. Mon accouchement s\'est déroulé dans d\'excellentes conditions. Je recommande vivement le CHIK.',
    rating: 5,
    service: 'Gynécologie & Obstétrique',
  },
  {
    id: 2,
    name: 'Jean-Paul M.',
    text: 'Service d\'urgence rapide et professionnel. Mon père a reçu les soins nécessaires immédiatement. Merci à toute l\'équipe.',
    rating: 5,
    service: "Lits d'Urgence",
  },
  {
    id: 3,
    name: 'Grace T.',
    text: 'Infrastructure moderne et personnel accueillant. Les consultations pédiatriques sont toujours de qualité pour mes enfants.',
    rating: 5,
    service: 'Pédiatrie',
  },
  {
    id: 4,
    name: 'Patrick L.',
    text: 'Excellente prise en charge pour mon suivi cardiologique. Des médecins à l\'écoute et des équipements de pointe.',
    rating: 5,
    service: 'Cardiologie',
  },
]

export const FAQ = [
  {
    id: 1,
    question: 'Comment prendre rendez-vous au CHIK ?',
    answer: 'Vous pouvez prendre rendez-vous en ligne via notre formulaire, par téléphone au +243 827 401 391, ou via WhatsApp au +243 828 086 911.',
  },
  {
    id: 2,
    question: 'Le CHIK est-il ouvert 24h/24 ?',
    answer: 'Oui, le Centre Hospitalier International de Kinshasa est ouvert 24 heures sur 24 et 7 jours sur 7, y compris les jours fériés.',
  },
  {
    id: 3,
    question: 'Proposez-vous un service d\'ambulance ?',
    answer: 'Oui, notre service d\'ambulance est disponible 24h/24. Contactez le +243 900 001 214 en cas d\'urgence.',
  },
  {
    id: 4,
    question: 'Quelles spécialités médicales sont disponibles ?',
    answer: 'Le CHIK propose plus de 16 spécialités médicales incluant médecine générale, gynécologie, pédiatrie, cardiologie, neurologie et bien d\'autres.',
  },
  {
    id: 5,
    question: 'Acceptez-vous les assurances médicales ?',
    answer: 'Oui, nous travaillons avec plusieurs compagnies d\'assurance. Contactez notre service administratif à accounts@chik.info pour plus d\'informations.',
  },
  {
    id: 6,
    question: 'Où se situe le CHIK ?',
    answer: 'Nous sommes situés au 11 Avenue Basoko, Gombe, Kinshasa (Ex Hasson & Frère), facilement accessible en centre-ville.',
  },
]

export const NEWS_CATEGORIES = ['Tous', 'Santé', 'Événements', 'Conseils', 'Annonces']

export const NEWS = [
  {
    id: 1,
    title: 'Ouverture du nouveau service de néonatologie',
    excerpt: 'Le CHIK inaugure son unité de néonatologie équipée des dernières technologies pour la prise en charge des nouveau-nés.',
    content: 'Le Centre Hospitalier International de Kinshasa est fier d\'annoncer l\'ouverture officielle de son unité de néonatologie. Cette nouvelle infrastructure dispose de 4 lits néonataux équipés de monitoring continu, permettant une prise en charge optimale des nouveau-nés prématurés ou nécessitant des soins intensifs.\n\nNotre équipe, dirigée par le Dr. Kazadi Wa Kazadi Orly et le Dr. Kato Kale Feza, a été formée aux dernières pratiques internationales en matière de soins néonataux. Les parents peuvent désormais bénéficier d\'un accompagnement complet dès la naissance de leur enfant.\n\nPour toute information ou prise en charge néonatale, contactez-nous au +243 827 401 391 ou via WhatsApp au +243 828 086 911.',
    category: 'Annonces',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033b561?w=800&q=80',
    author: 'Direction CHIK',
  },
  {
    id: 2,
    title: 'Campagne de vaccination gratuite',
    excerpt: 'Participez à notre campagne de vaccination gratuite pour protéger votre famille contre les maladies évitables.',
    content: 'Dans le cadre de notre engagement envers la santé publique, le CHIK organise une campagne de vaccination gratuite ouverte à toute la population. Cette initiative vise à renforcer la couverture vaccinale et à protéger les familles contre les maladies évitables.\n\nLe service de pédiatrie, sous la direction du Dr. Bemba Nzuzi Joelle, coordonne cette campagne avec le soutien de l\'ensemble du personnel médical. Les vaccinations seront administrées dans des conditions optimales de sécurité et d\'hygiène.\n\nRendez-vous au 11 Avenue Basoko, Gombe, Kinshasa (Ex Hasson & Frère). Horaires : 24h/24 - 7j/7.',
    category: 'Événements',
    date: '2026-04-28',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    author: 'Service Pédiatrie',
  },
  {
    id: 3,
    title: '5 conseils pour un cœur en bonne santé',
    excerpt: 'Nos cardiologues partagent leurs recommandations pour prévenir les maladies cardiovasculaires au quotidien.',
    content: 'Les maladies cardiovasculaires restent une cause majeure de morbidité en République Démocratique du Congo. Le Dr. Ibanda Munongo Guy, cardiologue au CHIK, partage 5 conseils essentiels pour protéger votre cœur.\n\n1. Adopter une alimentation équilibrée, riche en fruits et légumes. 2. Pratiquer une activité physique régulière (30 minutes par jour). 3. Éviter le tabac et limiter la consommation d\'alcool. 4. Surveiller sa tension artérielle et sa glycémie. 5. Consulter régulièrement un cardiologue, surtout après 40 ans.\n\nPrenez rendez-vous avec notre service de cardiologie au +243 827 401 391.',
    category: 'Conseils',
    date: '2026-04-10',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b828?w=800&q=80',
    author: 'Dr. Ibanda Munongo Guy',
  },
  {
    id: 4,
    title: 'Journée portes ouvertes au CHIK',
    excerpt: 'Venez découvrir nos installations et rencontrer notre équipe médicale lors de notre journée portes ouvertes.',
    content: 'Le CHIK vous invite à sa journée portes ouvertes le samedi prochain. C\'est l\'occasion idéale de découvrir nos 16 spécialités médicales, nos 21 lits ordinaires, nos unités pédiatrique et néonatale, ainsi que nos 2 salles d\'intervention.\n\nVous pourrez rencontrer notre équipe de 31 médecins spécialistes, visiter nos installations modernes et poser toutes vos questions sur nos services. Entrée gratuite pour toute la famille.\n\nAdresse : 11 Avenue Basoko, Gombe, Kinshasa. Contact : admin@chik.info',
    category: 'Événements',
    date: '2026-03-22',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    author: 'Communication CHIK',
  },
  {
    id: 5,
    title: 'Importance du dépistage du diabète',
    excerpt: 'Le dépistage précoce du diabète peut sauver des vies. Découvrez pourquoi et comment vous faire dépister.',
    content: 'Le diabète affecte un nombre croissant de personnes en RDC. Un dépistage précoce permet une meilleure prise en charge et réduit considérablement le risque de complications.\n\nLe Dr. Mikobi Minga Jeje Paul, spécialiste en diabétologie au CHIK, recommande un dépistage annuel pour toute personne de plus de 45 ans, ou plus tôt en cas d\'antécédents familiaux, de surpoids ou de sédentarité.\n\nNotre service de diabétologie propose un suivi personnalisé incluant éducation thérapeutique, adaptation alimentaire et monitoring glycémique. Contact : +243 827 401 391.',
    category: 'Santé',
    date: '2026-03-05',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    author: 'Dr. Mikobi Minga Jeje Paul',
  },
  {
    id: 6,
    title: 'Nouveau protocole de soins pédiatriques',
    excerpt: 'Notre service de pédiatrie adopte un nouveau protocole de soins pour améliorer la prise en charge des enfants.',
    content: 'Le service de pédiatrie du CHIK met en place un protocole innovant basé sur les meilleures pratiques internationales en matière de soins infantiles.\n\nCe nouveau protocole, élaboré sous la supervision du Dr. Bemba Nzuzi Joelle, améliore la rapidité de prise en charge, la communication avec les parents et le suivi post-consultation. Nos 4 lits pédiatriques sont disponibles pour les hospitalisations nécessaires.\n\nLe CHIK reste ouvert 24h/24 pour toute urgence pédiatrique. Ambulance : +243 900 001 214.',
    category: 'Santé',
    date: '2026-02-18',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b1bb5e59ef?w=800&q=80',
    author: 'Dr. Bemba Nzuzi Joelle',
  },
  {
    id: 7,
    title: 'Formation continue du personnel médical',
    excerpt: 'Notre équipe participe à un programme de formation continue pour garantir des soins de la plus haute qualité.',
    content: 'Le CHIK investit continuellement dans la formation de son personnel médical et paramédical pour garantir des soins conformes aux standards internationaux.\n\nCette session de formation couvre les protocoles d\'urgence, l\'hygiène hospitalière, les nouvelles techniques de soins et la relation patient-médecin. Plus de 31 médecins et l\'ensemble du personnel soignant participent à ce programme.\n\nNotre engagement : des mains qui soignent, des cœurs attentionnés.',
    category: 'Annonces',
    date: '2026-02-01',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    author: 'Direction CHIK',
  },
  {
    id: 8,
    title: 'Hygiène des mains : un geste simple qui sauve',
    excerpt: 'L\'hygiène des mains est l\'un des moyens les plus efficaces de prévenir les infections nosocomiales.',
    content: 'À l\'occasion de la Journée mondiale de l\'hygiène des mains, le CHIK rappelle l\'importance de ce geste simple mais vital pour prévenir les infections nosocomiales.\n\nLe lavage régulier des mains par le personnel soignant et les visiteurs réduit significativement la transmission des agents pathogènes. Des stations de désinfection sont disponibles à l\'entrée et dans tous les services du CHIK.\n\nEnsemble, participons à une meilleure santé pour tous.',
    category: 'Conseils',
    date: '2026-01-20',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
    author: 'Service Qualité',
  },
  {
    id: 9,
    title: 'Partenariat avec une clinique internationale',
    excerpt: 'Le CHIK signe un partenariat stratégique pour renforcer l\'expertise médicale et l\'accès aux technologies.',
    content: 'Un nouveau partenariat international vient renforcer les capacités du CHIK en matière de soins spécialisés et d\'accès aux technologies médicales de pointe.\n\nCe partenariat permettra des échanges de compétences, des formations spécialisées pour nos médecins et un accès privilégié à de nouvelles techniques diagnostiques et thérapeutiques. Le CHIK confirme ainsi sa position d\'hôpital de référence à Kinshasa.\n\nPour plus d\'informations : admin@chik.info | +243 827 401 391.',
    category: 'Annonces',
    date: '2026-01-08',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    author: 'Direction CHIK',
  },
]

export const GALLERY = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80', alt: 'Hall d\'accueil CHIK' },
  { id: 2, src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80', alt: 'Salle de consultation' },
  { id: 3, src: 'https://images.unsplash.com/photo-1538108149393-fbbd81890307?w=600&q=80', alt: 'Équipe médicale' },
  { id: 4, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', alt: 'Bloc opératoire' },
  { id: 5, src: 'https://images.unsplash.com/photo-1631217868264-e5b1bb5e59ef?w=600&q=80', alt: 'Service pédiatrie' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551076805-e1869033b561?w=600&q=80', alt: 'Unité néonatologie' },
]

export const NAV_LINKS = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Médecins', path: '/medecins' },
  { name: 'Rendez-vous', path: '/rendez-vous' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'Contact', path: '/contact' },
]

export const TIME_SLOTS = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
]
