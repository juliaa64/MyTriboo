// MyTriboo JavaScript - Accessibility, Interactions and Filtering

// Translations
const translations = {
  es: {
    nav_home: "Inicio",
    nav_events: "Eventos",
    nav_posts: "Publicaciones",
    nav_chats: "Chats",
    nav_profile: "Perfil",
    accessibility_title: "Accesibilidad",
    theme_label: "Tema",
    theme_light: "☀️ Claro",
    theme_dark: "🌙 Oscuro",
    language_label: "Idioma",
    btn_join: "Únete ahora",
    btn_create_event: "Crear evento",
    btn_create_post: "Crear publicación",
    btn_new_chat: "Nuevo chat",
    btn_logout: "Cerrar sesión",
    hero_title_1: "Encuentra tu",
    hero_title_2: " tribu",
    hero_title_3: "a través de tus",
    hero_title_4: "intereses",
    hero_description:
      "Conecta con personas que comparten tus pasiones. Asiste a eventos temáticos, comparte experiencias y construye relaciones auténticas.",
    btn_get_started: "Comenzar gratis",
    btn_learn_more: "Saber más",
    stats_users: "Usuarios activos",
    stats_events: "Eventos creados",
    stats_categories: "Categorías",
    features_title: "Todo lo que necesitas",
    features_subtitle: "Descubre las herramientas para conectar con tu comunidad",
    feature_events_title: "Eventos Temáticos",
    feature_events_desc:
      "Crea y asiste a eventos organizados según tus intereses. Desde ciencia hasta deportes, encuentra el lugar perfecto para ti.",
    feature_connections_title: "Conexiones Auténticas",
    feature_connections_desc: "Construye tu red de contactos con personas afines. Sistema de conexiones inteligente.",
    feature_posts_title: "Publicaciones",
    feature_posts_desc: "Comparte reflexiones y experiencias. Dale like a las publicaciones que te gusten.",
    feature_feed_title: "Tablones Personalizados",
    feature_feed_desc: "Descubre eventos y publicaciones relacionados con tus intereses.",
    feature_messaging_title: "Mensajería Completa",
    feature_messaging_desc: "Chats privados y grupales para comunicarte con tu triboo.",
    feature_interests_title: "Múltiples Intereses",
    feature_interests_desc: "Selecciona tus intereses: Ciencia, Deportes, Música y más.",
    how_title: "¿Cómo funciona?",
    how_subtitle: "Únete a tu triboo en 3 simples pasos",
    step1_title: "Crea tu perfil",
    step1_desc: "Regístrate y selecciona tus intereses. Personaliza tu experiencia.",
    step2_title: "Descubre y conecta",
    step2_desc: "Explora eventos y publicaciones. Conecta con personas afines.",
    step3_title: "Participa y crece",
    step3_desc: "Asiste a eventos y construye tu red social auténtica.",
    cta_title: "¿Listo para encontrar tu triboo?",
    cta_description: "Únete a miles de personas que ya están conectando a través de sus pasiones compartidas.",
    btn_join_now: "Únete gratis ahora",
    footer_product: "Producto",
    footer_company: "Compañía",
    footer_about: "Acerca de",
    footer_contact: "Contacto",
    footer_privacy: "Privacidad",
    footer_social: "Social",
    footer_rights: "Todos los derechos reservados.",
    events_title: "Tablón de Eventos",
    events_subtitle: "Tu próxima gran experiencia te está esperando. ¿A cuál te apuntas hoy?",
    filter_all: "Todos",
    btn_view_details: "Ver detalles",
    btn_sign_up: "Apuntarse",
    posts_title: "Tablón de Publicaciones",
    posts_subtitle: "El corazón de la tribu: lee, comenta y conecta con las experiencias de los demás.",
    chats_title: "Chats",
    chats_subtitle: "Mantén el contacto con tu tribu, ya sea en grupo o uno a uno.",
    tab_profile: "Perfil",
    tab_my_events: "Mis eventos",
    tab_my_posts: "Mis publicaciones",
    tab_my_connections: "Mis conexiones",
    profile_edit: "Editar perfil",
    label_name: "Nombre completo",
    label_email: "Correo electrónico",
    label_bio: "Biografía",
    label_location: "Ubicación",
    label_interests: "Intereses",
    btn_save_changes: "Guardar cambios",
    my_events_title: "Gestiona tus eventos",
    btn_create_new_event: "Crear nuevo evento",
    btn_edit: "Editar",
    btn_delete: "Eliminar",
    no_more_events: "Sin más eventos",
    create_first_event: "Crea tu primer evento para tu triboo",
    my_posts_title: "Gestiona tus publicaciones",
    btn_create_new_post: "Crear nueva publicación",
    no_more_posts: "Sin más publicaciones",
    share_thoughts: "Comparte tus pensamientos con tu triboo",
    filter_all_events: "Todos",
    filter_created_by_me: "Creados por mí",
    filter_attending: "Asistiré",
    btn_cancel_attendance: "Cancelar asistencia",
    my_connections_title: "Mis conexiones",
    connections_active: "Conexiones",
    connections_pending: "Pendientes",
    connections_blocked: "Bloqueados",
    btn_chat: "Chat",
    btn_unfollow: "Dejar de seguir",
    btn_cancel_request: "Cancelar solicitud",
    btn_unblock: "Desbloquear",
  },
  en: {
    nav_home: "Home",
    nav_events: "Events",
    nav_posts: "Posts",
    nav_chats: "Chats",
    nav_profile: "Profile",
    accessibility_title: "Accessibility",
    theme_label: "Theme",
    theme_light: "☀️ Light",
    theme_dark: "🌙 Dark",
    language_label: "Language",
    btn_join: "Join now",
    btn_create_event: "Create event",
    btn_create_post: "Create post",
    btn_new_chat: "New chat",
    btn_logout: "Log out",
    hero_title_1: "Find your",
    hero_title_2: " triboo",
    hero_title_3: "through your",
    hero_title_4: "interests",
    hero_description:
      "Connect with people who share your passions. Attend themed events, share experiences and build authentic relationships.",
    btn_get_started: "Get started free",
    btn_learn_more: "Learn more",
    stats_users: "Active users",
    stats_events: "Events created",
    stats_categories: "Categories",
    features_title: "Everything you need",
    features_subtitle: "Discover the tools to connect with your community",
    feature_events_title: "Themed Events",
    feature_events_desc:
      "Create and attend events organized by your interests. From science to sports, find your perfect place.",
    feature_connections_title: "Authentic Connections",
    feature_connections_desc: "Build your network with like-minded people. Smart connection system.",
    feature_posts_title: "Posts",
    feature_posts_desc: "Share thoughts and experiences. Like posts you enjoy.",
    feature_feed_title: "Personalized Boards",
    feature_feed_desc: "Discover events and posts related to your interests.",
    feature_messaging_title: "Complete Messaging",
    feature_messaging_desc: "Private and group chats to communicate with your triboo.",
    feature_interests_title: "Multiple Interests",
    feature_interests_desc: "Select your interests: Science, Sports, Music and more.",
    how_title: "How it works?",
    how_subtitle: "Join your triboo in 3 simple steps",
    step1_title: "Create your profile",
    step1_desc: "Sign up and select your interests. Customize your experience.",
    step2_title: "Discover and connect",
    step2_desc: "Explore events and posts. Connect with like-minded people.",
    step3_title: "Participate and grow",
    step3_desc: "Attend events and build your authentic social network.",
    cta_title: "Ready to find your triboo?",
    cta_description: "Join thousands of people already connecting through their shared passions.",
    btn_join_now: "Join free now",
    footer_product: "Product",
    footer_company: "Company",
    footer_about: "About",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_social: "Social",
    footer_rights: "All rights reserved.",
    events_title: "Events Board",
    events_subtitle: "Your next great experience is waiting. Which one will you join today?",
    filter_all: "All",
    btn_view_details: "View details",
    btn_sign_up: "Sign up",
    posts_title: "Posts Board",
    posts_subtitle: "The heart of the tribe: read, comment and connect with others' experiences.",
    chats_title: "Chats",
    chats_subtitle: "Stay in touch with your tribe, whether in groups or one-on-one.",
    tab_profile: "Profile",
    tab_my_events: "My events",
    tab_my_posts: "My posts",
    tab_my_connections: "My connections",
    profile_edit: "Edit profile",
    label_name: "Full name",
    label_email: "Email",
    label_bio: "Biography",
    label_location: "Location",
    label_interests: "Interests",
    btn_save_changes: "Save changes",
    my_events_title: "Manage your events",
    btn_create_new_event: "Create new event",
    btn_edit: "Edit",
    btn_delete: "Delete",
    no_more_events: "No more events",
    create_first_event: "Create your first event for your triboo",
    my_posts_title: "Manage your posts",
    btn_create_new_post: "Create new post",
    no_more_posts: "No more posts",
    share_thoughts: "Share your thoughts with your triboo",
    filter_all_events: "All",
    filter_created_by_me: "Created by me",
    filter_attending: "Attending",
    btn_cancel_attendance: "Cancel attendance",
    my_connections_title: "My connections",
    connections_active: "Connections",
    connections_pending: "Pending",
    connections_blocked: "Blocked",
    btn_chat: "Chat",
    btn_unfollow: "Unfollow",
    btn_cancel_request: "Cancel request",
    btn_unblock: "Unblock",
  },
  fr: {
    nav_home: "Accueil",
    nav_events: "Événements",
    nav_posts: "Publications",
    nav_chats: "Chats",
    nav_profile: "Profil",
    accessibility_title: "Accessibilité",
    theme_label: "Thème",
    theme_light: "☀️ Clair",
    theme_dark: "🌙 Sombre",
    language_label: "Langue",
    btn_join: "Rejoindre",
    btn_create_event: "Créer événement",
    btn_create_post: "Créer publication",
    btn_new_chat: "Nouveau chat",
    btn_logout: "Déconnexion",
    hero_title_1: "Trouvez votre",
    hero_title_2: " triboo",
    hero_title_3: "à travers vos",
    hero_title_4: "intérêts",
    hero_description:
      "Connectez-vous avec des personnes qui partagent vos passions. Assistez à des événements thématiques et construisez des relations authentiques.",
    btn_get_started: "Commencer gratuitement",
    btn_learn_more: "En savoir plus",
    stats_users: "Utilisateurs actifs",
    stats_events: "Événements créés",
    stats_categories: "Catégories",
    features_title: "Tout ce dont vous avez besoin",
    features_subtitle: "Découvrez les outils pour vous connecter avec votre communauté",
    footer_rights: "Tous droits réservés.",
    btn_sign_up: "S'inscrire",
    filter_all_events: "Tous",
    filter_created_by_me: "Créés par moi",
    filter_attending: "Je participe",
    btn_cancel_attendance: "Annuler la participation",
    tab_my_connections: "Mes connexions",
    my_connections_title: "Mes connexions",
    connections_active: "Connexions",
    connections_pending: "En attente",
    connections_blocked: "Bloqués",
    btn_chat: "Chat",
    btn_unfollow: "Ne plus suivre",
    btn_cancel_request: "Annuler la demande",
    btn_unblock: "Débloquer",
  },
  de: {
    nav_home: "Startseite",
    nav_events: "Veranstaltungen",
    nav_posts: "Beiträge",
    nav_chats: "Chats",
    nav_profile: "Profil",
    accessibility_title: "Barrierefreiheit",
    theme_label: "Thema",
    theme_light: "☀️ Hell",
    theme_dark: "🌙 Dunkel",
    language_label: "Sprache",
    btn_join: "Jetzt beitreten",
    btn_create_event: "Ereignis erstellen",
    btn_create_post: "Beitrag erstellen",
    btn_new_chat: "Neuer Chat",
    btn_logout: "Abmelden",
    hero_title_1: "Finde deinen",
    hero_title_2: " triboo",
    hero_title_3: "durch deine",
    hero_title_4: "Interessen",
    hero_description:
      "Verbinde dich mit Menschen, die deine Leidenschaften teilen. Nimm an thematischen Veranstaltungen teil und baue authentische Beziehungen auf.",
    btn_get_started: "Kostenlos starten",
    btn_learn_more: "Mehr erfahren",
    stats_users: "Aktive Benutzer",
    stats_events: "Erstellte Veranstaltungen",
    stats_categories: "Kategorien",
    features_title: "Alles, was Sie brauchen",
    features_subtitle: "Entdecken Sie die Tools, um sich mit Ihrer Community zu verbinden",
    footer_rights: "Alle Rechte vorbehalten.",
    btn_sign_up: "Anmelden",
    filter_all_events: "Alle",
    filter_created_by_me: "Von mir erstellt",
    filter_attending: "Teilnehmen",
    btn_cancel_attendance: "Teilnahme absagen",
    tab_my_connections: "Meine Verbindungen",
    my_connections_title: "Meine Verbindungen",
    connections_active: "Verbindungen",
    connections_pending: "Ausstehend",
    connections_blocked: "Blockiert",
    btn_chat: "Chat",
    btn_unfollow: "Nicht mehr folgen",
    btn_cancel_request: "Anfrage abbrechen",
    btn_unblock: "Entsperren",
  },
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Load saved preferences
  const savedTheme = localStorage.getItem("theme") || "light"
  const savedLanguage = localStorage.getItem("language") || "es"

  setTheme(savedTheme)
  setLanguage(savedLanguage)

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active")
      }
    })

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileMenu.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })
  }

  // Accessibility panel toggle
  const accessibilityBtn = document.getElementById("accessibility-btn")
  const accessibilityPanel = document.getElementById("accessibility-panel")

  if (accessibilityBtn && accessibilityPanel) {
    accessibilityBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      accessibilityPanel.classList.toggle("active")
    })

    // Close panel when clicking outside
    document.addEventListener("click", (e) => {
      if (!accessibilityPanel.contains(e.target) && !accessibilityBtn.contains(e.target)) {
        accessibilityPanel.classList.remove("active")
      }
    })
  }

  // Theme buttons
  const themeLightBtn = document.getElementById("theme-light")
  const themeDarkBtn = document.getElementById("theme-dark")

  if (themeLightBtn) {
    themeLightBtn.addEventListener("click", () => {
      setTheme("light")
      localStorage.setItem("theme", "light")
    })
  }

  if (themeDarkBtn) {
    themeDarkBtn.addEventListener("click", () => {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    })
  }

  // Language selector
  const languageSelect = document.getElementById("language-select")
  if (languageSelect) {
    languageSelect.value = savedLanguage
    languageSelect.addEventListener("change", function () {
      const lang = this.value
      setLanguage(lang)
      localStorage.setItem("language", lang)
    })
  }

  // Profile tabs
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none"
      })

      // Show selected tab content
      const tabContent = document.getElementById("tab-" + tabName)
      if (tabContent) {
        tabContent.style.display = "block"
      }
    })
  })

  // --- FILTRADO DE EVENTOS CON SELECCIÓN MÚLTIPLE ---
  const filterButtons = document.querySelectorAll(".filter-btn")
  const eventCards = document.querySelectorAll(".event-card")

  if (filterButtons.length > 0 && eventCards.length > 0) {
    // Array para mantener las categorías seleccionadas
    let selectedCategories = []

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category")

        // Si se hace clic en "Todos"
        if (category === "all") {
          // Desactivar todas las categorías seleccionadas
          selectedCategories = []
          
          // Resetear estilos: "Todos" activo, resto secundario
          filterButtons.forEach((btn) => {
            btn.classList.remove("btn-primary")
            btn.classList.add("btn-secondary")
          })
          button.classList.remove("btn-secondary")
          button.classList.add("btn-primary")
        } else {
          // Si se selecciona una categoría específica, desactivar "Todos"
          const allButton = document.querySelector('.filter-btn[data-category="all"]')
          if (allButton) {
            allButton.classList.remove("btn-primary")
            allButton.classList.add("btn-secondary")
          }

          // Toggle de la categoría seleccionada
          const index = selectedCategories.indexOf(category)
          if (index > -1) {
            // Si ya está seleccionada, la quitamos
            selectedCategories.splice(index, 1)
            button.classList.remove("btn-primary")
            button.classList.add("btn-secondary")
          } else {
            // Si no está seleccionada, la agregamos
            selectedCategories.push(category)
            button.classList.remove("btn-secondary")
            button.classList.add("btn-primary")
          }

          // Si no hay categorías seleccionadas, activar "Todos"
          if (selectedCategories.length === 0 && allButton) {
            allButton.classList.remove("btn-secondary")
            allButton.classList.add("btn-primary")
          }
        }

        // Filtrar las tarjetas según las categorías seleccionadas
        eventCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category")
          
          // Mostrar si: no hay categorías seleccionadas O la categoría de la tarjeta está en el array
          if (selectedCategories.length === 0 || selectedCategories.includes(cardCategory)) {
            card.style.display = ""
            card.style.opacity = "1"
          } else {
            card.style.display = "none"
            card.style.opacity = "0"
          }
        })
      })
    })
  }

  // --- FILTRADO DE EVENTOS DE PERFIL ---
  const profileEventFilters = document.querySelectorAll(".profile-event-filter")
  const profileEventItems = document.querySelectorAll(".profile-event-item")

  if (profileEventFilters.length > 0 && profileEventItems.length > 0) {
    // Ordenar eventos por fecha al cargar
    const eventsContainer = profileEventItems[0]?.parentElement
    if (eventsContainer) {
      const sortedEvents = Array.from(profileEventItems).sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-event-date"))
        const dateB = new Date(b.getAttribute("data-event-date"))
        return dateA - dateB
      })
      sortedEvents.forEach(event => eventsContainer.appendChild(event))
    }

    profileEventFilters.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")

        // Actualizar estilos de botones
        profileEventFilters.forEach((btn) => {
          btn.classList.remove("active")
          btn.classList.remove("btn-primary")
          btn.classList.add("btn-secondary")
        })
        button.classList.add("active")
        button.classList.remove("btn-secondary")
        button.classList.add("btn-primary")

        // Filtrar eventos
        profileEventItems.forEach((item) => {
          const eventType = item.getAttribute("data-event-type")
          
          if (filter === "all") {
            item.style.display = ""
            item.style.opacity = "1"
          } else if (filter === eventType) {
            item.style.display = ""
            item.style.opacity = "1"
          } else {
            item.style.display = "none"
            item.style.opacity = "0"
          }
        })
      })
    })
  }
})

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme)

  const themeLightBtn = document.getElementById("theme-light")
  const themeDarkBtn = document.getElementById("theme-dark")

  if (themeLightBtn && themeDarkBtn) {
    themeLightBtn.classList.remove("active")
    themeDarkBtn.classList.remove("active")

    if (theme === "light") {
      themeLightBtn.classList.add("active")
    } else {
      themeDarkBtn.classList.add("active")
    }
  }
}

function setLanguage(lang) {
  document.documentElement.lang = lang

  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })
}