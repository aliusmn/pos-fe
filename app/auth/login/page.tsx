import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import InputLabel from "@/components/form/input-label";
import InputPassword from "@/components/form/input-password";
import Button from "@/components/general/button";
import DefaultLink from "@/components/general/default-link";
import Paragraph from "@/components/general/paragraph";

export default function LoginPage() {
  return (
    <>
      <form className="space-y-4" action="#" method="POST">
        <InputGroup htmlFor="email" label="E-mail">
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="contoh: leegro@gmail.com"
          />
        </InputGroup>

        <div>
          <div className="flex items-center justify-between">
            <InputLabel htmlFor="password">Password</InputLabel>
            <div className="text-sm">
              <DefaultLink href="/auth/forgot-password">
                Lupa password?
              </DefaultLink>
            </div>
          </div>
          <div className="mt-1">
            <InputPassword
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="Password Anda"
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
