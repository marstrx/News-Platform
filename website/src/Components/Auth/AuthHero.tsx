import { JSX } from "react";

type AuthHeroProps = {
    title: string,
    subtitle: string
};


function AuthHero({ title, subtitle }: AuthHeroProps): JSX.Element {
    return (
        <div className="min-h-screen w-1/2 bg-[#36656B] flex flex-col justify-center text-center" style={{
        clipPath: "polygon(0 0, 95% 0, 85% 100%, 0% 100%)"
      }}>
            <h2 className="text-5xl">{title}</h2>
            <h2 className="text-5xl">{subtitle}</h2>
        </div>
    )
}

export default AuthHero