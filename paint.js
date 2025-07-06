import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import "./App.css";

export default function App() {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);

  return (
    <div className="app-container">
      <h1>Cool Painting & Design Studio</h1>
      <Toolbar
        tool={tool}
        setTool={setTool}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
      />
      <ColorPicker color={color} setColor={setColor} />
      <Canvas
        tool={tool}
        color={color}
        brushSize={brushSize}
      />
    </div>
  );
}
