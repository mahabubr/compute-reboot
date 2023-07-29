import { Button, Card } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  };

  const handleGitHubLogin = () => {
    // Handle GitHub login logic here
    signIn("github", {
      callbackUrl: "http://localhost:3000",
    });
  };

  return (
    <div className="container mx-auto w-11/12 my-10">
      <div>
        <h2 className="text-center text-xl text-orange-600 font-black">
          Login
        </h2>
        <p className="text-center text-sm my-1 text-gray-700">
          Login and Explore Yourself !
        </p>
      </div>
      <div className="mt-10 grid place-items-center">
        <Card className="w-80 rounded-lg shadow-lg">
          <Button
            type="primary"
            block
            icon={<GoogleOutlined />}
            onClick={handleGoogleLogin}
            className="mb-4 bg-pink-800"
          >
            Login with Google
          </Button>
          <Button
            type="primary"
            block
            icon={<GithubOutlined />}
            onClick={handleGitHubLogin}
            className="bg-gray-900"
          >
            Login with GitHub
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;
