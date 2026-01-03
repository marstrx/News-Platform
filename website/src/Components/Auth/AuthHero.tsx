import { JSX } from "react";

type AuthHeroProps = {
    title: string,
    subtitle: string
};


function AuthHero({ title, subtitle }: AuthHeroProps): JSX.Element {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default AuthHero