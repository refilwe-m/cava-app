export const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "Normalizing Conversations About Menstruation with Your Male Boss",
      href: "#",
      description:
        "Menstruation is a natural and normal biological process experienced by many people who identify as women. However, discussing menstruation openly and comfortably in professional settings, especially with male superiors, can still feel challenging for many individuals.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Menstruation", href: "#" },
      author: {
        name: "Zandile Nhlavu",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675034393497-86e6970d2f49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
    },
    {
      id: 1,
      title: "Navigating Parenthood as a Teen: Support for Single Parents",
      href: "#",
      description:
        "Becoming a parent as a teenager can be challenging, but it's important to remember that you're not alone. Many single parents who are teens successfully navigate the journey of parenthood and find support along the way. In this blog post, we will explore some strategies and resources to help single teenage parents thrive and provide the best care for their child.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Menstruation", href: "#" },
      author: {
        name: "Shaylen Majombo",
        role: "General Practitioner (GP) or Family Physician",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "How to have conversations with your children about Sex",
      href: "#",
      description:
        "Having 'The Birds and the Bees' talk with your child can feel daunting, but it is an important conversation to help them understand the basics of human reproduction, relationships, and sexual health. As a parent, providing accurate information and guidance can support your child's development and decision-making. In this blog post, we will explore some strategies to help you navigate this conversation effectively and create a safe space for discussing these important topics.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Coitus Talks", href: "#" },
      author: {
        name: "Jeniffer Olives",
        role: "Doctor",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
    },
    // More posts...
  ];

  return (
    <div className="bg-white rounded-xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Your Trusted Source for Medical Insights.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      Dr. {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
