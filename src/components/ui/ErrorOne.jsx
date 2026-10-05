import React from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import CriyonLogoLoop from '../CriyonLogoLoop';

function GradientCode({ code = '404' }) {
  return (
    <svg
      viewBox="0 0 800 300"
      className="w-full max-w-[20rem] select-none sm:max-w-md drop-shadow-xs"
      aria-hidden="true"
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-black/5 stroke-[#1A1A1A] font-black tracking-tighter"
        style={{ fontSize: '20rem' }}
        strokeWidth="3"
        strokeDasharray="40 20"
      >
        {code}
      </text>
    </svg>
  );
}

function PillButton({ label, icon, href, onClick }) {
  const cls =
    'inline-flex items-center justify-center gap-2.5 h-11 rounded-full px-8 text-sm font-semibold transition-all duration-200 bg-[#1A1A1A] !text-white hover:bg-black hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] mt-6 cursor-pointer border border-white/10';

  const content = (
    <>
      <span className="!text-white text-sm font-semibold tracking-wide select-none">{label}</span>
      {icon && <span className="!text-white flex items-center shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={cls} style={{ color: '#ffffff' }}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} type="button" style={{ color: '#ffffff' }}>
      {content}
    </button>
  );
}

export const defaultErrorOneAction = {
  label: 'Go Back Home',
  href: '/',
  icon: <RiHome5Fill className="text-lg !text-white" aria-hidden="true" />,
};

export function ErrorOne({
  code = '404',
  title = "Lost in the Canvas.",
  description = "The page or prototype you're looking for doesn't exist, has been archived, or was moved to a new sprint.",
  action = defaultErrorOneAction,
}) {
  return (
    <main className="relative flex min-h-[85vh] w-full flex-col items-center justify-center bg-[#FAF9F6] text-[#1A1A1A] px-6 py-16 overflow-hidden">
      {/* Blueprint Grid Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 select-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.05) 19px, rgba(0,0,0,0.05) 20px, transparent 20px, transparent 39px, rgba(0,0,0,0.05) 39px, rgba(0,0,0,0.05) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.05) 19px, rgba(0,0,0,0.05) 20px, transparent 20px, transparent 39px, rgba(0,0,0,0.05) 39px, rgba(0,0,0,0.05) 40px),
            radial-gradient(circle at 20px 20px, rgba(0,0,0,0.08) 2px, transparent 2px),
            radial-gradient(circle at 40px 40px, rgba(0,0,0,0.08) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
        }}
      />

      <section
        aria-labelledby="error-one-title"
        className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center text-center"
      >
        {/* Infinite vector outline-and-fill loop animation like the loading screen */}
        <CriyonLogoLoop className="mb-2 sm:mb-3" />

        <GradientCode code={code} />

        <div className="flex flex-col items-center gap-3 mt-4">
          <h1
            id="error-one-title"
            className="text-2xl sm:text-3xl leading-snug font-bold font-serif tracking-tight text-[#1A1A1A]"
          >
            {title}
          </h1>
          <p className="text-gray-500 mx-auto max-w-sm text-sm leading-relaxed sm:text-base">
            {description}
          </p>
        </div>
        <PillButton {...action} />
      </section>
    </main>
  );
}

export default ErrorOne;
