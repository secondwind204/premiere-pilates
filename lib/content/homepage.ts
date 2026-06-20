import type { FaqItem, Testimonial } from "./services"

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do I need a prescription for physical therapy in Florida?",
    answer: "No. Florida is a direct-access state — you can schedule PT without a doctor's referral.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We're cash-pay, which means no insurance limits on your treatment. We provide superbills for possible reimbursement.",
  },
  {
    question: "What's the difference between PT and Pilates?",
    answer:
      "PT treats injury and pain; Pilates builds core strength and movement quality. Combining both delivers faster recovery and longer-lasting results.",
  },
  {
    question: "How long are sessions?",
    answer: "A full hour of undivided attention — never a therapist split across multiple patients.",
  },
]

export const strugglePoints = [
  "Chronic hip or back pain that won't go away?",
  "Slow recovery after knee or shoulder surgery?",
  "Traditional PT that didn't deliver results?",
  "Feeling rushed through group therapy sessions?",
  "Pain that keeps coming back after treatment?",
] as const

export const homepageTestimonials: Testimonial[] = [
  {
    quote:
      "Nicole is a miracle worker! I had sciatica so bad I could barely walk — and now I'm no longer in pain. The sciatica has disappeared. I'm stronger from the stretching and strengthening, and I'm extremely happy with the changes I've experienced in my movement.",
    author: "Vicki W.",
  },
  {
    quote:
      "After two knee surgeries in 8 months, she had almost all the swelling gone in 6 weeks. She treats your whole body.",
    author: "Lora M.",
  },
  {
    quote: "She takes time to identify the root cause and create an individualized plan.",
    author: "K Rox",
  },
  {
    quote:
      "Nicole's ability to quickly and accurately diagnose movement issues is unmatched. She identifies the root cause, explains it clearly, and creates a plan.",
    author: "Chris B.",
  },
  {
    quote: "My hips and back are feeling much better. She is extremely knowledgeable and very thorough.",
    author: "Maci R.",
  },
  {
    quote:
      "I can move freely inside myself now. Nicole guided my body back into proper alignment from head to toe.",
    author: "Bee S.",
  },
  {
    quote:
      "Incredible results — I'm shocked after every treatment. Nicole can define an issue just by looking at you.",
    author: "Elaine K.",
  },
]

export const aboutNicoleSummary = {
  headline: "Nicole Tristram, PT",
  subtitle: "Physical Therapist & Pilates Rehabilitation Practitioner",
  paragraphs: [
    "Nicole Tristram, PT — Physical Therapist & Pilates Rehabilitation Practitioner. UCF Physical Therapy (Magna Cum Laude, 1998), Polestar Pilates International certified, 25+ years treating complex cases, former professional dancer (Ballet Rambert School, London). Founder of \"St. Augustine Strong\" bone-health support group; guest lecturer at UCF, UNF, and St. Johns River State College.",
    "Nicole discovered Pilates during her own rehabilitation from a dance injury — which taught her that lasting healing requires treating the whole body, not just the site of pain.",
  ],
  fullBio: [
    "Nicole Tristram graduated Magna Cum Laude from the Physical Therapy Program at the University of Central Florida in 1998. She is a former dancer, receiving her professional training from the Ballet Rambert School in London, England.",
    "Nicole was initially introduced to Pilates during her own rehabilitation for a chronic dance related injury. A full recovery then led to her becoming a certified Pilates Rehabilitation Practitioner through Polestar Pilates International. Her extensive physical therapy background includes corporate injury prevention and wellness, sports medicine, dance medicine, women's health and pediatrics.",
    "Nicole has been a guest lecturer at St John's River State College, University Of St Augustine, University Of Central Florida and a featured presenter at the Florida Physical Therapy Association Annual Conference. She is the founder of \"St Augustine Strong\", a bone health education and support group facilitated by the Bone Health & Osteoporosis Foundation.",
    "She volunteers time to perform for local charity events in St Augustine and is a board member of The Dance Company where she is actively involved in their Adult Dance Program participating in weekly ballet, modern and jazz classes.",
    "Nicole is an advocate for Women's Health and the focus of her private practice is Prevention & Wellness which can only be achieved through balance of Body, Mind & Spirit.",
  ],
}

export const pilatesHistory = {
  title: "About Pilates",
  intro:
    "PILATES is a system of body conditioning developed by Joseph H. Pilates (1880-1967). Introduced to America in 1926 by Joseph Pilates, it was originally referred to as the art and science of \"Contrology\" — the complete coordination of Body, Mind and Spirit.",
  sections: [
    {
      title: "Origins",
      content:
        "Joseph Pilates was born near Dusseldorf Germany in 1880 and suffered from asthma, rickets and rheumatic fever as a child. As an adolescent he studied bodybuilding, diving, skiing, and gymnastics and in his youth he loved to observe animals in their natural surroundings.",
    },
    {
      title: "Development",
      content:
        "In 1912 Joseph Pilates moved to England where he earned a living as a boxer, circus performer and self-defense trainer. He was interned during World War One at an English prison camp where he combined Yoga, Zen, ancient Greek and Roman exercise regimens to create his own unique exercise system which he taught to fellow internees. Pilates later worked as an orderly on the Isle Of Man in a hospital where he attached springs to hospital beds and wheelchairs to support the limbs of non-ambulatory patients while he worked with them to regain mobility.",
    },
    {
      title: "Legacy",
      content:
        "In 1926 he migrated to the United States Of America and settled in New York marrying Clara, a nurse he met on his boat ride to America. Joseph Pilates and his wife opened a gym in a building that housed the New York City Ballet, teaching Contrology exercises to the performing arts community and later on to athletes. Joseph Pilates authored Return To Life Through Contrology in 1934 in his attempt to bring his method to the masses. He died in 1967 at the age of 87 shortly after his original studio was destroyed by fire. Pilates' work was carried on by his wife Clara, and is embraced by the general population almost a century after his arrival to the United States.",
    },
  ],
}
