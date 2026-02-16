import { useState } from "react";
import { ThankYou } from "./ThankYou";
import { QuestionCard } from "@/components/QuestionCard";
import { useSubmitConsult } from "@/features/hooks/useSubmitConsult";
import { questions } from "@/data";

export const ConsultationForm = () => {
  const [currentQuestionInd, setCurrentQuestionInd] = useState<number>(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const { submit, isSuccess, isLoading } = useSubmitConsult();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isLastQuestion = currentQuestionInd === questions.length - 1;

  const handleNextStep = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLastQuestion) {
      submit(formData);
    } else {
      setCurrentQuestionInd((prev) => prev + 1);
    }
  };

  const getButtonText = () => {
    if (isLoading) return "Loading...";
    if (isLastQuestion) return "Submit";
    return "Continue";
  };

  if (isSuccess) {
    return <ThankYou />;
  }

  const currentQuestion = questions[currentQuestionInd];
  const currentValue = formData[currentQuestion.name] || "";

  return (
    <form onSubmit={handleNextStep} className="consultation-form">
      <div className="question-card-wrapper">
        <QuestionCard
          question={currentQuestion}
          value={currentValue}
          onChange={handleChange}
        />
      </div>
      <div className="form-action-section">
        <button
          className="button"
          type="submit"
          disabled={isLoading || !currentValue}
        >
          {getButtonText()}
        </button>
      </div>
    </form>
  );
};
