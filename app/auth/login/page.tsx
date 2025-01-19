import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import InputLabel from "@/components/form/input-label";
import Button from "@/components/general/button";
import DefaultLink from "@/components/general/default-link";
import Paragraph from "@/components/general/paragraph";

export default function LoginPage() {
  return (
    <>
      <form className="space-y-6" action="#" method="POST">
        <div>
          <InputGroup htmlFor="email" label="E-mail">
            <Input type="email" name="email" id="email" autoComplete="email" />
          </InputGroup>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <InputLabel htmlFor="password">Password</InputLabel>
            <div className="text-sm">
              <DefaultLink href="/auth/forgot-password">
                Lupa password?
              </DefaultLink>
            </div>
          </div>
          <div className="mt-2">
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <div>
          <Button type="submit" buttonType="primary" block>
            Login
          </Button>
        </div>
      </form>

      <Paragraph>
        Belum punya akun? &nbsp;
        <DefaultLink href="/auth/signup">Daftar</DefaultLink>
      </Paragraph>
    </>
  );
}
