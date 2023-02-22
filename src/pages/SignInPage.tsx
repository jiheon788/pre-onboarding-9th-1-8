import useInputs from '@/lib/hooks/useInputs';
import useValidation from '@/lib/hooks/useValidation';

const SignInpage = () => {
  const [signInData, onChangeSignInData] = useInputs({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(signInData);

  return (
    <div>
      <h1>SignIn</h1>
      <form>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          name="email"
          value={signInData.email}
          onChange={onChangeSignInData}
          data-testid="email-input"
        />

        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          autoComplete="off"
          name="password"
          value={signInData.password}
          onChange={onChangeSignInData}
          data-testid="password-input"
        />
        {passwordStatus && <div>{passwordStatus.log}</div>}

        <button
          type="submit"
          data-testid="signin-button"
          disabled={emailStatus.isError || passwordStatus.isError}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInpage;
