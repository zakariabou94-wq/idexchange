// ═══════════════════════════════════════════════════════════════
//  CONTENT.JS  —  All website text in Dutch (nl) and English (en)
//
//  HOW TO EDIT:
//  • Change text between the quote marks "..."
//  • Keep the structure (commas, brackets, colons) exactly as-is
//  • To add a review: copy one { text, author, role } block,
//    paste it after the last one, and separate with a comma
//  • Save the file — the website updates immediately on reload
// ═══════════════════════════════════════════════════════════════

const CONTENT = {

  // ─────────────────────────────────────────────────────────────
  //  DUTCH
  // ─────────────────────────────────────────────────────────────
  nl: {
    nav: {
      about:     "Over mij",
      expertise: "Expertise",
      results:   "Resultaten",
      contact:   "Contact",
      lang:      "EN"           // Text shown on the language switch button
    },

    hero: {
      headline:  "Je hebt leads. Wat ontbreekt is <em>structuur.</em>",
      sub:       "Veel gesprekken zonder systeem leiden zelden tot consistente omzet. Ik bouw en leid de salesprocessen die dat oplossen.",
      cta1:      "Neem contact op",
      cta_wa:    '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp'
    },

    about: {
      label:   "Over mij",
      title:   "Druk zijn is geen sales. <em>Structuur wel.</em>",
      p1:      "Ik werk in high-volume sales omgevingen — 400+ gesprekken per dag. Ik weet wat een team dagelijks tegenkomt en waar omzet werkelijk wordt gewonnen of verloren.",
      p2:      "Ik breng overzicht, stuur gesprekken en bouw systemen die zorgen dat leads geen toeval meer zijn. Geen druk werk, maar effectief werk.",
      p3:      "Echte conversie komt niet uit standaard scripts. Ik kijk naar gedrag in gesprekken — sturing, timing en wat er onder de woorden zit.",
      small:   "Inzetbaar binnen uiteenlopende branches — waaronder high-ticket coaching, online fitness, zelfontwikkeling, producten voor vrouwen en trading.",
      img_alt: "Portretfoto Isa Dijkstra"
    },

    expertise: {
      label: "Wat ik doe",
      title: "Drie pijlers, één resultaat.",
      sub:   "Meer gesprekken betekent niet meer omzet. Het verschil zit in het proces.",
      cards: [
        {
          title: "Sales structuur",
          text:  "Lead → kwalificatie → call → show-up → close. Eén proces, geen losse onderdelen."
        },
        {
          title: "Conversie",
          text:  "Gesprekken sturen, versnellen en richting geven. Van interesse naar betaalde klant."
        },
        {
          title: "Sales leadership",
          text:  "Setters aansturen, kwaliteit bewaken en systemen bouwen die blijven werken."
        }
      ]
    },

    stats: [
      { number: "400+",        label: "Gesprekken per dag" },
      { number: "High-ticket", label: "Sales ervaring" },
      { number: "Structuur",   label: "In salesprocessen" },
      { number: "Conversie",   label: "& show-up verbeterd" },
      { number: "Setterteam",  label: "Aansturing & kwaliteit" }
    ],

    experience: {
      title: "Wat ik meebreng.",
      items: [
        {
          period: "2023 – heden",
          title:  "Founder IDexchange",
          text:   "Structuur en systemen bouwen voor ondernemers die hun sales serieus nemen."
        },
        {
          period: "2024 – heden",
          title:  "High-volume sales omgeving",
          text:   "400+ gesprekken per dag in een live high-ticket omgeving. Ik weet wat een team dagelijks tegenkomt en hoe je gesprekken op niveau houdt."
        },
        {
          period: "2022 – 2025",
          title:  "Landmacht",
          text:   "Discipline, verantwoordelijkheid en leidinggeven onder druk."
        },
        {
          period: "Eerdere jaren",
          title:  "Hospitality",
          text:   "Team aansturing en overzicht in een hoog tempo."
        }
      ]
    },

    statement: {
      headline:  "De meeste salesproblemen zitten niet in de lead.<br><em>Maar in hoe het proces is ingericht.</em>",
      bad_title: "Waar het vaak misgaat",
      bad_items: [
        "Veel gesprekken, weinig richting",
        "Leads worden niet echt gekwalificeerd",
        "Opvolging gebeurt zonder structuur",
        "Conversie hangt af van toeval"
      ],
      good_title: "Wat wel werkt",
      good_items: [
        "Duidelijke sturing in elk gesprek",
        "Heldere kwalificatie vooraf",
        "Consistente follow-up",
        "Een systeem dat herhaalbaar is"
      ]
    },

    reviews: {
      title: "Woorden van anderen",
      cta:   "Laat een review achter",
      // ── Add or remove approved testimonials here ──
      items: [
        {
          text:   "Sinds Isa de leiding heeft over ons setterteam is de conversie zichtbaar omhoog. Ze brengt structuur waar wij die niet hadden.",
          author: "Thomas van den Berg",
          role:   "Founder coaching business"
        },
        {
          text:   "Isa stuurt gesprekken zonder dat het pushy voelt. Leads worden netjes opgevolgd en niets blijft liggen.",
          author: "Sarah de Vries",
          role:   "Online coach"
        },
        {
          text:   "In een team met Isa is het rustig en gestructureerd. Iedereen weet wat er moet gebeuren.",
          author: "Michael Jansen",
          role:   "Setter collega"
        }
      ]
    },

    contact: {
      title:       "Laten we praten.",
      sub:         "Vertel kort over je salesproces. Ik reageer binnen 48 uur.",
      lbl_name:    "Naam",
      lbl_email:   "E-mailadres",
      lbl_company: "Bedrijf",
      lbl_message: "Bericht",
      ph_name:     "Jouw naam",
      ph_email:    "jouw@email.nl",
      ph_company:  "Bedrijfsnaam",
      ph_message:  "Vertel me over je huidige salesproces...",
      submit:      "Verstuur bericht",
      success:     "Bedankt! Ik neem zo snel mogelijk contact op.",
      error:       "Er ging iets mis. Probeer het opnieuw of stuur een e-mail."
    },

    footer: {
      copy: "&copy; 2026 IDexchange — Isa Dijkstra",
      nav: {
        about:     "Over mij",
        expertise: "Expertise",
        results:   "Resultaten",
        contact:   "Contact"
      }
    }
  },

  // ─────────────────────────────────────────────────────────────
  //  ENGLISH
  // ─────────────────────────────────────────────────────────────
  en: {
    nav: {
      about:     "About",
      expertise: "Expertise",
      results:   "Results",
      contact:   "Contact",
      lang:      "NL"
    },

    hero: {
      headline: "You have leads. What's missing is <em>structure.</em>",
      sub:      "Many conversations without a system rarely lead to consistent revenue. I build and lead the sales processes that fix that.",
      cta1:     "Get in touch",
      cta_wa:   '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp'
    },

    about: {
      label:   "About me",
      title:   "Being busy isn't sales. <em>Structure is.</em>",
      p1:      "I work in high-volume sales environments — 400+ conversations per day. I know what a team faces daily and where revenue is truly won or lost.",
      p2:      "I bring clarity, steer conversations and build systems that ensure leads are no longer a matter of chance. Not busy work, but effective work.",
      p3:      "Real conversion doesn't come from standard scripts. I look at behaviour in conversations — direction, timing and what lies beneath the words.",
      small:   "Available across various industries — including high-ticket coaching, online fitness, self-development, women's products and trading.",
      img_alt: "Portrait photo Isa Dijkstra"
    },

    expertise: {
      label: "What I do",
      title: "Three pillars, one result.",
      sub:   "More conversations don't mean more revenue. The difference is in the process.",
      cards: [
        {
          title: "Sales structure",
          text:  "Lead → qualification → call → show-up → close. One process, no loose ends."
        },
        {
          title: "Conversion",
          text:  "Steering, accelerating and directing conversations. From interest to paying client."
        },
        {
          title: "Sales leadership",
          text:  "Managing setters, maintaining quality and building systems that keep working."
        }
      ]
    },

    stats: [
      { number: "400+",        label: "Conversations per day" },
      { number: "High-ticket", label: "Sales experience" },
      { number: "Structure",   label: "In sales processes" },
      { number: "Conversion",  label: "& show-up improved" },
      { number: "Setter team", label: "Management & quality" }
    ],

    experience: {
      title: "What I bring.",
      items: [
        {
          period: "2023 – present",
          title:  "Founder IDexchange",
          text:   "Building structure and systems for entrepreneurs who take their sales seriously."
        },
        {
          period: "2024 – present",
          title:  "High-volume sales environment",
          text:   "400+ conversations per day in a live high-ticket environment. I know what a team faces daily and how to keep conversations at a high level."
        },
        {
          period: "2022 – 2025",
          title:  "Dutch Army",
          text:   "Discipline, responsibility and leadership under pressure."
        },
        {
          period: "Earlier years",
          title:  "Hospitality",
          text:   "Team management and oversight at a high pace."
        }
      ]
    },

    statement: {
      headline:  "Most sales problems aren't in the lead.<br><em>But in how the process is set up.</em>",
      bad_title: "Where it often goes wrong",
      bad_items: [
        "Many conversations, little direction",
        "Leads aren't truly qualified",
        "Follow-up happens without structure",
        "Conversion depends on luck"
      ],
      good_title: "What actually works",
      good_items: [
        "Clear direction in every conversation",
        "Solid qualification upfront",
        "Consistent follow-up",
        "A system that is repeatable"
      ]
    },

    reviews: {
      title: "Words from others",
      cta:   "Leave a review",
      // ── Add or remove approved testimonials here ──
      items: [
        {
          text:   "Since Isa took charge of our setter team, conversion has visibly improved. She brings structure where we had none.",
          author: "Thomas van den Berg",
          role:   "Founder coaching business"
        },
        {
          text:   "Isa steers conversations without it feeling pushy. Leads are followed up neatly and nothing slips through.",
          author: "Sarah de Vries",
          role:   "Online coach"
        },
        {
          text:   "Working with Isa is calm and structured. Everyone knows what needs to be done.",
          author: "Michael Jansen",
          role:   "Setter colleague"
        }
      ]
    },

    contact: {
      title:       "Let's talk.",
      sub:         "Tell me briefly about your sales process. I'll respond within 48 hours.",
      lbl_name:    "Name",
      lbl_email:   "Email address",
      lbl_company: "Company",
      lbl_message: "Message",
      ph_name:     "Your name",
      ph_email:    "your@email.com",
      ph_company:  "Company name",
      ph_message:  "Tell me about your current sales process...",
      submit:      "Send message",
      success:     "Thank you! I'll get back to you as soon as possible.",
      error:       "Something went wrong. Please try again or send an email."
    },

    footer: {
      copy: "&copy; 2026 IDexchange — Isa Dijkstra",
      nav: {
        about:     "About",
        expertise: "Expertise",
        results:   "Results",
        contact:   "Contact"
      }
    }
  }
};
