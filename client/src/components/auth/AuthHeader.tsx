interface AuthHeaderProps {
    title: string;
    subtitle: string;
  }
  
  const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
    return (
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          {title}
        </h2>
  
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      </div>
    );
  };
  
  export default AuthHeader;