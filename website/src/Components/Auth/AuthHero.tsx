import { JSX } from "react";
import { Link } from "react-router-dom";

type AuthHeroProps = {
  title: string;
  subtitle: string;
};

function AuthHero({ title, subtitle }: AuthHeroProps): JSX.Element {
  return (
    <div
      className="min-h-screen w-1/2 bg-[#36656B] flex flex-col relative"
      style={{
        clipPath: "polygon(0 0, 95% 0, 85% 100%, 0% 100%)",
      }}
    >
      <div className="p-8">
        <Link
          to="/"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <svg
            width="60"
            height="60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFFFFF"
              d="M23 2v4h-1v6h-1v5h-1v1h-2v1h-2v1h-2v1h-2v-1h-1v-2h-1v-2H9v-2H8v1H7v1H6v1H5v2H4v1H3v1H2v1H1v-3h1v-4h1v-4h1V7h1V6h2V5h2V4h2V3h2v2h1v2h1v2h1v2h2V9h1V7h1V5h1V3h1V2z"
            />
          </svg>
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-12 -mt-16">
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-white leading-tight">
            {title}
          </h2>
          <h2 className="text-6xl w-90 font-bold text-white/90 leading-tight">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AuthHero;
