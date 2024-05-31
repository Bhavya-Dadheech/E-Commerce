import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import navigation from "../../models/navigation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const getMainMenu = () => {
  let link_arr = navigation.map((item) => ({ title: item.title, path: item.path }));
  return link_arr;
};

const SITEMAP = [
  {
    title: "Main Menu",
    links: getMainMenu()
  },
  {
    title: "Resources",
    links: [
      { title: "About Us", path: "/About-Us" },
      { title: "Projects", path: "/Projects" },
      { title: "Free Products", path: "/Free-Products" }
    ]
  },
  {
    title: "Help Center",
    links: [
      { title: "GitHub", path: "/GitHub", href: "https://github.com/Bhavya-Dadheech/E-Commerce" },
      { title: "LinkedIn", path: "/LinkedIn", href: "https://www.linkedin.com/in/bhavya-dadheech-64b3bb179/" },
      { title: "Twitter", path: "/Twitter", href: "https://x.com/bhavya_dadheech" },
      { title: "Contact Us", path: "/Contact-Us" }
    ]
  }
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    navigate(path);
  };

  return (
    <footer className="w-full bg-[#E1AFD1] sm:mb-0 mb-14">
      <div className="mx-auto w-full max-w-7xl px-0 sm:px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-0 sm:gap-8 py-6 sm:py-12 md:grid-cols-3 lg:grid-cols-3">
          {SITEMAP.map(({ title, links }, index) => (
            <div key={index} className="w-full">
              <div className="w-full hidden sm:block">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="text-[#102C57] mb-4 font-bold uppercase opacity-50"
                >
                  {title}
                </Typography>
                <ul className="space-y-1">
                  {links.map((link, subIndex) => (
                    <Typography key={subIndex} as="li" color="blue-gray" className="font-normal">
                      <>
                        {link.title === "GitHub" || link.title === "LinkedIn" || link.title === "Twitter" ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-[#102C57] inline-block py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link.title ? link.title : link}
                          </a>
                        ) : (
                          <div
                            onClick={() => {
                              handleClick(link.path);
                            }}
                            className="cursor-default text-[#102C57] inline-block py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link.title ? link.title : link}
                          </div>
                        )}
                      </>
                    </Typography>
                  ))}
                </ul>
              </div>
              <Accordion className="sm:hidden" style={{ backgroundColor: "#E1AFD1", boxShadow: "none" }}>
                <AccordionSummary
                  className="text-[#102C57] mb-4 font-bold uppercase opacity-50"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-content-${index}`}
                  id={`panel-header-${index}`}
                >
                  {title}
                </AccordionSummary>
                <AccordionDetails>
                  {links.map((link, subIndex) => (
                    <Typography key={subIndex} as="li" color="blue-gray" className="font-normal list-none">
                      <>
                        {link.title === "GitHub" || link.title === "LinkedIn" || link.title === "Twitter" ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer text-[#102C57] inline-block py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link.title ? link.title : link}
                          </a>
                        ) : (
                          <div
                            onClick={() => {
                              handleClick(link.path);
                            }}
                            className="cursor-default text-[#102C57] inline-block py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link.title ? link.title : link}
                          </div>
                        )}
                      </>
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear}
            <span
              className="cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
                navigate("/");
              }}
            >
              E-Commerce
            </span>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 1.802a4.36 4.36 0 110 8.718 4.36 4.36 0 010-8.718zm5.327-.436a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 5.756 2.552 5.756 5.756 0 3.204-2.552 5.756-5.756 5.756-3.204 0-5.756-2.552-5.756-5.756C6.244 4.715 8.796 2.163 12 2.163zm0 1.802c-2.183 0-3.954 1.771-3.954 3.954s1.771 3.954 3.954 3.954 3.954-1.771 3.954-3.954-1.771-3.954-3.954-3.954zM12 13.62c4.5 0 8.182 3.682 8.182 8.182v.678c0 .67-.543 1.214-1.214 1.214H5.032c-.67 0-1.214-.543-1.214-1.214v-.678c0-4.5 3.682-8.182 8.182-8.182zm0 1.802c-3.497 0-6.364 2.867-6.364 6.364h12.728c0-3.497-2.867-6.364-6.364-6.364z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 0c-2.42 0-2.728.01-3.677.05-.95.04-1.607.187-2.18.4a4.373 4.373 0 00-1.592 1.034 4.373 4.373 0 00-1.034 1.592c-.213.573-.36 1.23-.4 2.18C3.01 7.206 3 7.515 3 9.935v4.13c0 2.42.01 2.728.05 3.677.04.95.187 1.607.4 2.18.237.63.573 1.167 1.034 1.592.425.461.962.797 1.592 1.034.573.213 1.23.36 2.18.4.949.04 1.258.05 3.677.05s2.728-.01 3.677-.05c.95-.04 1.607-.187 2.18-.4a4.373 4.373 0 001.592-1.034 4.373 4.373 0 001.034-1.592c.213-.573.36-1.23.4-2.18.04-.949.05-1.258.05-3.677v-4.13c0-2.42-.01-2.728-.05-3.677-.04-.95-.187-1.607-.4-2.18a4.373 4.373 0 00-1.034-1.592 4.373 4.373 0 00-1.592-1.034c-.573-.213-1.23-.36-2.18-.4C14.728.01 14.42 0 12 0zm0 1.62c2.385 0 2.667.009 3.613.048.872.037 1.345.169 1.66.28.419.155.718.341 1.034.657.316.316.502.615.657 1.034.111.315.243.788.28 1.66.04.946.048 1.228.048 3.613v4.134c0 2.385-.009 2.667-.048 3.613-.037.872-.169 1.345-.28 1.66-.155.419-.341.718-.657 1.034-.316.316-.615.502-1.034.657-.315.111-.788.243-1.66.28-.946.04-1.228.048-3.613.048s-2.667-.009-3.613-.048c-.872-.037-1.345-.169-1.66-.28a2.777 2.777 0 01-1.034-.657 2.777 2.777 0 01-.657-1.034c-.111-.315-.243-.788-.28-1.66-.04-.946-.048-1.228-.048-3.613V9.935c0-2.385.009-2.667.048-3.613.037-.872.169-1.345.28-1.66.155-.419.341-.718.657-1.034.316-.316.615-.502 1.034-.657.315-.111.788-.243 1.66-.28.946-.04 1.228-.048 3.613-.048zM12 5.84a6.16 6.16 0 100 12.32A6.16 6.16 0 0012 5.84zm0 1.62a4.54 4.54 0 110 9.08 4.54 4.54 0 010-9.08z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
