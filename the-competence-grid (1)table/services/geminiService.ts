import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (aiClient) return aiClient;
  
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;

  aiClient = new GoogleGenAI({ apiKey });
  return aiClient;
};

export const getAdviceForChallenge = async (challengeName: string, difficulty: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    throw new Error("API Key not found");
  }

  const prompt = `
    You are an expert survival instructor and competence coach. 
    The user is attempting the "${challengeName}" challenge at the "${difficulty}" difficulty level.
    
    Provide a concise, actionable, and safety-conscious guide on how to approach this specific challenge. 
    Structure your answer with:
    1. A simplified concept (1 sentence).
    2. Key steps (bullet points).
    3. A safety warning or "pro tip".
    
    Keep the tone encouraging, serious, and outdoorsy. Max 200 words.
  `;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No advice generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
