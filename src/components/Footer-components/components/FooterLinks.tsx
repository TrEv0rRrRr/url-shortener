import { FOOTER_LINKS } from "../../../consts/footer-links"

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center text-white">
      {
        FOOTER_LINKS.map(({ title, links }) => {
          return (
            <div key={title} className="flex flex-col gap-5">
              <span className="text-[1rem]">{title}</span>
              <ul className="flex flex-col gap-2">
                {links.map(link =>
                  <li key={link} className="text-text-muted text-[.88rem] cursor-pointer hover:text-brand-cyan transition-all duration-300 ease-in-out">
                    <a href="#">{link}</a>
                  </li>)}
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterLinks