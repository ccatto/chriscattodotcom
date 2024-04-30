'use client';
// import { Card } from "@/app/ui/dashboard/cards";
import { HeaderAuthCatto } from './header-auth-catto';
import { SocialAuthCatto } from './social-auth-catto';
import { BackButtonAuthCatto } from './back-button-auth-catto';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapperCatto = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div id="card1">
      <div id="cardHeader1">
        <HeaderAuthCatto label={headerLabel} />
      </div>

      <div id="cardContent1">{children}</div>
      {showSocial && (
        <div id="cardFooter1">
          <SocialAuthCatto />
          social
        </div>
      )}
      <div id="cardFooter2">
        <BackButtonAuthCatto label={backButtonLabel} href={backButtonHref} />
      </div>
    </div>
  );
};
