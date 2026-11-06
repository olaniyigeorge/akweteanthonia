import { ArrowUpRightIcon } from "./icons";

export default function SiteFooter() {
  return (
    <footer className="footer section-shell">
      <a className="brand" href="#top"><span className="brand-mark">AA</span><span>Anthonia Akouete</span></a>
      <p>Clear communication. Support with care.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/akouete-anthonia/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon /></a>
        <a href="mailto:akwetekayi@gmail.com">Email <ArrowUpRightIcon /></a>
      </div>
    </footer>
  );
}
