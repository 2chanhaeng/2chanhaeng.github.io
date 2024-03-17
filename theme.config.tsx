const themeConfig: {
  footer: React.ReactNode;
  head: (props: {
    title: string;
    meta: {
      description: string;
      tag: string;
      author: string;
    };
  }) => React.ReactNode;
  readMore: string;
  postFooter: React.ReactNode;
  darkMode: boolean;
  navs: { url: string; name: string }[];
} = {
  footer: <p>MIT 2023 © Nextra.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://github.com/shuding/nextra",
      name: "Nextra",
    },
  ],
};
export default themeConfig;
