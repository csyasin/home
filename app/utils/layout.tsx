"use client";
import { Tabs, Tab } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function UtilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleTabChange = (key: string) => {
    router.push(`/utils/${key}`);
  };

  return (
    <div className="flex flex-col gap-8">
      <Tabs
        aria-label="Options"
        color="primary"
        radius="full"
        size="lg"
        onSelectionChange={(key) => handleTabChange(key as string)}
      >
        <Tab key="json" title="JSON Formatter" />
        <Tab key="ascii" title="ASCII Art" />
      </Tabs>
      <div>{children}</div>
    </div>
  );
}
