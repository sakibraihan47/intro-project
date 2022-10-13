import { useRouter } from "next/router";
import styles from "../styles/Reckless.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      {router.pathname !== "/" && (
        <button className={styles.back_button} onClick={() => router.back()}>
          Go Back
        </button>
      )}
    </header>
  );
};
export default Header;
