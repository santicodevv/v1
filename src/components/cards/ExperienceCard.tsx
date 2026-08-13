import { ArrowIcon } from '../icons';
import { Tag } from '../ui';
import type { Experience } from '../../data/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { date, title, company, description, link, image } = experience;

  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 rounded-lg transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] cursor-pointer mb-4"
    >
      <div className="flex-1">
        <div className="text-xs font-semibold text-slate-500 uppercase mb-3">{date}</div>
        <h3 className="text-slate-200 font-semibold text-base mb-3 flex items-center gap-2 group-hover:text-teal-300 transition-colors">
          {title} · {company}
          <ArrowIcon />
        </h3>
        <p className="text-sm text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          <Tag>{title}</Tag>
        </div>
      </div>
      <div className="w-full lg:w-[220px] h-[180px] lg:h-[140px] overflow-hidden rounded shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-teal-300 text-[10px] text-center p-2">
            {title}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
