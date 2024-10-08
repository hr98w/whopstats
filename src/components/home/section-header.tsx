import { RoughNotation } from 'react-rough-notation';

interface SectionHeaderProps {
  title: string;
  description1: string;
  description2: string;
}

export default function SectionHeader({ title, description1, description2 }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="text-center text-default-700 text-4xl font-bold my-4">
        <RoughNotation type="highlight" show={true} color="#f97316">
          {title}
        </RoughNotation>
      </h2>
      <p className="text-large text-center text-default-500">{description1}</p>
      <p className="text-large text-center text-default-500">{description2}</p>
    </div>
  );
}
