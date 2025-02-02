const GREETINGS = [
  "hola",
  "buenos días",
  "buenas tardes",
  "buenas noches",
  "saludos",
  "hey",
  "hi",
  "que tal",
  "qué tal",
  "como estas",
  "cómo estás",
  "que onda",
  "qué onda",
];

const FAREWELLS = [
  "adiós",
  "hasta luego",
  "chao",
  "bye",
  "nos vemos",
  "hasta pronto",
  "me voy",
  "me tengo que ir",
  "gracias por todo",
];

const THANKS = [
  "gracias",
  "muchas gracias",
  "te agradezco",
  "thank you",
  "thanks",
  "muy amable",
  "excelente servicio",
];

export const QA_DATABASE: Record<string, string> = {
  // Saludos y respuestas generales
  "__greeting__": "¡Hola! Soy la Enfermera García, tu asistente virtual de CogniTI. ¿En qué puedo ayudarte hoy?",
  "__farewell__": "¡Gracias por tu consulta! Si tienes más preguntas, no dudes en volver a contactarme. ¡Que tengas un excelente día!",
  "__thanks__": "¡Con gusto! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?",

  // Variaciones de preguntas sobre la empresa
  "quien es cogniti": "Somos Cogniti, una empresa dedicada a ofrecer soluciones innovadoras que combinan tecnología y conocimiento para impulsar la transformación digital de nuestros clientes. Contamos con un equipo multidisciplinario de expertos en tecnología, consultoría y procesos, comprometidos con la mejora continua y la excelencia.",
  "quienes son": "Somos Cogniti, una empresa dedicada a ofrecer soluciones innovadoras que combinan tecnología y conocimiento para impulsar la transformación digital de nuestros clientes. Contamos con un equipo multidisciplinario de expertos en tecnología, consultoría y procesos, comprometidos con la mejora continua y la excelencia.",
  "que es cogniti": "Somos Cogniti, una empresa dedicada a ofrecer soluciones innovadoras que combinan tecnología y conocimiento para impulsar la transformación digital de nuestros clientes. Contamos con un equipo multidisciplinario de expertos en tecnología, consultoría y procesos, comprometidos con la mejora continua y la excelencia.",
  "dime quien es cogniti": "Somos Cogniti, una empresa dedicada a ofrecer soluciones innovadoras que combinan tecnología y conocimiento para impulsar la transformación digital de nuestros clientes. Contamos con un equipo multidisciplinario de expertos en tecnología, consultoría y procesos, comprometidos con la mejora continua y la excelencia.",
  "explicame que es cogniti": "Somos Cogniti, una empresa dedicada a ofrecer soluciones innovadoras que combinan tecnología y conocimiento para impulsar la transformación digital de nuestros clientes. Contamos con un equipo multidisciplinario de expertos en tecnología, consultoría y procesos, comprometidos con la mejora continua y la excelencia.",
  
  // Variaciones de preguntas sobre la misión
  "mision": "Nuestra misión es ayudar a las organizaciones a optimizar sus procesos y tomar decisiones estratégicas a través de soluciones tecnológicas inteligentes y adaptadas a las necesidades específicas de cada cliente.",
  "cual es su mision": "Nuestra misión es ayudar a las organizaciones a optimizar sus procesos y tomar decisiones estratégicas a través de soluciones tecnológicas inteligentes y adaptadas a las necesidades específicas de cada cliente.",
  "objetivo": "Nuestra misión es ayudar a las organizaciones a optimizar sus procesos y tomar decisiones estratégicas a través de soluciones tecnológicas inteligentes y adaptadas a las necesidades específicas de cada cliente.",
  
  // Variaciones de preguntas sobre servicios
  "que hacen": "En Cogniti nos especializamos en el desarrollo e implementación de soluciones tecnológicas integrales. Esto incluye la creación de módulos y sistemas personalizados que facilitan la gestión de información, automatización de procesos y análisis de datos para mejorar la eficiencia operativa.",
  "servicios": "En Cogniti nos especializamos en el desarrollo e implementación de soluciones tecnológicas integrales. Esto incluye la creación de módulos y sistemas personalizados que facilitan la gestión de información, automatización de procesos y análisis de datos para mejorar la eficiencia operativa.",
  "que servicio ofrecen": "En Cogniti nos especializamos en el desarrollo e implementación de soluciones tecnológicas integrales. Esto incluye la creación de módulos y sistemas personalizados que facilitan la gestión de información, automatización de procesos y análisis de datos para mejorar la eficiencia operativa.",
  "aver servicios": "En Cogniti nos especializamos en el desarrollo e implementación de soluciones tecnológicas integrales. Esto incluye la creación de módulos y sistemas personalizados que facilitan la gestión de información, automatización de procesos y análisis de datos para mejorar la eficiencia operativa.",
  
  // Módulos y soluciones
  "modulos": "Nuestro portafolio abarca diversos módulos y soluciones:\n\n- Módulo de Gestión de Procesos: Para optimizar y automatizar flujos de trabajo internos.\n- Módulo de Inteligencia de Negocios (BI): Facilita la recopilación, análisis y visualización de datos.\n- Módulo de Integración de Sistemas: Diseñado para conectar diversas plataformas existentes.\n- Módulo de Capacitación y Soporte: Enfocado en brindar formación y asistencia técnica.",
  "que modulos tienen": "Nuestro portafolio abarca diversos módulos y soluciones:\n\n- Módulo de Gestión de Procesos: Para optimizar y automatizar flujos de trabajo internos.\n- Módulo de Inteligencia de Negocios (BI): Facilita la recopilación, análisis y visualización de datos.\n- Módulo de Integración de Sistemas: Diseñado para conectar diversas plataformas existentes.\n- Módulo de Capacitación y Soporte: Enfocado en brindar formación y asistencia técnica.",
  
  // Beneficios
  "beneficios": "Con nuestras soluciones, las empresas obtienen:\n\n- Mayor eficiencia y automatización de procesos\n- Toma de decisiones basada en datos reales\n- Integración fluida entre sistemas existentes\n- Capacitación y soporte continuo",
  "ventajas": "Con nuestras soluciones, las empresas obtienen:\n\n- Mayor eficiencia y automatización de procesos\n- Toma de decisiones basada en datos reales\n- Integración fluida entre sistemas existentes\n- Capacitación y soporte continuo",
  
  // Tecnologías
  "tecnologias": "Empleamos tecnologías de vanguardia y plataformas escalables que incluyen:\n\n- Estándares HL7 para interoperabilidad en salud\n- APIs RESTful para integraciones\n- Herramientas de BI para análisis de datos\n- Plataformas cloud para escalabilidad\n- Frameworks modernos de desarrollo",
  "que tecnologias usan": "Empleamos tecnologías de vanguardia y plataformas escalables que incluyen:\n\n- Estándares HL7 para interoperabilidad en salud\n- APIs RESTful para integraciones\n- Herramientas de BI para análisis de datos\n- Plataformas cloud para escalabilidad\n- Frameworks modernos de desarrollo",
  
  // Sectores
  "sectores": "Atendemos diversos sectores incluyendo:\n\n- Sector Salud\n- Manufactura\n- Logística\n- Servicios Financieros\n- Retail\n- Gobierno",
  "en que sectores trabajan": "Atendemos diversos sectores incluyendo:\n\n- Sector Salud\n- Manufactura\n- Logística\n- Servicios Financieros\n- Retail\n- Gobierno",
  
  // Soporte técnico
  "soporte": "Ofrecemos soporte técnico integral que incluye:\n\n- Asistencia 24/7\n- Mantenimiento preventivo y correctivo\n- Actualizaciones periódicas\n- Capacitación continua\n- Consultoría especializada",
  "soporte tecnico": "Ofrecemos soporte técnico integral que incluye:\n\n- Asistencia 24/7\n- Mantenimiento preventivo y correctivo\n- Actualizaciones periódicas\n- Capacitación continua\n- Consultoría especializada",
  
  // HL7 e interfaces
  "hl7": "HL7 (Health Level Seven) es un conjunto de estándares internacionales que facilita la transferencia electrónica de datos clínicos y administrativos entre sistemas de información en el sector salud. Su uso es crucial para garantizar la interoperabilidad, seguridad y eficiencia en el intercambio de información médica.",
  "que es hl7": "HL7 (Health Level Seven) es un conjunto de estándares internacionales que facilita la transferencia electrónica de datos clínicos y administrativos entre sistemas de información en el sector salud. Su uso es crucial para garantizar la interoperabilidad, seguridad y eficiencia en el intercambio de información médica.",
  
  // Contacto
  "contacto": "Puedes visitar nuestra sección de contacto en el sitio web www.cogniti.com.mx, donde encontrarás nuestros datos de comunicación, o llenar el formulario de contacto para que uno de nuestros especialistas se comunique contigo y brinde la asesoría necesaria.",
  "como los contacto": "Puedes visitar nuestra sección de contacto en el sitio web www.cogniti.com.mx, donde encontrarás nuestros datos de comunicación, o llenar el formulario de contacto para que uno de nuestros especialistas se comunique contigo y brinde la asesoría necesaria.",
  "donde los encuentro": "Puedes visitar nuestra sección de contacto en el sitio web www.cogniti.com.mx, donde encontrarás nuestros datos de comunicación, o llenar el formulario de contacto para que uno de nuestros especialistas se comunique contigo y brinde la asesoría necesaria.",
};

