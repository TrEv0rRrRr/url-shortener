import type { ReactNode } from "react";

type Props = {
  isTwitter?: boolean;
  children: ReactNode
}

const SocialMediaLogo = ({ isTwitter = false, children }: Props) => {
  const svgHeight = isTwitter ? "20px" : "24px"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height={svgHeight}
      className="fill-current text-white hover:text-brand-cyan transition-colors 
      duration-200 cursor-pointer"
    >
      {children}
    </svg>
  )
}

export default SocialMediaLogo