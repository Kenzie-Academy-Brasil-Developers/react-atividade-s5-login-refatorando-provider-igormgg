import { useAuth } from "../../providers/Auth";
import { LoginContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { SignIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("*Email obrigatório"),
    password: yup.string().required("*Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    SignIn(data);
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Email</h2>
          <input
            {...register("email")}
            placeholder="Digite seu email"
            type="text"
          />
          <label>{errors.email?.message}</label>
        </div>
        <div>
          <h2>Senha</h2>
          <input
            {...register("password")}
            placeholder="Digite sua senha"
            type="text"
          />
          <label>{errors.password?.message}</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
