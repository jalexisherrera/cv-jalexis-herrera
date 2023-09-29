import React from "react";
import { FaGithub } from "react-icons/fa";

const RightMenu = () => {
  return (
    <aside className="h-full[100vh] border debug gap-2">
      <div className="h-full p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold">Links</h2>
        <ul>
          <li>
            <a href="https://github.com/tu-usuario">
              <FaGithub className="inline-block mr-2" />
            </a>
          </li>
          {/* Agrega más redes sociales según sea necesario */}
        </ul>
      </div>
    </aside>
  );
};

export { RightMenu };
