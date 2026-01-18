"use client";

import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <h1>Welcome {session.user.username}</h1>
      <p>Roles: {session.user.roles.join(", ")}</p>
      <p>Access Token: {session.user.accessToken}</p>
      <p>Refresh Token: {session.user.refreshToken}</p>
    </div>
  );
};
export default UserProfile;
