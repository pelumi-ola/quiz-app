import { Suspense } from "react";
import LegalContent from "@/components/legalcontent";

export default function LegalPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <LegalContent />
    </Suspense>
  );
}
