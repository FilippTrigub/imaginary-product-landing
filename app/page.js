export default function Home() {
  const envVarValue = process.env.NEXT_PUBLIC_FOOBAR;

  return (
    <div className="page-container">
      {envVarValue && (
        <div className="env-banner">
          Environment Variable Set: {envVarValue}
        </div>
      )}
      <div className="content">
        <div className="big-red-circle"></div>
      </div>
    </div>
  );
}
