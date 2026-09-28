import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

import { createLovableAiGatewayRunIdFetch } from "./ai-run-id.server";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

const PERFIL = `
Teresa Nieto Ramírez — Senior Facility Manager (Madrid, España).
Lema: «Integro equipos para conseguir objetivos globales.»

Trayectoria:
- Más de 20 años de carrera en Ferrovial Servicios / Serveo, con responsabilidad creciente.
- Especializada en Facility Services y operaciones multisite, especialmente en entornos
  hospitalarios y organizaciones públicas y privadas complejas.
- Gestión de estructuras con más de 300 profesionales.
- Cartera anual gestionada superior a 7 M€: cuenta de explotación, presupuestos, control de
  costes, productividad y cumplimiento de objetivos.
- Relaciones laborales: negociación colectiva, interlocución sindical, resolución de conflictos.
- Clientes estratégicos, proveedores, renovaciones contractuales y procesos de oferta.
- Formación en Relaciones Laborales — Universidad Complutense de Madrid.

Competencias: liderazgo de equipos, gestión de proyectos y operaciones, gestión económica y
orientación a negocio, relaciones laborales y negociación, gestión de clientes, resiliencia
(«Crezco ante las adversidades»), empatía y escucha, toma de decisiones.

Estilo de liderazgo: escuchar, generar confianza, asumir responsabilidades y conseguir que
personas distintas trabajen alineadas hacia un objetivo común. Combina exigencia, cercanía,
escucha activa y orientación a resultados.
`;

export async function generarSintesisPerfil(consulta: string, signal?: AbortSignal) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) {
    throw new Error("La función de síntesis no está configurada en este momento.");
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: GATEWAY_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const result = streamText({
    model: provider.responses(MODEL),
    ...(signal ? { abortSignal: signal } : {}),
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        include: ["reasoning.encrypted_content"],
      },
    },
    messages: [
      {
        role: "system",
        content: `Eres el asistente de la web profesional de Teresa Nieto Ramírez. A partir del
perfil o reto que describe un visitante (normalmente dirección de operaciones, recursos humanos
o un cliente), redacta una síntesis de la experiencia de Teresa que sea relevante para esa
necesidad concreta.

Reglas:
- Responde siempre en español, en tercera persona, con tono profesional, sobrio y cercano.
- Usa únicamente la información del perfil facilitado. No inventes empresas, fechas, cifras,
  certificaciones ni datos de contacto.
- Si la necesidad encaja sólo parcialmente, dilo con naturalidad y destaca lo que sí aporta.
- Máximo 160 palabras: un párrafo breve de encaje, después 3 puntos con guion, y una frase final
  de cierre. Sin títulos, sin markdown en negrita, sin emojis.
- Evita adjetivos grandilocuentes como "experta excepcional" o "líder visionaria".

Perfil de Teresa:
${PERFIL}`,
      },
      {
        role: "user",
        content: `Perfil o reto que busca el visitante:\n\n${consulta}`,
      },
    ],
  });

  const texto = await result.text;
  const limpio = texto.trim();
  if (!limpio) {
    throw new Error("No se ha podido generar la síntesis. Inténtalo de nuevo.");
  }
  return limpio;
}
