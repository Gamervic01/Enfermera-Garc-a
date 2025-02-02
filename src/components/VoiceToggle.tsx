import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface VoiceToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export function VoiceToggle({ enabled, onToggle }: VoiceToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="absolute top-2 right-2"
      title={enabled ? "Desactivar voz" : "Activar voz"}
    >
      {enabled ? (
        <Volume2 className="h-4 w-4" />
      ) : (
        <VolumeX className="h-4 w-4" />
      )}
    </Button>
  );
}