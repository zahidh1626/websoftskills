import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, transformImagePaths, transformPath } from "../../utils/utils";
import LinkTo from "../LinkTo";
import { useRouter } from "next/router";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import path from "path";
import Image from "next/image"

interface IProp {
    article: IArticleHeaderData;
    path: string;
}


const FeaturedArticle = ({ article }: any) => {
    const router = useRouter();
    const gotoPath = (e: any) => {
        e.preventDefault()
        router.push("/")
    }

    return (
        <>
            <div className={combineClasses(classes.featured_article,
                ' md:border-b-0 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer')}>
                <div className={combineClasses(classes.featured_article__image, 'rounded-sm overflow-hidden')} >
                    {/* style={{ background: `url(${transformImagePaths(article.thumbnail)})` }} */}

                    <img
                        src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt={article.articleTitle}
                        className="w-full h-full object-cover" />
                </div>
                <div className={'w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px] md:border-r-[5px]  border-blue-500'}>
                    <div className={"mt-0 mb-[10px] flex items-center"}>
                        <div className={"flex items-center"}>
                            {/* <Avatar author={article.thumbnail} className="w-[50px] h-[50px] mr-3 text-xl" /> */}
                            <LinkTo
                                href={"/blog?author="}
                                passHref
                                className={combineClasses(classes.author_name, 'text-[14px] md:text-[16px] my-0 font-medium')}>
                                {article?.author?.name}
                            </LinkTo>
                        </div>
                        <ArticleCardCategory category={article.category} />
                    </div>
                    <LinkTo href={"/"} passHref>
                        <h1 className={combineClasses(classes.featured_article__title, "text-[24px] font-bold mt-0 mb-[10px]")} >
                            {article.articleTitle}
                        </h1>
                    </LinkTo>
                    <p className={combineClasses(classes.featured_article__intro, "text-[14px] font-regular mt-0 mb-[10px]")}>
                        {article.disc} ...
                    </p>
                    {/* <ArticleTags tags={article?.tags} /> */}
                    <p className={combineClasses(classes.featured_article__date, "font-normal text-xs pt-3 mb-0")}>{article.date}</p>
                </div>
            </div>
        </>
    )
}

export default FeaturedArticle