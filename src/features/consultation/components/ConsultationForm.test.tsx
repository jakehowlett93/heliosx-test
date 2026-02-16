import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConsultationForm } from "./ConsultationForm";

vi.mock("@/data", () => ({
  questions: [
    {
      label: "Question 1",
      name: "q1",
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
      ],
    },
    {
      label: "Question 2",
      name: "q2",
      options: [
        { label: "Option A", value: "a" },
        { label: "Option B", value: "b" },
      ],
    },
  ],
}));

const submitMock = vi.fn();

vi.mock("../../hooks/useSubmitConsult", () => ({
  useSubmitConsult: () => ({
    submit: submitMock,
    isSuccess: false,
    isLoading: false,
  }),
}));

describe("ConsultationForm", () => {
  beforeEach(() => {
    submitMock.mockClear();
  });

  it("disables button before selection", () => {
    render(<ConsultationForm />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("enables button after selecting an option", async () => {
    const user = userEvent.setup();
    render(<ConsultationForm />);

    await user.click(screen.getAllByRole("radio")[0]);

    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("moves to next question when continue clicked", async () => {
    const user = userEvent.setup();
    render(<ConsultationForm />);

    await user.click(screen.getAllByRole("radio")[0]);
    await user.click(screen.getByRole("button"));

    expect(screen.getByText("Question 2")).toBeInTheDocument();
  });

  it("submits form on last question", async () => {
    const user = userEvent.setup();
    render(<ConsultationForm />);

    await user.click(screen.getAllByRole("radio")[0]);
    await user.click(screen.getByRole("button"));

    await user.click(screen.getAllByRole("radio")[0]);
    await user.click(screen.getByRole("button"));

    expect(submitMock).toHaveBeenCalled();
  });
});
