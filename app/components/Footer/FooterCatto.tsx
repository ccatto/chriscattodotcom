import FooterLinksTopCatto from './FooterLinksTopCatto';
import FooterLinksBottomCatto from './FooterLinksBottomCatto';

const FooterCatto = () => {
  return (
    <>
      <footer className="w-full bg-white p-6 dark:bg-gray-900">
        <FooterLinksTopCatto />
        <FooterLinksBottomCatto />
      </footer>
    </>
  );
};

export default FooterCatto;
