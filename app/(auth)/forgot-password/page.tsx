import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import Button from "@/components/general/button";
import DefaultLink from "@/components/general/default-link";
import Paragraph from "@/components/general/paragraph";

export default function ForgotPasswordPage() {
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
          <Button type="submit" buttonType="primary" block>
            Kirim Link
          </Button>
        </div>
      </form>

      <Paragraph>
        Kembali ke halaman &nbsp;
        <DefaultLink href="/login">Login</DefaultLink>
      </Paragraph>
    </>
  );
}
