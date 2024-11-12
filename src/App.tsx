import { useState } from "react";
import { data } from "./data/dataCard";
import { Card } from "./components/Card";

interface State {
  step: number;
}

export default function App() {
  const [step, setStep] = useState<State["step"]>(0);
  const currentCardData = data[step];

  const nextStep = (): void => {
    setStep((prev) => Math.min(prev + 1, data.length - 1));
  };

  const prevStep = (): void => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card
        data={currentCardData}
        nextStep={nextStep}
        prevStep={prevStep}
        currentStep={step}
        totalSteps={data.length}
      />
    </div>
  );
}
