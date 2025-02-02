import { Message } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isUser
            ? "bg-cogniti-primary text-white"
            : "bg-cogniti-light text-gray-800"
        )}
      >
        {message.isHTML ? (
          <div dangerouslySetInnerHTML={{ __html: message.content }} />
        ) : (
          message.content
        )}
      </div>
    </div>
  );
}