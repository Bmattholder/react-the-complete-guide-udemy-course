import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueInputClasses: nameInputClasses,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((v) => v.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueInputClasses: lastNameInputClasses,
    valueChangeHandler: lastNameChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useInput((v) => v.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueInputClasses: emailInputClasses,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((v) => v.includes("@"));

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log("name: ", name, "last :", lastName);
    nameReset();
    lastNameReset();
    emailReset();
  };

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
