import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";

import { ExtraSkills } from "../ExtraSkills";
import { LanguageSkills } from "../LanguageSkills";
import { PersonalInfo } from "../PersonalInfo";
import { ProgrammingLanguages } from "../ProgrammingLanguages";

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para cerrar el menú cuando el tamaño de la ventana es grande
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  return (
    <aside className="w-80 px-3 flex flex-col bg-white/70 dark:bg-white/60">
      <div className="container-card flex flex-col gap-5 px-3 py-4 h-full shadow-lg">
        {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
{/*         <div className="mobile-menu-button">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden focus:outline-none"
          >
            <MdOutlineMenu />
          </button>
        </div> */}

        {/* Contenido del menú */}
        <nav className={`md:flex md:flex-col md:w-full ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="mx-1">
            <PersonalInfo />
          </div>

          <div className="container">
            <hr className="mx-1 my-3 border-blue-800 dark:border-white" />
          </div>
          <div className="bg-white/70 dark:bg-black/25 rounded-md w-full py-1">
            <LanguageSkills />
          </div>
          <div className="container">
            <hr className="mx-1 my-3 border-blue-800 dark:border-white" />
          </div>
          <div className="bg-white/70 dark:bg-black/25 shadow-lg rounded-md w-full py-1">
            <ProgrammingLanguages />
          </div>
          <div className="container">
            <hr className="mx-1 my-3 border-blue-800 dark:border-white" />
          </div>
          <div className="bg-white/70 dark:bg-white/25 rounded-md w-full py-1">
            <ExtraSkills />
          </div>
        </nav>
      </div>
    </aside>
  );
};

export { Sidebar };
