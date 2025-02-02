import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { VoiceToggle } from "./VoiceToggle";
import { Message } from "@/types/chat";
import { findBestMatch } from "@/lib/chat-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

const ELEVENLABS_API_KEY = "sk_93306b0d8373a0afb5555a8100c4e3526bac5e8ef857b31a";

export function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(false);
    const { toast } = useToast();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length === 0) {
            const welcomeMessage: Message = {
                id: "welcome",
                content:
                    "¡Hola! Soy la Enfermera García, tu asistente virtual de CogniTI. ¿En qué puedo ayudarte hoy?",
                role: "assistant",
                timestamp: new Date(),
            };
            setMessages([welcomeMessage]);
        }
    }, [messages]);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (content: string) => {
        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            role: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        // Easter egg: Si el mensaje contiene "macarena" se muestra el video de YouTube
        if (content.toLowerCase().includes("macarena")) {
            const macarenaMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: `<iframe 
                  width="100%" 
                  height="auto"
                  style="aspect-ratio: 16 / 9; border-radius: 8px; max-width: 560px;"
                  src="https://www.youtube-nocookie.com/embed/d3j3z2fuClY?autoplay=1"
                  //https://www.youtube-nocookie.com/embed/d3j3z2fuClY?autoplay=1 Novias
                  //https://www.youtube.com/embed/Viz7bTfq31M?autoplay=1 Yo
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>`,
                role: "assistant",
                timestamp: new Date(),
                isHTML: true,
            };
            setMessages((prev) => [...prev, macarenaMessage]);
            setIsLoading(false);
            return;
        }

        const response = findBestMatch(content);
        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: response,
            role: "assistant",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);

        // Si la voz está habilitada se genera el audio mediante la API de ElevenLabs
        if (voiceEnabled) {
            try {
                const voiceResponse = await fetch(
                    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "xi-api-key": ELEVENLABS_API_KEY,
                        },
                        body: JSON.stringify({
                            text: response,
                            model_id: "eleven_multilingual_v2",
                            voice_settings: {
                                stability: 0.5,
                                similarity_boost: 0.5,
                            },
                        }),
                    }
                );

                if (!voiceResponse.ok) throw new Error("Error al generar voz");

                const audioBlob = await voiceResponse.blob();
                const audio = new Audio(URL.createObjectURL(audioBlob));
                audio.play();
            } catch (error) {
                toast({
                    title: "Error",
                    description: "No se pudo generar la respuesta de voz",
                    variant: "destructive",
                });
            }
        }
    };

    return (
        <div className="relative w-[95%] max-w-[500px] h-[600px] bg-white rounded-2xl shadow-2xl border border-cogniti-light flex flex-col p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-cogniti-primary flex items-center justify-center">
                        <span className="text-white text-xl font-semibold">EG</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-cogniti-primary">
                            Enfermera García
                        </h2>
                        <span className="text-sm text-gray-500">
                            Asistente Virtual de CogniTI
                        </span>
                    </div>
                </div>
                <VoiceToggle
                    enabled={voiceEnabled}
                    onToggle={() => setVoiceEnabled(!voiceEnabled)}
                />
            </div>

            <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-cogniti-light text-gray-800 rounded-lg px-4 py-2">
                            Escribiendo...
                        </div>
                    </div>
                )}
            </ScrollArea>

            <ChatInput onSend={handleSend} disabled={isLoading} />
        </div>
    );
}
