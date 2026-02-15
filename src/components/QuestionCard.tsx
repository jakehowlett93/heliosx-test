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

      {description && <p className="description">{description}</p>}
      <div className="options">
        {options.map((option, index) => {
          const id = `${name}-${index}`;
          return (
            <label key={option.value} htmlFor={id}>
              {option.label}
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
              />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};
