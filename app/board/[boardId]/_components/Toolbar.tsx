import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { ToolButton } from "./ToolButton";

interface ToolbarProps {
  canvasState: CanvasState,
  setCanvasState: (newState: CanvasState) => void
  canRedo: boolean,
  canUndo: boolean,
  undo: () => void,
  redo: () => void,
}

const Toolbar = ({
  canvasState,
  canRedo,
  canUndo,
  undo,
  redo,
  setCanvasState
}: ToolbarProps) => {
  return (
    <div className="absolute top-[50%]  rounded-md shadow-md -translate-y-[50%] left-2 flex flex-col gap-y-2">
      <div className="bg-white flex flex-col gap-y-1 p-1.5">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => setCanvasState({mode: CanvasMode.None})}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => 
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          onClick={() => 
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting && 
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => 
          setCanvasState({
            mode: CanvasMode.Inserting,
            layerType: LayerType.Rectangle
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => 
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse
            })}
            isActive={
              canvasState.mode === CanvasMode.Inserting &&
              canvasState.layerType === LayerType.Ellipse
            }
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => setCanvasState({mode: CanvasMode.Pencil})}
          isActive={
            canvasState.mode === CanvasMode.Pencil
          }
        />
      </div>
      <div className="bg-white flex flex-col  gap-y-2 p-2">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export default Toolbar;
