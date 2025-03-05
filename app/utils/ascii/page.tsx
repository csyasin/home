"use client";

import { Input, Select, SelectItem, Snippet } from "@heroui/react";
import { useEffect, useState } from "react";
import figlet from "figlet";
figlet.defaults({ fontPath: "/figlet-fonts" });

import { title } from "@/components/primitives";
const fontOptions = [
  "5 Line Oblique",
  "ANSI Regular",
  "ANSI Shadow",
  "Banner3",
  "Block",
  "BlurVision ASCII",
  "Calvin S",
  "Colossal",
  "Doom",
  "Elite",
  "Georgia11",
  "Larry 3D",
  "Lean",
  "Line Blocks",
  "Linux",
  "Puffy",
  "Rammstein",
  "Shadow",
  "Shimrod",
  "Stforek",
  "Stop",
];

export default function AsciiArtPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [font, setFont] = useState(new Set([fontOptions[0]]));

  const generate = async () => {
    if (!input) return;
    try {
      // @ts-ignore
      const result = await figlet.text(input, {
        font: font.values().next().value!,
      });

      setOutput(
        result
          // @ts-ignore
          .split("\n")
          .filter((line: string) => line.trim())
          .join("\n"),
      );
    } catch {}
  };

  useEffect(() => {
    generate();
  }, [font]);

  return (
    <div>
      <h1 className={title()}>ASCII Art</h1>
      <div className="mt-10 flex gap-5">
        <Input
          fullWidth
          isClearable
          color="primary"
          description="Press enter to generate ASCII art."
          label="Enter text..."
          size="lg"
          value={input}
          variant="bordered"
          onKeyUp={(e) => input && e.code === "Enter" && generate()}
          onValueChange={setInput}
        />
        <Select
          className="max-w-xs"
          color="primary"
          label="Font"
          selectedKeys={font}
          size="lg"
          variant="bordered"
          // @ts-ignore
          onSelectionChange={setFont}
        >
          {fontOptions.map((font) => (
            <SelectItem key={font}>{font}</SelectItem>
          ))}
        </Select>
      </div>
      {!!output && (
        <Snippet fullWidth className="mt-5" color="primary" symbol="">
          <pre className="font-monospace">{output}</pre>
        </Snippet>
      )}
    </div>
  );
}
