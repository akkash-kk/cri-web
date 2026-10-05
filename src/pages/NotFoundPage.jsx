import React from 'react';
import ErrorOne, { defaultErrorOneAction } from '../components/ui/ErrorOne';

export default function NotFoundPage({ onOpenContact }) {
  return (
    <div className="min-h-[85vh] bg-[#FAF9F6] flex flex-col justify-center items-center">
      <div className="flex-1 w-full flex items-center justify-center">
        <ErrorOne
          code="404"
          title="Lost in the Canvas."
          description="The page or prototype you're looking for doesn't exist, has been archived, or was moved to a new sprint."
          action={defaultErrorOneAction}
        />
      </div>
    </div>
  );
}
