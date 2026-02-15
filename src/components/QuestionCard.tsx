import type { Question } from "../types";

interface Props {
  question: Question;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const QuestionCard = ({
  question: { label, name, options, description },
  value,
  onChange,
}: Props) => {
  return (
    <fieldset>
      <legend>{label}</legend>

      {description && <p>{description}</p>}
      <div className="options">
        {options.map((option) => (
          <label key={option.value} htmlFor={name}>
            {option.label}
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
          </label>
        ))}
      </div>
    </fieldset>
  );
};
