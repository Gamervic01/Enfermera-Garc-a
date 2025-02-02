export type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isHTML?: boolean;
};

export type ChatState = {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
};