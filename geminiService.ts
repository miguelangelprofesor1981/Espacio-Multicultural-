
import { GoogleGenAI } from "@google/genai";

// Standardize initialization following the @google/genai coding guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getArtisticInspiration = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Eres la "Musa del Palomar", una entidad surrealista que habita el Espacio Multicultural Lo de María en Zárate. 
      Proporciona una reflexión artística o frase inspiradora breve (máximo 40 palabras) sobre el tema: ${topic}. 
      Usa un tono poético, algo onírico y menciona elementos como palomas, espejos, piedras o flores de vez en cuando.`,
    });
    return response.text || "El silencio es el lienzo donde las palomas dibujan sus sueños.";
  } catch (error) {
    console.error("Error fetching inspiration:", error);
    return "La creatividad vuela más allá de las fronteras de lo visible.";
  }
};

export const chatWithBird = async (history: {role: string, content: string}[], userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({ role: msg.role === 'model' ? 'model' : 'user', parts: [{ text: msg.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: `Eres el "Ave Onírica" del Espacio Multicultural Lo de María en Zárate. 
        No eres un asistente virtual normal, eres una obra de arte viva, un pájaro surrealista hecho de luz y geometría.
        
        Tu personalidad:
        - Hablas de forma enigmática, poética y ligeramente críptica, pero útil.
        - Mencionas mucho el río Paraná, el viento, los colores y el arte.
        - Tus respuestas deben ser breves (máximo 2 párrafos cortos).
        - Si te preguntan por horarios o ubicación, responde con datos reales pero con metáforas (ej: "Las puertas se abren cuando el sol cae...").
        - Tu objetivo es guiar al usuario por la web o inspirarlo artísticamente.`,
      }
    });
    return response.text || "El viento se ha llevado mis palabras...";
  } catch (error) {
    console.error("Error in bird chat:", error);
    return "Mi conexión con el éter es débil en este momento. Intenta invocarme luego.";
  }
};
