import Image from "next/image";
import React from "react";
import HtmlImage from "../../../public/languageicons/html.png";
import CssImage from "../../../public/languageicons/css.png";
import JavascriptImages from "../../../public/languageicons/javascript.png";
import ReactImage from "../../../public/languageicons/react.png";
import ReduxImage from "../../../public/languageicons/redux.png";
import typescriptImage from "../../../public/languageicons/typescript.png";
import VueImage from "../../../public/languageicons/vue.png";
import graphImage from "../../../public/languageicons/graphql.png";
import sassImage from "../../../public/languageicons/sass.png";

function ArticleCardDevs() {
  const ArticleCardData = [
    { icons: HtmlImage, title: "Html" },
    { icons: CssImage, title: "Css" },
    { icons: JavascriptImages, title: "JavaScript" },
    { icons: ReactImage, title: "React Js" },
    { icons: ReduxImage, title: "Redux" },
    { icons: typescriptImage, title: "TypeScript" },
    { icons: VueImage, title: "Vue Js" },
    { icons: graphImage, title: "GraphQl" },
    { icons: sassImage, title: "Sass" },
  ];

  return (
    <div>
      <h1 className="py-7 font-medium text-4xl">
        JavaScript Tutorials and Courses
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {ArticleCardData.map((items: { icons: any; title: string }) => {
          return (
            <div className="border border-gray-300 dark:border-blue-900 p-4 shadow cursor-pointer dark:hover:!text-gray-200 hover:!text-blue-900 hover:-translate-y-1">
              <div className="flex items-center">
                <Image
                  width={60}
                  height={60}
                  src={items.icons}
                  alt={items.title}
                />
                <h2 className="ml-4 font-medium text-xl capitalize">
                  {items.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleCardDevs;