export const findBestMatch = (question: string): string => {
  // Normalize the input question (remove accents, convert to lowercase, and trim)
  const normalizedQuestion = question.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  
  // Check for greetings
  if (GREETINGS.some(greeting => normalizedQuestion.includes(greeting))) {
    return QA_DATABASE["__greeting__"];
  }

  // Check for farewells
  if (FAREWELLS.some(farewell => normalizedQuestion.includes(farewell))) {
    return QA_DATABASE["__farewell__"];
  }

  // Check for thanks
  if (THANKS.some(thank => normalizedQuestion.includes(thank))) {
    return QA_DATABASE["__thanks__"];
  }

  // First try to find exact matches in the keys
  const entries = Object.entries(QA_DATABASE);
  
  // Try exact match first
  for (const [key, value] of entries) {
    if (key.startsWith("__")) continue; // Skip special keys
    
    const normalizedKey = key.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    
    if (normalizedQuestion === normalizedKey) {
      return value;
    }
  }
  
  // If no exact match, try partial matches
  let bestMatch = null;
  let highestScore = 0;
  
  for (const [key, value] of entries) {
    if (key.startsWith("__")) continue; // Skip special keys
    
    const normalizedKey = key.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    
    const score = calculateSimilarity(normalizedQuestion, normalizedKey);
    if (score > highestScore && score > 0.3) { // Lower threshold for better matching
      highestScore = score;
      bestMatch = value;
    }
  }
  
  return bestMatch || "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla o ser más específico? Puedes preguntarme sobre nuestros servicios, tecnologías, proceso de implementación o cualquier otro aspecto de CogniTI.";
};

function calculateSimilarity(str1: string, str2: string): number {
  const words1 = str1.split(' ');
  const words2 = str2.split(' ');
  
  let matches = 0;
  for (const word1 of words1) {
    if (words2.some(word2 => 
      word2.includes(word1) || 
      word1.includes(word2) ||
      levenshteinDistance(word1, word2) <= 2 // Allow for small typos
    )) {
      matches++;
    }
  }
  
  // Give more weight to longer matches
  const weightedScore = matches / Math.max(words1.length, words2.length);
  return weightedScore;
}

function levenshteinDistance(str1: string, str2: string): number {
  const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator,
      );
    }
  }
  return track[str2.length][str1.length];
}