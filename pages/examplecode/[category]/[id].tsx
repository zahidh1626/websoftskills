import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    PageLayout,
    Text,
    LinkTo,
    Slider,
    Seperator,
    List,
    Accordian,
    VideoPlayer,
} from "../../../src/components";
import { ListType, ImageSize } from "../../../src/shared/enums";
import { combineClasses } from "../../../src/utils/utils";
import CodeBlock from "../../../src/components/CodeBlock";
import {
    HowToUseList,
    HowToUseSeperator,
    HowToUsePageLayout,
    HowToUseImageCode,
    HowToUseTextCode,
    HowToUseLinkTo,
    HowToUseSlider,
    HowToUseAccordian,
    HowToUseVideo,
} from "../../../src/constants/codeBlocks";
import img from "../../../public/images/og-image.jpg"
import FeaturedArticle from "../../../src/components/ArticleCards/FeaturedArticle";
import axios from "axios";
interface iSideBtnLinks {
    component: string;
    types?: {
        label: string;
        href: string;
    }[];
    href?: string;
}

const CodeExample = ({ categories, posts, test }: any) => {
    console.log(posts, "test")
    const router = useRouter();
    const routerIncludesHash = router.asPath.includes("#");
    const [activeHash, setActiveHash] = useState("");
    const cardBBorder =
        "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8";

    useEffect(() => {
        if (routerIncludesHash) {
            const split = router.asPath.split("#");
            setActiveHash(split[split.length - 1]);
        }
    }, [router]);

    const isActive = (href: string) => href === "#" + activeHash;

    // all side btn links
    const sideBtns: iSideBtnLinks[] = [
        {
            component: "Page Layouts",
            href: "#pageLayouts",
        },
        {
            component: "Text",
            href: "#text",
        },
        {
            component: "Image",
            href: "#image",
        },
        {
            component: "List",
            href: "#list",
        },
        {
            component: "Section seperator",
            href: "#seperator",
        },
        {
            component: "LinkTo",
            href: "#linkto",
        },
        {
            component: "Image Slider",
            href: "#imageslider",
        },
        {
            component: "Accordian",
            href: "#accordian",
        },
        {
            component: "Video Player",
            href: "#videoPlayer",
        },
    ];

    const projects = [
        {
            id: "1",
            disc: "For any any queries related to this project / template feel free to connect with us at webexpe13@gmail.com.",
            articleTitle: "Starter Kit for Building Dashboard with Firebase and React",
            date: "24 OCTOBER 2022",
            thumbnail: img,
            path: "/"
        },
        {
            id: "2",
            disc: "For any any queries related to this project / template feel free to connect with us at webexpe13@gmail.com.",
            articleTitle: "Starter Kit for Building Dashboard with Firebase and React",
            date: "24 OCTOBER 2022",
            thumbnail: img,
            path: "/"
        },
        {
            id: "3",
            disc: "For any any queries related to this project / template feel free to connect with us at webexpe13@gmail.com.",
            articleTitle: "Starter Kit for Building Dashboard with Firebase and React",
            date: "24 OCTOBER 2022",
            thumbnail: img,
            path: "/"
        },
        {
            id: "4",
            disc: "For any any queries related to this project / template feel free to connect with us at webexpe13@gmail.com.",
            articleTitle: "Starter Kit for Building Dashboard with Firebase and React",
            date: "24 OCTOBER 2022",
            thumbnail: img,
            path: "/"
        },
        {
            id: "5",
            disc: "For any any queries related to this project / template feel free to connect with us at webexpe13@gmail.com.",
            articleTitle: "Starter Kit for Building Dashboard with Firebase and React",
            date: "24 OCTOBER 2022",
            thumbnail: img,
            path: "/"
        }
    ]
    const sideBtnsComponents = () => {
        return categories.map((category: any, i: any) => (
            <div key={category.id}>
                <LinkTo
                    href={`/examplecode/${category.slug}/${category.id}`}
                    key={category.href}
                    className={combineClasses(
                        "md:text-lg text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5 items-center",
                        isActive(category.href) && "text-blue-500"
                    )}
                >

                    {(
                        <div className="flex justify-between items-center">
                            <div>{category.name}</div>
                            <div className=" border rounded-xl w-5 h-5 text-sm flex justify-center items-center">{category.count}</div>
                        </div>
                    )}
                </LinkTo>
            </div>
        ));
    };

    return (
        <PageLayout>
            <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
                <div className="md:px-0 px-3">
                    <Text title className="text-blue-600">
                        All Components
                    </Text>
                    <hr className="my-5" />
                    <Text subtitle>
                        List of all components, its types and how to use it.
                    </Text>
                </div>

                <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
                    {/* side btns */}


                    {/* components */}
                    <aside className="md:w-4/5 w-full md:px-[15px]">
                        <section className={""} id="pageLayouts">
                            <div>
                                {
                                    posts.map((item: any) => (
                                        <div key={item.id} className={"m-10"}>
                                            <FeaturedArticle article={item} path={item.links} key={item.id} />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>

                        <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                            <Text p className="!text-lg leading-relaxed mb-0">
                                For any any queries related to this project / template feel free
                                to connect with us at <u>webexpe13@gmail.com</u>. You can also
                                post any comments on our{" "}
                                <a
                                    href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <u>
                                        <i>github discussions</i>
                                    </u>
                                </a>
                                .
                            </Text>
                        </div>
                    </aside>
                    <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
                        <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
                            {sideBtnsComponents()}
                            <LinkTo
                                href="/pages/tutorial/style-guide.tsx"
                                className="md:hidden block whitespace-nowrap font-semibold"
                            >
                                Style Guide
                            </LinkTo>
                        </div>
                        <div className="md:rounded-lg md:p-3 bg-white dark:bg-slate-800 shadow-md overflow-auto md:text-xl text-md font-semibold whitespace-nowrap md:block hidden">
                            <LinkTo href="/pages/tutorial/style-guide.tsx">
                                Style Guide
                            </LinkTo>
                        </div>
                    </aside>
                </div>
            </section>
        </PageLayout>
    );
};

export default CodeExample;
export async function getStaticPaths() {
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [{ params: { category: "javascript", id: "3" } }],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    console.log(params.id, "hello")
    const categories = await axios.get("https://websoftskills.com/wp-json/wp/v2/categories?_fields=id,name,count,slug");
    const posts = await axios.get(`https://websoftskills.com/wp-json/wp/v2/posts?categories=${params.id}`);

    // const json = await res.json();
    return {
        props: { categories: categories.data, posts: posts.data, },
    };
}

