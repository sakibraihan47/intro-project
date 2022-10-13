import styles from "../styles/Reckless.module.css";
const Signup = () => {
  return (
    <>
      <form action="/send-data-here" method="post">
        <div className={styles.signup_container}>
          <h1>Sign Up to start posting your products on TreeShop</h1>
          <div>
            <div className={styles.name}>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required minLength={2} />
            </div>
            <div className={styles.pass}>
              <label for="password">Password:</label>
              <input type="text" id="last" name="last" />
            </div>
          </div>
          <button className={styles.btn_up} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
