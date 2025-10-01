export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // শুধু dashboard route গুলোতে প্রোটেকশন
};
