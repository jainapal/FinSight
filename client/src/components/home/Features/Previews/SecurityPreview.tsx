import { ShieldCheck } from "lucide-react";

const SecurityPreview = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <ShieldCheck
            size={42}
            className="text-green-600"
          />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Enterprise Security
        </h3>

        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
          Every uploaded report is encrypted in transit and at rest,
          ensuring your financial data remains private and protected.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            AES-256
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            GDPR Ready
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            Private
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecurityPreview;