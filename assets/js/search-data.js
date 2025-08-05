// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-one-paper-has-been-accepted-by-icra-2019",
          title: 'One paper has been accepted by ICRA 2019.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-icra-2020",
          title: 'One paper has been accepted by ICRA 2020.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-iros-2020",
          title: 'One paper has been accepted by IROS 2020.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-icra-2025",
          title: 'One paper have been accepted by ICRA 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-icra-2021",
          title: 'One paper has been accepted by ICRA 2021.',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-by-iros-2021",
          title: 'Two papers have been accepted by IROS 2021.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-r-al-2022",
          title: 'One paper has been accepted by R-AL 2022.',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-by-iros-2022",
          title: 'Two papers have been accepted by IROS 2022.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-ijcv-2022",
          title: 'One paper has been accepted by IJCV 2022.',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-engineering-2023",
          title: 'One paper has been accepted by Engineering 2023.',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-by-iros-2023",
          title: 'Two papers have been accepted by IROS 2023.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-iccv-2023",
          title: 'One paper have been accepted by ICCV 2023.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-vr-2024",
          title: 'One paper have been accepted by VR 2024.',
          description: "",
          section: "News",},{id: "news-two-papers-have-been-accepted-by-iros-2024",
          title: 'Two papers have been accepted by IROS 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-t-pami",
          title: 'One paper have been accepted by T-PAMI.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-journal-of-field-robotics",
          title: 'One paper have been accepted by Journal of Field Robotics.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-ral",
          title: 'One paper have been accepted by RAL.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-iros-2025",
          title: 'One paper have been accepted by IROS 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-have-been-accepted-by-ieee-transactions-on-consumer-electronics-t-ce",
          title: 'One paper have been accepted by IEEE Transactions on Consumer Electronics (T-CE).',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%65%79%75%7A%68%61%6E%67@%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tooschoolforcool", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YhQCNUkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
