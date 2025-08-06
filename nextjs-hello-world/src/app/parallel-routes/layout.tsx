export default function Layout({
  children,
  analytics,
  marketing,
  notifications,
  login,
}) {
  const isLoggedIn = true;
  return (
    <div>
      {/* {isLoggedIn ? ( */}
        <>
          <div>{children}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div>{analytics}</div>
              <div>{marketing}</div>
            </div>
            <div className="flex flex-1">{notifications}</div>
          </div>
        </>
      {/* ) : (
        <div>{login}</div>
      )} */}
    </div>
  );
}
