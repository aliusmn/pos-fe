import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import InputPassword from "@/components/form/input-password";
import Button from "@/components/general/button";

export default function ResetPasswordPage() {
  return (
    <form className="space-y-4" action="#" method="PUT">
      <InputGroup htmlFor="email" label="E-mail">
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="contoh: leegro@gmail.com"
        />
      </InputGroup>
      <InputGroup htmlFor="password" label="Password">
        <InputPassword
          name="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password Anda Haha"
        />
      </InputGroup>
      <InputGroup htmlFor="password_confirmation" label="Konfirmasi Password">
        <InputPassword
          name="password_confirmation"
          id="password_confirmation"
          autoComplete="current-password-confirmation"
          placeholder="Konfirmasi Password"
        />
      </InputGroup>

      <div>
        <Button type="submit" variant="primary" block>
          Reset Password
        </Button>
      </div>
    </form>
  );
}
