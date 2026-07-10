export type Testimonial = {
  quote: string
  author: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ServicePage = {
  slug: string
  title: string
  metaDescription: string
  headline: string
  subheadline: string
  whyItMatters: string
  whatWeTreat: { category: string; items: string[] }[]
  approach?: { title: string; items: string[] }[]
  timeline?: { phase: string; title: string; items: string[] }[]
  differentiators: string[]
  testimonials: Testimonial[]
  faqs: FaqItem[]
  ctaText: string
  whatWeTreatLabel?: string
  whatWeTreatHeading?: string
}

export const services: ServicePage[] = [
  {
    slug: "post-surgical-rehabilitation",
    title: "Post-Surgical Physical Therapy in St. Augustine",
    metaDescription:
      "Specialized post-surgical rehabilitation in St. Augustine for knee replacement, hip surgery, shoulder surgery, and spinal fusion. Private one-on-one PT with Nicole Tristram, PT.",
    headline: "Post-Surgical Physical Therapy in St. Augustine",
    subheadline:
      "Recovering from knee replacement, hip surgery, shoulder surgery, or spinal fusion? Get back to full function faster with specialized post-surgical rehabilitation.",
    whyItMatters:
      "Surgery fixes the structural problem; physical therapy teaches your body to move correctly again. Without proper rehab, you risk prolonged pain and swelling, limited motion, muscle atrophy, compensatory patterns that cause new injuries, and re-injury. Nicole specializes in post-surgical cases — including ones where traditional clinic PT didn't deliver.",
    whatWeTreat: [
      {
        category: "Knee",
        items: ["Total/partial replacement", "ACL reconstruction", "Meniscus repair", "Arthroscopy"],
      },
      {
        category: "Hip",
        items: ["Total replacement", "Arthroscopy", "Labral tear repair", "FAI"],
      },
      {
        category: "Shoulder",
        items: ["Rotator cuff repair", "Replacement", "Labral repair", "Biceps tenodesis"],
      },
      {
        category: "Spine",
        items: ["Fusion", "Laminectomy", "Disc surgery", "Decompression"],
      },
      {
        category: "Breast",
        items: ["Post-mastectomy recovery", "Reconstruction rehab", "Lymphedema management"],
      },
    ],
    timeline: [
      {
        phase: "Weeks 1–2",
        title: "Pain & swelling management",
        items: [
          "Manual therapy techniques",
          "Alpha-Stim to reduce inflammation",
          "Gentle range-of-motion work",
          "Scar tissue mobilization",
          "Lymphatic drainage techniques",
        ],
      },
      {
        phase: "Weeks 3–6",
        title: "Mobility & strength",
        items: [
          "Progressive strengthening",
          "Gait and movement retraining",
          "Manual therapy for compensations",
          "Functional movement assessment",
        ],
      },
      {
        phase: "Weeks 7–12",
        title: "Return to activity",
        items: [
          "Advanced strengthening on Pilates equipment",
          "Activity- or sport-specific training",
          "Core stability and balance",
          "Injury-prevention strategies",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote:
          "I could barely put pressure on my knee after two surgeries. In 6 weeks she had almost all the swelling gone. I'm pain-free now.",
        author: "Lora M.",
      },
      {
        quote: "After my knee replacement, friends who'd seen Nicole for years referred me. She got me back to my best.",
        author: "Morgan D.",
      },
      {
        quote: "Nicole helped me tremendously after my mastectomy. I never expected the amount of healing she provided.",
        author: "Bee S.",
      },
    ],
    faqs: [
      {
        question: "How soon after surgery should I start PT?",
        answer: "Most surgeons recommend within 1–2 weeks. Earlier proper rehab means better outcomes.",
      },
      {
        question: "I already did PT but still have problems — can you help?",
        answer:
          "Yes. Many clients come after clinic PT; a whole-body approach and private sessions often reveal what was missed.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Typically 6–12 weeks depending on the surgery and your goals. Nicole gives you a clear timeline after evaluation.",
      },
      {
        question: "Do I need a prescription?",
        answer: "No — Florida is a direct-access state.",
      },
    ],
    ctaText:
      "Schedule your post-surgical evaluation. Nicole will assess your status, explain what's limiting recovery, and build a personalized plan to get you back to full function.",
  },
  {
    slug: "hip-back-pain",
    title: "Hip & Back Pain Physical Therapy in St. Augustine",
    metaDescription:
      "Hip and back pain physical therapy in St. Augustine. Whole-body assessment to find root causes of sciatica, SI joint dysfunction, hip impingement, and chronic lumbar pain.",
    headline: "Hip & Back Pain Physical Therapy in St. Augustine",
    subheadline:
      "Chronic hip or back pain controlling your life? Stop managing symptoms — find and fix the root cause.",
    whyItMatters:
      "Hip pain is often driven by the lower back, pelvis, or SI joint; back pain can stem from hip instability or pelvic misalignment. Traditional PT treats the painful spot. Nicole evaluates the whole body to find what's actually causing your symptoms.",
    whatWeTreat: [
      {
        category: "Lower back",
        items: ["Chronic lumbar pain", "Sciatica", "Disc problems", "SI joint dysfunction", "Spasms"],
      },
      {
        category: "Hip",
        items: [
          "Impingement",
          "Labral tears",
          "Bursitis",
          "IT band syndrome",
          "Hip flexor strain",
          "Piriformis syndrome",
        ],
      },
      {
        category: "Pelvic alignment",
        items: ["Pelvic tilt and rotation", "Leg-length discrepancy", "Postpartum instability"],
      },
    ],
    timeline: [
      {
        phase: "Week 1",
        title: "Comprehensive assessment",
        items: [
          "Posture and alignment analysis",
          "Gait assessment",
          "Range-of-motion testing",
          "Muscle imbalance and movement-pattern evaluation",
          "Trigger point mapping",
        ],
      },
      {
        phase: "Weeks 2–8",
        title: "Personalized treatment",
        items: [
          "Manual therapy and soft-tissue mobilization",
          "Trigger point release",
          "Alpha-Stim for pain and inflammation",
          "Therapeutic Pilates for core stability",
          "Movement retraining and postural correction",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote:
          "I came to Nicole in considerable pain from hip issues. My hips and back feel much better — she is extremely knowledgeable and thorough.",
        author: "Maci R.",
      },
      {
        quote:
          "She helped correct my pelvic tilt with massage, stretching, and trigger point work. I haven't had the issues I used to.",
        author: "Eason H.",
      },
      {
        quote: "I had back and foot pain so severe it woke me at night. After working with Nicole, I'm pain-free.",
        author: "Jill C.",
      },
    ],
    faqs: [
      {
        question: "How is this different from traditional PT?",
        answer:
          "Traditional PT often focuses only on the painful area; Nicole evaluates the whole body for compensatory patterns and root causes.",
      },
      {
        question: "PT didn't work for me before — why would this?",
        answer:
          "Common story. Private sessions and a whole-body approach frequently surface what was previously missed.",
      },
      {
        question: "Do I need a prescription?",
        answer: "No — Florida is direct-access.",
      },
      {
        question: "How long until I feel better?",
        answer: "Many notice improvement within 2–3 sessions; lasting results typically take 6–8 weeks.",
      },
    ],
    ctaText:
      "Schedule your hip and back evaluation. Nicole will identify what's really causing your pain and build a personalized plan.",
  },
  {
    slug: "womens-health",
    title: "Women's Health Physical Therapy in St. Augustine",
    metaDescription:
      "Women's health physical therapy in St. Augustine for pelvic floor, posture, postpartum recovery, post-mastectomy rehab, and lymphedema. Private one-on-one sessions.",
    headline: "Women's Health Physical Therapy in St. Augustine",
    subheadline:
      "Specialized, private rehabilitation for pelvic floor, posture, postpartum recovery, and post-surgical healing.",
    whyItMatters:
      "Women's health concerns are deeply interconnected — pelvic floor function, posture, core stability, and breathing all influence one another. Desk-based work and poor postural habits compound the problem. Nicole's whole-body approach addresses these together rather than in isolation, combining fascial release, neuromuscular re-education, and Pilates-based core work.",
    whatWeTreat: [
      {
        category: "Conditions we treat",
        items: [
          "Pelvic floor dysfunction and pelvic alignment",
          "Posture correction for desk-based and sedentary work",
          "Postpartum rehabilitation and pregnancy preparation",
          "Post-mastectomy recovery and breast reconstruction rehab",
          "Lymphedema management",
          "Diastasis recti and core re-training",
        ],
      },
    ],
    approach: [
      {
        title: "Assessment",
        items: [
          "Postural and movement analysis",
          "Pelvic and core function evaluation",
          "Identification of contributing fascial and neuromuscular patterns",
        ],
      },
      {
        title: "Treatment",
        items: [
          "Fascial release and manual therapy",
          "Neuromuscular re-education",
          "Therapeutic Pilates for core and pelvic stability",
          "Posture and breathing retraining",
          "Home program tailored to your daily routine",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote:
          "I started seeing Nicole when I became pregnant because I wanted as little intervention as possible. Her work paid off.",
        author: "Andriana B.",
      },
      {
        quote:
          "After a double mastectomy I had shoulder pain and impingement. I never expected the amount of healing she provided.",
        author: "Bee S.",
      },
      {
        quote: "She looks at the whole person and gives you an individual plan tailored to you.",
        author: "K Rox",
      },
    ],
    faqs: [
      {
        question: "Can PT help posture problems from desk work?",
        answer:
          "Yes. Posture, pelvic floor, and core function are connected; Nicole treats them together with fascial release, neuromuscular work, and Pilates.",
      },
      {
        question: "Is treatment private?",
        answer: "Always one-on-one in a private studio — important for women's health concerns.",
      },
      {
        question: "Do I need a referral?",
        answer: "No — Florida is direct-access.",
      },
      {
        question: "Do you help during and after pregnancy?",
        answer: "Yes — both pregnancy preparation and postpartum rehabilitation.",
      },
    ],
    ctaText:
      "Schedule your women's health evaluation. Nicole will assess how posture, core, and pelvic function connect for you, and build a personalized plan.",
  },
  {
    slug: "knee-rehabilitation",
    title: "Knee Pain & Knee Rehabilitation in St. Augustine",
    metaDescription:
      "Knee pain and knee rehabilitation in St. Augustine. From chronic knee pain to post-surgical recovery — restore strength, mobility, and confidence with one-on-one PT.",
    headline: "Knee Pain & Knee Rehabilitation in St. Augustine",
    subheadline:
      "From chronic knee pain to post-surgical recovery — restore strength, mobility, and confidence.",
    whyItMatters:
      "Knee pain frequently originates above or below the joint — at the hip, or in the foot and ankle. Treating only the knee misses the cause. Nicole assesses the whole kinetic chain to resolve pain and prevent its return, and is an alternative-to-surgery option for many.",
    whatWeTreat: [
      {
        category: "Conditions we treat",
        items: [
          "Osteoarthritis and chronic knee pain",
          "Pre- and post-surgical rehab (replacement, ACL, meniscus)",
          "Patellofemoral pain and tracking issues",
          "Tendinitis and overuse injuries",
          "Post-injection rehabilitation (e.g., stem-cell, PRP)",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote: "In 6 weeks she had almost all the swelling gone after two knee surgeries. She treats your whole body.",
        author: "Lora M.",
      },
      {
        quote:
          "The rehab experience for knee stem-cell therapy was the best I've ever had. She helped me from the first session.",
        author: "teZa L.",
      },
      {
        quote:
          "I am pain-free in my knee from surgery two years ago — her PT plus Pilates knowledge made the difference.",
        author: "Patricia C.",
      },
    ],
    faqs: [
      {
        question: "Can PT help me avoid knee surgery?",
        answer:
          "Often, yes. Many clients resolve pain through targeted rehab and movement correction. Nicole will give you an honest assessment.",
      },
      {
        question: "I had a stem-cell or PRP injection — can you help recovery?",
        answer: "Yes; Nicole has extensive experience rehabilitating post-injection knees.",
      },
      {
        question: "How long is recovery?",
        answer: "Varies by condition; most plans run 6–12 weeks.",
      },
      {
        question: "Do I need a prescription?",
        answer: "No — Florida is direct-access.",
      },
    ],
    ctaText:
      "Schedule your knee evaluation. Nicole will assess the whole chain — hip, knee, foot — and build a plan to get you moving without pain.",
  },
  {
    slug: "shoulder-injury",
    title: "Shoulder Pain & Frozen Shoulder Treatment in St. Augustine",
    metaDescription:
      "Shoulder pain and frozen shoulder treatment in St. Augustine. Rotator cuff rehab, impingement, and post-surgical recovery with private one-on-one physical therapy.",
    headline: "Shoulder Pain & Frozen Shoulder Treatment in St. Augustine",
    subheadline:
      "Frozen shoulder, rotator cuff issues, impingement, or post-surgical recovery — regain pain-free range of motion.",
    whyItMatters:
      "The shoulder is the body's most mobile — and most easily destabilized — joint. Lasting recovery requires restoring the coordinated movement of the shoulder blade, neck, and upper back, not just the joint itself. Nicole's manual therapy and Pilates-based approach restores that coordination.",
    whatWeTreat: [
      {
        category: "Conditions we treat",
        items: [
          "Frozen shoulder (adhesive capsulitis)",
          "Rotator cuff strains and post-repair rehab",
          "Shoulder impingement",
          "Post-surgical recovery (replacement, labral repair)",
          "Chronic neck-and-shoulder tension and postural dysfunction",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote:
          "I came with a lingering shoulder issue and was very impressed with her professionalism and holistic treatment.",
        author: "Nurah D.",
      },
      {
        quote:
          "She helped with the frozen shoulder and lymphedema — her advice and therapy kept me going with renewed vigor.",
        author: "David G.",
      },
      {
        quote: "Fixed my neck and shoulder — excellent results using a combination of disciplines.",
        author: "Steve W.",
      },
    ],
    faqs: [
      {
        question: "How long does frozen shoulder take to treat?",
        answer:
          "It varies, but consistent manual therapy and guided movement usually produce steady improvement over several weeks.",
      },
      {
        question: "Can you help after rotator cuff surgery?",
        answer: "Yes — post-surgical shoulder rehab is a core specialty.",
      },
      {
        question: "Do I need a referral?",
        answer: "No — Florida is direct-access.",
      },
      {
        question: "Will treatment hurt?",
        answer: "We work within your tolerance; Alpha-Stim helps manage pain and inflammation.",
      },
    ],
    ctaText:
      "Schedule your shoulder evaluation. Nicole will pinpoint the source of your pain or stiffness and restore pain-free motion.",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Rehabilitation in St. Augustine",
    metaDescription:
      "Sports injury rehabilitation in St. Augustine. Return to your sport stronger with movement retraining, injury prevention, and one-on-one physical therapy.",
    headline: "Sports Injury Rehabilitation in St. Augustine",
    subheadline:
      "Get back to your sport stronger — and reduce the risk of re-injury — with rehabilitation built around how you move.",
    whyItMatters:
      "Returning to activity too soon, or without correcting the movement pattern that caused the injury, is the fastest route to re-injury. Nicole rehabilitates the injury and retrains the movement so you come back more resilient than before.",
    whatWeTreat: [
      {
        category: "Conditions we treat",
        items: [
          "Ankle sprains and chronic instability",
          "Muscle strains and tendinitis",
          "Overuse injuries from running, lifting, and racquet sports",
          "Return-to-sport conditioning and movement retraining",
          "Injury-prevention programs for active adults",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote:
          "After breaking my ankle, women at my gym swore by Nicole's talent to get me back to my best potential.",
        author: "Morgan D.",
      },
      {
        quote:
          "After a severe ankle sprain she applied decades of knowledge and several modalities to correct alignment and heal — even months later.",
        author: "Dwayne V.",
      },
      {
        quote:
          "Without her help I would not have been able to play competitive basketball or even do daily activities.",
        author: "Jessica H.",
      },
    ],
    faqs: [
      {
        question: "When can I return to my sport?",
        answer:
          "When you've restored strength, mobility, and correct movement — Nicole guides a safe, progressive return.",
      },
      {
        question: "Do you treat old injuries that never fully healed?",
        answer: "Yes; she regularly corrects alignment and function on months-old injuries.",
      },
      {
        question: "Do I need a referral?",
        answer: "No — Florida is direct-access.",
      },
      {
        question: "Can you help me prevent injuries?",
        answer: "Yes — movement screening and prevention programs are available for active adults.",
      },
    ],
    ctaText:
      "Schedule your sports evaluation. Nicole will rehabilitate the injury and retrain the pattern that caused it so you return stronger.",
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain Physical Therapy in St. Augustine",
    metaDescription:
      "Chronic pain and Ehlers-Danlos syndrome (EDS) physical therapy in St. Augustine. Whole-body approach to persistent pain, joint hypermobility, and conditions that haven't responded to other treatment.",
    headline: "Chronic Pain Physical Therapy in St. Augustine",
    subheadline:
      "Persistent pain, joint hypermobility, or Ehlers-Danlos syndrome (EDS)? A whole-body approach to find the source and restore function.",
    whyItMatters:
      "Chronic pain rarely has a single, obvious cause — it's usually a web of compensations, fascial restrictions, and movement patterns built up over time. For people with Ehlers-Danlos syndrome (EDS) and joint hypermobility, unstable joints and connective tissue differences need a careful, individualized approach. Treating symptoms alone brings only temporary relief. Nicole maps the whole picture and addresses the underlying drivers.",
    whatWeTreat: [
      {
        category: "Conditions we treat",
        items: [
          "Ehlers-Danlos syndrome (EDS) and joint hypermobility",
          "Persistent back, hip, neck, and shoulder pain",
          "Sciatica and nerve-related pain",
          "Fascial restrictions and chronic muscle tension",
          "Post-injury pain that never fully resolved",
          "Pain tied to posture and repetitive strain",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote: "For nearly three years I'd been on pain and anti-inflammatory medications. Nicole changed that.",
        author: "Joshua S.",
      },
      {
        quote: "She truly changed my life. Her knowledge of the body and how to help you is immeasurable.",
        author: "Debi C.",
      },
      {
        quote: "She gave me the tools I need to lead a more comfortable, happier life.",
        author: "Susan",
      },
    ],
    faqs: [
      {
        question: "I've tried everything — how is this different?",
        answer:
          "Nicole assesses the whole body to find compensations and root causes that single-area treatment misses.",
      },
      {
        question: "Do you treat Ehlers-Danlos syndrome (EDS)?",
        answer:
          "Yes. Nicole works with clients who have Ehlers-Danlos syndrome (EDS) and joint hypermobility, using private one-on-one physical therapy and Pilates-based stabilization to improve joint control, reduce pain, and build safer movement patterns.",
      },
      {
        question: "Can PT reduce my reliance on pain medication?",
        answer:
          "Many clients reduce pain and medication needs as function improves; discuss any medication changes with your physician.",
      },
      {
        question: "How long before I notice change?",
        answer: "Many feel improvement within a few sessions; lasting change typically takes several weeks.",
      },
      {
        question: "Do I need a referral?",
        answer: "No — Florida is direct-access.",
      },
    ],
    ctaText:
      "Schedule your chronic pain evaluation. Nicole will map what's really driving your pain and build a plan to restore comfort and function.",
  },
  {
    slug: "foot-ankle",
    title: "Foot & Ankle Physical Therapy in St. Augustine",
    metaDescription:
      "Foot and ankle physical therapy in St. Augustine for plantar fasciitis, ankle sprains, Achilles tendinopathy, and heel pain. Private one-on-one rehab with Nicole Tristram, PT.",
    headline: "Foot & Ankle Physical Therapy in St. Augustine",
    subheadline:
      "Plantar fasciitis, ankle sprains, or persistent heel pain limiting every step? Get targeted rehabilitation that addresses how your foot, ankle, and entire lower chain move together.",
    whyItMatters:
      "Foot and ankle pain rarely stays isolated. Stiff ankles change your gait, overloaded arches strain the plantar fascia, and compensations travel up to the knee, hip, and back. Generic foot exercises miss the movement patterns keeping you stuck. Nicole evaluates your whole lower-body chain — mobility, strength, balance, and footwear mechanics — to treat the source of your symptoms, not just where it hurts.",
    whatWeTreat: [
      {
        category: "Common foot conditions",
        items: [
          "Plantar fasciitis",
          "Heel pain & heel spurs",
          "Metatarsalgia",
          "Flat feet & overpronation",
          "Morton's neuroma",
        ],
      },
      {
        category: "Ankle & lower leg",
        items: [
          "Ankle sprains (acute & chronic)",
          "Achilles tendinopathy",
          "Peroneal tendon irritation",
          "Ankle instability",
          "Calf tightness & shin splints",
        ],
      },
      {
        category: "Recovery & prevention",
        items: [
          "Post-fracture rehabilitation",
          "Post-surgical foot & ankle rehab",
          "Balance & proprioception retraining",
          "Return to walking, running & sport",
        ],
      },
    ],
    approach: [
      {
        title: "Assessment",
        items: [
          "Gait and weight-bearing analysis",
          "Ankle mobility and strength testing",
          "Foot posture and arch mechanics",
          "Whole-body movement screening",
        ],
      },
      {
        title: "Treatment",
        items: [
          "Manual therapy techniques",
          "Modalities: Alpha-Stim and Dolphin Neurostim",
          "Therapeutic exercise and Pilates-based foot/ankle work",
          "Balance and proprioception training on Reformer and Oov",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Whole-body assessment to find the true root cause, not just the painful area.",
      "Manual therapy techniques integrated with therapeutic movement.",
      "Modalities: Alpha-Stim and Dolphin Neurostim for pain and inflammation.",
      "Therapeutic Pilates on Reformer, Cadillac, Chair, Oov, and Konnector.",
      "25+ years of experience with complex and post-surgical cases.",
    ],
    testimonials: [
      {
        quote: "My hips and back are feeling much better. She is extremely knowledgeable and very thorough.",
        author: "Maci R.",
      },
      {
        quote: "Nicole's ability to quickly and accurately diagnose movement issues is unmatched.",
        author: "Chris B.",
      },
    ],
    faqs: [
      {
        question: "How long does plantar fasciitis take to improve with PT?",
        answer:
          "Many patients notice relief within a few sessions as pain and mechanics improve; full recovery depends on how long symptoms have been present and daily load on your feet.",
      },
      {
        question: "Should I still walk or exercise with an ankle sprain?",
        answer:
          "Nicole will guide safe loading based on your injury stage — protecting the tissue early, then progressively restoring strength and balance.",
      },
      {
        question: "Do I need custom orthotics?",
        answer:
          "Not always. Nicole assesses whether foot mechanics, strength, or footwear changes are enough before recommending orthotics.",
      },
      {
        question: "Do I need a referral?",
        answer: "No — Florida is direct-access.",
      },
    ],
    ctaText:
      "Schedule your foot and ankle evaluation. Nicole will assess your movement, identify what's driving your pain, and build a plan to get you walking comfortably again.",
  },
  {
    slug: "oov",
    title: "Oov® Rehabilitation in St. Augustine",
    metaDescription:
      "Oov® rehabilitation at Premiere Pilates in St. Augustine. Nicole Tristram, PT uses the Oov for core control, spinal alignment, and mindful movement training in private PT sessions.",
    headline: "Oov® Rehabilitation in St. Augustine",
    subheadline:
      "Train core stability, spinal alignment, and controlled movement on the Oov — a dynamic tool Nicole integrates into one-on-one physical therapy and Pilates rehabilitation.",
    whyItMatters:
      "Functional recovery depends on the balance between strength and motor control — the ability to stabilize one part of your body while another moves. The Oov creates a three-dimensional, unstable surface that challenges your trunk, pelvis, and breath simultaneously. Because it supports the natural curves of the spine while keeping the pelvis free to move, it is especially effective for retraining core control after injury, surgery, or chronic pain.",
    whatWeTreatLabel: "How We Use the Oov",
    whatWeTreatHeading: "Applications in rehabilitation",
    whatWeTreat: [
      {
        category: "Core & spinal control",
        items: [
          "Trunk stability and deep core activation",
          "Spinal alignment and axial elongation",
          "Pelvic control in all three planes of motion",
          "Diaphragmatic breathing integration",
        ],
      },
      {
        category: "Movement retraining",
        items: [
          "Isolating movement — training one region without compensating elsewhere",
          "Balance and proprioceptive challenge",
          "Low-impact strengthening after injury or surgery",
          "Correcting faulty movement patterns",
        ],
      },
      {
        category: "Conditions that benefit",
        items: [
          "Low back and hip pain",
          "Post-surgical core retraining",
          "Chronic pain and deconditioning",
          "Neck, shoulder, and postural dysfunction",
        ],
      },
    ],
    approach: [
      {
        title: "Why the Oov works",
        items: [
          "Mimics spinal movement while supporting all three curves of the spine",
          "Elevates the pelvis off the ground for unrestricted three-plane motion",
          "Head-lower-than-hips positioning encourages calm, diaphragmatic breathing",
          "Proprietary foam provides controlled instability — soft until it pushes back",
        ],
      },
      {
        title: "In your session",
        items: [
          "Integrated into your existing PT or Pilates rehabilitation plan",
          "Progressions matched to your tolerance and stage of recovery",
          "Combined with manual therapy and studio equipment as needed",
          "One-on-one coaching for precise, mindful movement",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Polestar Pilates certified practitioner with 25+ years of clinical experience.",
      "Oov integrated with manual therapy, Alpha-Stim, and Dolphin Neurostim.",
      "Full Pilates studio: Reformer, Cadillac, Chair, Oov, and Konnector.",
      "Whole-body assessment — not a standalone gadget session.",
    ],
    testimonials: [
      {
        quote: "I can move freely inside myself now. Nicole guided my body back into proper alignment from head to toe.",
        author: "Bee S.",
      },
      {
        quote: "She takes time to identify the root cause and create an individualized plan.",
        author: "K Rox",
      },
    ],
    faqs: [
      {
        question: "What is the Oov?",
        answer:
          "The Oov is a curved, dynamic foam device designed to challenge core stability, spinal alignment, and controlled movement in three dimensions — used within Nicole's clinical rehabilitation sessions.",
      },
      {
        question: "Is Oov training appropriate after surgery?",
        answer:
          "Yes, when cleared by your surgeon and progressed appropriately. Nicole adapts Oov work to your stage of recovery.",
      },
      {
        question: "Do I need Pilates experience to use the Oov?",
        answer: "No. Nicole guides every movement based on your ability and goals.",
      },
      {
        question: "Is this a separate class or part of PT?",
        answer:
          "The Oov is integrated into your private physical therapy or Pilates rehabilitation session — not a group class.",
      },
    ],
    ctaText:
      "Schedule an evaluation to learn how Oov-based training can support your recovery. Nicole will assess whether it's the right tool for your body and your goals.",
  },
  {
    slug: "konnector",
    title: "Konnector Pilates in St. Augustine",
    metaDescription:
      "Konnector Pilates training at Premiere Pilates in St. Augustine. Enhance proprioception, functional movement, and full-body integration on the Reformer with Nicole Tristram, PT.",
    headline: "Konnector Pilates in St. Augustine",
    subheadline:
      "Experience whole-body integration on the Reformer with the Konnector — a system that connects all four limbs to train the neuromyofascial chains your body uses in real movement.",
    whyItMatters:
      "Proprioception — your sense of where your body is in space — is essential for balance, coordination, and correcting asymmetries. The Konnector links all four limbs through a single rope system on the Reformer, so movement in one limb is felt throughout the body. This mirrors the fascial connections between upper and lower body, right and left sides, and opposite arm and leg — the same patterns used in walking, reaching, and athletic movement.",
    whatWeTreatLabel: "Why Konnector",
    whatWeTreatHeading: "What it trains",
    whatWeTreat: [
      {
        category: "Proprioception & awareness",
        items: [
          "Enhanced body-position sense during movement",
          "Identifying imbalances and asymmetries",
          "Improved coordination between limbs and trunk",
          "Feedback-rich environment for motor learning",
        ],
      },
      {
        category: "Functional integration",
        items: [
          "Reciprocal arm-and-leg movement patterns",
          "Rotation and cross-body coordination",
          "True four-limb integration on the Reformer",
          "Movement patterns that translate to daily life",
        ],
      },
      {
        category: "Who benefits",
        items: [
          "Post-injury movement retraining",
          "Athletes returning to sport",
          "Chronic pain and compensatory patterns",
          "Clients advancing beyond basic Reformer work",
        ],
      },
    ],
    approach: [
      {
        title: "The science behind it",
        items: [
          "All four limbs remain connected yet move independently",
          "Stimulates neuromyofascial chains across the body",
          "Replicates functional connections between opposite arm and leg",
          "Expands Reformer training for efficient pattern correction",
        ],
      },
      {
        title: "In your session",
        items: [
          "Konnector work tailored to your rehabilitation goals",
          "Combined with manual therapy and other Pilates equipment",
          "Progressions from supported to more challenging patterns",
          "Private coaching for safe, precise movement",
        ],
      },
    ],
    differentiators: [
      "Private, one-on-one sessions — Nicole's full attention for the full hour.",
      "Konnector integrated with full clinical assessment and manual therapy.",
      "Polestar Pilates certified practitioner with 25+ years of experience.",
      "Complete studio: Reformer, Cadillac, Chair, Oov, and Konnector.",
      "Functional movement focus — not just exercise for exercise's sake.",
    ],
    testimonials: [
      {
        quote:
          "Nicole's ability to quickly and accurately diagnose movement issues is unmatched. She identifies the root cause, explains it clearly, and creates a plan.",
        author: "Chris B.",
      },
      {
        quote: "Incredible results — I'm shocked after every treatment.",
        author: "Elaine K.",
      },
    ],
    faqs: [
      {
        question: "What is the Konnector?",
        answer:
          "The Konnector is a Reformer attachment that connects all four limbs through one rope system, providing rich proprioceptive feedback and training whole-body movement integration.",
      },
      {
        question: "How is Konnector different from regular Reformer work?",
        answer:
          "Standard Reformer exercises often isolate limbs. Konnector keeps all four connected, making it easier to feel and correct how movement in one area affects the rest of your body.",
      },
      {
        question: "Is Konnector appropriate during injury recovery?",
        answer:
          "Yes, when progressed appropriately. Nicole selects Konnector patterns based on your condition, tolerance, and stage of healing.",
      },
      {
        question: "Do I need prior Pilates experience?",
        answer: "No. Nicole introduces Konnector work at a level matched to your ability.",
      },
    ],
    ctaText:
      "Schedule an evaluation to experience Konnector training as part of your personalized rehabilitation plan.",
  },
]

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug)
}

export const conditionCards = [
  {
    title: "Post-Surgical Recovery",
    conditions: ["Knee replacement", "Hip replacement", "Shoulder surgery", "Spinal surgery"],
    href: "/services/post-surgical-rehabilitation",
    icon: "stitches",
  },
  {
    title: "Hip & Back Pain",
    conditions: ["Hip & back pain", "Sciatica", "Frozen shoulder", "Knee pain"],
    href: "/services/hip-back-pain",
    icon: "backPain",
  },
  {
    title: "Women's Health",
    conditions: ["Postpartum rehab", "Mastectomy recovery", "Lymphedema", "Pelvic floor & posture"],
    href: "/services/womens-health",
    icon: "woman",
  },
  {
    title: "Knee Rehabilitation",
    conditions: ["Chronic knee pain", "ACL recovery", "Post-replacement", "Stem-cell rehab"],
    href: "/services/knee-rehabilitation",
    icon: "leg",
  },
  {
    title: "Shoulder Injury",
    conditions: ["Frozen shoulder", "Rotator cuff", "Impingement", "Post-surgical recovery"],
    href: "/services/shoulder-injury",
    icon: "arm",
  },
  {
    title: "Sports Injury",
    conditions: ["Muscle strains", "Overuse injuries", "Return-to-sport", "Tendon injuries"],
    href: "/services/sports-injury",
    icon: "traumatism",
  },
  {
    title: "Foot & Ankle",
    conditions: ["Plantar fasciitis", "Ankle sprains", "Achilles pain", "Heel pain"],
    href: "/services/foot-ankle",
    icon: "foot",
  },
  {
    title: "Chronic Pain Management",
    conditions: ["Ehlers-Danlos (EDS)", "Persistent pain", "Sciatica", "Joint hypermobility"],
    href: "/services/chronic-pain",
    icon: "painManagement",
  },
] as const
