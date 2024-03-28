import Header from "@/app/components/Header/Header";
import FooterCatto from "@/app/components/Footer/FooterCatto";
import PrivacyPolicy from "@/app/components/Utils/privacypolicy/privacypolicy";

export default function Page() {
  return (
    <>
      <Header/>
      <p>Privacy Policy Page</p>
      <PrivacyPolicy/>
      <FooterCatto/>
    </>
  );
}