import Header from "@/components/auth/header";

export const metadata = {
  title: "Leegro POS - Login",
  description: "Point of Sale system for small businesses",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
}
