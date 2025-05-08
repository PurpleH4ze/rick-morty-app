"use client";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component, requiredRoles = []) {
  return function AuthenticatedComponent(props) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (status === "unauthenticated") {
        // Giriş yapmamışsa login sayfasına yönlendir ve callbackUrl olarak mevcut sayfayı ilet
        router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      } else if (
        session &&
        requiredRoles.length > 0 &&
        !session.user.roles.some((role) => requiredRoles.includes(role))
      ) {
        // Giriş yapmış ama gerekli role sahip değilse yetkisiz sayfasına yönlendir
        router.push("/unauthorized");
      }
    }, [status, session, requiredRoles, router, pathname]);

    if (status === "loading") return <p>Loading...</p>;

    return session ? <Component {...props} /> : null;
  };
}
