"use client";
import { Textarea } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { useEffect, useState } from "react";
import json5 from "json5";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

import { title } from "@/components/primitives";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!input) {
      setOutput("");

      return;
    }
    try {
      setOutput(json5.stringify(JSON.parse(input), null, 2));
    } catch {
      setOutput("");
    }
  }, [input]);

  return (
    <div>
      <h1 className={title()}>JSON Formatter</h1>
      <div className="mt-10 flex gap-10">
        <div className="flex-[2]">
          <Textarea
            fullWidth
            isClearable
            color="primary"
            errorMessage="Invalid JSON"
            isInvalid={!!input && !output}
            label="JSON"
            maxRows={20}
            minRows={5}
            placeholder="Enter your compressed json"
            size="lg"
            value={input}
            variant="bordered"
            onValueChange={setInput}
          />
        </div>
        {!!output && (
          <Card isHoverable className="flex-[3]" shadow="none">
            <CardBody>
              <SyntaxHighlighter
                className="!text-lg !my-0 !p-0 rounded-lg"
                language="javascript"
                style={funky}
              >
                {output}
              </SyntaxHighlighter>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}
