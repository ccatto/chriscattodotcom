import { CardWrapperCatto } from "@/app/components/Auth/card-wrapper-catto"

export const LoginFormCatto = () => {
  return (
    <div>
      Login form simple;
      <CardWrapperCatto
        headerLabel="Welcome Back header label"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial>
            Login form
      </CardWrapperCatto>
    </div>
  )
}
