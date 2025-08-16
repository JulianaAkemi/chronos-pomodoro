import styles from "./styles.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function Content({ children }: MainTemplateProps) {
  return <div className={styles.content}>{children}</div>;
}
