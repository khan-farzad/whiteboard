"use client";
import { useCanRedo, useCanUndo, useHistory, useSelf } from "@/liveblocks.config";
import { Info, InfoSkeleton } from "./Info";
import Toolbar from "./Toolbar";
import Participants from "./participants";
import { useState } from "react";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
  boardId: string;
}
const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className="h-full w-full relative bg-neutral-50 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};

export default Canvas;
