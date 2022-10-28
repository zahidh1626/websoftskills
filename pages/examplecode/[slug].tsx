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
} from "../../src/components";
import { ListType, ImageSize } from "../../src/shared/enums";
import { combineClasses } from "../../src/utils/utils";
import CodeBlock from "../../src/components/CodeBlock";
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
} from "../../src/constants/codeBlocks";
import FeaturedArticle from "../../src/components/ArticleCards/FeaturedArticle";
import axios from "axios";
interface iSideBtnLinks {
  component: string;
  types?: {
    label: string;
    href: string;
  }[];
  href?: string;
}

const Article = ({ categories, posts }: any) => {
  const router = useRouter();
  const routerIncludesHash = router.asPath.includes("#");
  const [activeHash, setActiveHash] = useState("");
  const cardBBorder =
    "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8";
  console.log(posts, "posts");
  useEffect(() => {
    if (routerIncludesHash) {
      const split = router.asPath.split("#");
      setActiveHash(split[split.length - 1]);
    }
  }, [router]);

  const isActive = (href: string) => href === "#" + activeHash;

  // all side btn links
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
          <article className="md:w-4/5 w-full md:px-[15px]">
            <div className="px-4 py-3 dark:bg-slate-800 bg-white rounded mx-2 shadow-xl">
            <div className="h-[400px]">
            <img
              src={
                posts._embedded["wp:featuredmedia"]
                  ? posts._embedded["wp:featuredmedia"][0].media_details.sizes
                      .thumbnail.source_url
                  : "https://osbornegroupcre.com/wp-content/uploads/2016/02/missing-image-640x360.png"
              }
              alt={posts.slug}
              className="h-full w-full"
            />
          </div>
              <div className="testingContent"
                dangerouslySetInnerHTML={{
                  __html: posts["content"]["rendered"],
                }}
              ></div>
            </div>
          </article>
          <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
            <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 mb-5 flex overflow-auto shadow-xl">
              {sideBtnsComponents()}
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

export default Article;
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [
      {
        params: {
          slug: "how-to-build-a-fully-functionality-javascript-calculator-calculator-using-javascript",
        },
      },
    ],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  console.log(params.id, "hello");
  const categories = await axios.get(
    "https://websoftskills.com/wp-json/wp/v2/categories?_fields=id,name,count,slug"
  );
  const posts = await axios.get(
    `https://websoftskills.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
  );

  return {
    props: { categories: categories.data, posts: posts.data[0] },
  };
}
