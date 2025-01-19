import Input from "@/components/form/input";
import InputGroup from "@/components/form/input-group";
import Button from "@/components/general/button";
import DefaultLink from "@/components/general/default-link";
import Paragraph from "@/components/general/paragraph";

export default function SignupPage() {
  return (
    <>
      <form className="space-y-4" action="#" method="POST">
        <InputGroup htmlFor="email" label="E-mail address">
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="contoh: leegro@gmail.com"
          />
        </InputGroup>
        <InputGroup htmlFor="name" label="Nama">
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Nama Anda"
          />
        </InputGroup>
        <InputGroup htmlFor="password" label="Password">
          <Input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password Anda"
          />
        </InputGroup>
        <InputGroup htmlFor="phone" label="Nomer HP">
          <div className="flex flex-row space-x-2">
            <div className="basis-3/4">
              <Input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                placeholder="contoh: 085123******"
              />
            </div>
            <div className="basis-1/4 flex items-center justify-center">
              <Button type="button" buttonType="primary" size="small" block>
                Kirim OTP
              </Button>
            </div>
          </div>
        </InputGroup>
        <InputGroup htmlFor="otp" label="Kode OTP">
          <Input
            type="text"
            name="otp"
            id="otp"
            autoComplete="otp"
            placeholder="Kode OTP"
            readOnly
          />
        </InputGroup>

        <div>
          <Button type="submit" buttonType="primary" block disabled>
            Daftar
          </Button>
        </div>
      </form>

      <Paragraph>
        Sudah punya akun? &nbsp;
        <DefaultLink href="/auth/login">Login</DefaultLink>
      </Paragraph>
    </>
  );
}
