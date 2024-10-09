import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";

interface TooltipCustomProps {
  content: React.ReactNode;  
  trigger: React.ReactNode; 
}

const TooltipCustom: React.FC<TooltipCustomProps> = ({
  content,
  trigger,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipCustom;