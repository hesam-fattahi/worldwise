import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/ui/Button";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="hidden md:flex items-center gap-4 absolute top-4 right-4 py-2 px-3 z-50 shadow-xl rounded-full bg-zinc-700">
      <img
        src={user.avatar}
        alt={user.name}
        className="rounded-full h-10 border-2 border-zinc-300 p-0.5 shadow-md"
      />
      <span className="font-semibold ">{user.name}</span>
      <Button
        className="border-l border-zinc-600 text-zinc-200 hover:text-zinc-50 uppercase text-sm"
        onClick={handleClick}
      >
        Logout
      </Button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
