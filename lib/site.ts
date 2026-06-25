// Central site config — update these links in one place.
export const site = {
  name: "AlgoLens",
  tagline: "See your data structures come alive.",
  description:
    "AlgoLens is an open-source desktop tool that runs your real code and visualizes data structures — arrays, stacks, queues, linked lists, trees, graphs and more — step by step.",
  // TODO: replace with your real URLs before launch.
  github: "https://github.com/Siddhesh-Dupare/algolens",
  download: "https://github.com/Siddhesh-Dupare/algolens/releases",
  studyForm: "https://forms.gle/REPLACE_WITH_YOUR_FORM",
  paper: "#",
  email: "siddheshdupare92@gmail.com",
} as const;

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Demo", href: "#demo" },
  { label: "Download", href: "#download" },
] as const;
