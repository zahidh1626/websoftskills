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
} from "../src/components";
import { ListType, ImageSize } from "../src/shared/enums";
import { combineClasses } from "../src/utils/utils";
import CodeBlock from "../src/components/CodeBlock";
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
} from "../src/constants/codeBlocks";
import img from "../public/images/og-image.jpg"
import FeaturedArticle from "../src/components/ArticleCards/FeaturedArticle";
interface iSideBtnLinks {
    component: string;
    types?: {
        label: string;
        href: string;
    }[];
    href?: string;
}

const AllComponents = () => {
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
        return sideBtns.map((each: any, i: any) => (
            <div key={each.component + i}>
                {each.types ? (
                    <p className="text-xl font-semibold mb-3">{each.component}</p>
                ) : (
                    <LinkTo
                        href={each.href}
                        key={each.href}
                        className={combineClasses(
                            "md:text-xl text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5",
                            isActive(each.href) && "text-blue-500"
                        )}
                    >
                        {each.component}
                    </LinkTo>
                )}
                <div className="mb-3">
                    {each.types &&
                        each.types.map((each: any) => (
                            <LinkTo
                                href={each.href}
                                key={each.href}
                                className={combineClasses(
                                    "block text-gray-500 font-medium py-1 pl-3 border-l",
                                    isActive(each.href) &&
                                    "text-blue-500 border-blue-500 border-l-2"
                                )}
                            >
                                {each.label}
                            </LinkTo>
                        ))}
                </div>
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
                                    projects.map((item) => (
                                        <div key={item.id} className={"m-10"}>
                                            <FeaturedArticle article={item} path={item.path} key={item.id} />
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

export default AllComponents;
