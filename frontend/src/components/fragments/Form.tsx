import { useMutation } from "@tanstack/react-query";
import Input from "../elements/Input";
import authLogin from "../../services/authlogin";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsLogin } from "../../store/isLogin";

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setIsLogin = useIsLogin((state) => state.setIsLogin);

  const loginMutation = useMutation({
    mutationFn: () => authLogin(username, password),
    onSuccess: (data) => {
      if (data) {
        setIsLogin(true);
        navigate('/dashboard');
      }
    },
    onError: () => {
      alert('Login failed. Please check your username and password.');
    }
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Username or password is empty');
    } else {
      loginMutation.mutate();
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-2">
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
        value={username}
        name="username"
      />
      <label htmlFor="password">Password</label>
      <Input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
        name="password"
      />
      <button type="submit" className="bg-slate-50 px-3 py-1 rounded-sm font-medium w-max text-slate-900">
        Submit
      </button>
    </form>
  );
}

export default Form;
