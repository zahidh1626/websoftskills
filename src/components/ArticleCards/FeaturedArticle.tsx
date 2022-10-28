import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import LinkTo from "../LinkTo";
import { useRouter } from "next/router";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import path from "path";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const FeaturedArticle = ({ article }: any) => {
  const [isFeatureMedia, setIsFeatureMedia] = useState(false);
  const router = useRouter();
  const gotoPath = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  useEffect(() => {
    if (article && "wp:featuredmedia" in article._embedded) {
      setIsFeatureMedia(true);
    }
  }, [article]);
  return (
    <>
      <div
        className={combineClasses(
          classes.featured_article,
          " md:border-b-0 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer"
        )}
      >
        <div
          className={combineClasses(
            classes.featured_article__image,
            "rounded-sm overflow-hidden"
          )}
        >
          {/* style={{ background: `url(${transformImagePaths(article.thumbnail)})` }} */}

          <div className="bg-gray-200 h-full w-[500px] absolute">
            <Image
              src={
                isFeatureMedia
                  ? article._embedded["wp:featuredmedia"][0].source_url
                  : "https://osbornegroupcre.com/wp-content/uploads/2016/02/missing-image-640x360.png"
              }
              alt={article.slug}
              layout="fill"
            />
          </div>
        </div>
        <div
          className={
            "w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px] md:border-r-[5px]  border-blue-500"
          }
        >
          <div className={"mt-0 mb-[10px] flex items-center"}>
            <div className={"flex items-center"}>
              {/* <Avatar author={article.thumbnail} className="w-[50px] h-[50px] mr-3 text-xl" /> */}
              <LinkTo
                href={`/examplecode/${article.slug}`}
                passHref
                className={combineClasses(
                  classes.author_name,
                  "text-[14px] md:text-[16px] my-0 font-medium"
                )}
              >
                {article?.slug}
              </LinkTo>
            </div>
            <ArticleCardCategory category={article.category} />
          </div>
          <LinkTo href={`/examplecode/${article.slug}`}>
            <h1
              className={combineClasses(
                classes.featured_article__title,
                "text-[24px] font-bold mt-0 mb-[10px]"
              )}
            >
              {article.title["rendered"]}
            </h1>
          </LinkTo>
          <p
            className={combineClasses(
              classes.featured_article__intro,
              "text-[14px] font-regular mt-0 mb-[10px]"
            )}
          >
            {article.yoast_head_json.description} ...
          </p>
          {/* <ArticleTags tags={article?.tags} /> */}
          <p
            className={combineClasses(
              classes.featured_article__date,
              "font-normal text-xs pt-3 mb-0"
            )}
          >
            {article.date}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedArticle;
