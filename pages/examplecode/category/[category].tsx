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
import img from "../../../public/images/og-image.jpg";
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

const CodeExample = ({ categories, posts, params }: any) => {
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
  const sideBtnsComponents = () => {
    return categories.map((category: any, i: any) => (
      <div key={category.id}>
        <LinkTo
          href={`/examplecode/category/${category.slug}`}
          key={category.href}
          className={combineClasses(
            "md:text-lg text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5 items-center",
            isActive(category.href) && "text-blue-500"
          )}
        >
          {
            <div className="flex justify-between items-center">
              <div>{category.name}</div>
              <div className=" border rounded-xl w-5 h-5 text-sm flex justify-center items-center">
                {category.count}
              </div>
            </div>
          }
        </LinkTo>
      </div>
    ));
  };

  return (
    <PageLayout>
      <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
        <div className="md:px-0 px-3">
          <Text title className="text-blue-600">
            {params.category}
          </Text>
          <hr className="my-5" />
          <Text subtitle>
            List of all components, its types and how to use it.
          </Text>
        </div>

        <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
          {/* side btns */}

          {/* components */}
          <div className="md:w-4/5 w-full md:px-[15px]">
            <section className={""} id="pageLayouts">
              <div>
                {posts.map((item: any) => (
                  <div key={item.id} className={"m-10"}>
                    <FeaturedArticle
                      article={item}
                      path={item.links}
                      key={item.id}
                    />
                  </div>
                ))}
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
          </div>
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
  const categories = await axios.get(
    "https://websoftskills.com/wp-json/wp/v2/categories?_fields=slug&per-page=100"
  );
  return {
    paths: categories.data.map((article: any) => {
      return {
        params: {
          category: article.slug,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const categories = await axios.get(
    "https://websoftskills.com/wp-json/wp/v2/categories?_fields=id,name,count,slug"
  );
  const categoryId = await categories.data.filter(
    (item: any) => item.slug === params.category
  )[0].id;

  const posts = await axios.get(
    `https://websoftskills.com/wp-json/wp/v2/posts?categories=${categoryId}&_embed`
  );

  // const json = await res.json();
  return {
    props: {
      categories: categories.data,
      posts: posts.data,
      params: params.category,
    },
  };
};
