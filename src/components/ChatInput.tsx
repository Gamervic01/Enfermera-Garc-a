import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu pregunta aquí..."
        disabled={disabled}
        className="flex-1 bg-gray-50 border-cogniti-light focus:border-cogniti-primary focus:ring-cogniti-primary"
      />
      <Button 
        type="submit" 
        disabled={disabled || !message.trim()}
        className="bg-cogniti-primary hover:bg-cogniti-secondary transition-colors"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}